import ArrowIcon from "@/public/icon/ArrowIcon";
import Link from "next/link";

export default function DashboardPage() {
  // Mock data matching your backend GET /dashboard
  const stats = [
    { label: "Active Resumes", value: "3", sub: "Uploaded & parsed" },
    { label: "Saved Jobs", value: "15", sub: "Targets tracked" },
    { label: "Applications", value: "10", sub: "2 In interview stage" },
    { label: "Average Match", value: "76.4%", sub: "Across all analyses" },
  ];

  const pipeline = [
    { label: "Saved", count: 2, color: "bg-gray-100 text-gray-700" },
    { label: "Applied", count: 4, color: "bg-blue-50 text-blue-600" },
    {
      label: "Interview",
      count: 2,
      color: "bg-[var(--secondary)]/10 text-[var(--secondary)] font-bold",
    },
    {
      label: "Offer",
      count: 1,
      color: "bg-emerald-50 text-emerald-600 font-bold",
    },
    { label: "Rejected", count: 1, color: "bg-rose-50 text-rose-600" },
  ];

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/10 bg-[var(--primary)]/5 px-3 py-1 text-xs font-medium text-[var(--primary)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--secondary)]" />
            Live Backend Connected
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-950">
            Good morning, Parvez 👋
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Here is your job application overview and AI recommendations for
            today.
          </p>
        </div>

        <Link
          href="/analysis"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[var(--primary)]/20 hover:-translate-y-0.5 transition-all"
        >
          Analyze New Job
          <ArrowIcon />
        </Link>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-2xl font-bold text-[var(--primary)]">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-bold text-gray-900">{stat.label}</p>
            <p className="mt-1 text-[11px] text-gray-400">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Main Two Columns */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left 2 Cols: Pipeline & Recent Match */}
        <div className="lg:col-span-2 space-y-6">
          {/* Application Pipeline */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-sm">
                Application Pipeline
              </h3>
              <Link
                href="/applications"
                className="text-xs font-semibold text-[var(--primary)] hover:underline"
              >
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-5 gap-2 pt-2">
              {pipeline.map((item) => (
                <div
                  key={item.label}
                  className={`p-3 rounded-2xl text-center ${item.color}`}
                >
                  <p className="text-lg font-bold">{item.count}</p>
                  <p className="text-[10px] uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Resume Analysis Card (From Homepage preview) */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
                  Top Recommended Role
                </p>
                <h3 className="mt-1 text-base font-bold text-gray-900">
                  Frontend Developer @ Vercel
                </h3>
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

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-[var(--primary)]/5 px-2.5 py-1 text-[11px] font-medium text-[var(--primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                href="/tailored-resume"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--secondary)] hover:underline"
              >
                Tailor Resume →
              </Link>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Quick AI Assistant Box */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--secondary)]/10 text-[var(--secondary)] font-bold text-sm">
                ✦
              </div>
              <h3 className="font-bold text-gray-900 text-sm">AI Next Steps</h3>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-xs font-bold text-gray-900">
                  Prepare for Technical Round
                </p>
                <p className="text-[11px] text-gray-500 mt-1">
                  Generate 10 tailored interview questions based on your latest
                  job match.
                </p>
                <Link
                  href="/interviews"
                  className="mt-2.5 inline-block text-[11px] font-bold text-[var(--primary)] hover:underline"
                >
                  Start practice →
                </Link>
              </div>

              <div className="p-3.5 rounded-2xl bg-[var(--secondary)]/10">
                <p className="text-xs font-bold text-gray-900">
                  1 Cover Letter Draft Ready
                </p>
                <p className="text-[11px] text-gray-500 mt-1">
                  Your enthusiastic tone cover letter for Stripe is ready to
                  copy.
                </p>
                <Link
                  href="/cover-letters"
                  className="mt-2.5 inline-block text-[11px] font-bold text-[var(--secondary)] hover:underline"
                >
                  View letter →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link
              href="/resumes"
              className="w-full inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 hover:border-[var(--primary)]/30 hover:text-[var(--primary)] transition-all"
            >
              Manage My Resumes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
