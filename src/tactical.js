import * as THREE from 'three';
import { OFFICIAL_SNAILS } from './snail.js';

export const BOARD_SIZE = 8;
export const TILE_SIZE = 1.15;
export const TILE_PITCH = 1.25;

export const TILE_TYPES = {
  GRASS: 'GRASS',
  COBBLE: 'COBBLE',
  WATER: 'WATER',
  SLIME: 'SLIME',
  BUILDING: 'BUILDING',
  OBSTACLE: 'OBSTACLE'
};

export const ENEMY_TYPES = {
  HORNKAEFER: {
    id: 'hornkaefer',
    name: 'Hornkäfer-Rammbock',
    icon: '🪲',
    maxHp: 3,
    move: 2,
    color: 0x9333ea,
    desc: 'Stürmt in gerader Linie und stößt das erste Ziel 1 Feld weg (2 Schaden).'
  },
  SAEURESPUCKER: {
    id: 'saeurespucker',
    name: 'Säurespucker',
    icon: '🧪',
    maxHp: 2,
    move: 2,
    color: 0x16a34a,
    desc: 'Spuckt ätzende Säure auf ein Feld in 2-3 Feldern Entfernung (2 Schaden).'
  },
  SCHLAEGER: {
    id: 'schlaeger',
    name: 'Jahrmarkts-Schläger',
    icon: '👺',
    maxHp: 3,
    move: 3,
    color: 0xd97706,
    desc: 'Nahkampfkeule: Schlägt Nachbarfeld (2 Schaden + 1 Feld Stoß).'
  }
};

