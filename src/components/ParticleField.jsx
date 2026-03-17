import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 200 }) {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sizes[i] = Math.random() * 0.08 + 0.02;
    }
    return { positions, sizes };
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.03;
      mesh.current.rotation.x = Math.sin(t * 0.02) * 0.1;
    }
    if (light.current) {
      light.current.position.x = Math.sin(t * 0.5) * 5;
      light.current.position.y = Math.cos(t * 0.3) * 5;
    }
  });

  return (
    <group ref={mesh}>
      <pointLight ref={light} color="#3b82f6" intensity={2} distance={30} />
      <pointLight position={[5, -3, 2]} color="#06b6d4" intensity={1.5} distance={25} />
      <pointLight position={[-5, 2, -3]} color="#8b5cf6" intensity={1} distance={20} />

      {particles.sizes.map((size, i) => (
        <mesh
          key={i}
          position={[
            particles.positions[i * 3],
            particles.positions[i * 3 + 1],
            particles.positions[i * 3 + 2],
          ]}
        >
          <sphereGeometry args={[size, 8, 8]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#06b6d4' : '#8b5cf6'}
            emissive={i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#06b6d4' : '#8b5cf6'}
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingSpheres() {
  const group = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.children.forEach((child, i) => {
        child.position.y += Math.sin(t * 0.5 + i) * 0.002;
        child.position.x += Math.cos(t * 0.3 + i * 0.5) * 0.001;
      });
    }
  });

  const spheres = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6 - 3,
      ],
      scale: Math.random() * 0.6 + 0.2,
      color: ['#3b82f6', '#06b6d4', '#8b5cf6', '#ec4899', '#10b981', '#60a5fa'][i],
    }));
  }, []);

  return (
    <group ref={group}>
      {spheres.map((s, i) => (
        <mesh key={i} position={s.position}>
          <sphereGeometry args={[s.scale, 32, 32]} />
          <meshStandardMaterial
            color={s.color}
            transparent
            opacity={0.15}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.15} />
        <Particles count={150} />
        <FloatingSpheres />
      </Canvas>
    </div>
  );
}
