import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Scene = () => {
  const cuberef = useRef();
  const planeref = useRef();

  useFrame((state, deltaTime) => {
    cuberef.current.rotation.y += deltaTime;
    planeref.current.rotation.y += deltaTime;
  });
  // useFrame => Call it's function on each fram, so I can use it for animation.
  // Do not use ( useStatee ), because this will make the component rerenders with each fram and that is wrong.
  // Use ( useRef )
  // This is the first type of animation (moving the elements) {there is another way by moving the camera}

  return (
    <>
      <mesh position-x={-2} ref={planeref}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial
          color="orange"
          side={THREE.DoubleSide} // Render the two side of the plane
        />
      </mesh>

      <mesh position-x={2} ref={cuberef}>
        <boxGeometry />
        <meshBasicMaterial color="#7A00CA" />
      </mesh>
    </>
  );
};

export default Scene;
