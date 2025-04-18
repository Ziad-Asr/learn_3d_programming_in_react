import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

// ###################################
// ### 2nd way - Loading 3D Models ###
// ###################################

// 3rd way is by turning glb file into jsx file and use it.

// 3D Model component
const Model = () => {
  const model = useGLTF("/model/dog.glb");
  return <primitive object={model.scene} position-y={-0.4} />;
};

useGLTF.preload("/model/dog.glb");
// If I show this model conditionally on doing a cetain action,
// This method preload it, so when I show it the it shows instantlly,
// because it has been preloaded.

// -----------------------------------------------------------
// -----------------------------------------------------------

const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={2} />

      {/* Suspense wrapper */}
      <Suspense
        fallback={
          <mesh scale={1}>
            <boxGeometry />
            <meshBasicMaterial wireframe />
          </mesh>
        }
      >
        <Model />
      </Suspense>

      <OrbitControls />
    </>
  );
};

export default Scene;
