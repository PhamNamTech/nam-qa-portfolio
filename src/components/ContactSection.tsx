"use client";

import { ArrowDownToLine, Mail } from "lucide-react";
import { useState } from "react";
import { contactInfo, contactItems } from "@/data/contact";

export default function ContactSection() {
  const [emailStatus, setEmailStatus] = useState("");

  async function handleEmailClick() {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setEmailStatus("Email address copied. Your mail app should open if supported.");
    } catch {
      setEmailStatus("Opening your mail app if supported.");
    }
  }

  return (
    <section id="contact" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase text-blue-600">Contact Me</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
            Let&apos;s connect
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{contactInfo.availability}</p>
          <p className="mt-4 text-base leading-8 text-slate-600">{contactInfo.ctaText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${contactInfo.email}`}
              onClick={handleEmailClick}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 sm:w-auto"
            >
              <Mail size={16} aria-hidden="true" />
              Email Me
            </a>
            <a
              href={contactInfo.cvPath}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 sm:w-auto"
            >
              <ArrowDownToLine size={16} aria-hidden="true" />
              Download CV
            </a>
          </div>
          {emailStatus ? (
            <p className="mt-3 text-sm font-medium text-emerald-700" aria-live="polite">
              {emailStatus}
            </p>
          ) : null}
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-bold text-slate-950">Contact Information</h3>
          <div className="mt-5 grid gap-4">
            {contactItems.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{label}</p>
                    <p className="mt-1 break-words text-sm leading-6 text-slate-600">{value}</p>
                  </div>
                </>
              );

              if (href && href !== "#") {
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex gap-3 rounded-lg p-2 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={label}
                  className="flex gap-3 rounded-lg p-2"
                  aria-label={`${label}: ${value}`}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
