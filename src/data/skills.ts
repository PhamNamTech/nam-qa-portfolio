import { Bug, Code2, Database, FileCheck2, ListChecks, Network } from "lucide-react";
import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Manual Testing",
    icon: ListChecks,
    items: [
      "Functional Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Smoke Testing",
      "UI/UX Checking",
      "Test Execution",
    ],
  },
  {
    title: "Test Design",
    icon: FileCheck2,
    items: [
      "Test Scenario Design",
      "Test Case Design",
      "Equivalence Partitioning",
      "Boundary Value Analysis",
      "Positive / Negative Test Cases",
      "Edge Case Identification",
    ],
  },
  {
    title: "Bug Reporting",
    icon: Bug,
    items: [
      "Clear bug title",
      "Steps to reproduce",
      "Expected result",
      "Actual result",
      "Severity / Priority",
      "Evidence attachment",
      "Bug verification",
    ],
  },
  {
    title: "API Testing",
    icon: Network,
    items: [
      "Postman",
      "HTTP Methods: GET, POST, PUT, PATCH, DELETE",
      "Status Code Validation",
      "Request / Response Validation",
      "Environment Variables",
      "Basic Test Scripts",
    ],
  },
  {
    title: "Automation Testing",
    icon: Code2,
    items: [
      "Selenium WebDriver",
      "Locators: ID, Name, CSS Selector, XPath",
      "Explicit Wait",
      "Fluent Wait",
      "Basic Test Script Structure",
      "Page Object Model awareness",
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    items: ["SQL", "MySQL", "Jira", "Git / GitHub", "Agile / Scrum", "Excel / Google Sheets"],
  },
];
