import { CalendarDays, CheckCircle2, MapPinned } from "lucide-react";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-blue-600">Internship Experience</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
          Tester / QC Intern
        </h2>

        <div className="mt-8 grid gap-6">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.company}`}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                    {experience.role}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-base font-semibold text-blue-600">
                    <MapPinned size={18} aria-hidden="true" />
                    {experience.company}
                  </p>
                </div>
                <p className="flex w-fit items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  <CalendarDays size={16} aria-hidden="true" />
                  {experience.time}
                </p>
              </div>

              <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
                {experience.description}
              </p>

              <h4 className="mt-8 text-lg font-bold text-slate-950">Responsibilities</h4>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {experience.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-emerald-500"
                      size={18}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-lg bg-slate-50 p-5">
                <h4 className="text-sm font-bold uppercase text-slate-950">Tools used</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{experience.tools}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
