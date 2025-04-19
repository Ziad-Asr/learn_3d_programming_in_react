import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";

// ##################
// ### Debuggging ###
// ##################

// npm i leva

const Scene = () => {
  const cubeLevaControls = useControls("cube", {
    position: {
      value: {
        x: 0,
        y: 0,
        z: 0,
      },
      min: -10,
      max: 10,
      step: 0.01,
    },
    color: "#ffffff",
    scale: { options: [1, 2, 3] },
    Wireframe: false,
    click: button(() => {
      console.log("Clicked!");
    }),
  });

  // There is no sphere here, but that is for showing only.
  const sphereLevaControls = useControls("sphere", {
    position: {
      value: {
        x: 0,
        y: 0,
        z: 0,
      },
      min: -10,
      max: 10,
      step: 0.01,
    },
    color: "#ffffff",
    scale: { options: [1, 2, 3] },
    Wireframe: false,
    click: button(() => {
      console.log("Clicked!");
    }),
  });

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 2, 4]} />

      <mesh
        position={[
          cubeLevaControls.position.x,
          cubeLevaControls.position.y,
          cubeLevaControls.position.z,
        ]}
        scale={cubeLevaControls.scale}
      >
        <boxGeometry />
        <meshStandardMaterial
          color={cubeLevaControls.color}
          wireframe={cubeLevaControls.Wireframe}
        />
      </mesh>

      <OrbitControls />
    </>
  );
};

export default Scene;
