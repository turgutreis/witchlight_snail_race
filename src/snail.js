import * as THREE from 'three';

export const OFFICIAL_SNAILS = {
  1: { num: 1, name: 'Shellymuh', key: 'rosa', hex: 0xf472b6, css: '#f472b6', perk: '🛡️ Kuschel-Panzer (1 Schild-Start)' },
  2: { num: 2, name: 'Flinkfuß', key: 'blau', hex: 0x3b82f6, css: '#3b82f6', perk: '⚡ Fast-Runner (Gras-Resistenz)' },
  3: { num: 3, name: 'Hoher Pfad', key: 'violett', hex: 0xa855f7, css: '#a855f7', perk: '🔮 Teleport-Spore' },
  4: { num: 4, name: 'Schnellblatt', key: 'gruen', hex: 0x22c55e, css: '#22c55e', perk: '🥬 Salat-Gier (+2 auf W20)' },
  5: { num: 5, name: 'Blumenblitz', key: 'gelb', hex: 0xeab308, css: '#eab308', perk: '🎆 Blüten-Nitro (Nat 18-20)' },
  6: { num: 6, name: 'Flitzi', key: 'orange', hex: 0xf97316, css: '#f97316', perk: '🎲 Zappel-Reroll (Würfel 1-3)' },
  7: { num: 7, name: 'Halsbrecher', key: 'rot', hex: 0xef4444, css: '#ef4444', perk: '💥 Rammbock bei Nat 20' },
  8: { num: 8, name: 'Majestät', key: 'schwarz', hex: 0x334155, css: '#334155', perk: '👑 Königsbefehl' }
};

const COLOR_MAP = {
  rosa:    { hex: 0xf472b6, name: '1. Shellymuh (Rosa)', css: '#f472b6' },
  blau:    { hex: 0x3b82f6, name: '2. Flinkfuß (Blau)', css: '#3b82f6' },
  violett: { hex: 0xa855f7, name: '3. Hoher Pfad (Violett)', css: '#a855f7' },
  gruen:   { hex: 0x22c55e, name: '4. Schnellblatt (Grün)', css: '#22c55e' },
  gelb:    { hex: 0xeab308, name: '5. Blumenblitz (Gelb)', css: '#eab308' },
  orange:  { hex: 0xf97316, name: '6. Flitzi (Orange)', css: '#f97316' },
  rot:     { hex: 0xef4444, name: '7. Halsbrecher (Rot)', css: '#ef4444' },
  schwarz: { hex: 0x334155, name: '8. Majestät (Schwarz)', css: '#334155' }
};

export class Snail {
  constructor(id, colorKey, isPlayer, laneIndex, trackManager, dndModifier = 0) {
    this.id = id;
    this.colorKey = colorKey;
    this.colorData = COLOR_MAP[colorKey] || COLOR_MAP.rot;
    this.isPlayer = isPlayer;
    this.laneIndex = laneIndex;
    this.trackManager = trackManager;
    this.dndModifier = dndModifier; // Player character D&D stat modifier (+0 to +6)

    this.progress = 0; // t from 0 to 1
    this.speed = 0;
    this.stuckProgress = 0;

    // 8 distinct lanes across the sand track width (laneIndex 0..7)
    this.baseLaneOffset = (laneIndex - 3.5) * 0.22;
    this.laneOffset = this.baseLaneOffset;

    // Stun state
    this.isStunned = false;
    this.stunEndTime = 0;
    this.stunCount = 0;

    // Rhythm input timing
    this.lastKeyPressTime = 0;
    this.lastKeyPressed = null; // 'A' or 'D'

    // AI movement properties
    this.aiBaseSpeed = 0.00035 + Math.random() * 0.00015;
    this.aiNoiseOffset = Math.random() * 100;

    // Visual Mesh Group
    this.group = new THREE.Group();
    this.createGraphics();
    
    // Add snail group to scene
    this.trackManager.scene.add(this.group);

    // Slime Trail Particles
    this.trailPoints = [];
    this.maxTrailPoints = 35;
    this.createTrail();

    // Snail Specific Starting Perks
    if (this.colorKey === 'rosa') {
      this.activateShield(); // Shellymuh Kuschel-Panzer
    }

    // Initial positioning
    this.updatePosition(0);
  }

