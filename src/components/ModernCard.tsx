'use client';

import { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ModernCardProps {
  children: ReactNode;
  className?: string;
}

export default function ModernCard({ children, className = '' }: ModernCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    // Limit rotation to a reasonable range
    const rotX = (mouseY / (rect.height / 2)) * -5; // -5 to 5 degrees
    const rotY = (mouseX / (rect.width / 2)) * 5; // -5 to 5 degrees
    
    setRotateX(rotX);
    setRotateY(rotY);
  };
  
  const handleMouseEnter = () => {
    setScale(1.02);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl bg-card border border-border/40 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX,
        rotateY,
        scale,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            circle at ${50 + (rotateY / 5) * 50}% ${50 + (rotateX / 5) * 50}%,
            rgba(var(--primary-rgb), 0.1) 0%,
            transparent 60%
          )`,
        }}
      />
      
      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
          backgroundPosition: `${100 + rotateY * 10}% ${100 + rotateX * 10}%`,
        }}
      />
    </motion.div>
  );
}