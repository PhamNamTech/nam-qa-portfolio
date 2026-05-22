"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

const qaCards = [
  {
    title: "Test Cases",
    detail: "12 sample cases",
    className: "left-5 top-20",
  },
  {
    title: "Bug Reports",
    detail: "Jira-style format",
    className: "right-5 top-20",
    emphasis: true,
  },
  {
    title: "API Testing",
    detail: "Postman collection",
    className: "left-6 bottom-8",
  },
  {
    title: "Automation",
    detail: "Selenium WebDriver",
    className: "right-6 bottom-20",
  },
  {
    title: "SQL Validation",
    detail: "Data checking",
    className: "right-28 bottom-7 hidden lg:block",
  },
];

function Laptop() {
  return (
    <group position={[-0.35, -0.34, 0]} rotation={[0, -0.16, 0]}>
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
    <group ref={group} position={[1.2, 0.72, 0.25]} rotation={[0.08, -0.45, 0]}>
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
    group.current.scale.setScalar(1 + Math.sin(clock.elapsedTime * 1.6) * 0.025);
  });

  const nodes: [number, number, number][] = [
    [-0.34, 0.16, 0],
    [0.22, 0.42, 0],
    [0.38, -0.18, 0],
  ];

  return (
    <group ref={group} position={[-1.58, 0.74, 0.45]}>
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
    <group position={[-1.55, -0.66, -0.08]} rotation={[0, 0.35, 0]}>
      {[-0.2, 0.02, 0.24].map((y, index) => (
        <mesh key={y} ref={index === 2 ? top : undefined} position={[0, y, 0]}>
          <cylinderGeometry args={[0.42, 0.42, 0.16, 36]} />
          <meshStandardMaterial color={index === 2 ? "#2563eb" : "#334155"} roughness={0.55} />
        </mesh>
      ))}
    </group>
  );
}

function BugReportItem() {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.position.y = -0.48 + Math.sin(clock.elapsedTime * 1.3) * 0.035;
  });

  return (
    <group ref={group} position={[1.35, -0.48, -0.38]} rotation={[0.04, -0.32, 0]}>
      <mesh>
        <boxGeometry args={[0.92, 0.72, 0.05]} />
        <meshStandardMaterial color="#fff7ed" roughness={0.75} />
      </mesh>
      <mesh position={[-0.28, 0.18, 0.04]}>
        <sphereGeometry args={[0.09, 18, 18]} />
        <meshStandardMaterial color="#f97316" roughness={0.55} />
      </mesh>
      <mesh position={[0.16, 0.18, 0.04]}>
        <boxGeometry args={[0.42, 0.045, 0.02]} />
        <meshStandardMaterial color="#fb923c" />
      </mesh>
      <mesh position={[0, -0.08, 0.04]}>
        <boxGeometry args={[0.62, 0.04, 0.02]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      <mesh position={[-0.08, -0.25, 0.04]}>
        <boxGeometry args={[0.46, 0.04, 0.02]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>
    </group>
  );
}

function AutomationFlow() {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.z = Math.sin(clock.elapsedTime * 0.8) * 0.025;
  });

  return (
    <group ref={group} position={[0.08, -1.12, 0.48]} rotation={[0, -0.1, 0]}>
      {[-0.52, 0, 0.52].map((x, index) => (
        <mesh key={x} position={[x, 0, 0]}>
          <boxGeometry args={[0.3, 0.16, 0.08]} />
          <meshStandardMaterial color={index === 1 ? "#10b981" : "#2563eb"} roughness={0.58} />
        </mesh>
      ))}
      {[-0.26, 0.26].map((x) => (
        <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.012, 0.012, 0.24, 8]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.75) * 0.035;
    group.current.rotation.y = 0.08 + Math.sin(clock.elapsedTime * 0.45) * 0.035;
  });

  return (
    <>
      <ambientLight intensity={0.95} />
      <directionalLight position={[4, 5, 3]} intensity={0.95} />
      <group ref={group} position={[0, -0.03, 0]} rotation={[0, 0.08, 0]} scale={1.24}>
        <Laptop />
        <ChecklistCard />
        <ApiNodes />
        <Database />
        <BugReportItem />
        <AutomationFlow />
      </group>
    </>
  );
}

export default function QAWorkspace3D() {
  return (
    <div className="relative h-[390px] w-full overflow-hidden md:h-[430px]">
      <div className="pointer-events-none absolute left-5 top-5 z-10">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-600">QA Workspace</p>
        <p className="mt-1 text-sm font-semibold text-slate-700">
          Manual &bull; API &bull; Automation &bull; SQL
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
        {qaCards.map((card, index) => (
          <div
            key={card.title}
            className={`qa-command-card absolute ${card.className} ${
              card.emphasis ? "qa-command-card-alert" : ""
            }`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <p className="text-xs font-bold text-slate-950">{card.title}</p>
            <p className="mt-0.5 text-[11px] font-medium text-slate-500">{card.detail}</p>
          </div>
        ))}
      </div>

      <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [3.35, 2.35, 4.05], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      </div>
    </div>
  );
}
