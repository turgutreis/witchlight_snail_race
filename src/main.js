import * as THREE from 'three';
import { TrackManager } from './track.js';
import { Snail } from './snail.js';
import { audioSystem } from './audio.js';
import Peer from 'peerjs';
import QRCode from 'qrcode';

class GameEngine {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.scene = new THREE.Scene();

    // Game States: 'LOBBY', 'RACING', 'FINISHED'
    this.gameState = 'LOBBY';

    // Camera setup: 2D OrthographicCamera matching 16:9 ratio
    this.aspect = window.innerWidth / window.innerHeight;
    this.orthoHeight = 5.625; // Height bounds [-5.625 to +5.625]
    this.orthoWidth = this.orthoHeight * this.aspect;

    this.camera = new THREE.OrthographicCamera(
      -this.orthoWidth, this.orthoWidth,
      this.orthoHeight, -this.orthoHeight,
      0.1, 100
    );
    this.camera.position.set(0, 0, 10);
    this.camera.lookAt(0, 0, 0);

    // WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    // Track Manager
    this.trackManager = new TrackManager(this.scene);

    // Snails array (all 8 official Witchlight snails)
    this.snails = [];
    this.remotePlayers = new Map(); // playerId -> Snail instance
    this.connectedPlayerData = new Map(); // playerId -> playerInfo

    // Multi-player State (Dual Mode: WebRTC PeerJS + WebSocket)
    this.ws = null;
    this.peer = null;
    this.peerConnections = new Map(); // playerId -> PeerJS DataConnection
    this.roomCode = this.generateRoomCode();

    // Timing & Stats
    this.raceStartTime = 0;
    this.raceElapsedTime = 0;

    // Turn-Based D&D Initiative State
    this.turnBased = true;
    this.turnOrder = [];
    this.currentTurnIndex = 0;
    this.currentRound = 1;

    // Editor state
    this.editorMode = false;
    this.draggedHandleIndex = -1;

    // Initialize Server API, Background Map, UI, Inputs & Snails
    this.initServerAndWebSocket();
    this.loadBackgroundMap();
    this.setupUI();
    this.setupInputs();
    this.setupEditorDragging();
    this.setupSnails();

    // Handle Window Resize
    window.addEventListener('resize', () => this.onWindowResize());

