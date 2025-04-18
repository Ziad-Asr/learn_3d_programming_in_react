import * as THREE from "three";

// #######################
// ### Custom Geometry ###
// #######################
// 1) Create a (Float32Array)
// 2) Put values in the array
// 3) Create a (BufferAttribute) using this (Float32Array)
// 4) Add the (BufferAttribute) to the attributes of the (BufferGeometry)

// This will be a ((( Triangle )))

const CustomGeometry = () => {
  // 1 - 2
  const positionArray = new Float32Array([
    // 1st vertix
    0, 0, 0,
    // 2nd vertix
    0, 1, 0,
    // 3rd vertix
    0, 0, 1,
  ]);

  return (
    <mesh>
      {/* 4 */}
      <bufferGeometry>
        {/* 3 */}
        <bufferAttribute
          attach="attributes-position"
          count={3} // number of vertices
          itemSize={3} // Number of values for each vertix
          array={positionArray}
        />
      </bufferGeometry>

      <meshBasicMaterial color="purple" side={THREE.DoubleSide} />
      {/* We usually use the (Basic) with custom geometries */}
    </mesh>
  );
};

export default CustomGeometry;
