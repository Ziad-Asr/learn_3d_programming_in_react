import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <OrbitControls />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="#C7CAC7" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial color="#CC3941" />
      </mesh>
    </>
  );
};

export default Scene;
