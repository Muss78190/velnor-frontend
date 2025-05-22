// src/components/GalaxyCanvas.js
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';

function Stars() {
  const ref = useRef();
  // Génère positions aléatoires pour 5000 étoiles
  const positions = useMemo(() => {
    const arr = new Float32Array(5000 * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        size={0.02}
        color="#ff00cc"
        sizeAttenuation
      />
    </Points>
  );
}

export default function GalaxyCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
    >
      <Stars />
      <Preload all />
    </Canvas>
  );
}
