import { extend, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls: OrbitControls });

const Scene = () => {
  const { gl, camera } = useThree();

  return (
    <>
      {/* Use the orbetcontrols (1st way) */}
      <OrbitControls args={[camera, gl.domElement]} />

      <mesh position-x={-2}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial
          color="orange"
          side={THREE.DoubleSide} // Render the two side of the plane
        />
      </mesh>

      <mesh position-x={2}>
        <boxGeometry />
        <meshBasicMaterial color="#7A00CA" />
      </mesh>
    </>
  );
};

export default Scene;
