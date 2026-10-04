import * as THREE from 'three';

// Default Waypoints mapped to the background map "The Greate Snail Race"
// Coordinate bounds: X [-10 to +10], Y [-5.625 to +5.625]
export const DEFAULT_WAYPOINTS = [
  { x: -7.4, y: 0.9, z: 0 },   // 1: START Banner
  { x: -7.2, y: 2.8, z: 0 },   // Heading north through sand
  { x: -5.0, y: 3.9, z: 0 },   // High curve around red/white tent
  { x: -2.3, y: 2.15, z: 0 },  // 4: Mud chute above tents
  { x: -0.2, y: 1.0, z: 0 },   // Downhill slope toward crossing
  { x: 1.4,  y: -0.5, z: 0 },  // 2: Crossing point (enter right loop)
  { x: 3.4,  y: 0.5, z: 0 },   // Enter loop around pit
  { x: 5.6,  y: 1.25, z: 0 },  // Top curve above pit
  { x: 7.7,  y: -0.6, z: 0 },  // 3: Outer right curve
  { x: 5.8,  y: -2.3, z: 0 },  // Bottom curve below pit
  { x: 3.5,  y: -1.3, z: 0 },  // Exiting loop
  { x: 1.4,  y: -0.5, z: 0 },  // 2: Crossing point (re-crossing)
  { x: -0.6, y: -1.6, z: 0 },  // Enter bottom straight
  { x: -3.6, y: -2.3, z: 0 },  // 6: Straight along fence
  { x: -6.8, y: -2.5, z: 0 },  // Lower left bend
  { x: -8.1, y: -1.2, z: 0 },  // Far left outer turn
  { x: -7.4, y: 0.9, z: 0 }    // Back to START Banner
];

export class TrackManager {
  constructor(scene) {
    this.scene = scene;
    this.waypoints = DEFAULT_WAYPOINTS.map(p => new THREE.Vector3(p.x, p.y, p.z));
    this.curve = null;
    this.trackLineMesh = null;
    this.handleGroup = new THREE.Group();
    this.handleMeshes = [];
    this.editorVisible = false;

    // Tactical Track Grid & Start Boxes
    this.gridGroup = new THREE.Group();
    this.gridVisible = true;
    this.scene.add(this.gridGroup);

    this.scene.add(this.handleGroup);
    this.rebuildCurve();
  }

  rebuildCurve() {
    this.curve = new THREE.CatmullRomCurve3(this.waypoints, false, 'centripetal', 0.5);

    // Update visual track line helper
    if (this.trackLineMesh) {
      this.scene.remove(this.trackLineMesh);
      this.trackLineMesh.geometry.dispose();
      this.trackLineMesh.material.dispose();
    }

    const points = this.curve.getPoints(200);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineDashedMaterial({
      color: 0xfbbf24,
      dashSize: 0.2,
      gapSize: 0.1,
      linewidth: 2,
      opacity: 0.4,
      transparent: true
    });

    this.trackLineMesh = new THREE.Line(geometry, material);
    this.trackLineMesh.computeLineDistances();
    this.trackLineMesh.position.z = 0.05;
    this.trackLineMesh.visible = this.editorVisible;
    this.scene.add(this.trackLineMesh);

    this.updateHandles();
    this.buildTrackGrid();
  }

