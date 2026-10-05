"use client";
import NoteIcon from "@/public/icon/NoteIcon";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  {
    id: "information",
    title: "1. Information We Collect",
  },
  {
    id: "usage",
    title: "2. How We Use Your Information",
  },
  {
    id: "ai",
    title: "3. AI & Resume Processing",
  },
  {
    id: "sharing",
    title: "4. Information Sharing",
  },
  {
    id: "security",
    title: "5. Data Security",
  },
  {
    id: "retention",
    title: "6. Data Retention",
  },
  {
    id: "rights",
    title: "7. Your Rights",
  },
  {
    id: "cookies",
    title: "8. Cookies",
  },
  {
    id: "children",
    title: "9. Children's Privacy",
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
  },
  {
    id: "contact",
    title: "11. Contact Us",
  },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("information");

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gray-50/70">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 animate-float rounded-full bg-[var(--primary)]/5 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[var(--secondary)]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <Link
              href="/"
              className="transition-colors hover:text-[var(--primary)]"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-gray-600">Privacy Policy</span>
          </div>

          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex rounded-full bg-[var(--primary)]/5 px-4 py-2 text-sm font-semibold text-[var(--primary)]">
              Privacy & Security
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
              Your privacy matters to us. This Privacy Policy explains what
              information JobPilot collects, how we use it, and the choices you
              have when using our platform.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-500">
                Last updated: October 5, 2026
              </span>

              <span className="rounded-full border border-[var(--secondary)]/20 bg-[var(--secondary)]/5 px-4 py-2 text-sm font-medium text-[var(--secondary)]">
                Your data, your control
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                On this page
              </p>

              <nav className="space-y-1 border-l border-gray-200">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setActiveSection(section.id)}
                      className={`relative block border-l-2 py-2 pl-4 text-sm transition-all duration-300 ${
                        isActive
                          ? "border-[var(--primary)] font-semibold text-[var(--primary)]"
                          : "border-transparent text-gray-500 hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
                      }`}
                    >
                      {section.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="max-w-3xl">
            <div className="mb-10 rounded-2xl border border-[var(--primary)]/10 bg-[var(--primary)]/5 p-5 sm:p-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
                  <NoteIcon className="h-7 w-7" />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    A note about your information
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    JobPilot is designed to help you manage your job search.
                    Please review this policy carefully so you understand how
                    your information may be handled.
                  </p>
                </div>
              </div>
            </div>

            {/* 1 */}
            <section id="information" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                1. Information We Collect
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                When you use JobPilot, we may collect information that you
                provide directly to us and information generated through your
                use of the platform.
              </p>

              <h3 className="mt-6 font-semibold text-gray-900">
                Information you provide
              </h3>

              <ul className="mt-3 space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--secondary)]" />
                  Name and email address.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--secondary)]" />
                  Account credentials and authentication information.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--secondary)]" />
                  Resumes, job descriptions, cover letters, and application
                  information you choose to provide.
                </li>
              </ul>

              <h3 className="mt-6 font-semibold text-gray-900">
                Automatically collected information
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We may collect technical information such as browser type,
                device information, IP address, timestamps, and basic usage
                information needed to operate and secure the service.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* 2 */}
            <section id="usage" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                2. How We Use Your Information
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We use collected information to provide, maintain, improve, and
                secure JobPilot.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Create and manage your account",
                  "Analyze resumes and job descriptions",
                  "Generate application assistance",
                  "Prepare interview questions",
                  "Track job applications",
                  "Improve product reliability and security",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-100 bg-gray-50/70 p-4 text-sm text-gray-600"
                  >
                    <span className="mr-2 font-semibold text-[var(--primary)]">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* 3 */}
            <section id="ai" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                3. AI & Resume Processing
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                JobPilot may use automated processing and AI-powered systems to
                analyze information you submit and generate features such as
                resume analysis, job matching, tailored application content, and
                interview preparation.
              </p>

              <div className="mt-6 rounded-2xl border border-[var(--secondary)]/20 bg-[var(--secondary)]/5 p-5">
                <p className="text-sm leading-6 text-gray-600">
                  AI-generated content is intended to assist you and should be
                  reviewed before you use it in an application or other
                  professional context.
                </p>
              </div>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* 4 */}
            <section id="sharing" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                4. Information Sharing
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We do not share your personal information simply because you use
                JobPilot. We may share information when necessary to operate the
                service, comply with legal obligations, protect the service, or
                with service providers that process data on our behalf.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We may also disclose information when required by applicable law
                or when reasonably necessary to prevent fraud, abuse, security
                incidents, or harm.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* 5 */}
            <section id="security" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                5. Data Security
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We use reasonable technical and organizational measures to
                protect your information against unauthorized access, loss,
                misuse, or alteration.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                However, no online service can guarantee absolute security. You
                should use a strong, unique password and avoid sharing your
                account credentials with others.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* 6 */}
            <section id="retention" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                6. Data Retention
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We retain information for as long as reasonably necessary to
                provide the service, maintain your account, fulfill the purposes
                described in this policy, resolve disputes, enforce agreements,
                and meet legal or security requirements.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Retention periods may vary depending on the type of information
                and why it was collected.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* 7 */}
            <section id="rights" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                7. Your Rights
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Depending on where you live and applicable law, you may have
                rights concerning your personal information, including the
                ability to request access, correction, deletion, or other forms
                of control over your information.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                To make a privacy-related request, contact us using the
                information provided below.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* 8 */}
            <section id="cookies" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                8. Cookies
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                JobPilot may use cookies and similar technologies that are
                necessary for authentication, security, preferences, and
                essential functionality.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                You can manage cookies through your browser settings, although
                disabling certain cookies may affect how parts of the service
                function.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* 9 */}
            <section id="children" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                9. Children&apos;s Privacy
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                JobPilot is not intended for children who are not legally
                permitted to use the service. We do not knowingly collect
                personal information from children in violation of applicable
                law.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* 10 */}
            <section id="changes" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                10. Changes to This Policy
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We may update this Privacy Policy from time to time to reflect
                changes to JobPilot, our practices, or applicable requirements.
                When we make significant changes, we will update the date shown
                at the top of this page.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* 11 */}
            <section id="contact" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                11. Contact Us
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                If you have questions about this Privacy Policy or how your
                information is handled, please contact the JobPilot team.
              </p>

              <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <p className="text-sm font-medium text-gray-400">
                  Privacy contact
                </p>

                <a
                  href="mailto:privacy@jobpilot.com"
                  className="mt-2 inline-block font-semibold text-[var(--primary)] hover:text-[var(--secondary)]"
                >
                  privacy@jobpilot.com
                </a>
              </div>
            </section>

            {/* Bottom navigation */}
            <div className="mt-12 flex flex-col gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/"
                className="text-sm font-medium text-gray-500 transition-colors hover:text-[var(--primary)]"
              >
                ← Back to JobPilot
              </Link>

              <p className="text-sm text-gray-400">
                Thank you for trusting JobPilot.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
