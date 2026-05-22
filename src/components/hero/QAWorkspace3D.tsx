"use client";

import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import type { Group, Mesh } from "three";
import { qaWorkspaceItems, type QaWorkspaceItemId } from "@/data/qaWorkspaceItems";

const desktopCardPositions: Record<QaWorkspaceItemId, string> = {
  "test-cases": "left-5 top-20",
  "bug-reports": "right-5 top-20",
  "api-testing": "left-6 top-40",
  automation: "right-6 top-40",
  "sql-validation": "right-28 top-60 hidden xl:block",
};

function Laptop({ activeItemId }: { activeItemId: QaWorkspaceItemId }) {
  const isActive = activeItemId === "automation";

  return (
    <group position={[-0.35, -0.34, 0]} rotation={[0, -0.16, 0]} scale={isActive ? 1.04 : 1}>
      <mesh position={[0, -0.45, 0]} rotation={[0.08, 0, 0]}>
        <boxGeometry args={[2.7, 0.08, 1.6]} />
        <meshStandardMaterial color="#0f172a" roughness={0.65} />
      </mesh>
      <mesh position={[0, 0.28, -0.72]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[2.45, 1.45, 0.08]} />
        <meshStandardMaterial color={isActive ? "#1d4ed8" : "#1e293b"} roughness={0.55} />
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
            <meshStandardMaterial color={isActive && index === 1 ? "#2563eb" : "#94a3b8"} />
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

function ChecklistCard({ activeItemId }: { activeItemId: QaWorkspaceItemId }) {
  const group = useRef<Group>(null);
  const isActive = activeItemId === "test-cases";

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.position.y = 0.72 + Math.sin(clock.elapsedTime * (isActive ? 1.8 : 1.2)) * (isActive ? 0.09 : 0.06);
    group.current.scale.setScalar(isActive ? 1.07 : 1);
  });

  return (
    <group ref={group} position={[1.2, 0.72, 0.25]} rotation={[0.08, -0.45, 0]}>
      <mesh>
        <boxGeometry args={[1.18, 1.32, 0.05]} />
        <meshStandardMaterial color={isActive ? "#eff6ff" : "#ffffff"} roughness={0.75} />
      </mesh>
      {[0.35, 0.08, -0.19].map((y, index) => (
        <group key={y} position={[0, y, 0.04]}>
          <mesh position={[-0.42, 0, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#10b981" />
          </mesh>
          <mesh position={[0.04, 0, 0]}>
            <boxGeometry args={[0.62 - index * 0.08, 0.04, 0.02]} />
            <meshStandardMaterial color={isActive || index === 0 ? "#2563eb" : "#94a3b8"} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function ApiNodes({ activeItemId }: { activeItemId: QaWorkspaceItemId }) {
  const group = useRef<Group>(null);
  const isActive = activeItemId === "api-testing";

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.08;
    group.current.scale.setScalar(1 + Math.sin(clock.elapsedTime * (isActive ? 2.2 : 1.6)) * (isActive ? 0.06 : 0.025));
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
          <meshStandardMaterial color={isActive ? "#10b981" : index % 2 ? "#10b981" : "#2563eb"} />
        </mesh>
      ))}
      <mesh position={[-0.1, 0.25, 0]} rotation={[0, 0, 1.03]}>
        <cylinderGeometry args={[0.015, 0.015, 0.62, 8]} />
        <meshStandardMaterial color={isActive ? "#10b981" : "#94a3b8"} />
      </mesh>
      <mesh position={[0.31, 0.18, 0]} rotation={[0, 0, -0.55]}>
        <cylinderGeometry args={[0.015, 0.015, 0.56, 8]} />
        <meshStandardMaterial color={isActive ? "#10b981" : "#94a3b8"} />
      </mesh>
    </group>
  );
}

function Database({ activeItemId }: { activeItemId: QaWorkspaceItemId }) {
  const top = useRef<Mesh>(null);
  const group = useRef<Group>(null);
  const isActive = activeItemId === "sql-validation";

  useFrame(({ clock }) => {
    if (top.current) {
      top.current.position.y = 0.24 + Math.sin(clock.elapsedTime * (isActive ? 1.6 : 1.1)) * (isActive ? 0.04 : 0.025);
    }
    if (group.current && isActive) {
      group.current.rotation.y = 0.35 + Math.sin(clock.elapsedTime * 0.8) * 0.08;
    }
  });

  return (
    <group ref={group} position={[-1.55, -0.66, -0.08]} rotation={[0, 0.35, 0]} scale={isActive ? 1.08 : 1}>
      {[-0.2, 0.02, 0.24].map((y, index) => (
        <mesh key={y} ref={index === 2 ? top : undefined} position={[0, y, 0]}>
          <cylinderGeometry args={[0.42, 0.42, 0.16, 36]} />
          <meshStandardMaterial color={isActive || index === 2 ? "#2563eb" : "#334155"} roughness={0.55} />
        </mesh>
      ))}
    </group>
  );
}

function BugReportItem({ activeItemId }: { activeItemId: QaWorkspaceItemId }) {
  const group = useRef<Group>(null);
  const isActive = activeItemId === "bug-reports";

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.position.y = -0.48 + Math.sin(clock.elapsedTime * 1.3) * (isActive ? 0.06 : 0.035);
    group.current.scale.setScalar(isActive ? 1.08 : 1);
  });

  return (
    <group ref={group} position={[1.35, -0.48, -0.38]} rotation={[0.04, -0.32, 0]}>
      <mesh>
        <boxGeometry args={[0.92, 0.72, 0.05]} />
        <meshStandardMaterial color={isActive ? "#ffedd5" : "#fff7ed"} roughness={0.75} />
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
        <meshStandardMaterial color={isActive ? "#f97316" : "#94a3b8"} />
      </mesh>
      <mesh position={[-0.08, -0.25, 0.04]}>
        <boxGeometry args={[0.46, 0.04, 0.02]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>
    </group>
  );
}

function AutomationFlow({ activeItemId }: { activeItemId: QaWorkspaceItemId }) {
  const group = useRef<Group>(null);
  const isActive = activeItemId === "automation";

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.z = Math.sin(clock.elapsedTime * 0.8) * (isActive ? 0.055 : 0.025);
    group.current.scale.setScalar(isActive ? 1.12 : 1);
  });

  return (
    <group ref={group} position={[0.08, -1.12, 0.48]} rotation={[0, -0.1, 0]}>
      {[-0.52, 0, 0.52].map((x, index) => (
        <mesh key={x} position={[x, 0, 0]}>
          <boxGeometry args={[0.3, 0.16, 0.08]} />
          <meshStandardMaterial color={isActive || index === 1 ? "#10b981" : "#2563eb"} roughness={0.58} />
        </mesh>
      ))}
      {[-0.26, 0.26].map((x) => (
        <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.012, 0.012, 0.24, 8]} />
          <meshStandardMaterial color={isActive ? "#10b981" : "#94a3b8"} />
        </mesh>
      ))}
    </group>
  );
}

