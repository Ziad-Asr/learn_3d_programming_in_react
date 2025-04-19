import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Scene = () => {
  // Loading a texture
  const texture = useLoader(THREE.TextureLoader, "/1.png");

  return (
    <>
      <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};

export default Scene;
