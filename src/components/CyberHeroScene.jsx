import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function FuturisticCore() {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const outerRingRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = state.pointer.x * 0.15;
    const mouseY = state.pointer.y * 0.15;

    // Subtle, slow, elegant rotation (no distracting fast spin)
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.08 + mouseY;
      meshRef.current.rotation.y = time * 0.12 + mouseX;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -time * 0.06 + mouseY * 0.5;
      wireframeRef.current.rotation.y = -time * 0.1 + mouseX * 0.5;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = time * 0.15;
      outerRingRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.2) * 0.05;
    }
  });

  return (
    <group>
      {/* Outer Gyro Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.4, 0.025, 16, 90]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Secondary Orbital Ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.1, 0.018, 16, 80]} />
        <meshStandardMaterial
          color="#756BFF"
          emissive="#756BFF"
          emissiveIntensity={0.5}
          roughness={0.3}
        />
      </mesh>

      {/* Futuristic Wireframe Icosahedron */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.65, 2]} />
        <meshStandardMaterial
          color="#00D4FF"
          wireframe
          transparent
          opacity={0.3}
          emissive="#00D4FF"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Internal Core Sphere */}
      <Sphere ref={meshRef} args={[1.05, 32, 32]}>
        <meshStandardMaterial
          color="#1E1B4B"
          emissive="#756BFF"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </group>
  );
}

export default function CyberHeroScene() {
  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[520px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[8, 8, 8]} intensity={1.2} color="#00D4FF" />
        <pointLight position={[-8, -8, -8]} intensity={1.0} color="#8B5CF6" />
        <directionalLight position={[0, 4, 4]} intensity={0.8} color="#FFFFFF" />

        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
            <FuturisticCore />
          </Float>
        </Suspense>
      </Canvas>

      {/* Ambient bottom glow reflection */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-10 bg-gradient-to-r from-[#00D4FF]/15 via-[#756BFF]/20 to-transparent blur-2xl pointer-events-none rounded-full" />
    </div>
  );
}
