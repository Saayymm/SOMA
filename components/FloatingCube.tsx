'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingCubeProps {
  position: [number, number, number];
}

export function FloatingCube({ position }: FloatingCubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color="#4f46e5" 
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}
