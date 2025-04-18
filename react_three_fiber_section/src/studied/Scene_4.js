import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      {/* Use the orbetcontrols (2nd way) */}
      <OrbitControls />

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
