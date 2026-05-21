import type { Artifact } from "@/types/portfolio";

export default function ArtifactCard({
  title,
  description,
  type,
  buttonText,
  href,
  download,
}: Artifact) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6">
      <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
        {type}
      </span>
      <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      {href ? (
        <a
          href={href}
          download={download}
          className="mt-6 inline-flex w-fit items-center rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          {buttonText}
        </a>
      ) : (
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="mt-6 inline-flex w-fit cursor-not-allowed items-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-500"
        >
          {buttonText}
        </button>
      )}
    </article>
  );
}
