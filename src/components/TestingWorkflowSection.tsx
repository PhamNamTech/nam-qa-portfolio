"use client";

import { workflowSteps } from "@/data/workflow";
import { usePreferences } from "@/components/PreferencesProvider";

export default function TestingWorkflowSection() {
  const { t } = usePreferences();

  return (
    <section id="workflow" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-blue-600">{t.workflow.label}</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
          {t.workflow.title}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
