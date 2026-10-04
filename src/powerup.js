import * as THREE from 'three';
import { audioSystem } from './audio.js';

export const POWERUP_TYPES = {
  TURBO:  { id: 'TURBO',  color: 0xfbbf24, icon: '⚡', label: 'TURBO BOOST!' },
  SHIELD: { id: 'SHIELD', color: 0x38bdf8, icon: '🛡️', label: 'SCHILD!' },
  SLIME:  { id: 'SLIME',  color: 0x22c55e, icon: '🍌', label: 'SCHLEIMFALLE!' }
};

export class PowerUpManager {
  constructor(scene, trackManager) {
    this.scene = scene;
    this.trackManager = trackManager;
    this.powerups = [];
    this.group = new THREE.Group();
    this.scene.add(this.group);
  }

  spawnTrackPowerUps() {
    this.clear();

    // Spawn 5 items at set track progress points (e.g., 0.2, 0.45, 0.65, 0.8)
    const spawnTValues = [0.22, 0.42, 0.62, 0.82];
    const types = [POWERUP_TYPES.TURBO, POWERUP_TYPES.SHIELD, POWERUP_TYPES.TURBO, POWERUP_TYPES.SHIELD];

    spawnTValues.forEach((t, idx) => {
      const type = types[idx % types.length];
      const lane = Math.floor(Math.random() * 6); // Lane 0..5

      const posInfo = this.trackManager.getPositionWithLaneOffset(t, lane);
      
      const itemGroup = new THREE.Group();
      itemGroup.position.copy(posInfo.position);
      itemGroup.position.z = 0.15;

      // Outer Glowing Ring
      const ringGeom = new THREE.RingGeometry(0.22, 0.28, 24);
      const ringMat = new THREE.MeshBasicMaterial({ color: type.color, transparent: true, opacity: 0.9 });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      itemGroup.add(ringMesh);

      // Icon Text Sprite
      const sprite = this.createIconSprite(type.icon, type.color);
      itemGroup.add(sprite);

      this.group.add(itemGroup);

      this.powerups.push({
        type,
        t,
        lane,
        meshGroup: itemGroup,
        active: true
      });
    });
  }

  createIconSprite(iconSymbol, colorHex) {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.beginPath();
    ctx.arc(64, 64, 52, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = '54px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(iconSymbol, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(0.6, 0.6, 1);
    return sprite;
  }

  update(snails, time) {
    // Pulse item rotation/scaling
    this.powerups.forEach(item => {
      if (item.active && item.meshGroup) {
        item.meshGroup.scale.x = 1.0 + Math.sin(time * 0.005 + item.t * 10) * 0.12;
        item.meshGroup.scale.y = 1.0 + Math.sin(time * 0.005 + item.t * 10) * 0.12;
      }
    });

    // Check collisions with snails
    snails.forEach(snail => {
      this.powerups.forEach(item => {
        if (item.active && Math.abs(snail.progress - item.t) < 0.015 && snail.laneIndex === item.lane) {
          item.active = false;
          item.meshGroup.visible = false;
          this.applyPowerUp(snail, item.type);
        }
      });
    });
  }

  applyPowerUp(snail, type) {
    audioSystem.playStepSound('A'); // Chime sound

    if (type.id === 'TURBO') {
      snail.activateTurbo(2500);
    } else if (type.id === 'SHIELD') {
      snail.activateShield();
    }
  }

  clear() {
    this.powerups.forEach(p => {
      this.group.remove(p.meshGroup);
    });
    this.powerups = [];
  }
}
