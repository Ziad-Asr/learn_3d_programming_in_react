import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// ********************  Mesh (Triangle) {BufferGeometry => Lighter on GPU (Has fewer attributes)}
// ###################################################################
// ###################################################################
// ###################################################################

// Look how I will make a triangle shape.
const geometry = new THREE.BufferGeometry();

// This the array works with the bufferGeometry
const verticesArray = new Float32Array([
  // first vertix (x, y, z)
  0, 0, 0,
  // seconf vertix (x, y, z)
  0, 1, 0,
  // third vertix (x, y, z)
  1, 0, 0,
]);

// Convert vertices numbers into attributes
const positionAttribute = new THREE.BufferAttribute(verticesArray, 3);
// 3 => Means I want each 3 values in verticesArray to be separated

geometry.setAttribute("position", positionAttribute);

// ###################################################################
// ###################################################################
// ###################################################################

const materials = new THREE.MeshBasicMaterial({
  color: "purple",
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, materials);
scene.add(mesh);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);
