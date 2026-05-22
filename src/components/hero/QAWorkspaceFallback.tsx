"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { usePreferences } from "@/components/PreferencesProvider";
import {
  localizeQaSkills,
  localizeQaText,
  qaWorkspaceItems,
  type QaWorkspaceItemId,
} from "@/data/qaWorkspaceItems";

export default function QAWorkspaceFallback() {
  const [activeItemId, setActiveItemId] = useState<QaWorkspaceItemId>("test-cases");
  const { language, t } = usePreferences();
  const activeItem = useMemo(
    () => qaWorkspaceItems.find((item) => item.id === activeItemId) ?? qaWorkspaceItems[0],
    [activeItemId],
  );
  const activeTitle = localizeQaText(activeItem.title, language);
  const activeSubtitle = localizeQaText(activeItem.subtitle, language);
  const activeDescription = localizeQaText(activeItem.description, language);
  const activeSkills = localizeQaSkills(activeItem.skills, language);
  const activeCta = localizeQaText(activeItem.ctaLabel, language);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">{t.qaWorkspace.title}</p>
          <h2 className="mt-1 text-xl font-bold text-slate-950 dark:text-slate-50">
            {t.qaWorkspace.fallbackTitle}
          </h2>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
          <ShieldCheck size={20} aria-hidden="true" />
        </div>
      </div>

      <p className="mt-4 w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-200">
        {t.hero.badge}
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
                ? "border-blue-400 bg-blue-50 text-blue-800 dark:border-blue-400 dark:bg-blue-500/15 dark:text-blue-100"
                : "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            }`}
          >
            <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={16} aria-hidden="true" />
            <span>
              <span className="block font-bold">{localizeQaText(item.title, language)}</span>
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-300">
                {localizeQaText(item.subtitle, language)}
              </span>
            </span>
          </button>
        ))}
      </div>

      <section
        className="mt-5 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950"
        aria-label={t.qaWorkspace.selectedTopic}
      >
        <p className="text-xs font-bold uppercase text-blue-600 dark:text-blue-300">{activeSubtitle}</p>
        <h3 className="mt-1 text-lg font-bold text-slate-950 dark:text-slate-50">{activeTitle}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{activeDescription}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {activeSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/15 dark:text-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>
        <Link
          href={activeItem.href}
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          {activeCta}
        </Link>
      </section>
    </article>
  );
}
