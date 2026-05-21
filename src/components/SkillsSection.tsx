"use client";

import { skillCategories } from "@/data/skills";
import { usePreferences } from "@/components/PreferencesProvider";

export default function SkillsSection() {
  const { t } = usePreferences();

  return (
    <section id="skills" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-blue-600">{t.skills.label}</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
          {t.skills.title}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ title, icon: Icon, items }) => (
            <article
              key={title}
              className="rounded-lg border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">{title}</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 leading-6">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
