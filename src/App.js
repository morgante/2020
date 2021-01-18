import './App.css';
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, Dom } from 'react-three-fiber';
import { Perf } from 'r3f-perf';
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  const scrollArea = useRef();
  const onScroll = e => {
    setScrollTop(e.target.scrollTop);
    const percent = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight);
    setScrollPercent(percent);
  };
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  const pages = 5;

  console.log("scrollTop", scrollTop, scrollPercent);

  return (
    <>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      <Box position={[-1.2, 0, 0]} percent={scrollPercent} />
      <Perf />
    </Canvas>
    <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
      <div style={{ height: `${pages * 100}vh` }} />
    </div>
    </>
  );
}

export default App;
