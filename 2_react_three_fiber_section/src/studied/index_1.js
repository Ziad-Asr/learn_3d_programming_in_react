import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* The canvas is responsive to it's part, means that it takes 100% width and height */}
    <Canvas>
      {/* ----------------------------------------- */}
      {/* Creating a mesh */}
      <mesh>
        <torusKnotGeometry /> {/* 1- Creating geometry */}
        <meshNormalMaterial /> {/* 2- Creating material */}
      </mesh>
      {/* ----------------------------------------- */}
      {/* ----------------------------------------- */}
      {/* Properties */}
      <mesh
        position={[6, 0, 0]}
        rotation={[Math.PI * 0.5, 0, 0]}
        scale={[1, 1.2, 1.5]}
      >
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
      {/* position => (x, y, z) */}
      {/* position={-5} = position={[-5, -5, -5]} */}
      {/* position-z={2} */}
      {/* And the same for all properties */}
      {/* ----------------------------------------- */}

      {/* ----------------------------------------- */}
      {/* Group */}
      <group position-y={-0.5}>
        <mesh position-x={-2} rotation-x={Math.PI * 0.5}>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
        <mesh position={[2, 0, 0]} scale={1.2}>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </group>
      {/* ----------------------------------------- */}
    </Canvas>
  </>
);
