import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { DogModel } from "./DogModel";

// ###################################
// ### 3rd way - Loading 3D Models ### ((( glb => jsx )))
// ###################################

// 1) CMD => Navigate to the model's folder
// 2) CMD => type (npx gltfjsx bike.gltf)

const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={2} />
      <directionalLight />

      {/* Suspense wrapper */}
      <Suspense
        fallback={
          <mesh scale={1}>
            <boxGeometry />
            <meshBasicMaterial wireframe />
          </mesh>
        }
      >
        <DogModel />
      </Suspense>

      <OrbitControls />
    </>
  );
};

export default Scene;
