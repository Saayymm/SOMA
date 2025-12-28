'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingSphereProps {
  position: [number, number, number];
}

export function FloatingSphere({ position }: FloatingSphereProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.4;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.getElapsedTime() * 1.5) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#ec4899" 
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  );
}
