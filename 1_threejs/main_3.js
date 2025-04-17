import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const materials = new THREE.MeshBasicMaterial({
  color: "purple",
  wireframe: true, // Shows that triangles that build this shape
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

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// #####################
// ### Bad animation ###
// #####################

// Animations
// const animate = () => {
//   mesh.rotation.x += 0.01;
//   renderer.render(scene, camera); // Draw what inside the camera (the scene captured)
//   window.requestAnimationFrame(animate);

//   // That based on frams per second (FPS)
//   // Display the animate function on each frame
//   // There are different fps for each device (60frams/sec, 120fram/sec, ...)
//   // I should not depend on the fps of each device, I should choose like a statis variable for all devices
//   // So the best solution is to use the ((( clock class ))) in three.js library.
// };
// animate();

// ----------------------------------------------
// ----------------------------------------------

// ######################
// ### Good animation ###
// ######################

// clock class
const clock = new THREE.Clock();

// Animations
const animate = () => {
  // Elapsed time => The number of seconds past since a user entered the websire
  const elapsedtime = clock.getElapsedTime();

  // Update rotation on x axis
  mesh.rotation.x = elapsedtime * (Math.PI * 2);

  // Renderer
  renderer.render(scene, camera); // Draw what inside the camera (the scene captured)

  // RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();
