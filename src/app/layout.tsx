import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PreferencesProvider } from "@/components/PreferencesProvider";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en" className={`${beVietnam.variable} scroll-smooth antialiased`}>
      <body>
        <PreferencesProvider>
          <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200">
            <Navbar />
            {children}
            <Footer />
          </div>
        </PreferencesProvider>
      </body>
    </html>
  );
}
