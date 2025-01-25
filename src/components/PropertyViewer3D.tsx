import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

export default function PropertyViewer3D() {
  return (
    <div className="h-[400px] bg-gray-100 rounded-lg">
      <Canvas camera={{ position: [5, 5, 5] }}>
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {/* 3D model will be loaded here when available */}
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}