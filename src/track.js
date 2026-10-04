import * as THREE from 'three';

// Default Waypoints mapped to the background map "The Greate Snail Race"
// Coordinate bounds: X [-10 to +10], Y [-5.625 to +5.625]
export const DEFAULT_WAYPOINTS = [
  { x: -6.6, y: 1.0, z: 0 },   // 1: START Banner
  { x: -6.5, y: 3.2, z: 0 },   // Top-left inner curve
  { x: -4.5, y: 4.2, z: 0 },   // Top-left high arch
  { x: -2.0, y: 2.5, z: 0 },   // 4: Slope above tents
  { x: 0.2,  y: 1.0, z: 0 },   // Approaching center crossing
  { x: 1.7,  y: 0.0, z: 0 },   // 2: Center figure-8 crossing
  { x: 3.5,  y: 0.4, z: 0 },   // Entering right loop
  { x: 5.2,  y: 1.2, z: 0 },   // Right loop top
  { x: 7.6,  y: -0.4, z: 0 },  // 3: Right loop outer curve
  { x: 5.2,  y: -2.0, z: 0 },  // Right loop bottom
  { x: 3.2,  y: -1.2, z: 0 },  // Exiting right loop
  { x: 1.7,  y: 0.0, z: 0 },   // 2: Center figure-8 re-crossing
  { x: -0.5, y: -1.4, z: 0 },  // Approaching bottom stretch
  { x: -3.5, y: -2.2, z: 0 },  // 6: Bottom track along fence
  { x: -7.0, y: -2.5, z: 0 },  // Bottom-left curve
  { x: -8.0, y: -0.5, z: 0 },  // Left edge going up
  { x: -6.6, y: 1.0, z: 0 }    // Back to START Banner
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
