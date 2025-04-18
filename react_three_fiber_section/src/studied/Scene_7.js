import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// ###################################
// ### 1st way - Loading 3D Models ###
// ###################################

// 3D Model component
const Model = () => {
  const model = useLoader(GLTFLoader, "/model/dog.glb");
  return <primitive object={model.scene} position-y={-0.4} />;
};

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
