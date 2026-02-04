'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, Bounds } from '@react-three/drei';
import { Suspense } from 'react';
import type { Group, Object3D } from 'three';

// Iron Man model with hover face mask animation
function IronMan() {
  const groupRef = useRef<Group | null>(null);
  const maskRef = useRef<Object3D | null>(null);
  const { scene } = useGLTF('/models/ironman.glb') as any;

  // Hover/open state in [0..1]
  const openTarget = useRef(0); // desired amount
  const openCurrent = useRef(0); // displayed amount (lerped)

  // Find a mask/faceplate node by common names
  useEffect(() => {
    if (!scene) return;
    const nameHints = ['FacePlate', 'Faceplate', 'Mask', 'Helmet_Front', 'HelmetFront', 'Visor', 'Face'];
    let found: Object3D | null = null;
    for (const hint of nameHints) {
      const obj = scene.getObjectByName(hint);
      if (obj) {
        found = obj as Object3D;
        break;
      }
    }
    if (!found) {
      scene.traverse((obj: any) => {
        if (found) return;
        const n = obj.name?.toLowerCase?.() || '';
        if (['faceplate', 'mask', 'visor', 'helmet'].some((h) => n.includes(h))) {
          found = obj;
        }
      });
    }
    maskRef.current = found;
  }, [scene]);

  // Lerp the mask animation each frame
  useFrame((_, delta) => {
    // smooth toward target
    openCurrent.current += (openTarget.current - openCurrent.current) * Math.min(1, delta * 6);
    const amt = openCurrent.current; // 0 closed, 1 open
    if (maskRef.current) {
      // Rotate faceplate up; adjust axis/angle if your model differs
      maskRef.current.rotation.x = -0.9 * amt;
      maskRef.current.position.y = 0.02 * amt;
    }
    // Subtle idle rotation for the whole suit
    if (groupRef.current) {
      const t = performance.now() / 1000;
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    }
  });

  // Pointer events to control opening amount
  const onPointerOver = () => {
    openTarget.current = 1;
  };
  const onPointerOut = () => {
    openTarget.current = 0;
  };
  const onPointerMove = (e: any) => {
    // Map cursor Y (top->bottom) to open [1..0] for a nicer feel
    const y = e.uv?.y ?? 0.5; // needs events from mesh; fallback
    openTarget.current = Math.min(1, Math.max(0, 1 - y));
  };

  // Also respond to global mouse movement so it works even if content overlays the canvas
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const y = e.clientY / window.innerHeight;
      openTarget.current = Math.min(1, Math.max(0, 1 - y));
    };
    const onLeave = () => {
      openTarget.current = 0;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <group
      ref={groupRef}
      position={[0, 0.5, 0]} // lower it slightly so face sits lower
      rotation={[0, Math.PI, 0]} // face the camera (Y 180° in radians)
      scale={1}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onPointerMove={onPointerMove}
    >
      {/* Fit the model to cover the viewport (a little more zoom) */}
      <Bounds fit clip observe margin={0.6}>
        <primitive object={scene} />
      </Bounds>
    </group>
  );
}

// Main 3D Scene component
export default function Scene3D() {
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="w-full h-full" />;
  }
  
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ fov: 45 }} className="!w-full !h-full">
        <Suspense fallback={null}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />

          {/* Locked controls for slight interaction without orbiting away */}
          <PresentationControls global rotation={[0, 0, 0]} polar={[-0.05, 0.12]} azimuth={[-0.12, 0.12]} snap>
            <IronMan />
          </PresentationControls>

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload the Iron Man model to avoid pop-in
useGLTF.preload('/models/ironman.glb');