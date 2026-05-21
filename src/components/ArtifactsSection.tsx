"use client";

import ArtifactCard from "@/components/ArtifactCard";
import { artifacts } from "@/data/artifacts";
import { usePreferences } from "@/components/PreferencesProvider";

export default function ArtifactsSection() {
  const { t } = usePreferences();

  return (
    <section id="artifacts" className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-blue-600">{t.artifacts.label}</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
          {t.artifacts.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {t.artifacts.intro}
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.title} {...artifact} />
          ))}
        </div>
      </div>
    </section>
  );
}