function Scene({ activeItemId }: { activeItemId: QaWorkspaceItemId }) {
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
      <group ref={group} position={[0, -0.03, 0]} rotation={[0, 0.08, 0]} scale={1.2}>
        <Laptop activeItemId={activeItemId} />
        <ChecklistCard activeItemId={activeItemId} />
        <ApiNodes activeItemId={activeItemId} />
        <Database activeItemId={activeItemId} />
        <BugReportItem activeItemId={activeItemId} />
        <AutomationFlow activeItemId={activeItemId} />
      </group>
    </>
  );
}

export default function QAWorkspace3D() {
  const [activeItemId, setActiveItemId] = useState<QaWorkspaceItemId>("test-cases");
  const [hoveredItemId, setHoveredItemId] = useState<QaWorkspaceItemId | null>(null);
  const activeItem = useMemo(
    () => qaWorkspaceItems.find((item) => item.id === activeItemId) ?? qaWorkspaceItems[0],
    [activeItemId],
  );

  return (
    <div className="relative min-h-[620px] w-full overflow-hidden md:min-h-[660px]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/60" />

      <div className="pointer-events-none absolute left-5 top-5 z-10">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-600">QA Workspace</p>
        <p className="mt-1 text-sm font-semibold text-slate-700">
          Manual &bull; API &bull; Automation &bull; SQL
        </p>
      </div>

      <div className="absolute inset-x-5 top-20 z-20 grid grid-cols-2 gap-2 lg:hidden">
        {qaWorkspaceItems.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={activeItemId === item.id}
            onClick={() => setActiveItemId(item.id)}
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
            className={`qa-command-card relative min-w-0 text-left transition duration-200 hover:-translate-y-1 hover:border-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
              activeItemId === item.id ? "qa-command-card-active" : ""
            } ${hoveredItemId === item.id ? "border-blue-300" : ""}`}
          >
            <span className="block text-xs font-bold text-slate-950">{item.title}</span>
            <span className="mt-0.5 block text-[11px] font-medium text-slate-500">{item.subtitle}</span>
          </button>
        ))}
      </div>

      <div className="absolute inset-0 z-40 hidden lg:block">
        {qaWorkspaceItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={activeItemId === item.id}
            onClick={() => setActiveItemId(item.id)}
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
            className={`qa-command-card absolute ${desktopCardPositions[item.id]} text-left transition duration-200 hover:-translate-y-1 hover:border-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
              activeItemId === item.id ? "qa-command-card-active" : ""
            } ${hoveredItemId === item.id ? "border-blue-300" : ""}`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span className="block text-xs font-bold text-slate-950">{item.title}</span>
            <span className="mt-0.5 block text-[11px] font-medium text-slate-500">{item.subtitle}</span>
          </button>
        ))}
      </div>

      <div className="absolute inset-x-0 top-24 h-[360px] md:top-28 md:h-[390px]" aria-hidden="true">
        <Canvas
          camera={{ position: [3.35, 2.35, 4.05], fov: 38 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene activeItemId={activeItemId} />
        </Canvas>
      </div>

      <section
        aria-label="Selected QA workspace topic"
        className="absolute inset-x-5 bottom-5 z-30 rounded-2xl border border-slate-200 bg-white/94 p-4 shadow-sm backdrop-blur md:p-5"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase text-blue-600">{activeItem.subtitle}</p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">{activeItem.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{activeItem.description}</p>
          </div>
          <Link
            href={activeItem.href}
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            {activeItem.ctaLabel}
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {activeItem.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
