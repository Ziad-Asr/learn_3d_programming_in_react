import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Scene from "./Scene";

// const creatingCanvasHandler = (state) => {
//   state.gl.setClearColor("cyan", 0.5);
//   // changing the background color of the (Renderer)
//   // {color - opacity}
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas
    gl={{
      antialias: true, // hide the steps on edges
      alpha: true, // this is the defaulte value, that makes the canvas background transparent.
    }}
    // gl => WebGlRenderer

    // onCreated={creatingCanvasHandler}
    // This function will be called once the canvas created directly

    camera={{
      fov: 45,
      near: 0.1,
      far: 100,
      //   zoom: 120,
      position: [2, 2, 5],
    }}

    // orthographic={true}
    // this type of camera make the object has the same size whatever the space between it and the camera
    // The default camera is (perspective camera)
  >
    <axesHelper args={[2]} />
    <gridHelper args={[20, 20, "red", "blue"]} />

    <Scene />
  </Canvas>
);
