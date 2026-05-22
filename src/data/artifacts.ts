import type { Artifact } from "@/types/portfolio";

export const artifacts: Artifact[] = [
  {
    title: "Test Case Sheet",
    description:
      "A structured test case document including test case ID, scenario, preconditions, steps, test data, expected result, actual result, status, and note.",
    type: "Documentation",
    href: "/artifacts/test-case-sheet",
    buttonText: "View Online",
    secondaryHref: "/artifacts/test-case-sheet-sample.csv",
    secondaryButtonText: "Download CSV",
    secondaryDownload: true,
  },
  {
    title: "Bug Report Sample",
    description:
      "A Jira-style bug report format with clear reproduction steps, expected result, actual result, severity, priority, and evidence.",
    type: "Bug Report",
    href: "/artifacts/bug-report-sample",
    buttonText: "View Sample",
  },
  {
    title: "Postman Collection",
    description:
      "A sample API testing collection with positive and negative test cases for user management APIs.",
    type: "API Testing",
    href: "/artifacts/postman-collection",
    buttonText: "View Online",
    secondaryHref: "/artifacts/postman-user-management-collection.json",
    secondaryButtonText: "Download JSON",
    secondaryDownload: true,
  },
  {
    title: "Selenium Test Scripts",
    description: "Basic web automation scripts for login, search, and form validation flows.",
    type: "Automation",
    href: "/artifacts/selenium-test-scripts-guide",
    buttonText: "View Guide",
  },
  {
    title: "Regression Checklist",
    description: "A checklist used to confirm that fixed bugs do not affect existing features.",
    type: "Checklist",
    href: "/artifacts/regression-checklist-sample",
    buttonText: "View Sample",
  },
  {
    title: "SQL Validation Samples",
    description: "Basic SQL queries used to check data consistency and validate database records.",
    type: "SQL",
    href: "/artifacts/sql-validation-samples",
    buttonText: "View Sample",
  },
];
