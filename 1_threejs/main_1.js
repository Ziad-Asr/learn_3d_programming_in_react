import * as THREE from "three";

// -----------------------------------------------------
// -----------------------------------------------------

// 1-Scene
const scene = new THREE.Scene();

// -----------------------------------------------------
// -----------------------------------------------------

// 2-Object (Mech) => { 1-geometry , 2-materials }
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

// Object3D property (position)
mesh.position.y = -0.5;
mesh.position.x = 0.5;

// Object3D property (scale) { expanding - shrinking }
mesh.scale.x = 2;
mesh.scale.y = 1; // Default

// Object3D property (rotation)
// {Imagine the stick inside the cube to imagine the rotaion (video 3.2 - min 10)}
// -ve => clockwise , +v => Anticlockwise
// In (Euiler form) => ( 1.57 = 90 deg = 0.5 * Math.PI , 3.14 = 180 deg = Math.PI , 4.71 = 270 deg = 1.5 * Math.PI, 6.28 = 360 deg = 2 * Math.PI )
mesh.rotateX(0.3 * Math.PI);
mesh.rotateY(-0.5 * Math.PI);
mesh.rotateZ(Math.PI);

// Adding the mesh to the scene
scene.add(mesh);

// -----------------------------------------------------
// -----------------------------------------------------

// 3-Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
}; // ant the aspect to get the whole screen

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
// 75 degress (camera angle) - aspect ratio - near (default = 1) - far (default = 2000)

// When I make the camera for the first time it will be in the center of the scene,
// and the same for the object,
// then the camera will be inside the object so I can't see it,
// so I should change the position of the camera to see objects in the center well.
// ( I could also change the postion of the object not the camera if I want )
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 0.5;

// Adding the camera to the scene
scene.add(camera);

// -----------------------------------------------------
// -----------------------------------------------------

// 4-Renderer
const canvas = document.querySelector(".draw"); // Selecting the canvas element
const renderer = new THREE.WebGLRenderer({ canvas: canvas }); // Adding the WebGLRenderer

// Make the image displaies on the canvas has the same area as in camera
renderer.setSize(aspect.width, aspect.height);

// Display what the camera in the scene has captured
renderer.render(scene, camera);
