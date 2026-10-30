"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Stars() {
  const geometry = useMemo(() => {
    const count = 3400;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 9 + Math.random() * 38;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    const result = new THREE.BufferGeometry();
    result.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return result;
  }, []);
  const stars = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (stars.current) stars.current.rotation.y += delta * 0.004;
  });
  return <points ref={stars} geometry={geometry}><pointsMaterial color="#c9d9ff" size={0.045} transparent opacity={0.86} sizeAttenuation depthWrite={false} /></points>;
}

function Nebula() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.025;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.06;
  });
  return (
    <group ref={group}>
      <mesh position={[2.5, 0.4, -5]}>
        <sphereGeometry args={[2.9, 40, 40]} />
        <meshBasicMaterial color="#3f38a8" transparent opacity={0.12} side={THREE.BackSide} depthWrite={false} />
      </mesh>
      <mesh position={[3.1, 0.6, -4.4]}>
        <sphereGeometry args={[1.8, 40, 40]} />
        <meshBasicMaterial color="#087fbd" transparent opacity={0.12} side={THREE.BackSide} depthWrite={false} />
      </mesh>
      <mesh position={[-4, -1.2, -7]}>
        <sphereGeometry args={[3.1, 40, 40]} />
        <meshBasicMaterial color="#5c248b" transparent opacity={0.09} side={THREE.BackSide} depthWrite={false} />
      </mesh>
      <mesh position={[-1.6, 2.8, -9]} rotation={[0.3, 0.2, -0.35]}>
        <sphereGeometry args={[4.2, 40, 40]} />
        <meshBasicMaterial color="#174e9c" transparent opacity={0.075} side={THREE.BackSide} depthWrite={false} />
      </mesh>
      <mesh position={[4.5, -2.4, -8]} rotation={[0.1, 0.6, 0.25]}>
        <sphereGeometry args={[3.5, 40, 40]} />
        <meshBasicMaterial color="#782aab" transparent opacity={0.065} side={THREE.BackSide} depthWrite={false} />
      </mesh>
      <mesh position={[2.3, 0.4, -1.5]} rotation={[0.8, 0.2, 0.1]}>
        <torusGeometry args={[1.8, 0.009, 8, 180]} />
        <meshBasicMaterial color="#8bdcff" transparent opacity={0.44} />
      </mesh>
      <mesh position={[-2.6, 1.5, -6]} rotation={[0.9, 0.2, 0.7]}>
        <torusGeometry args={[2.4, 0.006, 6, 180]} />
        <meshBasicMaterial color="#9c8cff" transparent opacity={0.22} />
      </mesh>
      <mesh position={[2.3, 0.4, -1.5]}>
        <sphereGeometry args={[0.58, 48, 48]} />
        <meshStandardMaterial color="#9fc8ff" emissive="#425bff" emissiveIntensity={1.6} roughness={0.24} metalness={0.16} />
      </mesh>
    </group>
  );
}

function DriftCamera() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(t * 0.07) * 0.16;
    state.camera.position.y = Math.cos(t * 0.08) * 0.08;
    state.camera.lookAt(0, 0, -2);
  });
  return null;
}

export default function CosmicCanvas() {
  return (
    <div className="cosmic-background" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 10], fov: 48, near: 0.1, far: 100 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#050611"]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 2, 2]} intensity={18} color="#879bff" distance={28} />
        <pointLight position={[-4, -2, -2]} intensity={11} color="#8b5cf6" distance={25} />
        <pointLight position={[0, 4, -6]} intensity={7} color="#2588ff" distance={24} />
        <Stars />
        <Nebula />
        <DriftCamera />
      </Canvas>
      <div className="cosmic-overlay" />
    </div>
  );
}
