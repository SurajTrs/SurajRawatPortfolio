'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Car {
  id: number;
  x: number;
  y: number;
  speed: number;
  direction: 'left' | 'right';
  size: number;
  color: string;
}

export default function CarAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Create car elements
    const cars: Car[] = [];
    const carColors = ['#4f46e5', '#8b5cf6', '#6366f1', '#818cf8', '#a78bfa'];
    
    for (let i = 0; i < 8; i++) {
      const direction = Math.random() > 0.5 ? 'left' : 'right';
      const size = Math.random() * 30 + 20; // Car size between 20-50px
      
      cars.push({
        id: i,
        x: direction === 'right' ? -size : containerWidth,
        y: Math.random() * containerHeight,
        speed: Math.random() * 2 + 1,
        direction,
        size,
        color: carColors[Math.floor(Math.random() * carColors.length)]
      });
      
      const carElement = document.createElement('div');
      carElement.className = 'absolute';
      carElement.id = `car-${i}`;
      carElement.style.width = `${size * 2}px`;
      carElement.style.height = `${size}px`;
      carElement.style.backgroundColor = 'transparent';
      carElement.style.left = `${cars[i].x}px`;
      carElement.style.top = `${cars[i].y}px`;
      carElement.style.zIndex = '1';
      carElement.innerHTML = `
        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="20" rx="5" fill="${cars[i].color}" />
          <rect x="10" y="30" width="80" height="15" rx="3" fill="${cars[i].color}" />
          <circle cx="25" cy="45" r="5" fill="#333" />
          <circle cx="75" cy="45" r="5" fill="#333" />
          <rect x="${direction === 'left' ? '70' : '20'}" y="25" width="10" height="5" fill="#ffff00" />
        </svg>
      `;
      
      if (direction === 'left') {
        carElement.style.transform = 'scaleX(-1)';
      }
      
      container.appendChild(carElement);
    }
    
    // Animate cars
    const animateCars = () => {
      cars.forEach((car, index) => {
        const carElement = document.getElementById(`car-${car.id}`);
        if (!carElement) return;
        
        if (car.direction === 'right') {
          car.x += car.speed;
          if (car.x > containerWidth) {
            car.x = -car.size * 2;
            car.y = Math.random() * containerHeight;
          }
        } else {
          car.x -= car.speed;
          if (car.x < -car.size * 2) {
            car.x = containerWidth;
            car.y = Math.random() * containerHeight;
          }
        }
        
        carElement.style.left = `${car.x}px`;
        carElement.style.top = `${car.y}px`;
      });
      
      requestAnimationFrame(animateCars);
    };
    
    const animationId = requestAnimationFrame(animateCars);
    
    return () => {
      cancelAnimationFrame(animationId);
      cars.forEach(car => {
        const element = document.getElementById(`car-${car.id}`);
        if (element) element.remove();
      });
    };
  }, []);
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden -z-5">
      {/* Cars will be added here dynamically */}
    </div>
  );
}