  createGraphics() {
    // Snail Root Group
    this.visualContainer = new THREE.Group();
    this.group.add(this.visualContainer);

    // 1. Snail Body (grey/soft cream oval)
    const bodyGeom = new THREE.CapsuleGeometry(0.24, 0.55, 8, 16);
    bodyGeom.rotateZ(Math.PI / 2);
    const bodyMat = new THREE.MeshBasicMaterial({ color: 0xf1f5f9 });
    const bodyMesh = new THREE.Mesh(bodyGeom, bodyMat);
    bodyMesh.position.set(-0.05, 0, 0);
    this.visualContainer.add(bodyMesh);

    // 2. Snail Shell (Colored Spiral Circle)
    const shellRadius = 0.42;
    const shellGeom = new THREE.CircleGeometry(shellRadius, 32);
    const shellMat = new THREE.MeshBasicMaterial({
      color: this.colorData.hex,
      transparent: true,
      opacity: 0.95
    });
    this.shellMesh = new THREE.Mesh(shellGeom, shellMat);
    this.shellMesh.position.set(-0.12, 0.1, 0.02);
    this.visualContainer.add(this.shellMesh);

    // Shell Inner Spiral Accent
    const innerShellGeom = new THREE.CircleGeometry(shellRadius * 0.55, 16);
    const innerShellMat = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.4, transparent: true });
    const innerShellMesh = new THREE.Mesh(innerShellGeom, innerShellMat);
    innerShellMesh.position.set(-0.12, 0.1, 0.03);
    this.visualContainer.add(innerShellMesh);

    // Shell Glow / Outline Ring
    const outlineGeom = new THREE.RingGeometry(shellRadius, shellRadius + 0.06, 32);
    const outlineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.8, transparent: true });
    const outlineMesh = new THREE.Mesh(outlineGeom, outlineMat);
    outlineMesh.position.set(-0.12, 0.1, 0.01);
    this.visualContainer.add(outlineMesh);

    // 3. Head Tentacles / Eyes
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    const eyeGeom = new THREE.CircleGeometry(0.05, 12);

    // Left Eye
    const eyeLeft = new THREE.Mesh(eyeGeom, eyeMat);
    eyeLeft.position.set(0.3, 0.25, 0.05);
    this.visualContainer.add(eyeLeft);

    // Right Eye
    const eyeRight = new THREE.Mesh(eyeGeom, eyeMat);
    eyeRight.position.set(0.3, 0.1, 0.05);
    this.visualContainer.add(eyeRight);

    // If player snail, add glowing player indicator marker ("DU")
    const labelText = this.isPlayer ? '👑 DU' : `🤖 KI`;
    const labelColor = this.isPlayer ? '#fbbf24' : '#94a3b8';
    this.labelSprite = this.createTextSprite(labelText, labelColor);
    this.group.add(this.labelSprite);

    // PowerUp state
    this.hasShield = false;
    this.isTurboActive = false;
    this.turboEndTime = 0;

    // Shield Mesh Ring (cyan glow around shell)
    const shieldGeom = new THREE.RingGeometry(0.44, 0.52, 32);
    const shieldMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, opacity: 0.85, transparent: true });
    this.shieldMesh = new THREE.Mesh(shieldGeom, shieldMat);
    this.shieldMesh.position.set(-0.12, 0.1, 0.04);
    this.shieldMesh.visible = false;
    this.visualContainer.add(this.shieldMesh);

    // 4. Dizzy Stun Stars Group (hidden by default)
    this.stunGroup = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const starGeom = new THREE.CircleGeometry(0.09, 5);
      const starMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
      const star = new THREE.Mesh(starGeom, starMat);
      star.position.set(Math.cos(i * 2) * 0.35, 0.45 + Math.sin(i * 2) * 0.12, 0.1);
      this.stunGroup.add(star);
    }
    this.stunGroup.visible = false;
    this.visualContainer.add(this.stunGroup);

    // Elevate snail group slightly above track background
    this.group.position.z = 0.1 + (4 - this.laneIndex) * 0.01;
  }

  activateShield() {
    this.hasShield = true;
    if (this.shieldMesh) this.shieldMesh.visible = true;
  }

  activateTurbo(durationMs = 2500) {
    this.isTurboActive = true;
    this.turboEndTime = performance.now() + durationMs;
    this.squishAnimation();
  }

  createTextSprite(text, borderColor) {
    const canvas = document.createElement('canvas');
    canvas.width = 160;
    canvas.height = 56;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(4, 4, 152, 48, 10);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 80, 28);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(0.9, 0.32, 1);
    sprite.position.set(0, 0.75, 0.2);
    return sprite;
  }

  setColor(colorKey) {
    this.colorKey = colorKey;
    this.colorData = COLOR_MAP[colorKey] || COLOR_MAP.rot;
    this.shellMesh.material.color.setHex(this.colorData.hex);
    this.trailMesh.material.color.setHex(this.colorData.hex);
  }

  createTrail() {
    const trailGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(this.maxTrailPoints * 3);
    trailGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const trailMat = new THREE.PointsMaterial({
      color: this.colorData.hex,
      size: 0.12,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });

    this.trailMesh = new THREE.Points(trailGeom, trailMat);
    this.trackManager.scene.add(this.trailMesh);
  }

  updateTrail(pos) {
    this.trailPoints.unshift(pos.clone());
    if (this.trailPoints.length > this.maxTrailPoints) {
      this.trailPoints.pop();
    }

    const positions = this.trailMesh.geometry.attributes.position.array;
    for (let i = 0; i < this.maxTrailPoints; i++) {
      if (i < this.trailPoints.length) {
        positions[i * 3]     = this.trailPoints[i].x;
        positions[i * 3 + 1] = this.trailPoints[i].y;
        positions[i * 3 + 2] = 0.05;
      } else {
        positions[i * 3]     = pos.x;
        positions[i * 3 + 1] = pos.y;
        positions[i * 3 + 2] = 0.05;
      }
    }
    this.trailMesh.geometry.attributes.position.needsUpdate = true;
  }

  handleD20Roll(rollValue, dndModifier = 0, allSnails = []) {
    if (this.isStunned || this.progress >= 1) return;

    let effectiveRoll = rollValue;

    // Apply Snail Specific Perks (Tuned for D&D Level 1):
    // 2. Flinkfuß (Blau): Fast-Runner (Mindestwurf 5)
    if (this.colorKey === 'blau' && effectiveRoll < 5) {
      effectiveRoll = 5;
    }
    // 4. Schnellblatt (Grün): Salat-Gier (+1 auf W20)
    if (this.colorKey === 'gruen') {
      effectiveRoll += 1;
    }
    // 6. Flitzi (Orange): Zappel-Reroll (Reroll 1-2 einmal)
    if (this.colorKey === 'orange' && effectiveRoll <= 2) {
      effectiveRoll = Math.floor(Math.random() * 20) + 1;
    }
    // 8. Majestät (Schwarz): Unerschütterlich (Nat 1 wird zu 4)
    if (this.colorKey === 'schwarz' && effectiveRoll === 1) {
      effectiveRoll = 4;
    }

    const mod = typeof dndModifier === 'number' ? dndModifier : (this.dndModifier || 0);
    const totalRoll = effectiveRoll + mod;

    let progressGain = 0.025;
    const isCrit = (rollValue === 20 || totalRoll >= 22 || (this.colorKey === 'gelb' && effectiveRoll >= 19));
    const isFumble = (effectiveRoll === 1);

    if (isCrit) { // Nat 20 / Blumenblitz 18+
      progressGain = 0.052;
      this.activateTurbo(1500);

      // 7. Halsbrecher (Rot) Perk: Rammbock bei Krit
      if (this.colorKey === 'rot' && allSnails && allSnails.length > 0) {
        const ahead = allSnails.filter(s => s !== this && s.progress > this.progress);
        if (ahead.length > 0) {
          ahead.sort((a, b) => a.progress - b.progress);
          ahead[0].progress = Math.max(0, ahead[0].progress - 0.02);
        }
      }
    } else if (totalRoll >= 15) {
      progressGain = 0.040;
    } else if (totalRoll >= 10) {
      progressGain = 0.030;
    } else if (totalRoll >= 2) {
      progressGain = 0.020;
    } else if (isFumble) {
      progressGain = 0.005;
      this.triggerStun(2000);
    }

    // Mario Kart Catch-Up Mechanics (Schleimspur-Windschatten):
    // Wenn eine Schnecke auf den hinteren Plätzen liegt und der Führende weit vorn ist,
    // gleitet sie auf der bereits nassen Schleimspur der Führenden!
    if (allSnails && allSnails.length > 1) {
      const sorted = [...allSnails].sort((a, b) => b.progress - a.progress);
      const myRank = sorted.indexOf(this) + 1;
      const leaderProgress = sorted[0].progress;
      const distanceToLeader = leaderProgress - this.progress;

      if (myRank >= 5 && distanceToLeader > 0.06) {
        const slipstreamBonus = Math.min(0.016, distanceToLeader * 0.12);
        progressGain += slipstreamBonus;
      }
    }

    this.progress = Math.min(1, this.progress + progressGain);
    this.squishAnimation();
  }

  handleSpellCast(spellId, allSnails = []) {
    if (this.isStunned || this.progress >= 1) return;

    if (spellId === 'lettuce') { // Salatblatt-Köder (+Sprint)
      this.progress = Math.min(1, this.progress + 0.035);
      this.squishAnimation();
    } else if (spellId === 'mage_hand') { // Magierhand (Nächsten Gegner bremsen)
      const opponents = allSnails.filter(s => s !== this && s.progress > this.progress);
      if (opponents.length > 0) {
        opponents.sort((a, b) => a.progress - b.progress); // Target closest snail ahead
        opponents[0].progress = Math.max(0, opponents[0].progress - 0.03);
      }
    } else if (spellId === 'sleep') { // Einschläfern (Führenden Stunnen)
      const leaders = [...allSnails].sort((a, b) => b.progress - a.progress);
      if (leaders.length > 0 && leaders[0] !== this) {
        leaders[0].triggerStun(2200);
      }
    }
  }

  handlePlayerInput(key) {
    if (this.isStunned || this.progress >= 1) return { success: false, reason: 'blocked' };

    const now = performance.now();
    const timeDelta = now - this.lastKeyPressTime;

    // 1. Must alternate keys (A then D or D then A). Tapping same key twice is IGNORED (no penalty!)
    if (this.lastKeyPressed === key) {
      return { success: false, reason: 'same_key' };
    }

    // 2. Panic Stun condition: Spamming ALTERNATING keys faster than 120 ms
    if (this.lastKeyPressTime > 0 && timeDelta < 120) {
      this.triggerStun(2500);
      return { success: false, reason: 'panic_stun' };
    }

    // 3. Rhythm Bias Steering Impulse: 'A' steers Left, 'D' steers Right
    if (key === 'A') {
      this.laneOffset = Math.max(-1.1, this.laneOffset - 0.14);
    } else if (key === 'D') {
      this.laneOffset = Math.min(1.1, this.laneOffset + 0.14);
    }

    // Valid rhythm step! Advance progress (Off-road grass slows down progress gain)
    const isOffRoad = Math.abs(this.laneOffset) > 0.65;
    const progressGain = isOffRoad ? 0.005 : 0.018; // 70% speed penalty on grass!

    this.lastKeyPressTime = now;
    this.lastKeyPressed = key;

    this.progress = Math.min(1, this.progress + progressGain);
    this.speed = 0.02;

    // Crawl squish animation trigger
    this.squishAnimation();

    return { success: true, nextKey: key === 'A' ? 'D' : 'A', progress: this.progress, isOffRoad };
  }

  triggerStun(durationMs = 2500) {
    if (this.hasShield) {
      // Consume shield instead of getting stunned!
      this.hasShield = false;
      if (this.shieldMesh) this.shieldMesh.visible = false;
      return;
    }

    this.isStunned = true;
    this.stunEndTime = performance.now() + durationMs;
    this.stunCount++;
    this.lastKeyPressTime = 0;
    this.lastKeyPressed = null;

    this.shellMesh.material.opacity = 0.4;
    this.stunGroup.visible = true;
  }

  checkStunRecovery() {
    if (this.isStunned && performance.now() >= this.stunEndTime) {
      this.isStunned = false;
      this.shellMesh.material.opacity = 0.95;
      this.stunGroup.visible = false;
    }
  }

  squishAnimation() {
    this.visualContainer.scale.set(1.25, 0.8, 1);
  }

  update(delta, time, isRacing = false) {
    this.checkStunRecovery();

    // Maintain assigned lane so snails never merge or overlap
    this.laneOffset += (this.baseLaneOffset - this.laneOffset) * 0.05;

    // Handle Turbo Boost (visual animation only, no runaway frame progress!)
    if (this.isTurboActive) {
      if (performance.now() >= this.turboEndTime) {
        this.isTurboActive = false;
      }
    }

    // Recover squish scale back to 1.0 smoothly
    this.visualContainer.scale.x += (1.0 - this.visualContainer.scale.x) * 0.15;
    this.visualContainer.scale.y += (1.0 - this.visualContainer.scale.y) * 0.15;

    // Stun shake & dizzy stars rotation
    if (this.isStunned) {
      this.visualContainer.position.x = (Math.random() - 0.5) * 0.08;
      this.visualContainer.position.y = (Math.random() - 0.5) * 0.08;
      this.stunGroup.rotation.z += 0.1;
    } else {
      this.visualContainer.position.set(0, 0, 0);
    }

    this.updatePosition(this.progress);
  }

  updatePosition(t) {
    const info = this.trackManager.getPositionWithCustomOffset(t, this.laneOffset);
    this.group.position.x = info.position.x;
    this.group.position.y = info.position.y;
    this.group.rotation.z = info.angle;

    this.updateTrail(info.position);
  }

  reset() {
    this.progress = 0;
    this.speed = 0;
    this.isStunned = false;
    this.stunEndTime = 0;
    this.stunCount = 0;
    this.lastKeyPressTime = 0;
    this.lastKeyPressed = null;
    this.shellMesh.material.opacity = 0.95;
    this.stunGroup.visible = false;
    this.trailPoints = [];
    if (this.colorKey === 'rosa') {
      this.activateShield();
    } else {
      this.hasShield = false;
      if (this.shieldMesh) this.shieldMesh.visible = false;
    }
    this.updatePosition(0);
  }

  dispose() {
    this.trackManager.scene.remove(this.group);
    this.trackManager.scene.remove(this.trailMesh);
  }
}
