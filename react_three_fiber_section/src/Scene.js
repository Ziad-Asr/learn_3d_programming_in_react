import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Particles from "./Particles";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <Particles />
    </>
  );
};

export default Scene;
