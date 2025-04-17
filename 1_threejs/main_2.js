import * as THREE from "three";

const scene = new THREE.Scene();

// Group
// (It is like a box for meshes that i can controll all of it's meshes at the same time from positionning too rotation to anything else)
const group = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

// Mesh2
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial({ color: "green" });
const mesh2 = new THREE.Mesh(geometry2, material2);

mesh2.position.x = 2;

group.add(mesh, mesh2);
scene.add(group);

group.position.x = 1;

// AxesHelper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);

camera.position.z = 5;
camera.position.x = 0.5;
camera.position.y = 0.5;

scene.add(camera);

const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);
