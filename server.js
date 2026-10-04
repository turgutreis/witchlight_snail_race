import { Elysia, t } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import QRCode from 'qrcode';
import networkInterfaces from 'node:os';

// Helper to get local Wi-Fi IP address
function getLocalIp() {
  const nets = networkInterfaces.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

const localIp = getLocalIp();
const PORT = process.env.PORT || 3000;

// Active Rooms State
const rooms = new Map();

function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

const app = new Elysia()
  .use(staticPlugin({
    assets: 'dist',
    prefix: '/'
  }))
  .get('/api/info', async () => {
    const controllerUrl = `http://${localIp}:${PORT}/controller.html`;
    const qrDataUrl = await QRCode.toDataURL(controllerUrl);
    return {
      localIp,
      port: PORT,
      controllerUrl,
      qrDataUrl
    };
  })
  .ws('/ws', {
    open(ws) {
      ws.data.roomId = null;
      ws.data.isHost = false;
      ws.data.playerId = null;
    },
    message(ws, message) {
      try {
        const data = typeof message === 'string' ? JSON.parse(message) : message;
        const { type, payload } = data;

        // 1. HOST CREATES ROOM
        if (type === 'HOST_CREATE_ROOM') {
          const roomCode = generateRoomCode();
          ws.data.roomId = roomCode;
          ws.data.isHost = true;
          ws.subscribe(roomCode);

          rooms.set(roomCode, {
            code: roomCode,
            hostWs: ws,
            players: new Map() // playerId -> { name, colorKey, isReady, progress }
          });

          ws.send({
            type: 'ROOM_CREATED',
            payload: { roomCode }
          });
          return;
        }

        // 2. PLAYER JOINS ROOM FROM SMARTPHONE
        if (type === 'PLAYER_JOIN') {
          const { roomCode, playerName } = payload;
          const cleanCode = (roomCode || '').toUpperCase();
          const room = rooms.get(cleanCode);

          if (!room) {
            ws.send({ type: 'ERROR', payload: { message: 'Raum nicht gefunden!' } });
            return;
          }

          if (room.players.size >= 8) {
            ws.send({ type: 'ERROR', payload: { message: 'Raum ist bereits voll (max 8 Spieler)!' } });
            return;
          }

          const playerId = 'p_' + Math.random().toString(36).substring(2, 8);
          ws.data.roomId = cleanCode;
          ws.data.isHost = false;
          ws.data.playerId = playerId;
          ws.subscribe(cleanCode);

          const playerInfo = {
            id: playerId,
            name: playerName || `Spieler ${room.players.size + 1}`,
            colorKey: null,
            dndModifier: payload.dndModifier || 0,
            progress: 0,
            isStunned: false
          };

          room.players.set(playerId, playerInfo);

          // Confirm join to controller
          ws.send({
            type: 'JOINED_SUCCESS',
            payload: { playerId, roomCode: cleanCode, player: playerInfo }
          });

          // Notify Host screen
          room.hostWs.send({
            type: 'PLAYER_CONNECTED',
            payload: { player: playerInfo, totalPlayers: room.players.size }
          });
          return;
        }

        // 3. PLAYER SELECTS COLOR
        if (type === 'PLAYER_SELECT_COLOR') {
          const { colorKey } = payload;
          const room = rooms.get(ws.data.roomId);
          if (room && ws.data.playerId) {
            const player = room.players.get(ws.data.playerId);
            if (player) {
              player.colorKey = colorKey;
              // Confirm to controller
              ws.send({
                type: 'COLOR_SELECTED_SUCCESS',
                payload: { colorKey }
              });
              // Relay to Host screen
              room.hostWs.send({
                type: 'PLAYER_COLOR_CHANGED',
                payload: { playerId: ws.data.playerId, colorKey }
              });
            }
          }
          return;
        }

        // 4. SMARTPHONE BUTTON TAP (A or D)
        if (type === 'PLAYER_TAP') {
          const { key } = payload; // 'A' or 'D'
          const room = rooms.get(ws.data.roomId);
          if (room && ws.data.playerId) {
            room.hostWs.send({
              type: 'PLAYER_INPUT_TAP',
              payload: { playerId: ws.data.playerId, key }
            });
          }
          return;
        }

        // 4b. SMARTPHONE D20 DICE ROLL
        if (type === 'PLAYER_ROLL_D20') {
          const { rollValue } = payload;
          const room = rooms.get(ws.data.roomId);
          if (room && ws.data.playerId) {
            room.hostWs.send({
              type: 'PLAYER_ROLL_D20',
              payload: { playerId: ws.data.playerId, rollValue }
            });
          }
          return;
        }

        // 4c. SMARTPHONE D&D SPELL CASTING
        if (type === 'PLAYER_CAST_SPELL') {
          const { spellId } = payload;
          const room = rooms.get(ws.data.roomId);
          if (room && ws.data.playerId) {
            room.hostWs.send({
              type: 'PLAYER_CAST_SPELL',
              payload: { playerId: ws.data.playerId, spellId }
            });
          }
          return;
        }

        // 5. HOST BROADCASTS RACE STATE TO CONTROLLERS
        if (type === 'HOST_SYNC_RACE_STATE') {
          const room = rooms.get(ws.data.roomId);
          if (room && ws.data.isHost) {
            app.server.publish(ws.data.roomId, JSON.stringify({
              type: 'RACE_STATE_UPDATE',
              payload: payload
            }));
          }
          return;
        }

      } catch (err) {
        console.error('WebSocket Error:', err);
      }
    },
    close(ws) {
      if (ws.data.roomId) {
        const room = rooms.get(ws.data.roomId);
        if (room) {
          if (ws.data.isHost) {
            // Host disconnected -> destroy room
            app.server.publish(ws.data.roomId, JSON.stringify({
              type: 'ROOM_CLOSED',
              payload: { message: 'Der Spielleiter hat die Verbindung getrennt.' }
            }));
            rooms.delete(ws.data.roomId);
          } else if (ws.data.playerId) {
            // Player disconnected
            room.players.delete(ws.data.playerId);
            room.hostWs.send({
              type: 'PLAYER_DISCONNECTED',
              payload: { playerId: ws.data.playerId }
            });
          }
        }
      }
    }
  })
  .listen(PORT);

console.log(`🐌✨ Hexenlicht Schneckenrennen Bun + ElysiaJS Server running at http://${localIp}:${PORT}`);
