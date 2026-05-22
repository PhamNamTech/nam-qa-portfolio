import type { Language } from "@/components/PreferencesProvider";

export type QaWorkspaceItemId =
  | "test-cases"
  | "bug-reports"
  | "api-testing"
  | "automation"
  | "sql-validation";

type LocalizedText = Record<Language, string>;

export type QaWorkspaceItem = {
  id: QaWorkspaceItemId;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  skills: Record<Language, string[]>;
  href: string;
  ctaLabel: LocalizedText;
  sectionTarget: "artifacts" | "projects";
};

export function localizeQaText(value: LocalizedText, language: Language) {
  return value[language] ?? value.en;
}

export function localizeQaSkills(value: Record<Language, string[]>, language: Language) {
  return value[language] ?? value.en;
}

export const qaWorkspaceItems: QaWorkspaceItem[] = [
  {
    id: "test-cases",
    title: {
      en: "Test Cases",
      vi: "Test Case",
    },
    subtitle: {
      en: "12 sample cases",
      vi: "12 test case mẫu",
    },
    description: {
      en: "Structured test cases covering modules such as login, search, cart, checkout, and order history.",
      vi: "Bộ test case có cấu trúc cho các module như đăng nhập, tìm kiếm, giỏ hàng, thanh toán và lịch sử đơn hàng.",
    },
    skills: {
      en: ["Test Case Design", "EP/BVA", "Functional Testing"],
      vi: ["Thiết kế test case", "EP/BVA", "Kiểm thử chức năng"],
    },
    href: "/artifacts/test-case-sheet",
    ctaLabel: {
      en: "View Test Case Sheet",
      vi: "Xem test case sheet",
    },
    sectionTarget: "artifacts",
  },
  {
    id: "bug-reports",
    title: {
      en: "Bug Reports",
      vi: "Bug Report",
    },
    subtitle: {
      en: "Jira-style format",
      vi: "Định dạng kiểu Jira",
    },
    description: {
      en: "Sample bug reports with clear title, steps to reproduce, expected result, actual result, severity, priority, and evidence.",
      vi: "Bug report mẫu có tiêu đề rõ ràng, bước tái hiện, kết quả mong đợi, kết quả thực tế, severity, priority và bằng chứng.",
    },
    skills: {
      en: ["Bug Reporting", "Severity", "Priority"],
      vi: ["Báo cáo lỗi", "Severity", "Priority"],
    },
    href: "/artifacts/bug-report-sample",
    ctaLabel: {
      en: "View Bug Report Sample",
      vi: "Xem bug report mẫu",
    },
    sectionTarget: "artifacts",
  },
  {
    id: "api-testing",
    title: {
      en: "API Testing",
      vi: "API Testing",
    },
    subtitle: {
      en: "Postman collection",
      vi: "Postman collection",
    },
    description: {
      en: "API testing sample for user management endpoints with status code, response body, and basic validation checks.",
      vi: "Mẫu kiểm thử API cho các endpoint quản lý người dùng, gồm status code, response body và các kiểm tra validation cơ bản.",
    },
    skills: {
      en: ["Postman", "REST API", "Status Code Validation"],
      vi: ["Postman", "REST API", "Kiểm tra status code"],
    },
    href: "/artifacts/postman-collection",
    ctaLabel: {
      en: "View Postman Collection",
      vi: "Xem Postman Collection",
    },
    sectionTarget: "artifacts",
  },
  {
    id: "automation",
    title: {
      en: "Automation",
      vi: "Automation",
    },
    subtitle: {
      en: "Selenium WebDriver",
      vi: "Selenium WebDriver",
    },
    description: {
      en: "Basic Selenium WebDriver automation practice for login, search, form validation, and navigation flows.",
      vi: "Thực hành automation cơ bản với Selenium WebDriver cho luồng đăng nhập, tìm kiếm, validate form và điều hướng.",
    },
    skills: {
      en: ["Selenium", "Locators", "Explicit Wait"],
      vi: ["Selenium", "Locator", "Explicit Wait"],
    },
    href: "/projects/selenium-web-automation",
    ctaLabel: {
      en: "View Automation Project",
      vi: "Xem dự án Automation",
    },
    sectionTarget: "projects",
  },
  {
    id: "sql-validation",
    title: {
      en: "SQL Validation",
      vi: "SQL Validation",
    },
    subtitle: {
      en: "Data checking",
      vi: "Kiểm tra dữ liệu",
    },
    description: {
      en: "SQL validation examples for checking user records, orders, payment status, duplicate data, and data consistency.",
      vi: "Ví dụ SQL validation để kiểm tra user record, đơn hàng, trạng thái thanh toán, dữ liệu trùng và tính nhất quán dữ liệu.",
    },
    skills: {
      en: ["SQL", "MySQL", "Data Validation"],
      vi: ["SQL", "MySQL", "Kiểm tra dữ liệu"],
    },
    href: "/artifacts/sql-validation-samples",
    ctaLabel: {
      en: "View SQL Samples",
      vi: "Xem mẫu SQL",
    },
    sectionTarget: "artifacts",
  },
];
