"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";
type Language = "en" | "vi";

type PreferencesContextValue = {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  t: typeof translations.en;
};

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      artifacts: "Artifacts",
      contact: "Contact",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      themeLight: "Switch to dark mode",
      themeDark: "Switch to light mode",
      language: "Tiếng Việt",
    },
    hero: {
      badge: "Open to Fresher / Intern / Junior QA roles",
      title: "Hi, I'm Pham Van Nam",
      subtitle: "Fresher Software Tester / QA Automation Engineer",
      description:
        "Computer Science student at Saigon University focused on manual testing, test case design, bug reporting, API testing, and basic Selenium WebDriver automation.",
      supporting:
        "I aim to build reliable software through structured testing, clear documentation, and continuous learning.",
      projects: "View Projects",
      cv: "Download CV",
      contact: "Contact Me",
      focus: "QA Focus",
      focusTitle: "Practical Testing Skills",
    },
    about: {
      label: "About",
      title: "Practical QA learner",
      p1: "I am Pham Van Nam, a Computer Science student at Saigon University with a career direction in Software Testing and QA Automation.",
      p2: "I have internship experience as a Tester / QC Intern at AGEST Vietnam, where I analyzed requirements, designed test cases, executed functional and regression testing, reported bugs in Jira-style format, and verified bug fixes.",
      p3: "My current focus is strengthening manual testing fundamentals while gradually improving automation skills with Selenium WebDriver, Postman, SQL, and Git.",
      facts: "Quick Facts",
    },
    skills: {
      label: "Skills",
      title: "QA skills for fresher roles",
    },
    experience: {
      label: "Experience",
      title: "Internship Experience",
    },
    projects: {
      label: "Projects",
      title: "Selected QA practice projects",
      intro:
        "Focused samples that show my testing workflow: requirement analysis, test case design, bug reporting, API testing, and basic automation.",
      showing: "Showing",
      project: "project",
      projects: "projects",
      empty: "No projects found for this category yet.",
      details: "View Details",
    },
    artifacts: {
      label: "Artifacts",
      title: "Sample QA documents",
      intro:
        "Practical sample/demo materials that show how I document testing work. They do not contain confidential company or client information.",
    },
    workflow: {
      label: "Workflow",
      title: "Simple testing workflow",
    },
    contact: {
      label: "Contact",
      title: "Let's connect",
      email: "Email Me",
      cv: "Download CV",
      copied: "Email address copied. Your mail app should open if supported.",
      opening: "Opening your mail app if supported.",
      info: "Contact Information",
    },
    footer: {
      text: "Fresher Software Tester / QA Automation Engineer.",
    },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      artifacts: "Tài liệu QA",
      contact: "Liên hệ",
      openMenu: "Mở menu điều hướng",
      closeMenu: "Đóng menu điều hướng",
      themeLight: "Chuyển sang giao diện tối",
      themeDark: "Chuyển sang giao diện sáng",
      language: "English",
    },
    hero: {
      badge: "Sẵn sàng cho vị trí Fresher / Intern / Junior QA",
      title: "Xin chào, tôi là Pham Van Nam",
      subtitle: "Fresher Software Tester / QA Automation Engineer",
      description:
        "Sinh viên ngành Khoa học máy tính tại Đại học Sài Gòn, tập trung vào manual testing, thiết kế test case, báo cáo lỗi, API testing và automation cơ bản với Selenium WebDriver.",
      supporting:
        "Tôi hướng tới việc xây dựng phần mềm ổn định hơn thông qua quy trình kiểm thử rõ ràng, tài liệu dễ hiểu và tinh thần học hỏi liên tục.",
      projects: "Xem dự án",
      cv: "Tải CV",
      contact: "Liên hệ",
      focus: "Trọng tâm QA",
      focusTitle: "Kỹ năng kiểm thử thực hành",
    },
    about: {
      label: "Giới thiệu",
      title: "Người học QA thực tế",
      p1: "Tôi là Pham Van Nam, sinh viên Khoa học máy tính tại Đại học Sài Gòn, định hướng theo Software Testing và QA Automation.",
      p2: "Tôi có kinh nghiệm thực tập Tester / QC Intern tại AGEST Vietnam, tham gia phân tích yêu cầu, thiết kế test case, kiểm thử chức năng và hồi quy, viết bug report theo dạng Jira và verify bug fix.",
      p3: "Hiện tại tôi tập trung củng cố nền tảng manual testing và từng bước cải thiện kỹ năng automation với Selenium WebDriver, Postman, SQL và Git.",
      facts: "Thông tin nhanh",
    },
    skills: {
      label: "Kỹ năng",
      title: "Kỹ năng QA phù hợp vị trí fresher",
    },
    experience: {
      label: "Kinh nghiệm",
      title: "Kinh nghiệm thực tập",
    },
    projects: {
      label: "Dự án",
      title: "Một số dự án QA thực hành",
      intro:
        "Các sample tập trung vào quy trình kiểm thử: phân tích yêu cầu, thiết kế test case, báo cáo lỗi, API testing và automation cơ bản.",
      showing: "Đang hiển thị",
      project: "dự án",
      projects: "dự án",
      empty: "Chưa có dự án cho nhóm này.",
      details: "Xem chi tiết",
    },
    artifacts: {
      label: "Tài liệu QA",
      title: "Tài liệu QA mẫu",
      intro:
        "Các tài liệu sample/demo thể hiện cách tôi ghi chép và trình bày công việc kiểm thử. Không chứa thông tin công ty hoặc khách hàng bảo mật.",
    },
    workflow: {
      label: "Quy trình",
      title: "Quy trình kiểm thử đơn giản",
    },
    contact: {
      label: "Liên hệ",
      title: "Kết nối với tôi",
      email: "Gửi Email",
      cv: "Tải CV",
      copied: "Đã copy email. Ứng dụng mail sẽ mở nếu trình duyệt hỗ trợ.",
      opening: "Đang mở ứng dụng mail nếu trình duyệt hỗ trợ.",
      info: "Thông tin liên hệ",
    },
    footer: {
      text: "Fresher Software Tester / QA Automation Engineer.",
    },
  },
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return savedTheme ?? (prefersDark ? "dark" : "light");
  });
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    return (window.localStorage.getItem("language") as Language | null) ?? "en";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === "vi" ? "vi" : "en";
    window.localStorage.setItem("language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      theme,
      language,
      toggleTheme: () => setTheme((current) => (current === "light" ? "dark" : "light")),
      toggleLanguage: () => setLanguage((current) => (current === "en" ? "vi" : "en")),
      t: translations[language],
    }),
    [language, theme],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const value = useContext(PreferencesContext);

  if (!value) {
    throw new Error("usePreferences must be used inside PreferencesProvider");
  }

  return value;
}
