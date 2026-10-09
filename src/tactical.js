import * as THREE from 'three';

export const BOARD_SIZE = 8;
export const TILE_SIZE = 1.15;
export const TILE_PITCH = 1.25;

export const DND_CLASSES = {
  KRIEGER: {
    id: 'KRIEGER',
    name: 'Krieger (Fighter)',
    icon: '🛡️',
    colorHex: 0x3b82f6,
    defaultHp: 14,
    speed: 6, // 30 ft = 6 squares
    actions: [
      { id: 'attack_melee', name: '⚔️ Nahkampf-Hieb', type: 'ATTACK', dice: '1d8+3', range: 1, desc: 'Schlägt ein angrenzendes Ziel (1d8+3 Schaden)' },
      { id: 'action_push', name: '💥 Stoß-Angriff', type: 'PUSH', range: 1, desc: 'Stößt ein Ziel 1 Feld nach hinten' }
    ]
  },
  MAGIER: {
    id: 'MAGIER',
    name: 'Magier (Wizard)',
    icon: '🔮',
    colorHex: 0x8b5cf6,
    defaultHp: 8,
    speed: 6,
    actions: [
      { id: 'spell_firebolt', name: '🔥 Feuerblitz', type: 'ATTACK', dice: '1d10', range: 5, desc: 'Fernkampf-Zauber auf bis zu 5 Felder Distanz' },
      { id: 'spell_push', name: '💨 Windstoß', type: 'PUSH', range: 3, desc: 'Stößt Ziel 1 Feld weg' }
    ]
  },
  SCHURKE: {
    id: 'SCHURKE',
    name: 'Schurke (Rogue)',
    icon: '🗡️',
    colorHex: 0xf59e0b,
    defaultHp: 10,
    speed: 7, // 35 ft
    actions: [
      { id: 'attack_sneak', name: '🗡️ Hinterhalt', type: 'ATTACK', dice: '1d6+1d6', range: 1, desc: 'Nahkampf mit Sneak Attack' },
      { id: 'action_push', name: '💨 Trick-Stoß', type: 'PUSH', range: 1, desc: 'Stößt Ziel aus dem Gleichgewicht' }
    ]
  },
  KLERIKER: {
    id: 'KLERIKER',
    name: 'Kleriker (Cleric)',
    icon: '✨',
    colorHex: 0x06b6d4,
    defaultHp: 11,
    speed: 6,
    actions: [
      { id: 'spell_flame', name: '✨ Heilige Flamme', type: 'ATTACK', dice: '1d8', range: 4, desc: 'Göttlicher Strahl auf bis zu 4 Felder' },
      { id: 'spell_heal', name: '💚 Heilung', type: 'HEAL', dice: '1d8+2', range: 1, desc: 'Heilt ein Ziel um 1d8+2 LP' }
    ]
  },
  WALDLAEUFER: {
    id: 'WALDLAEUFER',
    name: 'Waldläufer (Ranger)',
    icon: '🏹',
    colorHex: 0x22c55e,
    defaultHp: 11,
    speed: 6,
    actions: [
      { id: 'attack_bow', name: '🏹 Langbogen', type: 'ATTACK', dice: '1d8+2', range: 6, desc: 'Präziser Schuss aus der Ferne' },
      { id: 'action_push', name: '🎯 Stoß-Pfeil', type: 'PUSH', range: 4, desc: 'Schießt und stößt Ziel 1 Feld zurück' }
    ]
  },
  BARBAR: {
    id: 'BARBAR',
    name: 'Barbar (Barbarian)',
    icon: '🪓',
    colorHex: 0xef4444,
    defaultHp: 16,
    speed: 7,
    actions: [
      { id: 'attack_rage', name: '🪓 Wut-Schlag', type: 'ATTACK', dice: '1d12+3', range: 1, desc: 'Schwerer Schlag mit der Streitaxt' },
      { id: 'action_push', name: '💥 Rammbock-Stoß', type: 'PUSH', range: 1, desc: 'Wuchtiger Stoß 1 Feld weit' }
    ]
  }
};

