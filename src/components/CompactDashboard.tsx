"use client";

import Link from "next/link";
import { ArrowDownToLine, Mail, MapPin, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { artifacts } from "@/data/artifacts";
import { contactInfo, contactItems } from "@/data/contact";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { workflowSteps } from "@/data/workflow";
import { usePreferences } from "@/components/PreferencesProvider";

const projectFilters = [
  "All",
  "Manual Testing",
  "API Testing",
  "Automation",
  "Test Design",
  "Bug Report",
] as const;

type ProjectFilter = (typeof projectFilters)[number];

export default function CompactDashboard() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [emailStatus, setEmailStatus] = useState("");
  const { theme, toggleTheme, t } = usePreferences();

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  async function handleEmailClick() {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setEmailStatus(t.contact.copied);
    } catch {
      setEmailStatus(t.contact.opening);
    }
  }

  return (
    <main className="bg-slate-50 text-slate-900 transition-colors duration-200">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[330px_1fr] lg:px-8">
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <section
            id="home"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-emerald-600">{t.hero.badge}</p>
                <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-950">
                  Pham Van Nam
                </h1>
                <p className="mt-2 text-sm font-semibold leading-6 text-blue-600">
                  {t.hero.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "light" ? t.nav.themeLight : t.nav.themeDark}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">{t.hero.description}</p>

            <div className="mt-6 grid gap-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                {t.hero.projects}
              </a>
              <a
                href={contactInfo.cvPath}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <ArrowDownToLine size={16} />
                {t.hero.cv}
              </a>
            </div>
          </section>

          <section
            id="contact"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-base font-bold text-slate-950">{t.contact.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{contactInfo.availability}</p>
            <div className="mt-4 grid gap-2">
              <a
                href={`mailto:${contactInfo.email}`}
                onClick={handleEmailClick}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <Mail size={16} />
                {t.contact.email}
              </a>
              {emailStatus ? (
                <p className="text-xs font-medium text-emerald-700" aria-live="polite">
                  {emailStatus}
                </p>
              ) : null}
            </div>
            <div className="mt-5 space-y-3 text-sm">
              {contactItems.map(({ label, value, href, external, icon: Icon }) => (
                <div key={label} className="flex gap-3">
                  <Icon className="mt-0.5 shrink-0 text-blue-600" size={16} />
                  {href ? (
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="break-words text-slate-600 transition hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-slate-600">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </aside>

        <div className="space-y-5">
          <section id="about" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase text-blue-600">{t.about.label}</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">{t.about.title}</h2>
            <div className="mt-4 grid gap-4 text-sm leading-7 text-slate-600 md:grid-cols-3">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </section>

          <section id="skills" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase text-blue-600">{t.skills.label}</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">{t.skills.title}</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {skillCategories.map(({ title, items }) => (
                <article key={title} className="rounded-lg border border-slate-200 p-4">
                  <h3 className="text-sm font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {items.slice(0, 4).join(" / ")}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-bold uppercase text-blue-600">{t.experience.label}</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">{t.experience.title}</h2>
            {experiences.map((experience) => (
              <article key={experience.company} className="mt-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">{experience.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      <MapPin size={15} />
                      {experience.company}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-slate-500">{experience.time}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{experience.description}</p>
              </article>
            ))}
          </section>

          <section id="projects" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-blue-600">{t.projects.label}</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">{t.projects.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  {t.projects.intro}
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500">
                {t.projects.showing} {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? t.projects.project : t.projects.projects}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {projectFilters.map((filter) => {
                const active = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveFilter(filter)}
                    className={
                      active
                        ? "rounded-full bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white"
                        : "rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    }
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {filteredProjects.map((project) => (
                <article key={project.slug} className="rounded-lg border border-slate-200 p-4">
                  <p className="text-xs font-bold uppercase text-blue-600">{project.category}</p>
                  <h3 className="mt-2 text-base font-bold leading-6 text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {project.shortDescription}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                  >
                    {t.projects.details}
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section id="artifacts" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase text-blue-600">{t.artifacts.label}</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">{t.artifacts.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{t.artifacts.intro}</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {artifacts.map((artifact) => (
                <article key={artifact.title} className="rounded-lg border border-slate-200 p-4">
                  <p className="text-xs font-bold uppercase text-emerald-600">{artifact.type}</p>
                  <h3 className="mt-2 text-base font-bold text-slate-950">{artifact.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{artifact.description}</p>
                  {artifact.href ? (
                    <a
                      href={artifact.href}
                      download={artifact.download}
                      className="mt-4 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                    >
                      {artifact.buttonText}
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section id="workflow" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase text-blue-600">{t.workflow.label}</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">{t.workflow.title}</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {workflowSteps.map((step, index) => (
                <article key={step.title} className="rounded-lg border border-slate-200 p-4">
                  <p className="text-sm font-bold text-blue-600">0{index + 1}</p>
                  <h3 className="mt-2 text-sm font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
