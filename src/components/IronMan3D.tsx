import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

// This component renders the Iron Man model and animates the face mask on mouse move
type IronManModelProps = { maskOpen: boolean };
function IronManModel({ maskOpen }: IronManModelProps) {
    const group = useRef<THREE.Group>(null);  // Load placeholder Iron Man GLB model
  const { scene, nodes } = useGLTF('/models/ironman.glb') as any;

  // Animate the mask (if` mask mesh is found)
  useFrame((state) => {
    if (nodes && nodes.Mask) {
      // Animate mask rotation based on maskOpen (simple tilt for placeholder)
      nodes.Mask.rotation.x = THREE.MathUtils.lerp(nodes.Mask.rotation.x, maskOpen ? -0.7 : 0, 0.1);
    }
  });

  return <primitive ref={group} object={scene} scale={7} position={[0, -0.5, 0]} />;
}

export default function IronMan3D() {
  const [maskOpen, setMaskOpen] = useState(false);

  // Mouse move handler to animate mask
  const handlePointerMove = (e: any) => {
    // Use clientY and window height to determine mask state
    if (e && typeof e.clientY === 'number') {
      setMaskOpen(e.clientY < window.innerHeight / 2);
    }
  };

  return (
    <Canvas
      style={{ position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh', zIndex: 0 }}
      camera={{ position: [0, 0, 7], fov: 50 }}
      onPointerMove={handlePointerMove}
    >
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 8, 5]} intensity={2} />
      <Environment preset="city" />
      <PerspectiveCamera makeDefault position={[0, 0, 7]} />
      <IronManModel maskOpen={maskOpen} />
    </Canvas>
  );
}

// Preload the GLTF model
useGLTF.preload('/models/ironman.glb');
