'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingTorusProps {
  position: [number, number, number];
}

export function FloatingTorus({ position }: FloatingTorusProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.6;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial 
        color="#10b981" 
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  );
}
