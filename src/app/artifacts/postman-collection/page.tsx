import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft } from "lucide-react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { postmanCollectionInfo, postmanRequests } from "@/data/postmanCollectionPreview";

export const metadata: Metadata = {
  title: "Postman Collection Sample | Pham Van Nam QA Portfolio",
  description:
    "Online preview of a sample Postman collection for user management API testing.",
};

async function getPostmanCollectionJson() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "artifacts",
    "postman-user-management-collection.json",
  );
  const content = await readFile(filePath, "utf8");

  return JSON.stringify(JSON.parse(content), null, 2);
}

export default async function PostmanCollectionPage() {
  const collectionJson = await getPostmanCollectionJson();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/#artifacts"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Artifacts
        </Link>

        <header className="mt-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase text-blue-600">API Testing</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Postman Collection Sample
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                This is a sample API testing collection created for portfolio demonstration
                purposes and does not contain confidential company or client information.
              </p>
            </div>
            <a
              href="/artifacts/postman-user-management-collection.json"
              download
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <ArrowDownToLine size={16} aria-hidden="true" />
              Download Collection
            </a>
          </div>
        </header>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-bold text-slate-950">Collection Summary</h2>
          <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-4">
              <dt className="font-semibold text-slate-950">Collection Name</dt>
              <dd className="mt-1 text-slate-600">{postmanCollectionInfo.name}</dd>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <dt className="font-semibold text-slate-950">Base URL</dt>
              <dd className="mt-1 break-all text-slate-600">{postmanCollectionInfo.baseUrl}</dd>
            </div>
          </dl>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="text-xl font-bold text-slate-950">API Request Preview</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-[900px] border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase text-slate-600">
                <tr>
                  <th scope="col" className="border-b border-slate-200 px-4 py-3 font-bold">
                    Method
                  </th>
                  <th scope="col" className="border-b border-slate-200 px-4 py-3 font-bold">
                    Endpoint
                  </th>
                  <th scope="col" className="border-b border-slate-200 px-4 py-3 font-bold">
                    Purpose
                  </th>
                  <th scope="col" className="border-b border-slate-200 px-4 py-3 font-bold">
                    Validations
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {postmanRequests.map((request) => (
                  <tr key={`${request.method}-${request.endpoint}`} className="align-top transition hover:bg-blue-50/60">
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                        {request.method}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-slate-700">{request.endpoint}</td>
                    <td className="px-4 py-3 leading-6 text-slate-700">{request.purpose}</td>
                    <td className="px-4 py-3 leading-6 text-slate-700">{request.validations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="text-xl font-bold text-slate-950">Formatted JSON Preview</h2>
          <pre className="mt-4 max-h-[520px] overflow-auto rounded-lg bg-slate-950 p-4 text-sm leading-6 text-slate-100">
            <code>{collectionJson}</code>
          </pre>
        </section>
      </div>
    </main>
  );
}
