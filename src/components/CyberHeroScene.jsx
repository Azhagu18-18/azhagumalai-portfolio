import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function FuturisticCore() {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = state.pointer.x * 0.4;
    const mouseY = state.pointer.y * 0.4;

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2 + mouseY;
      meshRef.current.rotation.y = time * 0.25 + mouseX;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -time * 0.15 + mouseY * 0.5;
      wireframeRef.current.rotation.y = -time * 0.3 + mouseX * 0.5;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.4;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group>
      {/* Outer Floating Gyro Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.5, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Secondary Orbital Ring */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 80]} />
        <meshStandardMaterial
          color="#756BFF"
          emissive="#756BFF"
          emissiveIntensity={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Futuristic Wireframe Icosahedron */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.75, 2]} />
        <meshStandardMaterial
          color="#00D4FF"
          wireframe
          transparent
          opacity={0.35}
          emissive="#00D4FF"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Internal Organic Energy Sphere */}
      <Sphere ref={meshRef} args={[1.1, 64, 64]}>
        <MeshDistortMaterial
          color="#756BFF"
          emissive="#38006b"
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.85}
          distort={0.38}
          speed={2.2}
        />
      </Sphere>
    </group>
  );
}

function CyberParticles({ count = 60 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorCyan = new THREE.Color('#00D4FF');
    const colorPurple = new THREE.Color('#8B5CF6');

    for (let i = 0; i < count; i++) {
      const radius = 2.0 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? colorCyan : colorPurple;
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function CyberHeroScene() {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00D4FF" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#8B5CF6" />
        <directionalLight position={[0, 5, 5]} intensity={1} color="#FFFFFF" />

        <Suspense fallback={null}>
          <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
            <FuturisticCore />
            <CyberParticles count={50} />
          </Float>
        </Suspense>
      </Canvas>

      {/* Subtle bottom glow reflection */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-12 bg-gradient-to-r from-[#00D4FF]/20 via-[#756BFF]/30 to-transparent blur-2xl pointer-events-none rounded-full" />
    </div>
  );
}
