"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { qaWorkspaceItems, type QaWorkspaceItemId } from "@/data/qaWorkspaceItems";

export default function QAWorkspaceFallback() {
  const [activeItemId, setActiveItemId] = useState<QaWorkspaceItemId>("test-cases");
  const activeItem = useMemo(
    () => qaWorkspaceItems.find((item) => item.id === activeItemId) ?? qaWorkspaceItems[0],
    [activeItemId],
  );

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-blue-600">QA Workspace</p>
          <h2 className="mt-1 text-xl font-bold text-slate-950">Interactive QA Topics</h2>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
          <ShieldCheck size={20} aria-hidden="true" />
        </div>
      </div>

      <p className="mt-4 w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
        Open to Fresher / Intern / Junior QA roles
      </p>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {qaWorkspaceItems.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={activeItemId === item.id}
            onClick={() => setActiveItemId(item.id)}
            className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-left text-sm transition hover:border-blue-300 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
              activeItemId === item.id
                ? "border-blue-400 bg-blue-50 text-blue-800"
                : "border-slate-200 bg-slate-50 text-slate-700"
            }`}
          >
            <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={16} aria-hidden="true" />
            <span>
              <span className="block font-bold">{item.title}</span>
              <span className="block text-xs font-medium text-slate-500">{item.subtitle}</span>
            </span>
          </button>
        ))}
      </div>

      <section className="mt-5 rounded-xl border border-slate-200 bg-white p-4" aria-label="Selected QA topic">
        <p className="text-xs font-bold uppercase text-blue-600">{activeItem.subtitle}</p>
        <h3 className="mt-1 text-lg font-bold text-slate-950">{activeItem.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{activeItem.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {activeItem.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
        <Link
          href={activeItem.href}
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          {activeItem.ctaLabel}
        </Link>
      </section>
    </article>
  );
}
