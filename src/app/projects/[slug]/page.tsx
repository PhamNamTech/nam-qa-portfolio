import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import type { BugReport, Project } from "@/types/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Pham Van Nam QA Portfolio",
    };
  }

  return {
    title: `${project.title} | Pham Van Nam QA Portfolio`,
    description: project.shortDescription,
  };
}

function DetailSection({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function BugReportCard({ report }: { report: BugReport }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold text-blue-600">{report.id}</p>
          <h3 className="mt-1 text-lg font-bold text-slate-950">{report.title}</h3>
        </div>
        <p className="w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700">
          {report.status}
        </p>
      </div>
      <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-slate-950">Environment</dt>
          <dd className="mt-1 text-slate-600">{report.environment}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-950">Preconditions</dt>
          <dd className="mt-1 text-slate-600">{report.preconditions}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-950">Severity</dt>
          <dd className="mt-1 text-slate-600">{report.severity}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-950">Priority</dt>
          <dd className="mt-1 text-slate-600">{report.priority}</dd>
        </div>
      </dl>
      <div className="mt-5">
        <h4 className="text-sm font-semibold text-slate-950">Steps to Reproduce</h4>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          {report.stepsToReproduce.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
      <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <h4 className="font-semibold text-slate-950">Expected Result</h4>
          <p className="mt-1 leading-6 text-slate-600">{report.expectedResult}</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-950">Actual Result</h4>
          <p className="mt-1 leading-6 text-slate-600">{report.actualResult}</p>
        </div>
      </div>
      {report.evidence ? (
        <p className="mt-5 text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-950">Evidence: </span>
          {report.evidence}
        </p>
      ) : null}
    </article>
  );
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="grid gap-6">
      <DetailSection title="Overview">
        <p className="text-base leading-8 text-slate-600">{project.overview}</p>
      </DetailSection>

      {project.testingApproach ? (
        <DetailSection title="Testing Approach">
          <p className="text-base leading-8 text-slate-600">{project.testingApproach}</p>
        </DetailSection>
      ) : null}

      <DetailSection title="Testing Scope">
        <BulletList items={project.testingScope} />
      </DetailSection>

      {project.featuresTested ? (
        <DetailSection title={project.category === "API Testing" ? "Endpoints Tested" : "Features Tested"}>
          <BulletList items={project.featuresTested} />
        </DetailSection>
      ) : null}

      {project.automatedFlows ? (
        <DetailSection title="Automated Flows">
          <BulletList items={project.automatedFlows} />
        </DetailSection>
      ) : null}

      <DetailSection title="Tools">
        <BulletList items={project.tools} />
      </DetailSection>

      <DetailSection title="Deliverables">
        <BulletList items={project.deliverables} />
      </DetailSection>

      {project.sampleTestCases ? (
        <DetailSection title={project.category === "Automation" ? "Good Practices Applied" : "Sample Test Cases"}>
          <ul className="space-y-3 text-sm leading-6 text-slate-600">
            {project.sampleTestCases.map((testCase) => (
              <li key={testCase} className="rounded-lg bg-slate-50 p-3">
                {testCase}
              </li>
            ))}
          </ul>
        </DetailSection>
      ) : null}

      {project.sampleBugReports ? (
        <DetailSection title="Sample Bug Reports">
          <div className="grid gap-4">
            {project.sampleBugReports.map((report) => (
              <BugReportCard key={report.id} report={report} />
            ))}
          </div>
        </DetailSection>
      ) : null}

      {project.artifactLinks ? (
        <DetailSection title="Artifact Links">
          <div className="flex flex-wrap gap-3">
            {project.artifactLinks.map((artifact) => (
              <Link
                key={artifact.href}
                href={artifact.href}
                className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                {artifact.label}
                <span className="rounded-full bg-white px-2 py-0.5 text-xs text-blue-700">
                  {artifact.type}
                </span>
                <ExternalLink size={14} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </DetailSection>
      ) : null}

      <p className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800">
        These materials are sample/demo artifacts created for portfolio purposes and do not contain
        confidential company or client information.
      </p>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Projects
        </Link>

        <header className="mt-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            {project.category}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            {project.shortDescription}
          </p>
        </header>

        <div className="mt-6">
          <ProjectContent project={project} />
        </div>
      </div>
    </main>
  );
}
