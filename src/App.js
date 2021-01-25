import './App.css';
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, Dom } from 'react-three-fiber';
import { Perf } from 'r3f-perf';
import Box from './components/Box';
import Timeline from './components/Timeline';
import { OrbitControls } from '@react-three/drei';

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  const onScroll = e => {
    const height = document.body.scrollHeight;
    const viewHeight = window.innerHeight;
    const scroll = window.scrollY;
    const percent = scroll / (height - viewHeight);

    setScrollTop(scroll);
    setScrollPercent(percent);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    onScroll();
  });

  const pages = 5;

  return (
    <>
    <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        <Box percent={scrollPercent} />
        <Timeline percent={scrollPercent} />
        <Perf />
      </Canvas>
    <div>
      <div style={{ height: `${pages * 100}vh` }} />
    </div>
    </>
  );
}

export default App;
