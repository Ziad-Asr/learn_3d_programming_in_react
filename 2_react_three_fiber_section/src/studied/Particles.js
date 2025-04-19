import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// ###################
// ### Snow effect ###
// ###################

// use (pointsMaterial)

const Particles = () => {
  const texture = useLoader(THREE.TextureLoader, "/alphaSnow.jpg");

  const veticesAmout = 2000;
  const positionArray = new Float32Array(veticesAmout * 3);
  for (let i = 0; i < veticesAmout * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10;
    // -0.5 => To make the origion point the center (0, 0, 0)
    // *10 => spred particles
  }

  const particlesRef = useRef();
  useFrame((_, delta) => {
    particlesRef.current.rotation.y += delta * 0.2;
    particlesRef.current.rotation.x += delta * 0.2;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionArray.length}
          itemSize={3}
          array={positionArray}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        alphaMap={texture}
        transparent
        depthTest={false} // Make the gpu knows well whick element is in front of the other elements
      />
      {/* 
        alphaMap + transparent => Displays only the white part of the image, 
        by making the black part of opacity of 0, but that is not working except by making the tranparent attribute true 
      */}
    </points>
  );
};

export default Particles;
