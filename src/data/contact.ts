import { ArrowDownToLine, Code2, Link, Mail, MapPin } from "lucide-react";
import type { ContactInfo, ContactItem } from "@/types/portfolio";

export const contactInfo: ContactInfo = {
  email: "9504phamnam@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  githubUrl: "https://github.com/PhamNamTech",
  linkedinUrl: "https://www.linkedin.com/in/pham-nam",
  cvPath: "/cv/Pham-Van-Nam-CV.pdf",
  availability:
    "I am open to Fresher, Intern, and Junior opportunities in Manual Testing, QA Testing, and QA Automation.",
  ctaText:
    "Let's connect if you are looking for a fresher QA candidate with practical testing experience and a strong willingness to learn.",
};

export const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  { icon: MapPin, label: "Location", value: contactInfo.location },
  {
    icon: Code2,
    label: "GitHub",
    value: "github.com/PhamNamTech",
    href: contactInfo.githubUrl,
    external: true,
  },
  {
    icon: Link,
    label: "LinkedIn",
    value: "linkedin.com/in/pham-nam",
    href: contactInfo.linkedinUrl,
    external: true,
  },
  {
    icon: ArrowDownToLine,
    label: "CV",
    value: contactInfo.cvPath,
    href: contactInfo.cvPath,
  },
];
