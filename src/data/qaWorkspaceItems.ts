export type QaWorkspaceItemId =
  | "test-cases"
  | "bug-reports"
  | "api-testing"
  | "automation"
  | "sql-validation";

export type QaWorkspaceItem = {
  id: QaWorkspaceItemId;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  href: string;
  ctaLabel: string;
  sectionTarget: "artifacts" | "projects";
};

export const qaWorkspaceItems: QaWorkspaceItem[] = [
  {
    id: "test-cases",
    title: "Test Cases",
    subtitle: "12 sample cases",
    description:
      "Structured test cases covering modules such as login, search, cart, checkout, and order history.",
    skills: ["Test Case Design", "EP/BVA", "Functional Testing"],
    href: "/artifacts/test-case-sheet",
    ctaLabel: "View Test Case Sheet",
    sectionTarget: "artifacts",
  },
  {
    id: "bug-reports",
    title: "Bug Reports",
    subtitle: "Jira-style format",
    description:
      "Sample bug reports with clear title, steps to reproduce, expected result, actual result, severity, priority, and evidence.",
    skills: ["Bug Reporting", "Severity", "Priority"],
    href: "/artifacts/bug-report-sample",
    ctaLabel: "View Bug Report Sample",
    sectionTarget: "artifacts",
  },
  {
    id: "api-testing",
    title: "API Testing",
    subtitle: "Postman collection",
    description:
      "API testing sample for user management endpoints with status code, response body, and basic validation checks.",
    skills: ["Postman", "REST API", "Status Code Validation"],
    href: "/artifacts/postman-collection",
    ctaLabel: "View Postman Collection",
    sectionTarget: "artifacts",
  },
  {
    id: "automation",
    title: "Automation",
    subtitle: "Selenium WebDriver",
    description:
      "Basic Selenium WebDriver automation practice for login, search, form validation, and navigation flows.",
    skills: ["Selenium", "Locators", "Explicit Wait"],
    href: "/projects/selenium-web-automation",
    ctaLabel: "View Automation Project",
    sectionTarget: "projects",
  },
  {
    id: "sql-validation",
    title: "SQL Validation",
    subtitle: "Data checking",
    description:
      "SQL validation examples for checking user records, orders, payment status, duplicate data, and data consistency.",
    skills: ["SQL", "MySQL", "Data Validation"],
    href: "/artifacts/sql-validation-samples",
    ctaLabel: "View SQL Samples",
    sectionTarget: "artifacts",
  },
];
