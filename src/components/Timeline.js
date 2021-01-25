import { useRef, useState } from "react"
import { act } from "react-dom/test-utils";
import { useFrame, BufferGeometryNode, useUpdate } from "react-three-fiber";
import * as THREE from 'three';
import { Line } from '@react-three/drei';

export default function Timeline(props) {
  const { percent } = props;

  const points = [
    [0, 0, 0],
    [0, 2, 0],
    [1 + (2 * percent), 0, 0]
  ];

  return (
    <Line
      position={[0, 0, 0]}
      points={points}
      color="red"
      />
  )
}