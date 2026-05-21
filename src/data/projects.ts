import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Manual Testing Project - E-commerce Web Application",
    slug: "manual-testing-ecommerce",
    category: "Manual Testing",
    shortDescription:
      "Designed and executed manual test cases for a demo e-commerce web application, covering login, product search, cart, checkout, and order history features.",
    overview:
      "This project focuses on manual testing for a demo e-commerce web application. The goal is to validate core user flows and identify functional, UI, validation, and regression issues.",
    testingApproach:
      "I reviewed the main user flows, created test scenarios, designed positive and negative test cases, executed tests manually, documented actual results, and reported defects using a Jira-style bug report format.",
    testingScope: [
      "Functional Testing",
      "UI Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Data Validation",
    ],
    featuresTested: [
      "Login",
      "Register",
      "Product Search",
      "Product Detail",
      "Add to Cart",
      "Update Cart Quantity",
      "Checkout",
      "Order History",
    ],
    tools: ["Google Sheets / Excel", "Jira-style bug report", "Browser DevTools"],
    deliverables: [
      "Test scenarios",
      "Test cases",
      "Bug report samples",
      "Regression checklist",
      "Test execution summary",
    ],
    sampleTestCases: [
      "Verify that a user can log in with valid credentials.",
      "Verify that an error message is displayed for invalid login credentials.",
      "Verify that a user can search for a product by keyword.",
      "Verify that a user can add a product to the cart.",
      "Verify that the cart quantity and total price are updated correctly.",
      "Verify that checkout cannot be completed with missing required information.",
      "Verify that order history displays the latest completed order.",
    ],
    artifactLinks: [
      {
        label: "Test Case Sheet",
        href: "/artifacts/test-case-sheet-sample.csv",
        type: "CSV",
      },
      {
        label: "Bug Report Sample",
        href: "/artifacts/bug-report-sample",
        type: "View Page",
      },
      {
        label: "Regression Checklist",
        href: "/artifacts/regression-checklist-sample",
        type: "View Page",
      },
    ],
    tags: [
      "Functional Testing",
      "UI Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Data Validation",
    ],
  },
  {
    title: "API Testing Project - User Management API with Postman",
    slug: "api-testing-user-management",
    category: "API Testing",
    shortDescription:
      "Created and executed API test cases using Postman to validate user-related endpoints, status codes, response body, error handling, and basic data consistency.",
    overview:
      "This project demonstrates API testing skills using Postman. The goal is to validate whether user management APIs return correct status codes, response structure, and error messages for both valid and invalid requests.",
    testingApproach:
      "I created a Postman collection, defined environment variables, prepared positive and negative test cases, sent API requests, validated response status codes, checked response body fields, and documented failed cases.",
    testingScope: [
      "API Functional Testing",
      "Positive / Negative API Testing",
      "Status Code Validation",
      "Response Body Validation",
      "Basic Error Handling Testing",
    ],
    featuresTested: [
      "GET /users",
      "GET /users/{id}",
      "POST /users",
      "PUT /users/{id}",
      "PATCH /users/{id}",
      "DELETE /users/{id}",
    ],
    tools: ["Postman", "JSON", "REST API", "GitHub"],
    deliverables: [
      "Postman collection",
      "Environment variables",
      "API test cases",
      "Test execution notes",
      "API bug report samples",
    ],
    sampleTestCases: [
      "Verify that GET /users returns 200 OK.",
      "Verify that GET /users/{valid_id} returns user details.",
      "Verify that GET /users/{invalid_id} returns an appropriate error response.",
      "Verify that POST /users creates a new user with valid data.",
      "Verify that POST /users rejects missing required fields.",
      "Verify that PUT /users/{id} updates all user information.",
      "Verify that PATCH /users/{id} updates partial user information.",
      "Verify that DELETE /users/{id} removes the selected user.",
    ],
    artifactLinks: [
      {
        label: "Postman Collection",
        href: "/artifacts/postman-user-management-collection.json",
        type: "JSON",
      },
      {
        label: "Bug Report Sample",
        href: "/artifacts/bug-report-sample",
        type: "View Page",
      },
    ],
    tags: ["Postman", "REST API", "Status Code Validation", "JSON"],
  },
  {
    title: "Web Automation Testing Project with Selenium WebDriver",
    slug: "selenium-web-automation",
    category: "Automation",
    shortDescription:
      "Built basic automated test scripts using Selenium WebDriver to verify core web application flows such as login, search, and form validation.",
    overview:
      "This project demonstrates basic automation testing practice using Selenium WebDriver. The goal is to automate simple but important web application flows and build a foundation for maintainable automation testing.",
    testingApproach:
      "I identified stable locators, wrote automated scripts for selected test cases, used waits to handle dynamic elements, executed tests, and documented the test result.",
    testingScope: [
      "Web UI Automation",
      "Functional Test Automation",
      "Regression Test Automation",
      "Locator Practice",
      "Wait Handling",
    ],
    automatedFlows: [
      "Login with valid credentials",
      "Login with invalid credentials",
      "Search product by keyword",
      "Validate required field message",
      "Navigate between pages",
    ],
    tools: ["Selenium WebDriver", "Python or Java", "PyTest or TestNG", "GitHub"],
    deliverables: [
      "Source code repository placeholder",
      "README file",
      "Test execution notes",
      "Explanation of locators and waits",
    ],
    sampleTestCases: [
      "Use clear test method names.",
      "Keep test data separate where possible.",
      "Use explicit waits instead of hard sleep where possible.",
      "Use readable assertions.",
      "Prepare README instructions for running the tests.",
    ],
    artifactLinks: [
      {
        label: "Selenium Test Scripts Guide",
        href: "/artifacts/selenium-test-scripts-guide",
        type: "View Page",
      },
    ],
    tags: ["Selenium WebDriver", "Locators", "Explicit Wait", "Regression Automation"],
  },
  {
    title: "Test Case Design Project - Applying EP and BVA Techniques",
    slug: "test-case-design-ep-bva",
    category: "Test Design",
    shortDescription:
      "Designed test cases for common input fields by applying Equivalence Partitioning and Boundary Value Analysis to improve test coverage.",
    overview:
      "This project focuses on test case design techniques. I applied Equivalence Partitioning and Boundary Value Analysis to identify valid, invalid, and boundary input values.",
    testingScope: [
      "Input Validation Testing",
      "Positive / Negative Testing",
      "Boundary Testing",
      "Test Case Design",
    ],
    featuresTested: [
      "Login password field",
      "Age input field",
      "Phone number field",
      "Transfer amount field",
      "Registration form",
    ],
    tools: ["Excel / Google Sheets", "Test case design techniques", "Requirement analysis"],
    deliverables: [
      "Equivalence partitions",
      "Boundary value list",
      "Positive and negative test cases",
      "Input validation test cases",
    ],
    sampleTestCases: [
      "Requirement: Age must be between 18 and 60.",
      "Equivalence partitions: Invalid less than 18, valid 18 to 60, invalid greater than 60.",
      "Boundary values: 17, 18, 19, 59, 60, 61.",
      "Enter age 17, system should reject the value.",
      "Enter age 18, system should accept the value.",
      "Enter age 60, system should accept the value.",
      "Enter age 61, system should reject the value.",
    ],
    artifactLinks: [
      {
        label: "Test Case Sheet",
        href: "/artifacts/test-case-sheet-sample.csv",
        type: "CSV",
      },
    ],
    tags: ["EP", "BVA", "Boundary Testing", "Input Validation"],
  },
  {
    title: "Bug Report Samples - Jira-style Format",
    slug: "bug-report-samples",
    category: "Bug Report",
    shortDescription:
      "Created sample bug reports using a structured format with clear reproduction steps, expected result, actual result, severity, priority, and evidence.",
    overview:
      "This project presents sample bug reports using a structured Jira-style format. The goal is to demonstrate how to report defects clearly with reproduction steps, expected result, actual result, severity, priority, and evidence.",
    testingScope: [
      "Bug Reporting",
      "Defect Documentation",
      "Severity / Priority Classification",
      "Bug Verification",
    ],
    tools: ["Jira-style bug report", "Markdown", "Browser testing notes"],
    deliverables: [
      "Bug ID",
      "Title",
      "Environment",
      "Preconditions",
      "Steps to Reproduce",
      "Expected Result",
      "Actual Result",
      "Severity",
      "Priority",
      "Evidence",
      "Status",
    ],
    sampleBugReports: [
      {
        id: "BUG-001",
        title: "Login button remains disabled after entering valid email and password",
        environment: "Chrome, Windows 10",
        preconditions: "User is on the login page.",
        stepsToReproduce: [
          "Open the login page.",
          "Enter a valid email address.",
          "Enter a valid password.",
          "Observe the Login button.",
        ],
        expectedResult: "The Login button should be enabled.",
        actualResult: "The Login button remains disabled.",
        severity: "High",
        priority: "High",
        evidence: "Text-based sample evidence for portfolio demonstration.",
        status: "Open",
      },
    ],
    artifactLinks: [
      {
        label: "Bug Report Sample",
        href: "/artifacts/bug-report-sample",
        type: "View Page",
      },
    ],
    tags: ["Jira-style Report", "Severity", "Priority", "Evidence"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
