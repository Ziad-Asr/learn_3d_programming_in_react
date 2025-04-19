import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

// ########################
// ### Model animations ###
// ########################

const Model = () => {
  const model = useGLTF("/model/dog.glb");

  // Animations
  const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    // Get these animations from the (animations array in animations variable)

    // animations.actions.Writing.play();
    // animations.actions.Idle.play();
    animations.actions.Embarrassed.play();
    // ...
  }, [animations]);

  return <primitive object={model.scene} position-y={-0.4} />;
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={2} />

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
