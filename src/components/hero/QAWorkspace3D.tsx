"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function Laptop() {
  return (
    <group position={[-0.6, -0.35, 0]} rotation={[0, -0.18, 0]}>
      <mesh position={[0, -0.45, 0]} rotation={[0.08, 0, 0]}>
        <boxGeometry args={[2.7, 0.08, 1.6]} />
        <meshStandardMaterial color="#0f172a" roughness={0.65} />
      </mesh>
      <mesh position={[0, 0.28, -0.72]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[2.45, 1.45, 0.08]} />
        <meshStandardMaterial color="#1e293b" roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.28, -0.66]} rotation={[-0.08, 0, 0]}>
        <planeGeometry args={[2.2, 1.16]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.7} />
      </mesh>
      <mesh position={[-0.82, 0.72, -0.64]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[0.34, 0.05, 0.02]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
      <mesh position={[-0.3, 0.72, -0.64]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[0.42, 0.05, 0.02]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>
      {[-0.1, -0.34, -0.58].map((y, index) => (
        <group key={y} position={[0, y + 0.34, -0.63]} rotation={[-0.08, 0, 0]}>
          <mesh position={[-0.75, 0, 0]}>
            <sphereGeometry args={[0.055, 16, 16]} />
            <meshStandardMaterial color={index === 1 ? "#10b981" : "#2563eb"} />
          </mesh>
          <mesh position={[-0.22, 0, 0]}>
            <boxGeometry args={[0.72, 0.045, 0.02]} />
            <meshStandardMaterial color="#94a3b8" />
          </mesh>
          <mesh position={[0.58, 0, 0]}>
            <boxGeometry args={[0.46, 0.045, 0.02]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function ChecklistCard() {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.position.y = 0.62 + Math.sin(clock.elapsedTime * 1.2) * 0.06;
  });

  return (
    <group ref={group} position={[1.35, 0.62, 0.25]} rotation={[0.08, -0.45, 0]}>
      <mesh>
        <boxGeometry args={[1.18, 1.32, 0.05]} />
        <meshStandardMaterial color="#ffffff" roughness={0.75} />
      </mesh>
      {[0.35, 0.08, -0.19].map((y, index) => (
        <group key={y} position={[0, y, 0.04]}>
          <mesh position={[-0.42, 0, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#10b981" />
          </mesh>
          <mesh position={[0.04, 0, 0]}>
            <boxGeometry args={[0.62 - index * 0.08, 0.04, 0.02]} />
            <meshStandardMaterial color={index === 0 ? "#2563eb" : "#94a3b8"} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function ApiNodes() {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.08;
  });

  const nodes: [number, number, number][] = [
    [-0.34, 0.16, 0],
    [0.22, 0.42, 0],
    [0.38, -0.18, 0],
  ];

  return (
    <group ref={group} position={[-1.85, 0.62, 0.35]}>
      {nodes.map((position, index) => (
        <mesh key={position.join("-")} position={position}>
          <sphereGeometry args={[0.09, 18, 18]} />
          <meshStandardMaterial color={index % 2 ? "#10b981" : "#2563eb"} />
        </mesh>
      ))}
      <mesh position={[-0.1, 0.25, 0]} rotation={[0, 0, 1.03]}>
        <cylinderGeometry args={[0.015, 0.015, 0.62, 8]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      <mesh position={[0.31, 0.18, 0]} rotation={[0, 0, -0.55]}>
        <cylinderGeometry args={[0.015, 0.015, 0.56, 8]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
    </group>
  );
}

function Database() {
  const top = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!top.current) return;
    top.current.position.y = -0.68 + Math.sin(clock.elapsedTime * 1.1) * 0.025;
  });

  return (
    <group position={[-1.75, -0.62, -0.15]} rotation={[0, 0.35, 0]}>
      {[-0.2, 0.02, 0.24].map((y, index) => (
        <mesh key={y} ref={index === 2 ? top : undefined} position={[0, y, 0]}>
          <cylinderGeometry args={[0.42, 0.42, 0.16, 36]} />
          <meshStandardMaterial color={index === 2 ? "#2563eb" : "#334155"} roughness={0.55} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 3]} intensity={0.9} />
      <group position={[0, 0.02, 0]} rotation={[0, 0.08, 0]} scale={1.08}>
        <Laptop />
        <ChecklistCard />
        <ApiNodes />
        <Database />
      </group>
    </>
  );
}

export default function QAWorkspace3D() {
  return (
    <div className="h-[320px] w-full md:h-[360px]" aria-hidden="true">
      <Canvas
        camera={{ position: [4, 3, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
