import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft } from "lucide-react";
import { testCaseColumns, testCases } from "@/data/testCases";

export const metadata: Metadata = {
  title: "Test Case Sheet Sample | Pham Van Nam QA Portfolio",
  description:
    "Online preview of a sample test case sheet for a demo e-commerce QA portfolio project.",
};

const columnAccessors = [
  "id",
  "module",
  "scenario",
  "preconditions",
  "testSteps",
  "testData",
  "expectedResult",
  "actualResult",
  "status",
  "priority",
  "type",
  "notes",
] as const;

export default function TestCaseSheetPage() {
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
          <p className="text-sm font-bold uppercase text-blue-600">Documentation</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Test Case Sheet Sample
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                This is a sample QA artifact created for portfolio demonstration purposes and
                does not contain confidential company or client information.
              </p>
            </div>
            <a
              href="/artifacts/test-case-sheet-sample.csv"
              download
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <ArrowDownToLine size={16} aria-hidden="true" />
              Download CSV
            </a>
          </div>
        </header>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="text-xl font-bold text-slate-950">Preview Table</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-[1280px] border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase text-slate-600">
                <tr>
                  {testCaseColumns.map((column) => (
                    <th key={column} scope="col" className="border-b border-slate-200 px-4 py-3 font-bold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {testCases.map((testCase) => (
                  <tr key={testCase.id} className="align-top transition hover:bg-blue-50/60">
                    {columnAccessors.map((accessor) => (
                      <td key={accessor} className="max-w-[260px] px-4 py-3 leading-6 text-slate-700">
                        {testCase[accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