export const MONSTER_TEMPLATES = {
  GOBLIN: {
    id: 'GOBLIN',
    name: 'Goblin',
    icon: '👺',
    colorHex: 0x84cc16,
    hp: 7,
    maxHp: 7,
    speed: 6,
    desc: 'Kleiner flinker Plünderer'
  },
  WOLF: {
    id: 'WOLF',
    name: 'Schattenwolf',
    icon: '🐺',
    colorHex: 0x64748b,
    hp: 11,
    maxHp: 11,
    speed: 8,
    desc: 'Raubtier mit schnellem Antritt'
  },
  BUGBEAR: {
    id: 'BUGBEAR',
    name: 'Bugbear-Hüne',
    icon: '👹',
    colorHex: 0xd97706,
    hp: 27,
    maxHp: 27,
    speed: 6,
    desc: 'Muskulöser Schläger mit Morgenstern'
  },
  ZOMBIE: {
    id: 'ZOMBIE',
    name: 'Zombie',
    icon: '🧟',
    colorHex: 0x10b981,
    hp: 22,
    maxHp: 22,
    speed: 4,
    desc: 'Zäher Untoter mit fauligem Griff'
  },
  BOSS: {
    id: 'BOSS',
    name: 'Hexenmeister / Boss',
    icon: '🧙',
    colorHex: 0xa855f7,
    hp: 45,
    maxHp: 45,
    speed: 6,
    desc: 'Mächtiger Anführer mit finsterer Magie'
  }
};

export class TacticalCombatManager {
  constructor(gameEngine) {
    this.gameEngine = gameEngine;
    this.scene = gameEngine.scene;

    // Tactical Scene Root Group
    this.group = new THREE.Group();
    this.group.visible = false;
    this.scene.add(this.group);

    // Dedicated Tactical Camera (Isometric perspective)
    this.tacticalCamera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.tacticalCamera.position.set(0, -12, 13);
    this.tacticalCamera.lookAt(0, -0.4, 0);
    this.tacticalCamera.up.set(0, 0, 1);

    // Battlemap State
    this.grid = []; // [x][y]
    this.tileMeshes = [];
    this.units = []; // Player characters & Monsters
    this.floatingTexts = [];

    // DM Tool Mode: 'PLACE_MONSTER', 'SELECT_MOVE', 'REMOVE'
    this.dmToolMode = 'PLACE_MONSTER';
    this.selectedMonsterType = 'GOBLIN';
    this.selectedUnit = null;
    this.currentRound = 1;

    // Raycaster for 3D interactions
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoverTile = null;

    // Hover Highlight Mesh
    const hoverGeom = new THREE.RingGeometry(0.35, 0.48, 16);
    const hoverMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
    this.hoverMesh = new THREE.Mesh(hoverGeom, hoverMat);
    this.hoverMesh.position.z = 0.22;
    this.hoverMesh.visible = false;
    this.group.add(this.hoverMesh);

    // Setup Lighting & Board
    this.setupTacticalLighting();
    this.initBoard();

    // Listen to resize
    window.addEventListener('resize', () => {
      this.tacticalCamera.aspect = window.innerWidth / window.innerHeight;
      this.tacticalCamera.updateProjectionMatrix();
    });
  }

  setupTacticalLighting() {
    this.tacticalLightGroup = new THREE.Group();

    // Ambient light (warm dungeon / tactical table glow)
    const ambientLight = new THREE.AmbientLight(0xe2e8f0, 0.85);
    this.tacticalLightGroup.add(ambientLight);

    // Main directional light
    const dirLight = new THREE.DirectionalLight(0xfef08a, 1.2);
    dirLight.position.set(8, -10, 16);
    dirLight.castShadow = true;
    this.tacticalLightGroup.add(dirLight);

    // Blue rim light for depth
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.6);
    rimLight.position.set(-8, 8, 10);
    this.tacticalLightGroup.add(rimLight);

