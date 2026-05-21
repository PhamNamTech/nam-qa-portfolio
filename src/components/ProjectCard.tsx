import Link from "next/link";
import type { Project } from "@/types/portfolio";

export default function ProjectCard({
  title,
  slug,
  category,
  shortDescription,
  tags,
}: Project) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6">
      <p className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
        {category}
      </p>
      <h3 className="mt-4 text-lg font-bold leading-7 text-slate-950">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{shortDescription}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${slug}`}
        className="mt-6 inline-flex w-fit items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
      >
        View Details
      </Link>
    </article>
  );
}
