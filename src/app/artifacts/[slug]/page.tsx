import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { ReactNode } from "react";

type ArtifactPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const markdownArtifacts = [
  {
    slug: "bug-report-sample",
    title: "Bug Report Sample",
    description: "Jira-style sample bug reports for portfolio demonstration.",
    fileName: "bug-report-sample.md",
  },
  {
    slug: "regression-checklist-sample",
    title: "Regression Checklist Sample",
    description: "Regression checklist sample for a demo e-commerce web application.",
    fileName: "regression-checklist-sample.md",
  },
  {
    slug: "sql-validation-samples",
    title: "SQL Validation Samples",
    description: "Beginner-friendly SQL validation examples for QA practice.",
    fileName: "sql-validation-samples.md",
  },
  {
    slug: "selenium-test-scripts-guide",
    title: "Selenium Test Scripts Guide",
    description: "README-style guide for a basic Selenium WebDriver practice project.",
    fileName: "selenium-test-scripts-readme.md",
  },
];

function getArtifactBySlug(slug: string) {
  return markdownArtifacts.find((artifact) => artifact.slug === slug);
}

async function getArtifactContent(fileName: string) {
  const filePath = path.join(process.cwd(), "public", "artifacts", fileName);
  return readFile(filePath, "utf8");
}

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-slate-950">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={`${part}-${index}`}
          className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-semibold text-slate-800"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

function renderMarkdown(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }

      nodes.push(
        <pre
          key={`code-${index}`}
          className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm leading-6 text-slate-100"
        >
          <code>{codeLines.join("\n")}</code>
        </pre>,
      );
      index += 1;
      continue;
    }

    if (trimmed.startsWith("# ")) {
      nodes.push(
        <h1 key={`h1-${index}`} className="text-3xl font-bold text-slate-950 sm:text-4xl">
          {trimmed.replace("# ", "")}
        </h1>,
      );
      index += 1;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      nodes.push(
        <h2 key={`h2-${index}`} className="border-t border-slate-200 pt-6 text-2xl font-bold text-slate-950">
          {trimmed.replace("## ", "")}
        </h2>,
      );
      index += 1;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      nodes.push(
        <h3 key={`h3-${index}`} className="text-xl font-bold text-slate-950">
          {trimmed.replace("### ", "")}
        </h3>,
      );
      index += 1;
      continue;
    }

    if (/^-\s+\[[ xX]\]\s+/.test(trimmed)) {
      const items: string[] = [];

      while (index < lines.length && /^-\s+\[[ xX]\]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^-\s+\[[ xX]\]\s+/, ""));
        index += 1;
      }

      nodes.push(
        <ul key={`checklist-${index}`} className="grid gap-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-700">
              <span className="mt-1 h-4 w-4 shrink-0 rounded border border-slate-300 bg-white" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];

      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().replace("- ", ""));
        index += 1;
      }

      nodes.push(
        <ul key={`ul-${index}`} className="space-y-2 text-sm leading-6 text-slate-700">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];

      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }

      nodes.push(
        <ol key={`ol-${index}`} className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
          {items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    const paragraphLines = [trimmed];
    index += 1;

    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].trim().startsWith("#") &&
      !lines[index].trim().startsWith("- ") &&
      !/^\d+\.\s+/.test(lines[index].trim()) &&
      !lines[index].trim().startsWith("```")
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    nodes.push(
      <p key={`p-${index}`} className="text-sm leading-7 text-slate-700 sm:text-base">
        {renderInline(paragraphLines.join(" "))}
      </p>,
    );
  }

  return nodes;
}

export function generateStaticParams() {
  return markdownArtifacts.map((artifact) => ({
    slug: artifact.slug,
  }));
}

export async function generateMetadata({ params }: ArtifactPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artifact = getArtifactBySlug(slug);

  if (!artifact) {
    return {
      title: "Artifact Not Found | Pham Van Nam QA Portfolio",
    };
  }

  return {
    title: `${artifact.title} | Pham Van Nam QA Portfolio`,
    description: artifact.description,
  };
}

export default async function ArtifactDetailPage({ params }: ArtifactPageProps) {
  const { slug } = await params;
  const artifact = getArtifactBySlug(slug);

  if (!artifact) {
    notFound();
  }

  const content = await getArtifactContent(artifact.fileName);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/#artifacts"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Artifacts
        </Link>

        <article className="mt-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800">
            This is a sample/demo QA artifact created for portfolio purposes. It does not contain
            confidential company or client information.
          </div>
          <div className="space-y-6">{renderMarkdown(content)}</div>
        </article>
      </div>
    </main>
  );
}
