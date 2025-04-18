import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas>
    <Scene />
  </Canvas>
);
