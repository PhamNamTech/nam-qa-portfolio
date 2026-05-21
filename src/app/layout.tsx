import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pham Van Nam | Fresher Software Tester / QA Automation Engineer",
  description:
    "Portfolio of Pham Van Nam, a Computer Science student and Fresher Software Tester focusing on manual testing, test case design, bug reporting, API testing, Selenium WebDriver, SQL, and QA Automation fundamentals.",
  authors: [{ name: "Pham Van Nam" }],
  keywords: [
    "Pham Van Nam",
    "Software Tester",
    "QA Tester",
    "Manual Tester",
    "QA Automation",
    "Selenium WebDriver",
    "Postman",
    "API Testing",
    "Bug Reporting",
    "Test Case Design",
    "Fresher Tester",
    "Vietnam QA",
  ],
  openGraph: {
    title: "Pham Van Nam | Fresher Software Tester / QA Automation Engineer",
    description:
      "Portfolio of Pham Van Nam, a Computer Science student and Fresher Software Tester focusing on manual testing, test case design, bug reporting, API testing, Selenium WebDriver, SQL, and QA Automation fundamentals.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body>{children}</body>
    </html>
  );
}
