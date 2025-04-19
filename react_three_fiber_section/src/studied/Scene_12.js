import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

// ##############
// ### Events ###
// ##############

// When the mouse clicks => It send an array like a signal that enters all geometries infront of it and contenue it's way
// So there is a problem that if I have 2 cubes and I clicked on the first one the second cube if it is (behined it) it will also be clicked
// Solution (onClick={(event) => {event.stopPropagation()}}) => This tells the object to stop passing the array throw it.

const Scene = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
    console.log("Click");
  };

  return (
    <>
      <OrbitControls />

      <mesh
        // Events
        onClick={clickHandler} // Click
        // onContextMenu={clickHandler} // Right click
        // onDoubleClick={clickHandler} // Double clicks
        // onWheel={clickHandler} // Listenning to the mouse wheel
        // ...

        position-x={1}
      >
        <boxGeometry />
        <meshBasicMaterial color={active ? "pink" : "orange"} />
      </mesh>

      <mesh
        position-x={-1}
        // Event
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Scene;
