'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface ProjectTitleProps {
  title: string;
  color?: string;
  floatIntensity?: number;
  rotationSpeed?: number;
}

const ProjectTitle = ({
  title,
  color = '#6366f1',
  floatIntensity = 0.5,
  rotationSpeed = 0.3
}: ProjectTitleProps) => {
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-32 mb-8"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float
          speed={2}
          rotationIntensity={floatIntensity}
          floatIntensity={floatIntensity}
        >
          <Center>
            <Text3D
              font="/fonts/helvetiker_bold.typeface.json"
              size={1}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              {title}
              <meshStandardMaterial 
                color={color} 
                emissive={color}
                emissiveIntensity={0.5}
                roughness={0.1}
                metalness={0.8}
              />
            </Text3D>
          </Center>
        </Float>
      </Canvas>
    </motion.div>
  );
};

export default ProjectTitle;