import type { LucideIcon } from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export type ProjectCategory =
  | "Manual Testing"
  | "API Testing"
  | "Automation"
  | "Test Design"
  | "Bug Report";

export type BugReport = {
  id: string;
  title: string;
  environment: string;
  preconditions: string;
  stepsToReproduce: string[];
  expectedResult: string;
  actualResult: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  priority: "Low" | "Medium" | "High";
  evidence?: string;
  status: "Open" | "In Progress" | "Fixed" | "Closed";
};

export type ArtifactLink = {
  label: string;
  href: string;
  type: string;
};

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  shortDescription: string;
  overview: string;
  testingApproach?: string;
  testingScope: string[];
  featuresTested?: string[];
  automatedFlows?: string[];
  tools: string[];
  deliverables: string[];
  sampleTestCases?: string[];
  sampleBugReports?: BugReport[];
  artifactLinks?: ArtifactLink[];
  tags: string[];
};

export type Artifact = {
  title: string;
  description: string;
  type: string;
  buttonText: string;
  href?: string;
  download?: boolean;
  secondaryButtonText?: string;
  secondaryHref?: string;
  secondaryDownload?: boolean;
};

export type WorkflowStep = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  time: string;
  description: string;
  responsibilities: string[];
  tools: string;
};

export type ContactInfo = {
  email: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  cvPath: string;
  availability: string;
  ctaText: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: LucideIcon;
};
