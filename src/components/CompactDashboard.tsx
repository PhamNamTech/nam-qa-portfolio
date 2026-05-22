"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowDownToLine, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { artifacts } from "@/data/artifacts";
import { contactInfo, contactItems } from "@/data/contact";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { workflowSteps } from "@/data/workflow";
import { usePreferences } from "@/components/PreferencesProvider";
import QAWorkspaceFallback from "@/components/hero/QAWorkspaceFallback";

const QAWorkspace3D = dynamic(() => import("@/components/hero/QAWorkspace3D"), {
  ssr: false,
  loading: () => <QAWorkspaceFallback />,
});

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
  const [canRender3D, setCanRender3D] = useState(false);
  const { t } = usePreferences();

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

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const updatePreference = () => setCanRender3D(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return (
    <main className="bg-slate-50 text-slate-900 transition-colors duration-200">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 sm:py-8 xl:grid-cols-[minmax(280px,330px)_1fr] lg:px-8">
        <aside className="min-w-0 space-y-4 xl:sticky xl:top-24 xl:self-start">
          <section
            id="home"
            className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div>
              <p className="text-sm font-semibold text-emerald-600">{t.hero.badge}</p>
              <h1 className="mt-4 break-words text-3xl font-bold leading-tight text-slate-950">
                Pham Van Nam
              </h1>
              <p className="mt-2 text-sm font-semibold leading-6 text-blue-600">
                {t.hero.subtitle}
              </p>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">{t.hero.description}</p>

            <div className="mt-6 grid gap-2">
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                {t.hero.projects}
              </Link>
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
            className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
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

        <div className="min-w-0 space-y-5">
          <section className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block dark:border-slate-800 dark:bg-slate-900">
            <div className="relative">
              <div className="absolute right-10 top-8 h-28 w-28 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/10" />
              <div className="absolute bottom-8 left-10 h-24 w-24 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-500/10" />
              {canRender3D ? <QAWorkspace3D /> : <QAWorkspaceFallback />}
            </div>
          </section>
          <div className="md:hidden">
            <QAWorkspaceFallback />
          </div>

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
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                    >
                      {t.projects.details}
                    </Link>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-sm font-semibold text-slate-500 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                      >
                        {t.projects.github}
                      </a>
                    ) : null}
                  </div>
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
                  <div className="mt-4 flex flex-wrap gap-3">
                    {artifact.href ? (
                      artifact.download ? (
                        <a
                          href={artifact.href}
                          download
                          className="inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                        >
                          {artifact.buttonText}
                        </a>
                      ) : (
                        <Link
                          href={artifact.href}
                          className="inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                        >
                          {artifact.buttonText}
                        </Link>
                      )
                    ) : null}
                    {artifact.secondaryHref ? (
                      <a
                        href={artifact.secondaryHref}
                        download={artifact.secondaryDownload}
                        className="inline-flex text-sm font-semibold text-slate-500 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                      >
                        {artifact.secondaryButtonText}
                      </a>
                    ) : null}
                  </div>
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
