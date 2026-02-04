'use client';

import { useState, useEffect, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Float, Text } from '@react-three/drei';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  title?: string;
  glowColor?: string;
  rotationIntensity?: number;
}

// 3D Card component that renders content in a 3D space
export default function Card3D({ 
  children, 
  className = '', 
  title = '',
  glowColor = '#4f46e5',
  rotationIntensity = 0.2
}: Card3DProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Detect system/theme preference to adjust light/dark materials
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    const update = () => setIsDark(!!mq?.matches || document.documentElement.classList.contains('dark'));
    update();
    mq?.addEventListener?.('change', update);
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      mq?.removeEventListener?.('change', update);
      obs.disconnect();
    };
  }, []);
  
  if (!mounted) {
    return <div className={`relative ${className}`}>{children}</div>;
  }
  
  // Colors for light vs dark
  const baseColor = isDark ? '#1a1a1a' : '#f3f4f6'; // gray-100 in light
  const textColor = isDark ? '#ffffff' : '#111827'; // gray-900 in light
  const baseOpacity = isDark ? 0.8 : 0.9;
  const edgeOpacity = isDark ? 0.5 : 0.2;

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 3D Canvas layer */}
      <div className="absolute inset-0 -z-10">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} />
          
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 10, Math.PI / 10]}
            azimuth={[-Math.PI / 10, Math.PI / 10]}
            snap
          >
            <Float rotationIntensity={rotationIntensity}>
              {/* 3D Card */}
              <group position={[0, 0, 0]}>
                {/* Card base */}
                <mesh position={[0, 0, -0.05]} receiveShadow>
                  <boxGeometry args={[3.5, 2, 0.1]} />
                  <meshStandardMaterial 
                    color={baseColor}
                    metalness={0.5}
                    roughness={0.2}
                    transparent
                    opacity={baseOpacity}
                  />
                </mesh>
                
                {/* Glowing edges */}
                <mesh position={[0, 0, -0.1]}>
                  <boxGeometry args={[3.6, 2.1, 0.05]} />
                  <meshBasicMaterial 
                    color={glowColor} 
                    transparent
                    opacity={edgeOpacity}
                  />
                </mesh>
                
                {/* Title if provided */}
                {title && (
                  <Text
                    position={[0, 0.8, 0]}
                    fontSize={0.2}
                    color={textColor}
                    anchorX="center"
                    anchorY="middle"
                  >
                    {title}
                  </Text>
                )}
              </group>
            </Float>
          </PresentationControls>
        </Canvas>
      </div>
      
      {/* Actual content */}
      <div className="relative z-10 rounded-xl p-6 border border-neutral-200 dark:border-blue-300/20 bg-white dark:bg-blue-900/30 backdrop-blur">
        {children}
      </div>
    </motion.div>
  );
}