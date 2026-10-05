import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ArrowIcon from "@/public/icon/ArrowIcon";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Analyze your resume",
    description:
      "Upload your resume and let JobPilot understand your skills, experience, and career profile.",
  },
  {
    number: "02",
    title: "Match with jobs",
    description:
      "Compare your resume with a job description and discover your strengths and missing skills.",
  },
  {
    number: "03",
    title: "Apply with confidence",
    description:
      "Generate tailored resumes, cover letters, and interview questions for every opportunity.",
  },
];

const stats = [
  { value: "95%", label: "Resume match" },
  { value: "3x", label: "Faster applications" },
  { value: "24/7", label: "AI assistance" },
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section className="relative isolate">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--primary)]/5 blur-3xl" />

          <div className="absolute -right-40 top-48 h-72 w-72 animate-float rounded-full bg-[var(--secondary)]/10 blur-3xl" />

          <div className="absolute -left-40 top-72 h-72 w-72 animate-float-slow rounded-full bg-[var(--primary)]/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="animate-fade-up">
              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/10 bg-[var(--primary)]/5 px-4 py-2 text-sm font-medium text-[var(--primary)]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--secondary)]" />
                AI-powered job application assistant
              </div>

              <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
                Apply smarter.
                <span className="block text-[var(--primary)]">
                  Get hired faster.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
                JobPilot helps you analyze job descriptions, improve your
                resume, generate tailored applications, and prepare for
                interviews — all from one place.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/signup"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 text-sm font-semibold text-white shadow-xl shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Start for free
                  <ArrowIcon />
                </Link>

                <Link
                  href="#how-it-works"
                  className="inline-flex h-13 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-[var(--primary)]/30 hover:text-[var(--primary)]"
                >
                  See how it works
                </Link>
              </div>

              {/* Trust */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="text-[var(--secondary)]">✓</span>
                  Free to get started
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-[var(--secondary)]">✓</span>
                  No credit card
                </span>
              </div>
            </div>

            {/* Product Preview */}
            <div className="relative animate-fade-up animation-delay-200">
              {/* Floating card */}
              <div className="absolute -right-2 top-8 z-20 hidden animate-float rounded-2xl border border-gray-100 bg-white p-4 shadow-xl shadow-gray-200/50 sm:block lg:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--secondary)]/10">
                    <span className="text-[var(--secondary)]">✦</span>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-400">
                      AI Match
                    </p>
                    <p className="text-lg font-bold text-gray-900">94%</p>
                  </div>
                </div>
              </div>

              {/* Main dashboard */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl shadow-gray-200/60 sm:p-6">
                {/* Window header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                  </div>

                  <div className="rounded-lg bg-gray-50 px-3 py-1.5 text-[10px] font-medium text-gray-400">
                    JobPilot.app
                  </div>
                </div>

                {/* Dashboard */}
                <div className="grid gap-4 pt-5 sm:grid-cols-[170px_1fr]">
                  {/* Sidebar */}
                  <div className="hidden space-y-2 sm:block">
                    <div className="mb-5 px-2 text-lg font-bold text-[var(--primary)]">
                      JobPilot
                    </div>

                    <div className="rounded-xl bg-[var(--primary)] px-3 py-2.5 text-xs font-semibold text-white">
                      Dashboard
                    </div>

                    <div className="rounded-xl px-3 py-2.5 text-xs font-medium text-gray-400">
                      My Resumes
                    </div>

                    <div className="rounded-xl px-3 py-2.5 text-xs font-medium text-gray-400">
                      Job Matches
                    </div>

                    <div className="rounded-xl px-3 py-2.5 text-xs font-medium text-gray-400">
                      Applications
                    </div>
                  </div>

                  {/* Main dashboard area */}
                  <div>
                    <div className="mb-5">
                      <p className="text-xs text-gray-400">Good morning</p>
                      <h3 className="mt-1 text-lg font-bold text-gray-900">
                        Your career dashboard
                      </h3>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-2xl border border-gray-100 bg-gray-50 p-3"
                        >
                          <p className="text-xl font-bold text-[var(--primary)]">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-[10px] text-gray-400">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Analysis card */}
                    <div className="mt-4 rounded-2xl border border-gray-100 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-gray-400">
                            Resume analysis
                          </p>
                          <p className="mt-1 text-sm font-bold text-gray-900">
                            Frontend Developer
                          </p>
                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[var(--primary)]/15">
                          <span className="text-sm font-bold text-[var(--primary)]">
                            94%
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-[94%] rounded-full bg-[var(--primary)]" />
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {["React", "Next.js", "TypeScript", "Tailwind"].map(
                          (skill) => (
                            <span
                              key={skill}
                              className="rounded-lg bg-[var(--primary)]/5 px-2.5 py-1 text-[10px] font-medium text-[var(--primary)]"
                            >
                              {skill}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Application */}
                    <div className="mt-4 flex items-center justify-between rounded-2xl bg-[var(--secondary)]/10 p-4">
                      <div>
                        <p className="text-[10px] font-medium text-gray-400">
                          Application ready
                        </p>
                        <p className="mt-1 text-xs font-bold text-gray-900">
                          Your tailored application is ready
                        </p>
                      </div>

                      <div className="rounded-lg bg-[var(--secondary)] px-3 py-2 text-[10px] font-bold text-white">
                        View
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative secondary line */}
              <div className="absolute -bottom-3 left-10 right-10 h-3 rounded-b-3xl bg-[var(--secondary)]/70" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="border-y border-gray-100 bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
              Everything in one place
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              From job discovery to interview preparation.
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-500">
              Stop switching between different tools. JobPilot brings your
              entire application workflow together.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.number}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[var(--secondary)]">
                    {feature.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary)]/5 text-[var(--primary)] transition-transform duration-300 group-hover:rotate-45">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
                How it works
              </p>

              <h2 className="mt-4 max-w-lg text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                One simple workflow for your entire job search.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-gray-500">
                Upload your resume, add a job description, and let JobPilot
                handle the repetitive work.
              </p>

              <Link
                href="/signup"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--primary)]/20"
              >
                Try JobPilot
                <ArrowIcon />
              </Link>
            </div>

            {/* Workflow */}
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-5 top-6 hidden h-[calc(100%-48px)] w-px bg-gray-200 sm:block" />

              <div className="space-y-7">
                {[
                  {
                    step: "01",
                    title: "Upload your resume",
                    text: "Add your current resume and let JobPilot understand your experience.",
                  },
                  {
                    step: "02",
                    title: "Paste a job description",
                    text: "Compare your profile with any role you are interested in.",
                  },
                  {
                    step: "03",
                    title: "Get your application ready",
                    text: "Receive tailored content and interview preparation in seconds.",
                  },
                ].map((item) => (
                  <div key={item.step} className="relative flex gap-5">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white shadow-lg shadow-[var(--primary)]/20">
                      {item.step}
                    </div>

                    <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="about" className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-[var(--primary)] px-6 py-16 text-center sm:px-10 lg:px-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 animate-float rounded-full bg-white/10" />

            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[var(--secondary)]/15" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
                Start your journey
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Your next job application starts here.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Build better applications, save time, and approach every
                opportunity with more confidence.
              </p>

              <Link
                href="/signup"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--secondary)] px-6 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Create your free account
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
