import { CheckCircle2, ShieldCheck } from "lucide-react";

const focusItems = [
  "Test Cases - 12 sample cases",
  "Bug Reports - Jira-style format",
  "API Testing - Postman collection",
  "Automation - Selenium WebDriver",
  "SQL Validation - Data checking",
];

export default function QAWorkspaceFallback() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-blue-600">QA Workspace</p>
          <h2 className="mt-1 text-xl font-bold text-slate-950">QA Command Center</h2>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
          <ShieldCheck size={20} aria-hidden="true" />
        </div>
      </div>
      <p className="mt-4 w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
        Open to Fresher / Intern / Junior QA roles
      </p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {focusItems.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
          >
            <CheckCircle2 className="text-emerald-500" size={16} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
