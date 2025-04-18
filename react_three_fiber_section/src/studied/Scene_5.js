import { useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls: OrbitControls });

const Scene = () => {
  const cuberef = useRef();
  const planeref = useRef();

  const { gl, camera } = useThree(); // this is how I can get access to the camera and the dom from inside any comoponent

  useFrame((state, deltaTime) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime);
  });
  // 2nd way of animation => Moving the camera

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <mesh position-x={-2} ref={planeref}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="orange" side={THREE.DoubleSide} />
      </mesh>

      <mesh position-x={2} ref={cuberef}>
        <boxGeometry />
        <meshBasicMaterial color="#7A00CA" />
      </mesh>
    </>
  );
};

export default Scene;