export const HERO_ROLES = {
  GUARDIAN: {
    id: 'GUARDIAN',
    name: 'Kuschel-Wächter',
    icon: '🛡️',
    maxHp: 4,
    move: 2,
    abilityName: 'Feen-Schild',
    abilityDesc: 'Gibt sich oder einem Nachbarfeld/Zelt 1 Schutzschild (wehrt nächsten Schaden ab).'
  },
  BRAWLER: {
    id: 'BRAWLER',
    name: 'Rammbock-Krieger',
    icon: '💥',
    maxHp: 4,
    move: 2,
    abilityName: 'Erdbeben-Stoß',
    abilityDesc: 'Stößt alle angrenzenden Feinde 1 Feld weg und fügt 1 Schaden zu!'
  },
  RANGER: {
    id: 'RANGER',
    name: 'Schleim-Schütze',
    icon: '🎯',
    maxHp: 3,
    move: 3,
    abilityName: 'Schleim-Geschoss',
    abilityDesc: 'Fernangriff in gerader Linie (bis 5 Felder): 1 Schaden + stößt das Ziel 1 Feld zurück!'
  },
  MAGE: {
    id: 'MAGE',
    name: 'Gravitations-Magier',
    icon: '🔮',
    maxHp: 3,
    move: 2,
    abilityName: 'Gravitations-Puls',
    abilityDesc: 'Zieht eine gewählte Einheit 1 Feld an ODER stößt ein Ziel 1 Feld weg!'
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
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.tacticalCamera.position.set(0, -11.5, 12.5);
    this.tacticalCamera.lookAt(0, -0.6, 0);
    this.tacticalCamera.up.set(0, 0, 1);

    // Grid data [x][y]
    this.grid = [];
    this.tileMeshes = [];

    // Units & Buildings
    this.players = [];      // Player / hero units
    this.enemies = [];      // Enemy units
    this.buildings = [];    // Carnival buildings (Carnival Power Grid)
    this.floatingTexts = [];

    // Game stats
    this.carnivalPower = 6;
    this.maxCarnivalPower = 6;
    this.currentRound = 1;
    this.maxRounds = 4;
    this.phase = 'PLAYER_PHASE'; // 'TELEGRAPH', 'PLAYER_PHASE', 'ENEMY_EXECUTION', 'VICTORY', 'DEFEAT'
    this.roundLog = [];

    // 3D Visual Effects Group (Telegraph lines, arrows, reticles)
    this.telegraphGroup = new THREE.Group();
    this.group.add(this.telegraphGroup);

    // Interactive Selection
    this.selectedUnit = null;
    this.hoveredTile = null;

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

    // Ambient light with soft moonlight blue
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.7);
    this.tacticalLightGroup.add(ambientLight);

    // Warm golden carnival spotlight
    const dirLight = new THREE.DirectionalLight(0xfef08a, 1.2);
    dirLight.position.set(6, -8, 14);
    dirLight.castShadow = true;
    this.tacticalLightGroup.add(dirLight);

    // Colorful rim light from the north
    const rimLight = new THREE.DirectionalLight(0xa855f7, 0.6);
    rimLight.position.set(-8, 8, 8);
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
    // Clear old board meshes
    this.tileMeshes.forEach(mesh => this.group.remove(mesh));
    this.tileMeshes = [];
    this.grid = [];

    // Initialize 8x8 Grid structure
    for (let x = 0; x < BOARD_SIZE; x++) {
      this.grid[x] = [];
      for (let y = 0; y < BOARD_SIZE; y++) {
        let type = TILE_TYPES.GRASS;
        // Alternating checkered festival stone
        if ((x + y) % 2 === 0) type = TILE_TYPES.COBBLE;
        this.grid[x][y] = {
          x,
          y,
          type,
          unit: null,
          building: null,
          hazard: null,
          hasShield: false
        };
      }
    }

    // Set designated Carnival Buildings & Hazards (Into the Breach layout)
    // Buildings (Protect these! They power the carnival!)
    this.grid[1][2].type = TILE_TYPES.BUILDING;
    this.grid[3][3].type = TILE_TYPES.BUILDING;
    this.grid[6][2].type = TILE_TYPES.BUILDING;
    this.grid[4][1].type = TILE_TYPES.BUILDING;

    // Hazards
    this.grid[2][4].type = TILE_TYPES.WATER; // Deep fairy pond
    this.grid[5][4].type = TILE_TYPES.WATER; // Deep fairy pond
    this.grid[3][5].type = TILE_TYPES.SLIME; // Snail slime puddle
    this.grid[4][5].type = TILE_TYPES.SLIME; // Snail slime puddle

    // Obstacles (Boulders)
    this.grid[1][4].type = TILE_TYPES.OBSTACLE;
    this.grid[6][4].type = TILE_TYPES.OBSTACLE;

    // Build 3D Meshes for all tiles
    const tileGeom = new THREE.BoxGeometry(TILE_SIZE, TILE_SIZE, 0.35);

    const matGrass = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.6,
      metalness: 0.1
    });
    const matCobble = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.5,
      metalness: 0.2
    });
    const matWater = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.1,
      metalness: 0.7,
      transparent: true,
      opacity: 0.85
    });
    const matSlime = new THREE.MeshStandardMaterial({
      color: 0x84cc16,
      roughness: 0.2,
      emissive: 0x3f6212,
      emissiveIntensity: 0.4
    });
    const matObstacle = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.8
    });

    // Board Base pedestal
    const boardBaseGeom = new THREE.BoxGeometry(
      BOARD_SIZE * TILE_PITCH + 0.6,
      BOARD_SIZE * TILE_PITCH + 0.6,
      0.6
    );
    const boardBaseMat = new THREE.MeshStandardMaterial({
      color: 0x0b1329,
      roughness: 0.7
    });
    const boardBase = new THREE.Mesh(boardBaseGeom, boardBaseMat);
    boardBase.position.set(0, 0, -0.45);
    this.group.add(boardBase);

    // Glowing border frame
    const frameGeom = new THREE.EdgesGeometry(boardBaseGeom);
    const frameMat = new THREE.LineBasicMaterial({ color: 0xf59e0b, linewidth: 2 });
    const frameLines = new THREE.LineSegments(frameGeom, frameMat);
    frameLines.position.copy(boardBase.position);
    this.group.add(frameLines);

    // Create Tile meshes
    for (let x = 0; x < BOARD_SIZE; x++) {
      for (let y = 0; y < BOARD_SIZE; y++) {
        const cell = this.grid[x][y];
        const worldPos = this.gridToWorld(x, y, 0);

        let mat = matGrass;
        if (cell.type === TILE_TYPES.COBBLE) mat = matCobble;
        else if (cell.type === TILE_TYPES.WATER) mat = matWater;
        else if (cell.type === TILE_TYPES.SLIME) mat = matSlime;
        else if (cell.type === TILE_TYPES.OBSTACLE) mat = matObstacle;

        const tileMesh = new THREE.Mesh(tileGeom, mat.clone());
        tileMesh.position.copy(worldPos);
        tileMesh.userData = { gridX: x, gridY: y, cell };
        this.group.add(tileMesh);
        this.tileMeshes.push(tileMesh);
        cell.mesh = tileMesh;

        // Visual details for specific tiles
        if (cell.type === TILE_TYPES.OBSTACLE) {
          this.createObstacleMesh(worldPos);
        } else if (cell.type === TILE_TYPES.WATER) {
          // Floating water ripple ring
          const rippleGeom = new THREE.RingGeometry(0.2, 0.4, 16);
          const rippleMat = new THREE.MeshBasicMaterial({ color: 0x7dd3fc, side: THREE.DoubleSide });
          const ripple = new THREE.Mesh(rippleGeom, rippleMat);
          ripple.position.set(worldPos.x, worldPos.y, 0.19);
          this.group.add(ripple);
        }
      }
    }

    // Create Carnival Buildings
    this.buildings = [];
    this.createBuilding(1, 2, 'Zuckerwatte-Stand', '🍭', 2, 0xec4899);
    this.createBuilding(3, 3, 'Hexenlicht-Karussell', '🎠', 3, 0xf59e0b);
    this.createBuilding(6, 2, 'Spiegelkabinett', '🪞', 2, 0x8b5cf6);
    this.createBuilding(4, 1, 'Wahrsager-Zelt', '🎪', 2, 0x06b6d4);
  }

  createObstacleMesh(worldPos) {
    const rockGeom = new THREE.DodecahedronGeometry(0.42, 1);
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.9,
      metalness: 0.1
    });
    const rockMesh = new THREE.Mesh(rockGeom, rockMat);
    rockMesh.position.set(worldPos.x, worldPos.y, 0.4);
    rockMesh.rotation.set(Math.random(), Math.random(), Math.random());
    this.group.add(rockMesh);
  }

  createBuilding(gx, gy, name, icon, hp, colorHex) {
    const worldPos = this.gridToWorld(gx, gy, 0.2);

    // Building Group
    const bGroup = new THREE.Group();
    bGroup.position.copy(worldPos);

    // Tent base (cylinder or rounded box)
    const baseGeom = new THREE.CylinderGeometry(0.42, 0.46, 0.5, 8);
    const baseMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.4 });
    const baseMesh = new THREE.Mesh(baseGeom, baseMat);
    baseMesh.rotation.x = Math.PI / 2;
    baseMesh.position.z = 0.25;
    bGroup.add(baseMesh);

    // Striped cone roof
    const roofGeom = new THREE.ConeGeometry(0.48, 0.5, 8);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    const roofMesh = new THREE.Mesh(roofGeom, roofMat);
    roofMesh.rotation.x = Math.PI / 2;
    roofMesh.position.z = 0.65;
    bGroup.add(roofMesh);

    // Roof flag pole
    const poleGeom = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 4);
    const poleMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const pole = new THREE.Mesh(poleGeom, poleMat);
    pole.rotation.x = Math.PI / 2;
    pole.position.z = 0.95;
    bGroup.add(pole);

    // Floating HP Bar / Badge
    const hpSprite = this.createTextSprite(`🎪 ${hp} HP`, '#fbbf24', 0.25);
    hpSprite.position.set(0, 0, 1.35);
    bGroup.add(hpSprite);

    this.group.add(bGroup);

    const buildingData = {
      id: `b_${gx}_${gy}`,
      name,
      icon,
      gridX: gx,
      gridY: gy,
      hp,
      maxHp: hp,
      colorHex,
      group: bGroup,
      hpSprite
    };

    this.grid[gx][gy].building = buildingData;
    this.buildings.push(buildingData);
  }

  updateBuildingUI(building) {
    if (!building.hpSprite) return;
    building.group.remove(building.hpSprite);
    const color = building.hp <= 1 ? '#ef4444' : '#fbbf24';
    building.hpSprite = this.createTextSprite(`🎪 ${building.hp}/${building.maxHp} HP`, color, 0.25);
    building.hpSprite.position.set(0, 0, 1.35);
    building.group.add(building.hpSprite);
  }

  createTextSprite(text, color = '#ffffff', scale = 0.3) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 256, 64);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.roundRect(4, 4, 248, 56, 12);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.stroke();

    ctx.font = 'bold 26px sans-serif';
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

  // =========================================================================
  // BATTLE START & UNIT SPAWNING
  // =========================================================================
  startTacticalBattle() {
    this.group.visible = true;
    this.currentRound = 1;
    this.carnivalPower = this.maxCarnivalPower;
    this.phase = 'PLAYER_PHASE';
    this.roundLog = [];

    // Clear previous units
    this.players.forEach(p => this.group.remove(p.group));
    this.enemies.forEach(e => this.group.remove(e.group));
    this.players = [];
    this.enemies = [];

    // Spawn Player Units based on connected players or defaults
    this.spawnPlayerUnits();

    // Spawn Round 1 Enemies
    this.spawnEnemiesForRound(1);

    // Plan initial enemy intents (Telegraphing)
    this.planEnemyIntents();

    // Broadcast state to all controllers
    this.syncStateWithControllers();
    this.updateTVHud();
  }

  stopTacticalBattle() {
    this.group.visible = false;
  }

  spawnPlayerUnits() {
    const connected = Array.from(this.gameEngine.remotePlayers.entries());
    const spawnPositions = [
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 1, y: 1 },
      { x: 6, y: 1 }
    ];

    let spawnIdx = 0;

    // If real connected players exist, spawn their snail hero tokens
    if (connected.length > 0) {
      connected.forEach(([pId, snail]) => {
        const pos = spawnPositions[spawnIdx % spawnPositions.length];
        this.createHeroUnit(pId, snail.playerName || 'Spieler', snail.colorKey, pos.x, pos.y);
        spawnIdx++;
      });
    }

    // Always ensure at least 3 hero units on the board (fill with NPC Witchlight snails)
    const defaultSnails = ['rosa', 'blau', 'rot'];
    while (this.players.length < 3) {
      const pos = spawnPositions[spawnIdx % spawnPositions.length];
      const defaultKey = defaultSnails[this.players.length % defaultSnails.length];
      const snailInfo = Object.values(OFFICIAL_SNAILS).find(s => s.key === defaultKey) || OFFICIAL_SNAILS[1];
      this.createHeroUnit(`hero_npc_${spawnIdx}`, snailInfo.name, defaultKey, pos.x, pos.y, false);
      spawnIdx++;
    }
  }

  createHeroUnit(id, name, colorKey, gx, gy, isHuman = true) {
    const snailMeta = Object.values(OFFICIAL_SNAILS).find(s => s.key === colorKey) || OFFICIAL_SNAILS[1];
    const colorHex = snailMeta.hex;

    // Assign Role based on snail characteristics
    let role = HERO_ROLES.GUARDIAN;
    if (colorKey === 'rot' || colorKey === 'blau') role = HERO_ROLES.BRAWLER;
    else if (colorKey === 'gruen' || colorKey === 'orange') role = HERO_ROLES.RANGER;
    else if (colorKey === 'violett' || colorKey === 'gelb') role = HERO_ROLES.MAGE;

    const uGroup = new THREE.Group();
    const worldPos = this.gridToWorld(gx, gy, 0.2);
    uGroup.position.copy(worldPos);

    // Glowing hero base ring
    const ringGeom = new THREE.RingGeometry(0.38, 0.48, 24);
    const ringMat = new THREE.MeshBasicMaterial({ color: colorHex, side: THREE.DoubleSide });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.position.z = 0.02;
    uGroup.add(ringMesh);

    // 3D Snail Shell (Stylized into the breach mech/snail)
    const shellGeom = new THREE.SphereGeometry(0.35, 16, 16);
    shellGeom.scale(1, 1.2, 0.9);
    const shellMat = new THREE.MeshStandardMaterial({
      color: colorHex,
      roughness: 0.3,
      metalness: 0.2
    });
    const shellMesh = new THREE.Mesh(shellGeom, shellMat);
    shellMesh.position.set(0, 0.05, 0.4);
    shellMesh.rotation.x = Math.PI / 6;
    uGroup.add(shellMesh);

    // Snail Head & Antennae
    const headGeom = new THREE.SphereGeometry(0.2, 12, 12);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.5 });
    const headMesh = new THREE.Mesh(headGeom, headMat);
    headMesh.position.set(0, 0.38, 0.3);
    uGroup.add(headMesh);

    // Antennae
    [-0.08, 0.08].forEach(xOff => {
      const antGeom = new THREE.CylinderGeometry(0.015, 0.015, 0.2, 6);
      const antMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
      const antMesh = new THREE.Mesh(antGeom, antMat);
      antMesh.position.set(xOff, 0.46, 0.45);
      antMesh.rotation.x = Math.PI / 4;
      uGroup.add(antMesh);
    });

    // Floating Name & HP Bar
    const hpSprite = this.createTextSprite(`❤️ ${role.maxHp}/${role.maxHp} | ${name}`, '#38bdf8', 0.24);
    hpSprite.position.set(0, 0, 1.15);
    uGroup.add(hpSprite);

    this.group.add(uGroup);

    const unit = {
      id,
      name,
      colorKey,
      colorHex,
      isHuman,
      isPlayerUnit: true,
      role,
      hp: role.maxHp,
      maxHp: role.maxHp,
      shield: false,
      gridX: gx,
      gridY: gy,
      hasMoved: false,
      hasActed: false,
      group: uGroup,
      hpSprite
    };

    this.grid[gx][gy].unit = unit;
    this.players.push(unit);
    return unit;
  }

  spawnEnemiesForRound(round) {
    const enemyTemplates = [
      { type: ENEMY_TYPES.HORNKAEFER, x: 2, y: 6 },
      { type: ENEMY_TYPES.SAEURESPUCKER, x: 5, y: 7 },
      { type: ENEMY_TYPES.SCHLAEGER, x: 4, y: 6 }
    ];

    if (round >= 2) {
      enemyTemplates.push({ type: ENEMY_TYPES.HORNKAEFER, x: 1, y: 7 });
    }
    if (round >= 3) {
      enemyTemplates.push({ type: ENEMY_TYPES.SAEURESPUCKER, x: 6, y: 6 });
    }

    enemyTemplates.forEach((cfg, idx) => {
      // Find empty spot if occupied
      let gx = cfg.x;
      let gy = cfg.y;
      if (this.grid[gx][gy].unit || this.grid[gx][gy].building) {
        gx = (gx + 1) % BOARD_SIZE;
      }
      this.createEnemyUnit(`enemy_${round}_${idx}`, cfg.type, gx, gy);
    });
  }

  createEnemyUnit(id, enemyType, gx, gy) {
    const eGroup = new THREE.Group();
    const worldPos = this.gridToWorld(gx, gy, 0.2);
    eGroup.position.copy(worldPos);

    // Glowing red danger base ring
    const ringGeom = new THREE.RingGeometry(0.38, 0.46, 24);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.position.z = 0.02;
    eGroup.add(ringMesh);

    // Spiky insectoid body (Into the Breach Vek aesthetic)
    const bodyGeom = new THREE.DodecahedronGeometry(0.36, 1);
    bodyGeom.scale(1.2, 1, 0.8);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: enemyType.color,
      roughness: 0.3,
      metalness: 0.5
    });
    const bodyMesh = new THREE.Mesh(bodyGeom, bodyMat);
    bodyMesh.position.set(0, 0, 0.35);
    eGroup.add(bodyMesh);

    // Menacing horns / spikes
    [-0.18, 0.18].forEach(xOff => {
      const hornGeom = new THREE.ConeGeometry(0.08, 0.35, 6);
      const hornMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.2 });
      const horn = new THREE.Mesh(hornGeom, hornMat);
      horn.rotation.x = -Math.PI / 3;
      horn.position.set(xOff, -0.3, 0.35);
      eGroup.add(horn);
    });

    // Floating HP & Type Badge
    const hpSprite = this.createTextSprite(`💀 ${enemyType.maxHp}/${enemyType.maxHp} | ${enemyType.name}`, '#f87171', 0.22);
    hpSprite.position.set(0, 0, 1.15);
    eGroup.add(hpSprite);

    this.group.add(eGroup);

    const enemy = {
      id,
      name: enemyType.name,
      typeInfo: enemyType,
      isPlayerUnit: false,
      hp: enemyType.maxHp,
      maxHp: enemyType.maxHp,
      gridX: gx,
      gridY: gy,
      intent: null, // Telegraphed intent
      group: eGroup,
      hpSprite
    };

    this.grid[gx][gy].unit = enemy;
    this.enemies.push(enemy);
    return enemy;
  }

  // =========================================================================
  // TELEGRAPHED INTENTS (INTO THE BREACH CORE MECHANIC)
  // =========================================================================
  planEnemyIntents() {
    this.clearTelegraphVisuals();

    this.enemies.forEach(enemy => {
      if (enemy.hp <= 0) return;

      const typeId = enemy.typeInfo.id;
      let intent = null;

      if (typeId === 'hornkaefer') {
        // CHARGE ATTACK: Charges straight down (towards players/buildings on lower rows)
        // Checks first obstacle, unit or building in its column
        const dirX = 0;
        const dirY = -1; // Heading south
        let hitX = enemy.gridX;
        let hitY = enemy.gridY - 1;

        while (hitY >= 0) {
          const cell = this.grid[hitX][hitY];
          if (cell.unit || cell.building || cell.type === TILE_TYPES.OBSTACLE) {
            break;
          }
          hitY--;
        }

        // Clamp inside bounds
        if (hitY < 0) hitY = 0;

        intent = {
          type: 'CHARGE',
          originX: enemy.gridX,
          originY: enemy.gridY,
          targetX: hitX,
          targetY: hitY,
          dirX,
          dirY,
          damage: 2,
          push: 1,
          icon: '💥',
          desc: 'Rammbock-Sturm: 2 Schaden + 1 Feld Stoß'
        };

      } else if (typeId === 'saeurespucker') {
        // LOBBED ARTILLERY: Targets a building or player 2-3 tiles away
        let bestTarget = null;
        let bestDist = 999;

        // Priority 1: Carnival Buildings
        this.buildings.forEach(b => {
          if (b.hp > 0) {
            const dist = Math.abs(b.gridX - enemy.gridX) + Math.abs(b.gridY - enemy.gridY);
            if (dist <= 4 && dist < bestDist) {
              bestDist = dist;
              bestTarget = { x: b.gridX, y: b.gridY, targetType: 'BUILDING' };
            }
          }
        });

        // Priority 2: Players
        if (!bestTarget) {
          this.players.forEach(p => {
            if (p.hp > 0) {
              const dist = Math.abs(p.gridX - enemy.gridX) + Math.abs(p.gridY - enemy.gridY);
              if (dist <= 4 && dist < bestDist) {
                bestDist = dist;
                bestTarget = { x: p.gridX, y: p.gridY, targetType: 'PLAYER' };
              }
            }
          });
        }

        const tX = bestTarget ? bestTarget.x : enemy.gridX;
        const tY = bestTarget ? bestTarget.y : Math.max(0, enemy.gridY - 2);

        intent = {
          type: 'ACID_LOB',
          originX: enemy.gridX,
          originY: enemy.gridY,
          targetX: tX,
          targetY: tY,
          damage: 2,
          push: 0,
          icon: '🧪',
          desc: 'Säure-Bombe: 2 Schaden'
        };

      } else {
        // MELEE SLAM: Hits adjacent tile towards closest player or building
        const dirs = [
          { dx: 0, dy: -1 },
          { dx: -1, dy: 0 },
          { dx: 1, dy: 0 },
          { dx: 0, dy: 1 }
        ];

        let targetDir = dirs[0];
        for (const d of dirs) {
          const nx = enemy.gridX + d.dx;
          const ny = enemy.gridY + d.dy;
          if (this.inBounds(nx, ny)) {
            const cell = this.grid[nx][ny];
            if (cell.unit?.isPlayerUnit || cell.building) {
              targetDir = d;
              break;
            }
          }
        }

        intent = {
          type: 'MELEE_SLAM',
          originX: enemy.gridX,
          originY: enemy.gridY,
          targetX: enemy.gridX + targetDir.dx,
          targetY: enemy.gridY + targetDir.dy,
          dirX: targetDir.dx,
          dirY: targetDir.dy,
          damage: 2,
          push: 1,
          icon: '👺',
          desc: 'Keulenhieb: 2 Schaden + 1 Feld Stoß'
        };
      }

      enemy.intent = intent;
    });

    this.renderTelegraphVisuals();
  }

  clearTelegraphVisuals() {
    while (this.telegraphGroup.children.length > 0) {
      this.telegraphGroup.remove(this.telegraphGroup.children[0]);
    }
  }

  renderTelegraphVisuals() {
    this.clearTelegraphVisuals();

    this.enemies.forEach(enemy => {
      if (!enemy.intent || enemy.hp <= 0) return;
      const { targetX, targetY, dirX, dirY, icon, damage, type } = enemy.intent;

      const originPos = this.gridToWorld(enemy.gridX, enemy.gridY, 0.4);
      const targetPos = this.gridToWorld(targetX, targetY, 0.4);

      // 1. Glowing Target Reticle on Destination Tile
      const reticleGeom = new THREE.RingGeometry(0.35, 0.48, 16);
      const reticleMat = new THREE.MeshBasicMaterial({
        color: 0xef4444,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      const reticle = new THREE.Mesh(reticleGeom, reticleMat);
      reticle.position.set(targetPos.x, targetPos.y, 0.22);
      this.telegraphGroup.add(reticle);

      // Floating Intent Badge above target
      const badge = this.createTextSprite(`⚠️ ${icon} ${damage} DMG`, '#ef4444', 0.22);
      badge.position.set(targetPos.x, targetPos.y, 1.45);
      this.telegraphGroup.add(badge);

      // 2. Animated Laser/Attack Line from Attacker to Target
      const points = [
        new THREE.Vector3(originPos.x, originPos.y, 0.4),
        new THREE.Vector3(targetPos.x, targetPos.y, 0.4)
      ];
      const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineDashedMaterial({
        color: 0xef4444,
        dashSize: 0.3,
        gapSize: 0.15,
        linewidth: 3
      });
      const line = new THREE.Line(lineGeom, lineMat);
      line.computeLineDistances();
      this.telegraphGroup.add(line);

      // 3. Directional Push Arrow on target if attack pushes
      if (enemy.intent.push && (dirX !== 0 || dirY !== 0)) {
        const arrowDir = new THREE.Vector3(dirX, dirY, 0).normalize();
        const arrowHelper = new THREE.ArrowHelper(
          arrowDir,
          new THREE.Vector3(targetPos.x, targetPos.y, 0.3),
          0.8,
          0xff0000,
          0.3,
          0.2
        );
        this.telegraphGroup.add(arrowHelper);
      }
    });
  }

  // =========================================================================
  // PLAYER ACTIONS & PUSH DISPLACEMENT PHYSICS
  // =========================================================================
  handlePlayerMove(playerId, destX, destY) {
    const hero = this.players.find(p => p.id === playerId);
    if (!hero || hero.hp <= 0 || hero.hasMoved) return { ok: false, msg: 'Einheit kann sich nicht mehr bewegen!' };

    if (!this.inBounds(destX, destY)) return { ok: false, msg: 'Außerhalb des Spielfelds!' };

    const targetCell = this.grid[destX][destY];
    if (targetCell.unit || targetCell.building || targetCell.type === TILE_TYPES.OBSTACLE) {
      return { ok: false, msg: 'Feld ist blockiert!' };
    }

    const dist = Math.abs(hero.gridX - destX) + Math.abs(hero.gridY - destY);
    if (dist > hero.role.move) {
      return { ok: false, msg: `Reichweite überschritten (Max: ${hero.role.move} Felder)!` };
    }

    // Free old cell
    this.grid[hero.gridX][hero.gridY].unit = null;

    // Move to new cell
    hero.gridX = destX;
    hero.gridY = destY;
    targetCell.unit = hero;
    hero.hasMoved = true;

    // Smooth visual movement
    const targetWorld = this.gridToWorld(destX, destY, 0.2);
    hero.group.position.copy(targetWorld);

    // Hazard check: Water
    if (targetCell.type === TILE_TYPES.WATER) {
      this.showFloatingText(destX, destY, '🌊 VERSUNKEN!', '#38bdf8');
      hero.hp = 0;
      this.grid[destX][destY].unit = null;
      hero.group.visible = false;
    }

    this.syncStateWithControllers();
    this.updateTVHud();
    return { ok: true };
  }

  handlePlayerAction(playerId, actionType, targetX, targetY) {
    const hero = this.players.find(p => p.id === playerId);
    if (!hero || hero.hp <= 0 || hero.hasActed) return { ok: false, msg: 'Bereits gehandelt in dieser Runde!' };

    if (!this.inBounds(targetX, targetY)) return { ok: false, msg: 'Ungültiges Ziel!' };

    const targetCell = this.grid[targetX][targetY];

    // ACTION 1: STANDARD MELEE PUSH PUNCH (Stoß-Schlag)
    if (actionType === 'MELEE_PUSH') {
      const dist = Math.abs(hero.gridX - targetX) + Math.abs(hero.gridY - targetY);
      if (dist !== 1) return { ok: false, msg: 'Ziel muss direkt angrenzend sein!' };

      if (!targetCell.unit && !targetCell.building) {
        return { ok: false, msg: 'Kein Ziel auf diesem Feld!' };
      }

      const dirX = targetX - hero.gridX;
      const dirY = targetY - hero.gridY;

      // Apply 1 Damage + 1 Tile Push!
      if (targetCell.unit) {
        this.applyDamage(targetCell.unit, 1, 'Stoß-Schlag');
        this.executePush(targetCell.unit, dirX, dirY);
      } else if (targetCell.building) {
        this.applyDamage(targetCell.building, 1, 'Gebäude-Kollision');
      }

      hero.hasActed = true;
      this.recalculateEnemyIntentsAfterDisplacement();
      this.syncStateWithControllers();
      this.updateTVHud();
      return { ok: true, msg: 'Stoß ausgeführt!' };
    }

    // ACTION 2: ROLE SPECIAL ABILITY
    if (actionType === 'SPECIAL_ABILITY') {
      const roleId = hero.role.id;

      if (roleId === 'GUARDIAN') {
        // Feen-Schild: Gives shield to self, adjacent ally, or adjacent building
        const dist = Math.abs(hero.gridX - targetX) + Math.abs(hero.gridY - targetY);
        if (dist > 1) return { ok: false, msg: 'Ziel muss in Reichweite 1 sein!' };

        if (targetCell.unit) {
          targetCell.unit.shield = true;
          this.showFloatingText(targetX, targetY, '🛡️ SCHILD AKTIV!', '#38bdf8');
        } else if (targetCell.building) {
          targetCell.building.shield = true;
          this.showFloatingText(targetX, targetY, '🛡️ ZELT GESCHÜTZT!', '#38bdf8');
        } else {
          return { ok: false, msg: 'Keine Einheit oder Zelt zum Schützen!' };
        }
        hero.hasActed = true;

      } else if (roleId === 'BRAWLER') {
        // Erdbeben-Stoß: Pushes all adjacent enemies 1 tile back & deals 1 damage
        const dirs = [
          { dx: 0, dy: 1 },
          { dx: 0, dy: -1 },
          { dx: 1, dy: 0 },
          { dx: -1, dy: 0 }
        ];
        dirs.forEach(d => {
          const nx = hero.gridX + d.dx;
          const ny = hero.gridY + d.dy;
          if (this.inBounds(nx, ny)) {
            const adjCell = this.grid[nx][ny];
            if (adjCell.unit && !adjCell.unit.isPlayerUnit) {
              this.applyDamage(adjCell.unit, 1, 'Erdbeben');
              this.executePush(adjCell.unit, d.dx, d.dy);
            }
          }
        });
        this.showFloatingText(hero.gridX, hero.gridY, '💥 ERDBEBEN-STOSS!', '#ef4444');
        hero.hasActed = true;

      } else if (roleId === 'RANGER') {
        // Schleim-Geschoss: Ranged line shot that damages & pushes target 1 tile away
        const dx = targetX - hero.gridX;
        const dy = targetY - hero.gridY;
        if (dx !== 0 && dy !== 0) return { ok: false, msg: 'Schuss nur in gerader Linie möglich!' };

        const stepX = Math.sign(dx);
        const stepY = Math.sign(dy);

        let currX = hero.gridX + stepX;
        let currY = hero.gridY + stepY;
        let hitTarget = null;

        while (this.inBounds(currX, currY)) {
          const cell = this.grid[currX][currY];
          if (cell.unit || cell.building || cell.type === TILE_TYPES.OBSTACLE) {
            hitTarget = cell;
            break;
          }
          currX += stepX;
          currY += stepY;
        }

        if (!hitTarget || !hitTarget.unit) {
          return { ok: false, msg: 'Kein Ziel in Schusslinie getroffen!' };
        }

        this.applyDamage(hitTarget.unit, 1, 'Schleim-Geschoss');
        this.executePush(hitTarget.unit, stepX, stepY);
        this.showFloatingText(hitTarget.unit.gridX, hitTarget.unit.gridY, '🎯 SCHUSS + STOSS!', '#22c55e');
        hero.hasActed = true;

      } else if (roleId === 'MAGE') {
        // Gravitations-Puls: Pulls target unit 1 tile towards hero
        if (!targetCell.unit) return { ok: false, msg: 'Ziel muss eine Einheit sein!' };

        const dirX = Math.sign(hero.gridX - targetX);
        const dirY = Math.sign(hero.gridY - targetY);

        this.executePush(targetCell.unit, dirX, dirY);
        this.showFloatingText(targetX, targetY, '🔮 GRAVITATIONS-ZUG!', '#a855f7');
        hero.hasActed = true;
      }

      this.recalculateEnemyIntentsAfterDisplacement();
      this.syncStateWithControllers();
      this.updateTVHud();
      return { ok: true, msg: 'Spezial-Aktion ausgeführt!' };
    }

    return { ok: false, msg: 'Unbekannte Aktion!' };
  }

  // CORE INTO THE BREACH DISPLACEMENT LOGIC
  executePush(unit, dirX, dirY) {
    if (!unit || unit.hp <= 0) return;

    const fromX = unit.gridX;
    const fromY = unit.gridY;
    const destX = fromX + dirX;
    const destY = fromY + dirY;

    // Check 1: Pushed against the border wall
    if (!this.inBounds(destX, destY)) {
      this.showFloatingText(fromX, fromY, '💥 WAND-BUMP! (-1 HP)', '#f59e0b');
      this.applyDamage(unit, 1, 'Wand-Kollision');
      return;
    }

    const destCell = this.grid[destX][destY];

    // Check 2: Blocked by another unit, building or obstacle (Collision Bump!)
    if (destCell.unit || destCell.building || destCell.type === TILE_TYPES.OBSTACLE) {
      this.showFloatingText(fromX, fromY, '💥 BUMP! (-1 HP)', '#f59e0b');
      this.applyDamage(unit, 1, 'Kollision');

      if (destCell.unit) {
        this.showFloatingText(destX, destY, '💥 BUMP! (-1 HP)', '#f59e0b');
        this.applyDamage(destCell.unit, 1, 'Kollision');
      } else if (destCell.building) {
        this.applyDamage(destCell.building, 1, 'Kollision');
      }
      return;
    }

    // Check 3: Pushed into Water Hazard (Insta-drown!)
    if (destCell.type === TILE_TYPES.WATER) {
      this.grid[fromX][fromY].unit = null;
      unit.gridX = destX;
      unit.gridY = destY;
      unit.hp = 0;
      unit.group.position.copy(this.gridToWorld(destX, destY, -0.2));
      unit.group.visible = false;
      this.showFloatingText(destX, destY, '🌊 VERSUNKEN!', '#38bdf8');
      return;
    }

    // Path is clear: Displace unit to destination
    this.grid[fromX][fromY].unit = null;
    destCell.unit = unit;
    unit.gridX = destX;
    unit.gridY = destY;

    // Smooth 3D animation
    unit.group.position.copy(this.gridToWorld(destX, destY, 0.2));
    this.showFloatingText(destX, destY, '💨 WEGGESTOSSEN!', '#e2e8f0');
  }

  applyDamage(target, amount, reason = '') {
    if (!target) return;

    // Check shield
    if (target.shield) {
      target.shield = false;
      this.showFloatingText(target.gridX, target.gridY, '🛡️ SCHILD ABSORBIERT!', '#38bdf8');
      return;
    }

    target.hp = Math.max(0, target.hp - amount);

    // If building was hit, carnival power drops!
    if (target.maxHp && target.group && !target.isPlayerUnit && target.id.startsWith('b_')) {
      this.carnivalPower = Math.max(0, this.carnivalPower - amount);
      this.updateBuildingUI(target);
      this.showFloatingText(target.gridX, target.gridY, `🎪 -${amount} ENERGIE!`, '#ef4444');
      if (this.carnivalPower <= 0) {
        this.triggerDefeat();
      }
      return;
    }

    // Update HP Sprite
    if (target.hpSprite) {
      const color = target.isPlayerUnit ? '#38bdf8' : '#f87171';
      target.group.remove(target.hpSprite);
      target.hpSprite = this.createTextSprite(
        `${target.isPlayerUnit ? '❤️' : '💀'} ${target.hp}/${target.maxHp} | ${target.name}`,
        color,
        0.22
      );
      target.hpSprite.position.set(0, 0, 1.15);
      target.group.add(target.hpSprite);
    }

    // Defeated unit
    if (target.hp <= 0) {
      this.grid[target.gridX][target.gridY].unit = null;
      target.group.visible = false;
      this.showFloatingText(target.gridX, target.gridY, '💀 BESIEGT!', '#ef4444');

      // Check if all enemies defeated
      const activeEnemies = this.enemies.filter(e => e.hp > 0);
      if (activeEnemies.length === 0) {
        this.triggerVictory();
      }
    }
  }

  recalculateEnemyIntentsAfterDisplacement() {
    // If an enemy was pushed, its attack moves or aims somewhere else!
    this.enemies.forEach(enemy => {
      if (!enemy.intent || enemy.hp <= 0) return;

      if (enemy.intent.type === 'CHARGE') {
        // Charging direction stays south, but lane shifted!
        const hitX = enemy.gridX;
        let hitY = enemy.gridY - 1;
        while (hitY >= 0) {
          const cell = this.grid[hitX][hitY];
          if (cell.unit || cell.building || cell.type === TILE_TYPES.OBSTACLE) break;
          hitY--;
        }
        if (hitY < 0) hitY = 0;
        enemy.intent.originX = enemy.gridX;
        enemy.intent.originY = enemy.gridY;
        enemy.intent.targetX = hitX;
        enemy.intent.targetY = hitY;

      } else if (enemy.intent.type === 'MELEE_SLAM') {
        // Melee hit origin moves with the enemy!
        enemy.intent.originX = enemy.gridX;
        enemy.intent.originY = enemy.gridY;
        enemy.intent.targetX = enemy.gridX + enemy.intent.dirX;
        enemy.intent.targetY = enemy.gridY + enemy.intent.dirY;
      }
    });

    this.renderTelegraphVisuals();
  }

  // =========================================================================
  // ENEMY EXECUTION PHASE
  // =========================================================================
  executeEnemyPhase() {
    this.phase = 'ENEMY_EXECUTION';
    this.updateTVHud();

    // Execute each enemy's telegraphed attack
    this.enemies.forEach(enemy => {
      if (enemy.hp <= 0 || !enemy.intent) return;

      const { targetX, targetY, damage, push, dirX, dirY } = enemy.intent;

      if (this.inBounds(targetX, targetY)) {
        const cell = this.grid[targetX][targetY];

        // Did it hit a unit?
        if (cell.unit) {
          this.applyDamage(cell.unit, damage, enemy.name);
          if (push && (dirX !== 0 || dirY !== 0)) {
            this.executePush(cell.unit, dirX, dirY);
          }
        }
        // Did it hit a carnival building?
        else if (cell.building) {
          this.applyDamage(cell.building, damage, enemy.name);
        }
        // Missed / empty air!
        else {
          this.showFloatingText(targetX, targetY, '💨 INS LEERE!', '#94a3b8');
        }
      }
    });

    // Advance to next round or victory
    setTimeout(() => {
      this.currentRound++;
      if (this.currentRound > this.maxRounds) {
        this.triggerVictory();
        return;
      }

      // Reset Player turn flags
      this.players.forEach(p => {
        p.hasMoved = false;
        p.hasActed = false;
      });

      // Spawn reinforcements if needed
      this.spawnEnemiesForRound(this.currentRound);

      // Re-plan enemy intents for the new round
      this.planEnemyIntents();

      this.phase = 'PLAYER_PHASE';
      this.syncStateWithControllers();
      this.updateTVHud();
    }, 1800);
  }

  triggerVictory() {
    this.phase = 'VICTORY';
    this.updateTVHud();
    this.syncStateWithControllers();
  }

  triggerDefeat() {
    this.phase = 'DEFEAT';
    this.updateTVHud();
    this.syncStateWithControllers();
  }

  showFloatingText(gx, gy, text, color = '#ffffff') {
    const worldPos = this.gridToWorld(gx, gy, 0.8);
    const sprite = this.createTextSprite(text, color, 0.28);
    sprite.position.copy(worldPos);
    this.group.add(sprite);

    const startTime = performance.now();
    this.floatingTexts.push({ sprite, startTime, duration: 1400 });
  }

  updateFloatingTexts(time) {
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      const elapsed = time - ft.startTime;
      if (elapsed > ft.duration) {
        this.group.remove(ft.sprite);
        this.floatingTexts.splice(i, 1);
      } else {
        ft.sprite.position.z += 0.012; // Float upwards
      }
    }
  }

  // =========================================================================
  // NETWORKING & HUD SYNC
  // =========================================================================
  getSerializedState() {
    return {
      round: this.currentRound,
      maxRounds: this.maxRounds,
      phase: this.phase,
      carnivalPower: this.carnivalPower,
      maxCarnivalPower: this.maxCarnivalPower,
      players: this.players.map(p => ({
        id: p.id,
        name: p.name,
        colorKey: p.colorKey,
        colorHex: p.colorHex,
        role: p.role,
        hp: p.hp,
        maxHp: p.maxHp,
        x: p.gridX,
        y: p.gridY,
        hasMoved: p.hasMoved,
        hasActed: p.hasActed,
        shield: p.shield
      })),
      enemies: this.enemies.filter(e => e.hp > 0).map(e => ({
        id: e.id,
        name: e.name,
        icon: e.typeInfo.icon,
        hp: e.hp,
        maxHp: e.maxHp,
        x: e.gridX,
        y: e.gridY,
        intent: e.intent
      })),
      buildings: this.buildings.map(b => ({
        id: b.id,
        name: b.name,
        icon: b.icon,
        hp: b.hp,
        maxHp: b.maxHp,
        x: b.gridX,
        y: b.gridY
      }))
    };
  }

  syncStateWithControllers() {
    const state = this.getSerializedState();
    const msg = {
      type: 'TACTICAL_STATE_UPDATE',
      payload: state
    };

    // 1. PeerJS WebRTC
    this.gameEngine.peerConnections.forEach(conn => {
      if (conn && conn.open) {
        try { conn.send(msg); } catch (e) {}
      }
    });

    // 2. Bun WebSocket
    if (this.gameEngine.ws && this.gameEngine.ws.readyState === WebSocket.OPEN) {
      this.gameEngine.ws.send(JSON.stringify({
        type: 'HOST_SYNC_TACTICAL_STATE',
        payload: state
      }));
    }
  }

  updateTVHud() {
    const hud = document.getElementById('tactical-hud');
    if (!hud) return;

    const roundEl = document.getElementById('tact-round-display');
    const powerEl = document.getElementById('tact-power-display');
    const phaseEl = document.getElementById('tact-phase-display');

    if (roundEl) roundEl.innerText = `Runde ${this.currentRound} / ${this.maxRounds}`;
    if (powerEl) {
      let pips = '';
      for (let i = 0; i < this.maxCarnivalPower; i++) {
        pips += i < this.carnivalPower ? '⚡' : '🖤';
      }
      powerEl.innerText = `${pips} (${this.carnivalPower}/${this.maxCarnivalPower})`;
    }
    if (phaseEl) {
      if (this.phase === 'PLAYER_PHASE') phaseEl.innerText = '🛡️ SPIELER-PHASE: Führe Aktionen am Smartphone aus!';
      else if (this.phase === 'ENEMY_EXECUTION') phaseEl.innerText = '⚠️ GEGNER GREIFEN AN!';
      else if (this.phase === 'VICTORY') phaseEl.innerText = '🏆 SIEG! Der Jahrmarkt ist gerettet!';
      else if (this.phase === 'DEFEAT') phaseEl.innerText = '💀 NIEDERLAGE! Der Jahrmarkt wurde überrannt!';
    }

    const execBtn = document.getElementById('btn-tact-exec-enemies');
    if (execBtn) {
      if (this.phase === 'VICTORY' || this.phase === 'DEFEAT') {
        execBtn.innerText = '🔄 KAMPF NEU STARTEN';
      } else {
        execBtn.innerText = '⏭️ RUNDE BEENDEN & GEGNER AUSFÜHREN';
      }
    }
  }

  update(delta, time) {
    if (!this.group.visible) return;

    // Animate telegraph arrows pulse
    if (this.telegraphGroup) {
      const pulse = 0.8 + 0.2 * Math.sin(time * 0.006);
      this.telegraphGroup.children.forEach(child => {
        if (child.material && child.material.opacity !== undefined) {
          child.material.opacity = pulse;
        }
      });
    }

    this.updateFloatingTexts(time);
  }
}
