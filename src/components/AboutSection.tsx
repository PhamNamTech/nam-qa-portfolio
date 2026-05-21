"use client";

import { BriefcaseBusiness, GraduationCap, MapPin, Target } from "lucide-react";
import { usePreferences } from "@/components/PreferencesProvider";

const facts = [
  { icon: MapPin, label: "Location", value: "Ho Chi Minh City, Vietnam" },
  {
    icon: GraduationCap,
    label: "Education",
    value: "Computer Science / Information Technology - Saigon University",
  },
  {
    icon: Target,
    label: "Career Direction",
    value: "Manual Tester / QA Tester / QA Automation Engineer",
  },
  { icon: BriefcaseBusiness, label: "Current Level", value: "Fresher / Intern / Junior" },
];

export default function AboutSection() {
  const { t } = usePreferences();

  return (
    <section id="about" className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase text-blue-600">{t.about.label}</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>

        <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-bold text-slate-950">{t.about.facts}</h3>
          <div className="mt-5 grid gap-4">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">{label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
