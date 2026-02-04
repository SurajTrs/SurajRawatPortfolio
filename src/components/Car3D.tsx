'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera } from '@react-three/drei';
import type { Group } from 'three';

// 3D Car component
interface CarProps {
  position: [number, number, number];
  direction: 'left' | 'right';
  speed: number;
  color: string;
}

function Car({ position, direction, speed, color }: CarProps) {
  const carRef = useRef<Group | null>(null);
  const initialPosition = useRef<[number, number, number]>(position);
  
  useFrame((state, delta) => {
    if (!carRef.current) return;
    
    // Move car based on direction
    if (direction === 'right') {
      carRef.current.position.x += speed * delta;
      carRef.current.rotation.y = Math.PI * 0.5;
    } else {
      carRef.current.position.x -= speed * delta;
      carRef.current.rotation.y = -Math.PI * 0.5;
    }
    
    // Reset position when car goes off screen
    const viewportWidth = 10; // Approximate viewport width in Three.js units
    if (direction === 'right' && carRef.current.position.x > viewportWidth) {
      carRef.current.position.x = -viewportWidth;
      carRef.current.position.y = initialPosition.current[1] + (Math.random() - 0.5) * 4;
    } else if (direction === 'left' && carRef.current.position.x < -viewportWidth) {
      carRef.current.position.x = viewportWidth;
      carRef.current.position.y = initialPosition.current[1] + (Math.random() - 0.5) * 4;
    }
    
    // Add slight bobbing motion
    carRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.005;
  });
  
  return (
    <group ref={carRef} position={position}>
      {/* Car body */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[1, 0.3, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Car top */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[0.6, 0.2, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[0.3, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[-0.3, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[0.3, 0, -0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[-0.3, 0, -0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[0.5, 0.2, 0.15]}>
        <boxGeometry args={[0.05, 0.1, 0.1]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={1} />
      </mesh>
      <mesh position={[0.5, 0.2, -0.15]}>
        <boxGeometry args={[0.05, 0.1, 0.1]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={1} />
      </mesh>
    </group>
  );
}

// Main Car3D component
export default function Car3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Generate cars with random properties
  type CarData = {
    id: number;
    position: [number, number, number];
    direction: 'left' | 'right';
    speed: number;
    color: string;
    scale: number;
  };

  const cars: CarData[] = Array.from({ length: 8 }, (_, i) => {
    const direction = Math.random() > 0.5 ? 'left' : 'right';
    const carColors = ['#4f46e5', '#8b5cf6', '#6366f1', '#818cf8', '#a78bfa'];
    
    return {
      id: i,
      position: [
        direction === 'right' ? -10 : 10, // Start off-screen
        (Math.random() - 0.5) * 4, // Random y position
        (Math.random() - 0.5) * 2  // Random z position for depth
      ],
      direction,
      speed: Math.random() * 2 + 1,
      color: carColors[Math.floor(Math.random() * carColors.length)],
      scale: Math.random() * 0.5 + 0.5 // Random size
    };
  });
  
  return (
    <div className="absolute inset-0 -z-10" ref={containerRef}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        
        {/* Render all cars */}
        {cars.map((car) => (
          <Float key={car.id} speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
            <Car 
              position={car.position} 
              direction={car.direction} 
              speed={car.speed} 
              color={car.color} 
            />
          </Float>
        ))}
        
        {/* Environment lighting */}
        <Environment preset="city" />
        
        {/* Ground plane with grid for perspective */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.2}
            roughness={0.8}
            transparent
            opacity={0.3}
          />
        </mesh>
      </Canvas>
    </div>
  );
}