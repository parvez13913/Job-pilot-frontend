import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--primary)]"
        >
          Job<span className="text-[var(--secondary)]">Pilot</span>
        </Link>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} JobPilot. All rights reserved.
        </p>

        <div className="flex gap-5 text-sm text-gray-500">
          <Link
            href="/privacy"
            className="transition-colors hover:text-[var(--primary)]"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="transition-colors hover:text-[var(--primary)]"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
