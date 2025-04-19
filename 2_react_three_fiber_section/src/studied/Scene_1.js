const Scene = () => {
  return (
    <mesh>
      <planeGeometry args={[2, 5]} />
      {/* args={[2, 5]} => (args = arguments) - width=2, height=5*/}
      <meshBasicMaterial
        color="orange"
        wireframe={true} // Shows triangles forming this mesh
      />
    </mesh>
  );
};

export default Scene;
