import { ArrowDownToLine, CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { contactInfo } from "@/data/contact";

const focusItems = [
  "Manual Testing",
  "API Testing",
  "Selenium Automation",
  "Bug Reporting",
  "SQL Validation",
];

export default function HeroSection() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <ShieldCheck size={16} aria-hidden="true" />
            <span>Open to Fresher / Intern / Junior QA roles</span>
          </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            Hi, I&apos;m Pham Van Nam
          </h1>
          <p className="mt-4 text-xl font-semibold text-blue-600">
            Fresher Software Tester / QA Automation Engineer
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            I am a Computer Science student at Saigon University, focusing on manual testing, test
            case design, bug reporting, API testing, and basic web automation with Selenium
            WebDriver.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            I aim to build reliable software through structured testing, clear documentation, and
            continuous learning.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 sm:w-auto"
            >
              View My Projects
            </a>
            <a
              href={contactInfo.cvPath}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 sm:w-auto"
            >
              <ArrowDownToLine size={16} aria-hidden="true" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 sm:w-auto"
            >
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>

        <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-blue-600">QA Focus</p>
              <h3 className="mt-1 text-2xl font-bold text-slate-950">Practical Testing Skills</h3>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
              <ShieldCheck size={24} aria-hidden="true" />
            </div>
          </div>
          <ul className="grid gap-3">
            {focusItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700"
              >
                <CheckCircle2 className="text-emerald-500" size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
