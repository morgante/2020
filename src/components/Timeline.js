import { useRef, useState } from "react"
import { act } from "react-dom/test-utils";
import { useFrame, BufferGeometryNode, useUpdate } from "react-three-fiber";
import * as THREE from 'three';

export default function Timeline(props) {
  const { percent } = props;
  // const material = new THREE.LineBasicMaterial({
  //   color: 0x0000ff
  // });
  
  
  
  // const geometry = new BufferGeometry().setFromPoints( points );
  
  const ref = useUpdate(geometry => {
    const points = [
      new THREE.Vector3( 0, 0, 0 ),
      new THREE.Vector3( 0, 3, 0 ),
      new THREE.Vector3( 0 + 1, 0, 0 )
    ];

    geometry.setFromPoints(points)
  }, []);

  return (
    <line
      position={[0, 0 + 3 * percent, 0]}
      speed={3}>
      <bufferGeometry attach="geometry" ref={ref} />
      <lineBasicMaterial
        color="red"
        />
    </line>
    // <mesh
    //   {...props}
    //   ref={mesh}
    //   position={[-1.2, 3 * props.percent, -3 * props.percent]} 
    //   scale={[size, size, size]}
    //   onClick={onClick}
    //   onPointerOver={(event) => setHover(true)}
    //   onPointerOut={(event) => setHover(false)}>
    //   <boxBufferGeometry args={[1, 1, 1]} />
    //   <meshStandardMaterial color={hovered ? (active ? 'blue' : 'orange') : (active ? 'red' : 'grey')} />
    // </mesh>
  )
}