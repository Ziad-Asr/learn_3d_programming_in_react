import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import * as dat from "dat.gui";

const scene = new THREE.Scene();

// Mesh

// ####################################################
// ####################################################
// ####################################################

// Snow Effect
const geometry = new THREE.BufferGeometry();
const verticesAmount = 1000;
const positionArray = new Float32Array(verticesAmount * 3); // we need 3000 slots (1000 * 3 {x, y, z})

for (let i = 0; i < verticesAmount * 3; i++) {
  positionArray[i] = (Math.random() - 0.5) * 5;
  // 1st three = (0.2, 0.1, 0.9) these are for the first slot.
  // -0.5 => To return them in the middle of the screen
  // *10 =. To seprate the particles and make a huge distance between them, so the snow shap appears.
}
geometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3)); // Take each 3 values in positionArray arry and set them as a poistion for a vertix

// Make sure that the texture size is below 40kb
const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load("/public/alphaSnow.jpg");

const material = new THREE.PointsMaterial(); // do not use { map: particleTexture } because it shows the balck and white parts of the texture on the particle
material.size = 0.02;

// This appears the white part and hide the black part of the texture
material.transparent = true;
material.alphaMap = particleTexture;
material.depthTest = false;

const points = new THREE.Points(geometry, material);
scene.add(points);

// ####################################################
// ####################################################
// ####################################################

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  aspect.width / aspect.height,
  0.01, // make me able to see the snow particle as near as posble
  100
);
camera.position.z = 2;
scene.add(camera);

const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Controls
const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableDamping = true;
orbitControls.enableZoom = false;
orbitControls.enableRotate = false;

// Resize
window.addEventListener("resize", () => {
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix();

  renderer.setSize(aspect.width, aspect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Animate
const clock = new THREE.Clock();
const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  // ####################################################
  // ####################################################
  // ####################################################

  // Animate particles
  points.rotation.y = elapsedTime * 0.2;
  points.rotation.x = elapsedTime * 0.2;

  // For performance we could only rotate the camera (from orpects controlls part)
  // orbitControls.autoRotate = true;
  // orbitControls.autoRotateSpeed =0.2

  // ####################################################
  // ####################################################
  // ####################################################

  orbitControls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};
animate();