    // Start Animation Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  loadBackgroundMap() {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/snail_race_map.jpg',
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        const planeGeom = new THREE.PlaneGeometry(20, 11.25);
        const planeMat = new THREE.MeshBasicMaterial({ map: texture });
        const bgMesh = new THREE.Mesh(planeGeom, planeMat);
        bgMesh.position.set(0, 0, 0);
        this.scene.add(bgMesh);
      },
      undefined,
      (err) => console.warn('Could not load background texture:', err)
    );
  }

  async updateRoomDisplayAndQR() {
    const roomEl = document.getElementById('room-code-display');
    if (roomEl) {
      roomEl.innerText = `RAUM: ${this.roomCode}`;
    }

    const isVercel = window.location.hostname.includes('vercel.app');
    const baseUrl = isVercel
      ? 'https://witchlightsnailrace.vercel.app/controller.html'
      : `${window.location.origin}/controller.html`;
    const controllerUrl = `${baseUrl}?room=${this.roomCode}`;

    const qrImg = document.getElementById('qr-image');
    const urlDisplay = document.getElementById('controller-url-display');

    if (urlDisplay) {
      urlDisplay.innerText = controllerUrl;
    }

    if (qrImg) {
      try {
        const qrDataUrl = await QRCode.toDataURL(controllerUrl, {
          width: 260,
          margin: 1,
          color: {
            dark: '#0f172a',
            light: '#ffffff'
          }
        });
        qrImg.src = qrDataUrl;
        qrImg.style.display = 'block';
      } catch (err) {
        console.warn('QR code generation fallback:', err);
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(controllerUrl)}`;
        qrImg.style.display = 'block';
      }
    }
  }

  initPeerHost() {
    const cleanCode = (this.roomCode || '').toLowerCase();
    const hostPeerId = `witchlight_host_${cleanCode}`;
    console.log('Initializing PeerJS Host with ID:', hostPeerId);

    if (this.peer) {
      try { this.peer.destroy(); } catch (e) {}
    }

    try {
      this.peer = new Peer(hostPeerId, { debug: 1 });

      this.peer.on('open', (id) => {
        console.log('🚀 PeerJS Host is online with ID:', id);
      });

      this.peer.on('connection', (conn) => {
        console.log('📱 Remote player connecting via WebRTC:', conn.peer);

        conn.on('open', () => {
          console.log('✅ Remote player WebRTC data channel open:', conn.peer);
        });

        conn.on('data', (data) => {
          try {
            const parsed = typeof data === 'string' ? JSON.parse(data) : data;
            this.handlePeerMessage(parsed, conn);
          } catch (err) {
            console.error('Peer data parse error:', err);
          }
        });

        conn.on('close', () => {
          console.log('Remote player disconnected:', conn.peer);
          if (conn.playerId) {
            this.handleWsMessage({
              type: 'PLAYER_DISCONNECTED',
              payload: { playerId: conn.playerId }
            });
            this.peerConnections.delete(conn.playerId);
          }
        });

        conn.on('error', (err) => {
          console.warn('Peer connection error:', err);
        });
      });

      this.peer.on('error', (err) => {
        console.warn('PeerJS host error:', err);
        if (err.type === 'unavailable-id') {
          console.warn('Peer ID taken, generating fresh room code...');
          this.roomCode = this.generateRoomCode();
          this.updateRoomDisplayAndQR();
          setTimeout(() => this.initPeerHost(), 500);
        }
      });
    } catch (err) {
      console.warn('PeerJS initialization error:', err);
    }
  }

  handlePeerMessage(data, conn) {
    const { type, payload } = data;

    if (type === 'PLAYER_JOIN') {
      const playerId = 'p_' + Math.random().toString(36).substring(2, 8);
      conn.playerId = playerId;
      this.peerConnections.set(playerId, conn);

      const playerInfo = {
        id: playerId,
        name: payload.playerName || 'Spieler',
        colorKey: null,
        dndModifier: payload.dndModifier || 0,
        progress: 0,
        isStunned: false
      };

      // Confirm join back to smartphone controller
      conn.send({
        type: 'JOINED_SUCCESS',
        payload: { playerId, roomCode: this.roomCode, player: playerInfo }
      });

      // Register player in host game engine
      this.onRemotePlayerConnected(playerInfo);

      // If race is already running, sync state
      if (this.gameState === 'RACING') {
        const activeSnail = this.turnOrder[this.currentTurnIndex];
        const displayName = activeSnail 
          ? (activeSnail.isPlayer ? `${activeSnail.playerName} (${activeSnail.colorData.name})` : activeSnail.colorData.name)
          : '';
        conn.send({
          type: 'RACE_STATE_UPDATE',
          payload: {
            gameState: this.gameState,
            activePlayerId: activeSnail?.id,
            activeSnailName: displayName,
            currentRound: this.currentRound
          }
        });
      }
      return;
    }

    if (type === 'PLAYER_SELECT_COLOR') {
      const { colorKey } = payload;
      conn.send({
        type: 'COLOR_SELECTED_SUCCESS',
        payload: { colorKey }
      });
      this.handleWsMessage({
        type: 'PLAYER_COLOR_CHANGED',
        payload: { playerId: conn.playerId, colorKey }
      });
      return;
    }

    if (type === 'PLAYER_ROLL_D20') {
      this.handleWsMessage({
        type: 'PLAYER_ROLL_D20',
        payload: {
          playerId: conn.playerId,
          rollValue: payload.rollValue,
          dndModifier: payload.dndModifier
        }
      });
      return;
    }

    if (type === 'PLAYER_CAST_SPELL') {
      this.handleWsMessage({
        type: 'PLAYER_CAST_SPELL',
        payload: {
          playerId: conn.playerId,
          spellId: payload.spellId
        }
      });
      return;
    }
  }

  broadcastRaceState(payload) {
    // 1. Broadcast over local WebSocket if active
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'HOST_SYNC_RACE_STATE',
        payload
      }));
    }

    // 2. Broadcast to all WebRTC PeerJS mobile controllers
    const message = {
      type: 'RACE_STATE_UPDATE',
      payload
    };
    this.peerConnections.forEach((conn) => {
      if (conn && conn.open) {
        try {
          conn.send(message);
        } catch (e) {
          console.warn('Failed to send state to peer:', conn.peer, e);
        }
      }
    });
  }

  async initServerAndWebSocket() {
    await this.updateRoomDisplayAndQR();
    this.initPeerHost();

    const isVercel = window.location.hostname.includes('vercel.app');
    if (!isVercel) {
      try {
        const res = await fetch('/api/info');
        if (res.ok) {
          const info = await res.json();
          const urlDisplay = document.getElementById('controller-url-display');
          if (info.controllerUrl && urlDisplay) {
            urlDisplay.innerText = `${info.controllerUrl}?room=${this.roomCode}`;
          }
        }
      } catch (err) {
        console.log('API info fetch skipped in standalone mode.');
      }

      // Try local WebSocket connection for local Bun server
      try {
        const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        this.ws = new WebSocket(`${wsProtocol}//${window.location.host}/ws`);

        this.ws.onopen = () => {
          console.log('Host WebSocket connected to local Bun server!');
          this.ws.send(JSON.stringify({ type: 'HOST_CREATE_ROOM' }));
        };

        this.ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            this.handleWsMessage(data);
          } catch (err) {
            console.error('WS parse error:', err);
          }
        };

        this.ws.onerror = () => {
          console.log('Local WebSocket server unavailable, PeerJS WebRTC active.');
        };
      } catch (e) {
        console.log('WS init skipped, PeerJS WebRTC active.');
      }
    }
  }

  handleWsMessage(data) {
    const { type, payload } = data;

    if (type === 'ROOM_CREATED') {
      this.roomCode = payload.roomCode;
      this.updateRoomDisplayAndQR();
      this.initPeerHost();
    } else if (type === 'PLAYER_CONNECTED') {
      this.onRemotePlayerConnected(payload.player);
    } else if (type === 'PLAYER_COLOR_CHANGED') {
      const { playerId, colorKey } = payload;
      const playerData = this.connectedPlayerData.get(playerId) || {};

      // Reset any snail this player previously controlled
      const prevSnail = this.remotePlayers.get(playerId);
      if (prevSnail && prevSnail.colorKey !== colorKey) {
        prevSnail.id = `ai_${prevSnail.laneIndex + 1}`;
        prevSnail.isPlayer = false;
        prevSnail.playerName = null;
        prevSnail.dndModifier = 0;
        if (prevSnail.labelSprite) {
          prevSnail.group.remove(prevSnail.labelSprite);
          prevSnail.labelSprite = null;
        }
      }

      // Assign player to selected snail
      const targetSnail = this.snails.find(s => s.colorKey === colorKey);
      if (targetSnail) {
        targetSnail.id = playerId;
        targetSnail.isPlayer = true;
        targetSnail.playerName = playerData.name || 'Spieler';
        targetSnail.dndModifier = playerData.dndModifier || 0;
        this.remotePlayers.set(playerId, targetSnail);

        if (targetSnail.labelSprite) {
          targetSnail.group.remove(targetSnail.labelSprite);
        }
        targetSnail.labelSprite = targetSnail.createTextSprite(`📱 ${targetSnail.playerName}`, targetSnail.colorData.css);
        targetSnail.group.add(targetSnail.labelSprite);
      }
      this.renderRosterUI();
    } else if (type === 'PLAYER_ROLL_D20') {
      const remoteSnail = this.remotePlayers.get(payload.playerId);
      if (remoteSnail && this.gameState === 'RACING') {
        const activeSnail = this.turnOrder[this.currentTurnIndex];
        if (activeSnail === remoteSnail || !this.turnBased) {
          remoteSnail.handleD20Roll(payload.rollValue, remoteSnail.dndModifier, this.snails);
          setTimeout(() => this.nextTurn(), 1400);
        }
      }
    } else if (type === 'PLAYER_CAST_SPELL') {
      const remoteSnail = this.remotePlayers.get(payload.playerId);
      if (remoteSnail && this.gameState === 'RACING') {
        remoteSnail.handleSpellCast(payload.spellId, this.snails);
      }
    } else if (type === 'PLAYER_DISCONNECTED') {
      const remoteSnail = this.remotePlayers.get(payload.playerId);
      if (remoteSnail) {
        remoteSnail.id = `ai_${remoteSnail.laneIndex + 1}`;
        remoteSnail.isPlayer = false;
        remoteSnail.playerName = null;
        remoteSnail.dndModifier = 0;
        if (remoteSnail.labelSprite) {
          remoteSnail.group.remove(remoteSnail.labelSprite);
          remoteSnail.labelSprite = null;
        }
        this.remotePlayers.delete(payload.playerId);
      }
      this.connectedPlayerData.delete(payload.playerId);
      this.renderRosterUI();
    }
  }

  onRemotePlayerConnected(playerData) {
    this.connectedPlayerData.set(playerData.id, playerData);
    this.renderRosterUI();
  }

  renderRosterUI() {
    const list = document.getElementById('roster-list');
    if (!list) return;

    list.innerHTML = '';
    this.snails.forEach(s => {
      const item = document.createElement('div');
      item.style.padding = '8px 12px';
      item.style.borderRadius = '10px';
      item.style.background = s.isPlayer ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.05)';
      item.style.border = s.isPlayer ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.1)';
      item.style.color = s.colorData.css;
      item.style.fontWeight = '700';
      item.style.display = 'flex';
      item.style.justifyContent = 'space-between';
      item.style.alignItems = 'center';

      const snailName = s.colorData.name;
      const statusText = s.isPlayer 
        ? `<span style="color: #4ade80;">📱 ${s.playerName || 'Spieler'} (+${s.dndModifier || 0})</span>`
        : `<span style="color: #94a3b8; font-size: 0.8rem;">🤖 NPC Schnecke</span>`;

      item.innerHTML = `<span>🐌 ${snailName}</span> ${statusText}`;
      list.appendChild(item);
    });
  }

  setupSnails() {
    this.snails.forEach(s => s.dispose());
    this.snails = [];
    this.remotePlayers.clear();

    // 8 Official Giant Snails from D&D The Wild Beyond the Witchlight
    const snailKeys = ['rosa', 'blau', 'violett', 'gruen', 'gelb', 'orange', 'rot', 'schwarz'];
    snailKeys.forEach((key, idx) => {
      const level1AiMod = (idx % 2 === 0) ? 1 : 2;
      const snail = new Snail(`ai_${idx + 1}`, key, false, idx, this.trackManager, level1AiMod);
      this.snails.push(snail);
    });

    this.renderRosterUI();
  }

  setupUI() {
    const startBtn = document.getElementById('btn-start');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        audioSystem.init();
        this.startRace();
      });
    }

    const restartBtn = document.getElementById('btn-restart');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        this.startRace();
      });
    }

    const editorToggleBtn = document.getElementById('btn-toggle-editor');
    const closeEditorBtn = document.getElementById('btn-close-editor');
    const exportBtn = document.getElementById('btn-export-points');

    const toggleEditor = () => {
      this.editorMode = !this.editorMode;
      this.trackManager.setEditorVisible(this.editorMode);
      document.getElementById('editor-panel')?.classList.toggle('hidden', !this.editorMode);
      if (this.editorMode) this.renderEditorWaypointsList();
    };

    if (editorToggleBtn) editorToggleBtn.addEventListener('click', toggleEditor);
    if (closeEditorBtn) closeEditorBtn.addEventListener('click', toggleEditor);

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const codeStr = JSON.stringify(this.trackManager.waypoints.map(p => ({ x: Number(p.x.toFixed(2)), y: Number(p.y.toFixed(2)), z: 0 })), null, 2);
        navigator.clipboard.writeText(codeStr);
        alert('Koordinaten wurden in die Zwischenablage kopiert! 📋\n\n' + codeStr);
      });
    }

    const gridToggleBtn = document.getElementById('btn-toggle-grid');
    if (gridToggleBtn) {
      gridToggleBtn.addEventListener('click', () => {
        this.trackManager.toggleGrid();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'e' || e.key === 'E') {
        toggleEditor();
      } else if (e.key === 'g' || e.key === 'G') {
        this.trackManager.toggleGrid();
      }
    });
  }

  setupEditorDragging() {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    window.addEventListener('pointerdown', (e) => {
      if (!this.editorMode) return;

      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, this.camera);
      const intersects = raycaster.intersectObjects(this.trackManager.handleMeshes);

      if (intersects.length > 0) {
        this.draggedHandleIndex = intersects[0].object.userData.index;
      }
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.editorMode || this.draggedHandleIndex < 0) return;

      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, this.camera);

      const worldPos = new THREE.Vector3();
      raycaster.ray.intersectPlane(planeZ, worldPos);

      if (worldPos) {
        this.trackManager.updateWaypoint(this.draggedHandleIndex, worldPos.x, worldPos.y);
        this.renderEditorWaypointsList();
        if (this.snails) {
          this.snails.forEach(s => s.updatePosition(s.progress));
        }
      }
    });

    window.addEventListener('pointerup', () => {
      this.draggedHandleIndex = -1;
    });
  }

  setupInputs() {
    window.addEventListener('keydown', (e) => {
      if (this.gameState === 'LOBBY') {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          document.getElementById('btn-start')?.click();
        }
        return;
      }

      if (this.gameState === 'RACING') {
        // DM can press Space to advance the current turn (e.g. roll for an NPC snail or force turn)
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          const activeSnail = this.turnOrder[this.currentTurnIndex];
          if (activeSnail) {
            const rollVal = Math.floor(Math.random() * 20) + 1;
            activeSnail.handleD20Roll(rollVal, activeSnail.dndModifier, this.snails);
            setTimeout(() => this.nextTurn(), 1400);
          }
        }
      }
    });
  }

  startRace() {
    this.snails.forEach(s => s.reset());
    this.gameState = 'RACING';
    this.currentRound = 1;
    this.raceStartTime = performance.now();

    // Roll Initiative (1d20 + modifier) for all 8 snails
    this.snails.forEach(s => {
      s.initiative = Math.floor(Math.random() * 20) + 1 + (s.dndModifier || 0);
    });

    // Sort by Initiative descending (highest first)
    this.turnOrder = [...this.snails].sort((a, b) => b.initiative - a.initiative);
    this.currentTurnIndex = 0;

    document.getElementById('start-lobby')?.classList.remove('active');
    document.getElementById('start-lobby')?.classList.add('hidden');
    document.getElementById('end-screen')?.classList.remove('active');
    document.getElementById('end-screen')?.classList.add('hidden');
    document.getElementById('game-hud')?.classList.remove('hidden');

    this.startActiveTurn();
  }

  startActiveTurn() {
    if (this.gameState !== 'RACING') return;

    const activeSnail = this.turnOrder[this.currentTurnIndex];
    if (!activeSnail) return;

    // Update Turn Banner HUD
    const turnBanner = document.getElementById('turn-banner');
    const displayName = activeSnail.isPlayer 
      ? `${activeSnail.playerName} (${activeSnail.colorData.name})`
      : activeSnail.colorData.name;

    if (turnBanner) {
      turnBanner.innerText = `🎲 RUNDE ${this.currentRound} | ZUG VON: ${displayName.toUpperCase()}`;
      turnBanner.style.color = activeSnail.colorData.css;
    }

    // Broadcast active turn to controllers (WebRTC PeerJS & WebSocket)
    this.broadcastRaceState({
      gameState: this.gameState,
      activePlayerId: activeSnail.id,
      activeSnailName: displayName,
      currentRound: this.currentRound
    });

    // AI Turn Automation (if NPC snail)
    if (!activeSnail.isPlayer) {
      setTimeout(() => {
        if (this.gameState === 'RACING') {
          const aiRoll = Math.floor(Math.random() * 20) + 1;
          activeSnail.handleD20Roll(aiRoll, activeSnail.dndModifier, this.snails);
          setTimeout(() => this.nextTurn(), 1400);
        }
      }, 900);
    }
  }

  nextTurn() {
    if (this.gameState !== 'RACING') return;

    const winner = this.snails.find(s => s.progress >= 1.0);
    if (winner) {
      this.finishRace(winner);
      return;
    }

    this.currentTurnIndex++;
    if (this.currentTurnIndex >= this.turnOrder.length) {
      this.currentTurnIndex = 0;
      this.currentRound++;
    }

    this.startActiveTurn();
  }

  updateHUD() {
    if (this.gameState !== 'RACING') return;

    const sortedSnails = [...this.snails].sort((a, b) => b.progress - a.progress);
    const lbContainer = document.getElementById('leaderboard-list');
    if (lbContainer) {
      lbContainer.innerHTML = '';
      sortedSnails.forEach((s, rankIdx) => {
        const row = document.createElement('div');
        row.className = 'lb-row';
        const pct = Math.round(s.progress * 100);

        row.innerHTML = `
          <span class="lb-rank">${rankIdx + 1}.</span>
          <div class="lb-dot" style="background-color: ${s.colorData.css}"></div>
          <span class="lb-name">${s.colorData.name} ${s.isPlayer ? `(${s.playerName || 'Spieler'})` : ''}</span>
          <div class="lb-progress-bar">
            <div class="lb-progress-fill" style="width: ${pct}%; background-color: ${s.colorData.css}"></div>
          </div>
        `;
        lbContainer.appendChild(row);
      });
    }

    const winner = sortedSnails.find(s => s.progress >= 1.0);
    if (winner) {
      this.finishRace(winner);
    }
  }

  finishRace(winner) {
    this.gameState = 'FINISHED';
    audioSystem.playVictorySound();

    this.raceElapsedTime = (performance.now() - this.raceStartTime) / 1000;

    const winnerText = document.getElementById('winner-text');
    const winnerName = winner.isPlayer ? `${winner.playerName} (${winner.colorData.name})` : winner.colorData.name;
    if (winnerText) {
      winnerText.innerText = `🎉 ${winnerName} gewinnt das Rennen! 🏆`;
      winnerText.style.color = winner.colorData.css;
    }

    const mins = Math.floor(this.raceElapsedTime / 60);
    const secs = (this.raceElapsedTime % 60).toFixed(1);
    const timeEl = document.getElementById('stat-time');
    if (timeEl) timeEl.innerText = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;

    const rankEl = document.getElementById('stat-rank');
    if (rankEl) rankEl.innerText = `${winnerName}`;

    document.getElementById('game-hud')?.classList.add('hidden');
    document.getElementById('end-screen')?.classList.remove('hidden');
    document.getElementById('end-screen')?.classList.add('active');

    // Broadcast race finish to controllers (WebRTC PeerJS & WebSocket)
    this.broadcastRaceState({
      gameState: this.gameState,
      winnerName
    });
  }

  renderEditorWaypointsList() {
    const list = document.getElementById('waypoints-list');
    if (!list) return;
    list.innerHTML = '';

    this.trackManager.waypoints.forEach((wp, idx) => {
      const item = document.createElement('div');
      item.className = 'wp-item';
      item.innerHTML = `
        <label>P${idx + 1}:</label>
        X: <input type="number" step="0.1" value="${wp.x.toFixed(2)}" data-idx="${idx}" data-axis="x" />
        Y: <input type="number" step="0.1" value="${wp.y.toFixed(2)}" data-idx="${idx}" data-axis="y" />
      `;
      list.appendChild(item);
    });

    list.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        const axis = e.target.dataset.axis;
        const val = parseFloat(e.target.value);
        if (axis === 'x') this.trackManager.updateWaypoint(idx, val, this.trackManager.waypoints[idx].y);
        else this.trackManager.updateWaypoint(idx, this.trackManager.waypoints[idx].x, val);
      });
    });
  }

  onWindowResize() {
    this.aspect = window.innerWidth / window.innerHeight;
    this.orthoWidth = this.orthoHeight * this.aspect;

    this.camera.left = -this.orthoWidth;
    this.camera.right = this.orthoWidth;
    this.camera.top = this.orthoHeight;
    this.camera.bottom = -this.orthoHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate(time) {
    requestAnimationFrame(this.animate);

    const delta = 0.016; // ~60 FPS delta

    if (this.gameState === 'RACING') {
      this.snails.forEach(s => s.update(delta, time, true));
      this.updateHUD();
    } else if (this.gameState === 'LOBBY') {
      this.snails.forEach(s => s.update(delta, time, false));
    }

    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new GameEngine();
});
