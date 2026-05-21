import { contactInfo } from "@/data/contact";

const footerLinks = [
  { label: "GitHub", href: contactInfo.githubUrl, external: true },
  { label: "LinkedIn", href: contactInfo.linkedinUrl, external: true },
  { label: "Email", href: `mailto:${contactInfo.email}` },
  { label: "Download CV", href: contactInfo.cvPath },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>&copy; 2026 Pham Van Nam. Fresher Software Tester / QA Automation Engineer.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            link.href === "#" ? (
              <span key={link.label} className="font-medium text-slate-400" aria-disabled="true">
                {link.label}
              </span>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="font-medium transition hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>
      </div>
    </footer>
  );
}
