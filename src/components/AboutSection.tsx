import { BriefcaseBusiness, GraduationCap, MapPin, Target } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Location", value: "Ho Chi Minh City, Vietnam" },
  {
    icon: GraduationCap,
    label: "Education",
    value: "Computer Science / Information Technology - Saigon University",
  },
  {
    icon: Target,
    label: "Career Direction",
    value: "Manual Tester / QA Tester / QA Automation Engineer",
  },
  { icon: BriefcaseBusiness, label: "Current Level", value: "Fresher / Intern / Junior" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase text-blue-600">About Me</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
            A practical QA learner
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            <p>
              I am Pham Van Nam, a Computer Science student at Saigon University with a career
              direction in Software Testing and QA Automation.
            </p>
            <p>
              I have internship experience as a Tester / QC Intern at AGEST Vietnam, where I
              analyzed requirements, designed test cases using Equivalence Partitioning and Boundary
              Value Analysis, executed functional, regression, and exploratory testing, reported
              bugs in Jira, verified bug fixes, and tested data-sensitive features.
            </p>
            <p>
              My current focus is to strengthen my manual testing foundation while gradually
              improving my automation testing skills with Selenium WebDriver, Postman, SQL, and Git.
            </p>
          </div>
        </div>

        <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-bold text-slate-950">Personal Facts</h3>
          <div className="mt-5 grid gap-4">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">{label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
