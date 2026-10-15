'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const innerGroupRef = useRef<THREE.Group>(null);
  const sphere1Ref = useRef<THREE.Mesh>(null);
  const sphere2Ref = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    gsap.to(groupRef.current.position, {
      y: 5,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    gsap.to(groupRef.current.rotation, {
      y: Math.PI,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });
  }, []);

  useFrame((state) => {
    if (!innerGroupRef.current) return;
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;

    innerGroupRef.current.rotation.x += 0.05 * (targetY - innerGroupRef.current.rotation.x);
    innerGroupRef.current.rotation.y += 0.05 * (targetX - innerGroupRef.current.rotation.y);
  });

  return (
    <group ref={groupRef}>
      <group ref={innerGroupRef}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2} floatingRange={[-0.5, 0.5]}>
          <mesh ref={sphere1Ref} position={[-2, 1, -2]}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial 
              color="#436252" 
              roughness={0.4} 
              metalness={0.1} 
              distort={0.4} 
              speed={2} 
            />
          </mesh>
        </Float>

        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1} floatingRange={[-1, 1]}>
          <mesh ref={sphere2Ref} position={[2.5, -1, -3]}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <MeshDistortMaterial 
              color="#944a1c" 
              roughness={0.3} 
              metalness={0.2} 
              distort={0.3} 
              speed={1.5} 
            />
          </mesh>
        </Float>

        <Float speed={3} rotationIntensity={2} floatIntensity={2}>
          <mesh ref={torusRef} position={[0, -3, -1]} rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[1.2, 0.4, 32, 64]} />
            <MeshDistortMaterial 
              color="#accebb" 
              roughness={0.2} 
              metalness={0.1}
              distort={0.2}
              speed={3}
            />
          </mesh>
        </Float>
      </group>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#436252" />
        <Environment preset="city" />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
