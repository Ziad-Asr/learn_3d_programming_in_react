import { OrbitControls } from "@react-three/drei";
import CustomGeometry from "./CustomGeometry";

const Scene = () => {
  return (
    <>
      <OrbitControls />

      <CustomGeometry />
    </>
  );
};

export default Scene;
