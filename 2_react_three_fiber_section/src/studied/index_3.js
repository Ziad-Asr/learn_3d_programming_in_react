import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas
    gl={{
      antialias: true,
      alpha: true,
    }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 100,
      position: [2, 2, 5],
    }}
  >
    <axesHelper args={[2]} />
    <gridHelper args={[20, 20, "red", "blue"]} />

    <Scene />
  </Canvas>
);
