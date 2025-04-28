import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.5;
    mesh.current.rotation.x = Math.sin(t / 4);
    mesh.current.rotation.y = Math.sin(t / 2);
    mesh.current.position.y = Math.sin(t / 1.5) * 0.1;
  });

  return (
    <mesh ref={mesh} scale={[1, 1, 1]} position={[0, 0, 0]}>
      <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />
      <MeshDistortMaterial
        color="#4C60E0"
        attach="material"
        distort={0.3}
        speed={3}
        roughness={0.4}
        metalness={0.8}
      />
    </mesh>
  );
};

const BackgroundCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  
  if (isMobile) return null;

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#7C5DFA" />
        <FloatingShape />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;