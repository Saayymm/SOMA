'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import { FloatingCube } from './FloatingCube';
import { FloatingSphere } from './FloatingSphere';
import { FloatingTorus } from './FloatingTorus';

export function Scene3D() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4f46e5" />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <FloatingCube position={[-3, 2, 0]} />
          <FloatingSphere position={[3, -1, -2]} />
          <FloatingTorus position={[0, -2, -3]} />
          
          <mesh position={[-2, -1, 1]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshStandardMaterial color="#8b5cf6" />
          </mesh>
          
          <mesh position={[2, 2, -1]} rotation={[0, 0, 0]}>
            <octahedronGeometry args={[0.6]} />
            <meshStandardMaterial color="#06b6d4" wireframe />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
