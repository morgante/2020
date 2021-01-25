import { useRef, useState } from "react"
import { act } from "react-dom/test-utils";
import { useFrame } from "react-three-fiber"

export default function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const size = 1 + 1 * props.percent;

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // const [size, setSize] = useState(1);
  // const makeBigger = () => {
  //   setSize(size + 0.5);
  //   console.log('make bigger');
  // };

  // console.log('size', size);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    // mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  });

  const onClick = (evt) => {
    console.log("click");
    setActive(!active);
  }

  return (
    <mesh
      {...props}
      ref={mesh}
      position={[-1.2, 3 * props.percent, -3 * props.percent]}
      scale={[size, size, size]}
      onClick={onClick}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? (active ? 'blue' : 'orange') : (active ? 'red' : 'grey')} />
    </mesh>
  )
}