  buildTrackGrid() {
    while (this.gridGroup.children.length > 0) {
      const obj = this.gridGroup.children[0];
      this.gridGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    }

    if (!this.gridVisible || !this.curve) return;

    const linePoints = [];
    const laneWidth = 0.11;
    const halfWidth = 4 * laneWidth; // 0.44 total half width: strictly fits on mud track!

    // 1. Longitudinal Lane Dividers (9 curves separating the 8 lanes)
    const samples = 240;
    for (let k = 0; k <= 8; k++) {
      const offset = (k - 4) * laneWidth;
      for (let i = 0; i < samples; i++) {
        const t1 = i / samples;
        const t2 = (i + 1) / samples;
        const p1 = this.getPositionWithCustomOffset(t1, offset).position;
        const p2 = this.getPositionWithCustomOffset(t2, offset).position;

        linePoints.push(p1.x, p1.y, 0.04);
        linePoints.push(p2.x, p2.y, 0.04);
      }
    }

    // 2. Cross Grid Lines (Distance Steps across all 8 lanes: 48 segments)
    const totalSteps = 48;
    for (let s = 0; s < totalSteps; s++) {
      const t = s / totalSteps;
      const leftEdge = this.getPositionWithCustomOffset(t, -halfWidth).position;
      const rightEdge = this.getPositionWithCustomOffset(t, halfWidth).position;

      linePoints.push(leftEdge.x, leftEdge.y, 0.04);
      linePoints.push(rightEdge.x, rightEdge.y, 0.04);
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
    const mat = new THREE.LineBasicMaterial({
      color: 0xfef08a,
      transparent: true,
      opacity: 0.25,
      depthTest: false
    });
    const gridMesh = new THREE.LineSegments(geom, mat);
    this.gridGroup.add(gridMesh);

    // 3. Start Boxes with Snail Numbers (1 to 8) at Start Line
    const snailColors = [
      '#f472b6', // 1: Rosa (Shellymuh)
      '#3b82f6', // 2: Blau (Flinkfuß)
      '#a855f7', // 3: Violett (Hoher Pfad)
      '#22c55e', // 4: Grün (Schnellblatt)
      '#eab308', // 5: Gelb (Blumenblitz)
      '#f97316', // 6: Orange (Flitzi)
      '#ef4444', // 7: Rot (Halsbrecher)
      '#64748b'  // 8: Schwarz (Majestät)
    ];

    for (let lane = 0; lane < 8; lane++) {
      const offset = (lane - 3.5) * laneWidth;
      const pos = this.getPositionWithCustomOffset(0.012, offset).position;

      const numSprite = this.createNumberSprite(lane + 1, snailColors[lane]);
      numSprite.position.set(pos.x, pos.y, 0.06);
      this.gridGroup.add(numSprite);
    }
  }

  createNumberSprite(num, color) {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(32, 32, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.font = 'bold 30px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(num), 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(0.18, 0.18, 1);
    return sprite;
  }

  toggleGrid() {
    this.gridVisible = !this.gridVisible;
    this.gridGroup.visible = this.gridVisible;
    if (this.gridVisible && this.gridGroup.children.length === 0) {
      this.buildTrackGrid();
    }
    return this.gridVisible;
  }

  updateHandles() {
    // Clear old handles
    while (this.handleGroup.children.length > 0) {
      const obj = this.handleGroup.children[0];
      this.handleGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    }
    this.handleMeshes = [];

    if (!this.editorVisible) return;

    this.waypoints.forEach((wp, idx) => {
      const geom = new THREE.CircleGeometry(0.2, 16);
      const mat = new THREE.MeshBasicMaterial({
        color: idx === 0 ? 0xef4444 : 0x06b6d4,
        depthTest: false
      });
      const handle = new THREE.Mesh(geom, mat);
      handle.position.copy(wp);
      handle.position.z = 0.2;
      handle.userData = { index: idx };
      this.handleGroup.add(handle);
      this.handleMeshes.push(handle);
    });
  }

  setEditorVisible(visible) {
    this.editorVisible = visible;
    if (this.trackLineMesh) this.trackLineMesh.visible = visible;
    this.handleGroup.visible = visible;
    this.updateHandles();
  }

  getPointAndTangentAt(t) {
    // Clamp progress t to [0, 1]
    const clampedT = Math.min(1, Math.max(0, t));
    const point = this.curve.getPointAt(clampedT);
    const tangent = this.curve.getTangentAt(clampedT);
    return { point, tangent };
  }

  getPositionWithCustomOffset(t, customOffset) {
    const { point, tangent } = this.getPointAndTangentAt(t);

    // Compute normal vector perpendicular to tangent in 2D (Z = 0)
    const normal = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize();

    const offsetPoint = point.clone().add(normal.multiplyScalar(customOffset));
    const angle = Math.atan2(tangent.y, tangent.x);

    return {
      position: offsetPoint,
      angle: angle,
      tangent: tangent
    };
  }

  getPositionWithLaneOffset(t, laneIndex, totalLanes = 6) {
    const { point, tangent } = this.getPointAndTangentAt(t);

    // Compute normal vector perpendicular to tangent in 2D (Z = 0)
    // If tangent is (tx, ty), normal is (-ty, tx)
    const normal = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize();

    // Lane spacing offset: e.g., -0.3, -0.1, 0.1, 0.3
    const laneWidth = 0.16;
    const laneOffset = (laneIndex - (totalLanes - 1) / 2) * laneWidth;

    const offsetPoint = point.clone().add(normal.multiplyScalar(laneOffset));
    const angle = Math.atan2(tangent.y, tangent.x);

    return {
      position: offsetPoint,
      angle: angle,
      tangent: tangent
    };
  }

  updateWaypoint(index, x, y) {
    if (index >= 0 && index < this.waypoints.length) {
      this.waypoints[index].x = x;
      this.waypoints[index].y = y;
      this.rebuildCurve();
    }
  }
}
