"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useState } from "react";

const projectFilters = [
  "All",
  "Manual Testing",
  "API Testing",
  "Automation",
  "Test Design",
  "Bug Report",
] as const;

type ProjectFilter = (typeof projectFilters)[number];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const projectCountLabel = `${filteredProjects.length} ${
    filteredProjects.length === 1 ? "project" : "projects"
  }`;

  return (
    <section id="projects" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-blue-600">Testing Projects</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
          Practical QA project samples
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          These projects demonstrate my practical QA workflow, including requirement analysis, test
          case design, bug reporting, API testing, and basic automation testing.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" aria-label="Project category filters">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={
                    isActive
                      ? "rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                      : "rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                  }
                >
                  {filter}
                </button>
              );
            })}
          </div>
          <p className="text-sm font-medium text-slate-600" aria-live="polite">
            Showing {projectCountLabel}
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6 text-sm font-medium text-slate-600">
            No projects found for this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
