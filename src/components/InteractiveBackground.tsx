'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Vector3, Color } from 'three';

// Particle system for background
function ParticleField({ count = 1000 }) {
  const mesh = useRef();
  const { viewport, mouse } = useThree();
  
  // Create particles with random positions
  const particles = Array.from({ length: count }, () => ({
    position: [
      (Math.random() - 0.5) * viewport.width * 3,
      (Math.random() - 0.5) * viewport.height * 3,
      (Math.random() - 0.5) * 10
    ],
    size: Math.random() * 0.05 + 0.01,
    color: new Color().setHSL(Math.random(), 0.7, 0.5)
  }));
  
  // Animate particles
  useFrame((state) => {
    if (!mesh.current) return;
    
    // Rotate the entire particle field slowly
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    
    // Move particles based on mouse position
    mesh.current.position.x = mouse.x * 0.5;
    mesh.current.position.y = mouse.y * 0.5;
  });
  
  return (
    <group ref={mesh}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial 
            color={particle.color} 
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

// Grid for perspective
function Grid() {
  const gridRef = useRef();
  
  useFrame((state) => {
    if (!gridRef.current) return;
    
    // Animate grid
    gridRef.current.position.z = (state.clock.getElapsedTime() % 10) - 5;
  });
  
  return (
    <group ref={gridRef} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[100, 100, '#4f46e5', '#1a1a1a']} />
    </group>
  );
}

// Main InteractiveBackground component
export default function InteractiveBackground() {
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="w-full h-full" />;
  }
  
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#050505']} />
        
        <ParticleField count={500} />
        <Grid />
        
        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom 
            intensity={0.5} 
            luminanceThreshold={0.2} 
            luminanceSmoothing={0.9} 
            blendFunction={BlendFunction.SCREEN} 
          />
          <ChromaticAberration 
            offset={[0.002, 0.002]} 
            blendFunction={BlendFunction.NORMAL}
            radialModulation={true}
            modulationOffset={0.5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}