    this.group.add(this.tacticalLightGroup);
  }

  gridToWorld(gx, gy, gz = 0) {
    return new THREE.Vector3(
      (gx - (BOARD_SIZE - 1) / 2) * TILE_PITCH,
      (gy - (BOARD_SIZE - 1) / 2) * TILE_PITCH,
      gz
    );
  }

  worldToGrid(wx, wy) {
    const gx = Math.round(wx / TILE_PITCH + (BOARD_SIZE - 1) / 2);
    const gy = Math.round(wy / TILE_PITCH + (BOARD_SIZE - 1) / 2);
    if (this.inBounds(gx, gy)) return { x: gx, y: gy };
    return null;
  }

  inBounds(gx, gy) {
    return gx >= 0 && gx < BOARD_SIZE && gy >= 0 && gy < BOARD_SIZE;
  }

  initBoard() {
    // Clear old meshes
    this.tileMeshes.forEach(m => this.group.remove(m));
    this.tileMeshes = [];
    this.grid = [];

    // Board Base Pedestal
    const baseGeom = new THREE.BoxGeometry(
      BOARD_SIZE * TILE_PITCH + 0.6,
      BOARD_SIZE * TILE_PITCH + 0.6,
      0.5
    );
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
    const boardBase = new THREE.Mesh(baseGeom, baseMat);
    boardBase.position.set(0, 0, -0.35);
    this.group.add(boardBase);

    // Gold frame border
    const frameGeom = new THREE.EdgesGeometry(baseGeom);
    const frameMat = new THREE.LineBasicMaterial({ color: 0xf59e0b, linewidth: 2 });
    const frameLines = new THREE.LineSegments(frameGeom, frameMat);
    frameLines.position.copy(boardBase.position);
    this.group.add(frameLines);

    // Tile geometry & materials
    const tileGeom = new THREE.BoxGeometry(TILE_SIZE, TILE_SIZE, 0.25);
    const matCobbleLight = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const matCobbleDark = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6 });

    for (let x = 0; x < BOARD_SIZE; x++) {
      this.grid[x] = [];
      for (let y = 0; y < BOARD_SIZE; y++) {
        const mat = (x + y) % 2 === 0 ? matCobbleLight : matCobbleDark;
        const tileMesh = new THREE.Mesh(tileGeom, mat.clone());
        const worldPos = this.gridToWorld(x, y, 0);
        tileMesh.position.copy(worldPos);
        tileMesh.userData = { gridX: x, gridY: y };

        this.group.add(tileMesh);
        this.tileMeshes.push(tileMesh);

        this.grid[x][y] = {
          x,
          y,
          mesh: tileMesh,
          unit: null
        };
      }
    }
  }

  // =========================================================================
  // DM BATTLE CONTROLS & SPAWNING
  // =========================================================================
  startTacticalBattle() {
    this.group.visible = true;
    this.updateTVHud();
    this.syncStateWithControllers();
  }

  stopTacticalBattle() {
    this.group.visible = false;
  }

  resetBattle() {
    [...this.units].forEach(u => this.removeUnit(u));
    this.units = [];
    this.selectedUnit = null;
    this.currentRound = 1;
    this.updateTVHud();
    this.syncStateWithControllers();
  }

  // Called when DM clicks on canvas in Tactical Mode
  handleCanvasClick(event) {
    if (!this.group.visible) return;

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.tacticalCamera);
    const intersects = this.raycaster.intersectObjects(this.tileMeshes);

    if (intersects.length > 0) {
      const { gridX, gridY } = intersects[0].object.userData;
      this.onDMCellClicked(gridX, gridY);
    }
  }

  handleCanvasPointerMove(event) {
    if (!this.group.visible) return;

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.tacticalCamera);
    const intersects = this.raycaster.intersectObjects(this.tileMeshes);

    if (intersects.length > 0) {
      const { gridX, gridY } = intersects[0].object.userData;
      const worldPos = this.gridToWorld(gridX, gridY, 0.16);
      this.hoverMesh.position.set(worldPos.x, worldPos.y, 0.16);
      this.hoverMesh.visible = true;
    } else {
      this.hoverMesh.visible = false;
    }
  }

  onDMCellClicked(gx, gy) {
    const cell = this.grid[gx][gy];

    if (this.dmToolMode === 'PLACE_MONSTER') {
      if (cell.unit) {
        alert('Auf diesem Feld steht bereits eine Einheit!');
        return;
      }
      this.spawnMonster(this.selectedMonsterType, gx, gy);
    } else if (this.dmToolMode === 'REMOVE') {
      if (cell.unit) {
        this.removeUnit(cell.unit);
      }
    } else if (this.dmToolMode === 'SELECT_MOVE') {
      if (cell.unit) {
        this.selectUnit(cell.unit);
      } else if (this.selectedUnit) {
        // Move selected unit to this empty cell
        this.moveUnit(this.selectedUnit, gx, gy);
      }
    }

    this.updateTVHud();
    this.syncStateWithControllers();
  }

  spawnMonster(monsterKey, gx, gy) {
    const template = MONSTER_TEMPLATES[monsterKey] || MONSTER_TEMPLATES.GOBLIN;
    const id = `mob_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;

    const unit = this.createTokenMesh({
      id,
      name: template.name,
      icon: template.icon,
      colorHex: template.colorHex,
      hp: template.hp,
      maxHp: template.maxHp,
      speed: template.speed,
      isMonster: true,
      gridX: gx,
      gridY: gy
    });

    this.grid[gx][gy].unit = unit;
    this.units.push(unit);
    this.showFloatingText(gx, gy, `+ ${template.name}`, '#ef4444');
    return unit;
  }

  deployPlayerCharacter(playerId, playerName, classKey, gx, gy) {
    const cls = DND_CLASSES[classKey] || DND_CLASSES.KRIEGER;

    // Remove existing token for this player if already placed
    const existing = this.units.find(u => u.id === playerId);
    if (existing) {
      this.removeUnit(existing);
    }

    // Ensure cell is free
    if (!this.inBounds(gx, gy) || this.grid[gx][gy].unit) {
      // Find nearest empty cell
      for (let y = 0; y < BOARD_SIZE; y++) {
        for (let x = 0; x < BOARD_SIZE; x++) {
          if (!this.grid[x][y].unit) {
            gx = x;
            gy = y;
            break;
          }
        }
        if (!this.grid[gx][gy].unit) break;
      }
    }

    const unit = this.createTokenMesh({
      id: playerId,
      name: playerName || 'Held',
      classKey: cls.id,
      className: cls.name,
      icon: cls.icon,
      colorHex: cls.colorHex,
      hp: cls.defaultHp,
      maxHp: cls.defaultHp,
      speed: cls.speed,
      isMonster: false,
      gridX: gx,
      gridY: gy
    });

    this.grid[gx][gy].unit = unit;
    this.units.push(unit);
    this.showFloatingText(gx, gy, `🛡️ ${unit.name} bereit!`, '#38bdf8');

    this.updateTVHud();
    this.syncStateWithControllers();
    return unit;
  }

  createTokenMesh(data) {
    const uGroup = new THREE.Group();
    const worldPos = this.gridToWorld(data.gridX, data.gridY, 0.15);
    uGroup.position.copy(worldPos);

    // Glowing base disc
    const baseGeom = new THREE.CylinderGeometry(0.44, 0.46, 0.15, 24);
    const baseMat = new THREE.MeshStandardMaterial({
      color: data.colorHex,
      roughness: 0.3,
      metalness: 0.2
    });
    const baseMesh = new THREE.Mesh(baseGeom, baseMat);
    baseMesh.rotation.x = Math.PI / 2;
    baseMesh.position.z = 0.08;
    uGroup.add(baseMesh);

    // Outer rim highlight
    const rimGeom = new THREE.RingGeometry(0.44, 0.49, 24);
    const rimMat = new THREE.MeshBasicMaterial({
      color: data.isMonster ? 0xef4444 : 0x38bdf8,
      side: THREE.DoubleSide
    });
    const rimMesh = new THREE.Mesh(rimGeom, rimMat);
    rimMesh.position.z = 0.16;
    uGroup.add(rimMesh);

    // Inner icon token disc
    const iconDiscGeom = new THREE.CircleGeometry(0.40, 24);
    const iconDiscMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    const iconDisc = new THREE.Mesh(iconDiscGeom, iconDiscMat);
    iconDisc.position.z = 0.165;
    uGroup.add(iconDisc);

    // Floating Overhead Sprite (Icon & HP)
    const hpSprite = this.createTextSprite(
      `${data.icon} ${data.name} (${data.hp}/${data.maxHp} LP)`,
      data.isMonster ? '#f87171' : '#38bdf8',
      0.24
    );
    hpSprite.position.set(0, 0, 1.15);
    uGroup.add(hpSprite);

    this.group.add(uGroup);

    const unit = {
      ...data,
      group: uGroup,
      hpSprite
    };

    return unit;
  }

  removeUnit(unit) {
    if (!unit) return;
    this.grid[unit.gridX][unit.gridY].unit = null;
    this.group.remove(unit.group);
    this.units = this.units.filter(u => u.id !== unit.id);
    if (this.selectedUnit?.id === unit.id) {
      this.selectedUnit = null;
    }
  }

  selectUnit(unit) {
    this.selectedUnit = unit;
    this.showFloatingText(unit.gridX, unit.gridY, `Ausgewählt: ${unit.name}`, '#fbbf24');
    this.updateTVHud();
  }

  moveUnit(unit, destX, destY) {
    if (!this.inBounds(destX, destY)) return false;
    const destCell = this.grid[destX][destY];
    if (destCell.unit) return false;

    // Free old tile
    this.grid[unit.gridX][unit.gridY].unit = null;

    // Occupy new tile
    unit.gridX = destX;
    unit.gridY = destY;
    destCell.unit = unit;

    // Move 3D token
    const targetWorld = this.gridToWorld(destX, destY, 0.15);
    unit.group.position.copy(targetWorld);

    this.showFloatingText(destX, destY, '🏃 Schritt', '#94a3b8');
    this.syncStateWithControllers();
    this.updateTVHud();
    return true;
  }

  pushUnit(unit, dirX, dirY) {
    const destX = unit.gridX + dirX;
    const destY = unit.gridY + dirY;

    if (!this.inBounds(destX, destY)) {
      this.showFloatingText(unit.gridX, unit.gridY, '💥 WAND! (-2 LP)', '#f59e0b');
      this.applyDamage(unit, 2);
      return;
    }

    const destCell = this.grid[destX][destY];
    if (destCell.unit) {
      this.showFloatingText(unit.gridX, unit.gridY, '💥 KOLLISION! (-2 LP)', '#f59e0b');
      this.applyDamage(unit, 2);
      this.applyDamage(destCell.unit, 2);
      return;
    }

    // Push successful
    this.grid[unit.gridX][unit.gridY].unit = null;
    unit.gridX = destX;
    unit.gridY = destY;
    destCell.unit = unit;
    unit.group.position.copy(this.gridToWorld(destX, destY, 0.15));
    this.showFloatingText(destX, destY, '💨 WEGGESTOSSEN!', '#38bdf8');

    this.syncStateWithControllers();
    this.updateTVHud();
  }

  applyDamage(unit, amount) {
    if (!unit) return;
    unit.hp = Math.max(0, unit.hp - amount);

    this.updateUnitSprite(unit);
    this.showFloatingText(unit.gridX, unit.gridY, `-${amount} LP`, '#ef4444');

    if (unit.hp <= 0) {
      this.showFloatingText(unit.gridX, unit.gridY, `💀 K.o.!`, '#dc2626');
      setTimeout(() => {
        this.removeUnit(unit);
        this.syncStateWithControllers();
        this.updateTVHud();
      }, 900);
    }
  }

  applyHeal(unit, amount) {
    if (!unit) return;
    unit.hp = Math.min(unit.maxHp, unit.hp + amount);
    this.updateUnitSprite(unit);
    this.showFloatingText(unit.gridX, unit.gridY, `+${amount} LP`, '#22c55e');
    this.syncStateWithControllers();
    this.updateTVHud();
  }

  updateUnitSprite(unit) {
    if (!unit.hpSprite) return;
    unit.group.remove(unit.hpSprite);
    const color = unit.isMonster ? '#f87171' : '#38bdf8';
    unit.hpSprite = this.createTextSprite(
      `${unit.icon} ${unit.name} (${unit.hp}/${unit.maxHp} LP)`,
      color,
      0.24
    );
    unit.hpSprite.position.set(0, 0, 1.15);
    unit.group.add(unit.hpSprite);
  }

  createTextSprite(text, color = '#ffffff', scale = 0.3) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 256, 64);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    ctx.roundRect(4, 4, 248, 56, 12);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.stroke();

    ctx.font = 'bold 24px sans-serif';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const spriteMat = new THREE.SpriteMaterial({ map: texture, depthTest: false });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(scale * 4, scale, 1);
    return sprite;
  }

  showFloatingText(gx, gy, text, color = '#ffffff') {
    const worldPos = this.gridToWorld(gx, gy, 0.8);
    const sprite = this.createTextSprite(text, color, 0.26);
    sprite.position.copy(worldPos);
    this.group.add(sprite);

    const startTime = performance.now();
    this.floatingTexts.push({ sprite, startTime, duration: 1300 });
  }

  updateFloatingTexts(time) {
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      const elapsed = time - ft.startTime;
      if (elapsed > ft.duration) {
        this.group.remove(ft.sprite);
        this.floatingTexts.splice(i, 1);
      } else {
        ft.sprite.position.z += 0.012;
      }
    }
  }

  // =========================================================================
  // STATE SYNC FOR CONTROLLERS
  // =========================================================================
  getSerializedState() {
    return {
      round: this.currentRound,
      units: this.units.map(u => ({
        id: u.id,
        name: u.name,
        icon: u.icon,
        isMonster: u.isMonster,
        className: u.className || null,
        classKey: u.classKey || null,
        hp: u.hp,
        maxHp: u.maxHp,
        x: u.gridX,
        y: u.gridY
      }))
    };
  }

  syncStateWithControllers() {
    const state = this.getSerializedState();
    const msg = {
      type: 'TACTICAL_STATE_UPDATE',
      payload: state
    };

    this.gameEngine.peerConnections.forEach(conn => {
      if (conn && conn.open) {
        try { conn.send(msg); } catch (e) {}
      }
    });

    if (this.gameEngine.ws && this.gameEngine.ws.readyState === WebSocket.OPEN) {
      this.gameEngine.ws.send(JSON.stringify({
        type: 'HOST_SYNC_TACTICAL_STATE',
        payload: state
      }));
    }
  }

  updateTVHud() {
    const infoEl = document.getElementById('tact-selected-unit-info');
    if (infoEl) {
      if (this.selectedUnit) {
        infoEl.innerHTML = `
          <span style="color: #fbbf24; font-weight: 800;">${this.selectedUnit.icon} ${this.selectedUnit.name}</span>
          <span style="color: #94a3b8; font-size: 0.85rem; margin-left: 8px;">(${this.selectedUnit.hp}/${this.selectedUnit.maxHp} LP)</span>
        `;
      } else {
        infoEl.innerText = 'Keine Einheit gewählt';
      }
    }

    const roundEl = document.getElementById('tact-round-display');
    if (roundEl) roundEl.innerText = `Runde ${this.currentRound}`;
  }

  update(delta, time) {
    if (!this.group.visible) return;
    this.updateFloatingTexts(time);
  }
}
