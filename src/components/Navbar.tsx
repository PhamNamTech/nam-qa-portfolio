"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { usePreferences } from "@/components/PreferencesProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, toggleLanguage, t } = usePreferences();
  const menuId = "mobile-navigation";
  const navLinks = [
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.skills, href: "/#skills" },
    { label: t.nav.experience, href: "/#experience" },
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.artifacts, href: "/#artifacts" },
    { label: t.nav.workflow, href: "/#workflow" },
  ];

  function highlightSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.classList.remove("section-highlight");
    window.setTimeout(() => section.classList.add("section-highlight"), 20);
    window.setTimeout(() => section.classList.remove("section-highlight"), 950);
  }

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    setIsOpen(false);

    const hash = href.split("#")[1];

    if (!hash) return;

    if (pathname === "/") {
      event.preventDefault();
      const section = document.getElementById(hash);

      if (!section) return;

      window.history.pushState(null, "", `/#${hash}`);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      highlightSection(hash);
      return;
    }

    window.sessionStorage.setItem("pending-section-highlight", hash);
  }

  useEffect(() => {
    if (pathname !== "/") return;

    const pendingSection =
      window.sessionStorage.getItem("pending-section-highlight") ||
      window.location.hash.replace("#", "");

    if (!pendingSection) return;

    window.sessionStorage.removeItem("pending-section-highlight");
    const timer = window.setTimeout(() => highlightSection(pendingSection), 350);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    function handleHashChange() {
      const sectionId = window.location.hash.replace("#", "");

      if (sectionId) {
        highlightSection(sectionId);
      }
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  useEffect(() => {
    function handleDocumentClick(event: globalThis.MouseEvent) {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="/#"]',
      );

      if (!link) return;

      const sectionId = link.getAttribute("href")?.split("#")[1];

      if (!sectionId) return;

      window.setTimeout(() => highlightSection(sectionId), 80);
    }

    document.addEventListener("click", handleDocumentClick, true);

    return () => document.removeEventListener("click", handleDocumentClick, true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/#home"
          onClick={(event) => handleNavClick(event, "/#home")}
          className="text-base font-bold text-slate-950 transition hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 dark:!text-slate-100 dark:hover:!text-blue-300"
        >
          Pham Van Nam
        </Link>

        <div className="hidden items-center gap-3 lg:gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="text-xs font-medium text-slate-600 transition hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 lg:text-sm dark:!text-slate-300 dark:hover:!text-blue-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:!text-slate-200 dark:hover:bg-slate-800 dark:hover:!text-blue-300"
          >
            {t.nav.language}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? t.nav.themeLight : t.nav.themeDark}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:!text-slate-200 dark:hover:bg-slate-800 dark:hover:!text-blue-300"
          >
            {theme === "light" ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 md:hidden dark:border-slate-700 dark:!text-slate-200 dark:hover:bg-slate-800 dark:hover:!text-blue-300"
          aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div
          id={menuId}
          className="border-t border-slate-200 bg-white px-4 py-3 shadow-sm md:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="mx-auto grid max-w-6xl gap-2">
            <div className="mb-2 flex gap-2">
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:!text-slate-200 dark:hover:bg-slate-800 dark:hover:!text-blue-300"
              >
                {t.nav.language}
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "light" ? t.nav.themeLight : t.nav.themeDark}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:!text-slate-200 dark:hover:bg-slate-800 dark:hover:!text-blue-300"
              >
                {theme === "light" ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 dark:!text-slate-200 dark:hover:bg-slate-800 dark:hover:!text-blue-300"
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
