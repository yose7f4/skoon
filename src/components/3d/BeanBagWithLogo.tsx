'use client';

import React, { useMemo, useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Decal, useTexture } from '@react-three/drei';
import * as THREE from 'three';

/* ============================================================
   Teardrop Geometry for B2B custom bean bag
   ============================================================ */

function useTeardropGeometry() {
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1.0, 64, 64);
    const pos = geo.attributes.position;
    const v = new THREE.Vector3();

    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);

      const normalizedY = (v.y + 1.0) / 2.0;
      const taper = 1.0 - Math.pow(normalizedY, 1.8) * 0.7;
      v.x *= taper;
      v.z *= taper;
      v.y *= 1.4;

      if (v.y < -1.0) {
        v.y = -1.0 - (v.y + 1.0) * 0.3;
        const bottomFlare = 1.0 + Math.abs(v.y + 1.0) * 0.2;
        v.x *= bottomFlare;
        v.z *= bottomFlare;
      }

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
   Logo Decal — renders uploaded logo onto the mesh
   ============================================================ */

function LogoDecal({ logoUrl }: { logoUrl: string }) {
  const texture = useTexture(logoUrl);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  }, [texture]);

  return (
    <Decal
      position={[0, 0.3, 0.85]}
      rotation={[0, 0, 0]}
      scale={[0.7, 0.7, 0.7]}
    >
      <meshStandardMaterial
        map={texture}
        transparent
        polygonOffset
        polygonOffsetFactor={-1}
        roughness={0.6}
      />
    </Decal>
  );
}

/* ============================================================
   Custom Bean Bag Mesh with optional logo
   ============================================================ */

interface CustomBeanBagMeshProps {
  color: string;
  logoUrl?: string | null;
}

function CustomBeanBagMesh({ color, logoUrl }: CustomBeanBagMeshProps) {
  const geometry = useTeardropGeometry();
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      castShadow
      receiveShadow
      position={[0, 0.5, 0]}
    >
      <meshStandardMaterial
        color={color}
        roughness={0.85}
        metalness={0.02}
        envMapIntensity={0.4}
      />
      {logoUrl && (
        <Suspense fallback={null}>
          <LogoDecal logoUrl={logoUrl} />
        </Suspense>
      )}
    </mesh>
  );
}

/* ============================================================
   Main B2B Viewer with Logo Upload
   ============================================================ */

interface BeanBagWithLogoProps {
  color?: string;
  logoUrl?: string | null;
  onLogoChange?: (url: string | null) => void;
  className?: string;
  showUploadButton?: boolean;
}

export default function BeanBagWithLogo({
  color = '#1A1A1A',
  logoUrl = null,
  onLogoChange,
  className = '',
  showUploadButton = true,
}: BeanBagWithLogoProps) {
  const [internalLogoUrl, setInternalLogoUrl] = useState<string | null>(logoUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync external logoUrl prop
  useEffect(() => {
    setInternalLogoUrl(logoUrl);
  }, [logoUrl]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Revoke old URL to prevent memory leaks
      if (internalLogoUrl?.startsWith('blob:')) {
        URL.revokeObjectURL(internalLogoUrl);
      }
      const newUrl = URL.createObjectURL(file);
      setInternalLogoUrl(newUrl);
      onLogoChange?.(newUrl);
    }
  };

  const handleRemoveLogo = () => {
    if (internalLogoUrl?.startsWith('blob:')) {
      URL.revokeObjectURL(internalLogoUrl);
    }
    setInternalLogoUrl(null);
    onLogoChange?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative h-[500px] rounded-2xl overflow-hidden bg-surface">
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin" />
            </div>
          }
        >
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

            <ambientLight intensity={0.6} />
            <directionalLight
              position={[5, 8, 5]}
              intensity={1.0}
              castShadow
              shadow-mapSize={[1024, 1024]}
            />
            <directionalLight position={[-4, 3, -3]} intensity={0.3} />

            <ContactShadows
              position={[0, -0.5, 0]}
              opacity={0.4}
              scale={8}
              blur={2}
              far={4}
            />

            <Environment preset="apartment" />

            <CustomBeanBagMesh
              color={color}
              logoUrl={internalLogoUrl}
            />
          </Canvas>
        </Suspense>

        {/* Drag hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full pointer-events-none select-none">
          Drag to rotate · Scroll to zoom
        </div>
      </div>

      {/* Upload controls */}
      {showUploadButton && (
        <div className="flex items-center gap-3 mt-4">
          <label className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-lg cursor-pointer text-sm font-medium hover:opacity-90 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Upload your logo
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/svg+xml,image/webp"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>

          {internalLogoUrl && (
            <button
              onClick={handleRemoveLogo}
              className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Remove logo
            </button>
          )}
        </div>
      )}
    </div>
  );
}
