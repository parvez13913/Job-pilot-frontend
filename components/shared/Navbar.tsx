import MenuIcon from "@/public/icon/MenuIcon";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[var(--primary)]"
        >
          Job<span className="text-[var(--secondary)]">Pilot</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-[var(--primary)]"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-[var(--primary)]"
          >
            How it works
          </Link>

          <Link
            href="#about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-[var(--primary)]"
          >
            About
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/signin"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:text-[var(--primary)]"
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu */}
        <details className="relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]">
            <span className="sr-only">Open menu</span>

            <MenuIcon />
          </summary>

          <div className="absolute right-0 top-14 w-64 rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl shadow-gray-200/50">
            <nav className="flex flex-col">
              <Link
                href="#features"
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[var(--primary)]"
              >
                Features
              </Link>

              <Link
                href="#how-it-works"
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[var(--primary)]"
              >
                How it works
              </Link>

              <Link
                href="#about"
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[var(--primary)]"
              >
                About
              </Link>

              <div className="my-2 border-t border-gray-100" />

              <Link
                href="/signin"
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Sign in
              </Link>

              <Link
                href="/signup"
                className="mt-1 rounded-xl bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get started
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
