"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
  },
  {
    id: "account",
    title: "2. Your Account",
  },
  {
    id: "using",
    title: "3. Using JobPilot",
  },
  {
    id: "ai",
    title: "4. AI-Generated Content",
  },
  {
    id: "content",
    title: "5. Your Content",
  },
  {
    id: "prohibited",
    title: "6. Prohibited Activities",
  },
  {
    id: "intellectual",
    title: "7. Intellectual Property",
  },
  {
    id: "third-party",
    title: "8. Third-Party Services",
  },
  {
    id: "availability",
    title: "9. Service Availability",
  },
  {
    id: "disclaimer",
    title: "10. Disclaimer",
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
  },
  {
    id: "termination",
    title: "12. Termination",
  },
  {
    id: "changes",
    title: "13. Changes to These Terms",
  },
  {
    id: "contact",
    title: "14. Contact Us",
  },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("acceptance");

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
      {/* ================= HEADER ================= */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gray-50/70">
        {/* Decorative shapes */}
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

            <span className="text-gray-600">Terms of Service</span>
          </div>

          {/* Heading */}
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex rounded-full bg-[var(--primary)]/5 px-4 py-2 text-sm font-semibold text-[var(--primary)]">
              Terms & Conditions
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Terms of Service
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
              These Terms of Service explain the rules and conditions that apply
              when you use JobPilot. Please read them carefully before using our
              platform.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-500">
                Last updated: October 5, 2026
              </span>

              <span className="rounded-full border border-[var(--secondary)]/20 bg-[var(--secondary)]/5 px-4 py-2 text-sm font-medium text-[var(--secondary)]">
                Please read carefully
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* ================= SIDEBAR ================= */}
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

          {/* ================= ARTICLE ================= */}
          <article className="max-w-3xl">
            {/* Intro card */}
            <div className="mb-10 rounded-2xl border border-[var(--primary)]/10 bg-[var(--primary)]/5 p-5 sm:p-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Before you use JobPilot
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    By creating an account or using JobPilot, you agree to
                    follow these Terms of Service and all applicable laws.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= 1 ================= */}
            <section id="acceptance" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                1. Acceptance of Terms
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                By accessing or using JobPilot, you agree to be bound by these
                Terms of Service. If you do not agree with these terms, please
                do not use the service.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                These terms apply to all visitors, users, and other people who
                access or use JobPilot.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 2 ================= */}
            <section id="account" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                2. Your Account
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Some JobPilot features require an account. You are responsible
                for providing accurate information and keeping your account
                credentials secure.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "You are responsible for activity performed through your account.",
                  "You should use a strong and unique password.",
                  "You should not share your account credentials with another person.",
                  "You should notify us if you believe your account has been compromised.",
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

            {/* ================= 3 ================= */}
            <section id="using" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                3. Using JobPilot
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                JobPilot provides tools designed to help you organize and
                improve your job application process, including resume analysis,
                job matching, application assistance, and interview preparation.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                You agree to use the service only for lawful purposes and in
                accordance with these Terms.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 4 ================= */}
            <section id="ai" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                4. AI-Generated Content
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                JobPilot may use automated systems and AI to generate or analyze
                content, including resume suggestions, job matches, cover
                letters, and interview questions.
              </p>

              <div className="mt-6 rounded-2xl border border-[var(--secondary)]/20 bg-[var(--secondary)]/5 p-5">
                <p className="text-sm leading-6 text-gray-600">
                  AI-generated content may contain mistakes or inaccuracies. You
                  are responsible for reviewing generated content before
                  submitting it to an employer or relying on it for an important
                  decision.
                </p>
              </div>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 5 ================= */}
            <section id="content" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                5. Your Content
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                You may provide content such as resumes, job descriptions,
                application details, and other information when using JobPilot.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                You retain ownership of the content you provide. You are
                responsible for ensuring that you have the necessary rights and
                permissions to submit that content to JobPilot.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                By providing content, you grant JobPilot the limited rights
                necessary to process and use that content to provide the
                requested features of the service.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 6 ================= */}
            <section id="prohibited" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                6. Prohibited Activities
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                You agree not to misuse JobPilot or interfere with the normal
                operation of the service.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Attempt to gain unauthorized access",
                  "Use the service for unlawful purposes",
                  "Upload malicious or harmful content",
                  "Interfere with system security",
                  "Copy or reverse engineer the service",
                  "Abuse automated systems or APIs",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-100 bg-gray-50/70 p-4 text-sm text-gray-600"
                  >
                    <span className="mr-2 text-[var(--secondary)]">•</span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 7 ================= */}
            <section id="intellectual" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                7. Intellectual Property
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                JobPilot and its original software, interface, branding,
                designs, graphics, and other materials are owned by or licensed
                to JobPilot and are protected by applicable intellectual
                property laws.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                These Terms do not grant you ownership of JobPilot&apos;s
                underlying software, branding, or other proprietary materials.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 8 ================= */}
            <section id="third-party" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                8. Third-Party Services
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                JobPilot may depend on or integrate with third-party services,
                such as hosting, email, authentication, analytics, storage, or
                AI providers.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Third-party services may have their own terms and privacy
                policies. JobPilot is not responsible for the independent
                practices of third-party services.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 9 ================= */}
            <section id="availability" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                9. Service Availability
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We aim to keep JobPilot available and reliable, but we cannot
                guarantee that the service will always be available,
                uninterrupted, or free from errors.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We may temporarily suspend or modify parts of the service for
                maintenance, security, updates, or other operational reasons.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 10 ================= */}
            <section id="disclaimer" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                10. Disclaimer
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                JobPilot provides tools to assist with the job application
                process. We do not guarantee that using JobPilot will result in
                interviews, employment, job offers, or any specific career
                outcome.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                You are responsible for the information you submit to employers
                and for decisions you make based on information generated by the
                platform.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 11 ================= */}
            <section id="liability" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                11. Limitation of Liability
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                To the maximum extent permitted by applicable law, JobPilot and
                its contributors will not be liable for indirect, incidental,
                special, consequential, or similar damages resulting from your
                use of or inability to use the service.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Nothing in these Terms is intended to exclude liability that
                cannot legally be excluded under applicable law.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 12 ================= */}
            <section id="termination" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                12. Termination
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                You may stop using JobPilot at any time and may request deletion
                of your account where supported.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We may suspend or terminate access to the service if you violate
                these Terms, create security risks, misuse the platform, or
                where necessary to protect the service and its users.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 13 ================= */}
            <section id="changes" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                13. Changes to These Terms
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We may update these Terms from time to time as JobPilot evolves
                or as legal and operational requirements change.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                When material changes are made, we will update the date shown at
                the top of this page. Your continued use of JobPilot after
                updated Terms become effective means you accept the revised
                Terms, to the extent permitted by applicable law.
              </p>
            </section>

            <div className="my-6 border-t border-gray-100" />

            {/* ================= 14 ================= */}
            <section id="contact" className="scroll-mt-28 py-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                14. Contact Us
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                If you have questions about these Terms of Service, please
                contact the JobPilot team.
              </p>

              <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <p className="text-sm font-medium text-gray-400">
                  Legal contact
                </p>

                <a
                  href="mailto:legal@jobpilot.com"
                  className="mt-2 inline-block font-semibold text-[var(--primary)] transition-colors hover:text-[var(--secondary)]"
                >
                  legal@jobpilot.com
                </a>
              </div>
            </section>

            {/* Bottom */}
            <div className="mt-12 flex flex-col gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/"
                className="text-sm font-medium text-gray-500 transition-colors hover:text-[var(--primary)]"
              >
                ← Back to JobPilot
              </Link>

              <Link
                href="/privacy"
                className="text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--secondary)]"
              >
                Read Privacy Policy →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
