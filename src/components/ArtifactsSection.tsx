import ArtifactCard from "@/components/ArtifactCard";
import { artifacts } from "@/data/artifacts";

export default function ArtifactsSection() {
  return (
    <section id="artifacts" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-blue-600">Testing Artifacts</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
          QA documentation examples
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          A collection of practical QA documents and examples that demonstrate my testing workflow
          and documentation skills. These are sample/demo materials created for portfolio purposes.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.title} {...artifact} />
          ))}
        </div>
      </div>
    </section>
  );
}
