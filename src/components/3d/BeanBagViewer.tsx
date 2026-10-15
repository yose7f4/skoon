'use client';

import React, { useMemo, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

/* ============================================================
   Procedural Bean Bag Geometry
   Two shapes: 'nest' (round with indented top) and 'teardrop'
   ============================================================ */

function useNestGeometry() {
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1.2, 64, 64);
    const pos = geo.attributes.position;
    const v = new THREE.Vector3();

    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);

      // Base sag — flatten bottom against floor
      if (v.y < 0) {
        v.y *= 0.6;
        const bottomFactor = Math.abs(v.y / (1.2 * 0.6));
        const flare = 1.0 + bottomFactor * 0.35;
        v.x *= flare;
        v.z *= flare;
      }

      // Top indentation — seat depression where you sit
      if (v.y > 0) {
        const xzDist = Math.sqrt(v.x * v.x + v.z * v.z);
        const seatIndent = Math.exp(-(xzDist * xzDist) / 0.6) * 0.5;
        v.y -= seatIndent;

        // Slight collar taper
        const topFactor = v.y / 1.2;
        const pinch = 1.0 - topFactor * 0.12;
        v.x *= pinch;
        v.z *= pinch;
      }

      // Subtle fabric wrinkles
      const wrinkle =
        Math.sin(v.x * 5.5) * Math.cos(v.z * 5.5) * 0.02 +
        Math.sin(v.y * 9.0) * 0.012;
      v.x += wrinkle;
      v.z += wrinkle;

      pos.setXYZ(i, v.x, v.y, v.z);
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);
  return geometry;
}

function useTeardropGeometry() {
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1.0, 64, 64);
    const pos = geo.attributes.position;
    const v = new THREE.Vector3();

    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);

      // Normalize to [0, 1] range for y
      const normalizedY = (v.y + 1.0) / 2.0; // 0 at bottom, 1 at top

      // Teardrop taper — narrow at top, wide at bottom
      const taper = 1.0 - Math.pow(normalizedY, 1.8) * 0.7;
      v.x *= taper;
      v.z *= taper;

      // Stretch vertically for the elongated shape
      v.y *= 1.4;

      // Flatten the bottom
      if (v.y < -1.0) {
        v.y = -1.0 - (v.y + 1.0) * 0.3;
        const bottomFlare = 1.0 + Math.abs(v.y + 1.0) * 0.2;
        v.x *= bottomFlare;
        v.z *= bottomFlare;
      }

      // Subtle organic creases
      const crease =
        Math.sin(v.x * 4.0 + v.y * 2.0) * Math.cos(v.z * 4.0) * 0.015;
      v.x += crease;
      v.z += crease;

      pos.setXYZ(i, v.x, v.y, v.z);
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);
  return geometry;
}

/* ============================================================
   Bean Bag Mesh Component
   ============================================================ */

interface BeanBagMeshProps {
  style: 'nest' | 'teardrop' | 'lounger' | 'ottoman' | 'cushion';
  color: string;
  autoRotate?: boolean;
}

function BeanBagMesh({ style, color, autoRotate = true }: BeanBagMeshProps) {
  const nestGeo = useNestGeometry();
  const dropGeo = useTeardropGeometry();
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = style === 'nest' ? nestGeo : dropGeo;
  const positionY = style === 'nest' ? 0.35 : 0.5;

  useFrame((_, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      castShadow
      receiveShadow
      position={[0, positionY, 0]}
    >
      <meshStandardMaterial
        color={color}
        roughness={0.85}
        metalness={0.02}
        envMapIntensity={0.4}
      />
    </mesh>
  );
}

/* ============================================================
   Loading Fallback
   ============================================================ */

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin" />
    </div>
  );
}

/* ============================================================
   Main Viewer Component
   ============================================================ */

interface BeanBagViewerProps {
  style?: 'nest' | 'teardrop' | 'lounger' | 'ottoman' | 'cushion';
  color?: string;
  autoRotate?: boolean;
  className?: string;
}

export default function BeanBagViewer({
  style = 'nest',
  color = '#3A3A3A',
  autoRotate = true,
  className = '',
}: BeanBagViewerProps) {
  return (
    <div className={`relative w-full h-[500px] rounded-2xl overflow-hidden bg-surface ${className}`}>
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          camera={{ position: [0, 1.5, 3.5], fov: 42 }}
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <OrbitControls
            makeDefault
            enableDamping
            dampingFactor={0.05}
            minDistance={2}
            maxDistance={7}
            maxPolarAngle={Math.PI / 2 + 0.05}
            enablePan={false}
          />

          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.0}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight position={[-4, 3, -3]} intensity={0.3} />

          {/* Ground shadow */}
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.4}
            scale={8}
            blur={2}
            far={4}
          />

          <Environment preset="apartment" />

          <BeanBagMesh
            style={style}
            color={color}
            autoRotate={autoRotate}
          />
        </Canvas>
      </Suspense>

      {/* Drag hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full pointer-events-none select-none">
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  );
}
