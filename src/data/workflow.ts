import type { WorkflowStep } from "@/types/portfolio";

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Understand Requirements",
    description:
      "Read requirements, identify business rules, clarify unclear points, and define testing scope.",
  },
  {
    title: "Design Test Cases",
    description:
      "Create test scenarios and test cases using positive, negative, boundary, and edge case analysis.",
  },
  {
    title: "Execute Tests",
    description:
      "Perform functional, regression, exploratory, UI, API, or data validation testing based on the feature.",
  },
  {
    title: "Report Bugs",
    description:
      "Document bugs with clear titles, reproduction steps, expected results, actual results, severity, priority, and evidence.",
  },
  {
    title: "Verify Fixes",
    description:
      "Retest fixed bugs and support regression testing to ensure related features still work correctly.",
  },
  {
    title: "Improve with Automation",
    description:
      "Identify repeatable test cases and gradually automate them using Selenium WebDriver or API testing tools.",
  },
];
