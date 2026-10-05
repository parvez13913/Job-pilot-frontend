"use client";

import SigninForm from "@/components/auth/SigninForm";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT HERO SECTION */}
        <section className="relative hidden overflow-hidden bg-(--primary) lg:flex">
          {/* Animated background */}
          <div className="absolute -left-24 -top-24 h-80 w-80 animate-float rounded-full bg-white/10" />

          <div className="absolute -bottom-32 -right-20 h-96 w-96 animate-float-slow rounded-full bg-(--secondary)/20" />

          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-white/5" />

          <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-16">
            {/* Logo */}
            <Link
              href="/"
              className="w-fit text-2xl font-bold tracking-tight text-white transition-transform duration-300 hover:scale-105"
            >
              Job<span className="text-(--secondary)">Pilot</span>
            </Link>

            {/* Hero content */}
            <div className="max-w-lg animate-fade-up">
              <span className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                AI-Powered Job Search
              </span>

              <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                Welcome back,
                <span className="block text-(--secondary)">
                  ready for your next leap?
                </span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-white/75">
                Log in to access your saved opportunities, tracked applications,
                and AI-tailored insights.
              </p>
            </div>

            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} JobPilot
            </p>
          </div>
        </section>

        {/* RIGHT FORM SECTION */}
        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-md animate-fade-up">
            {/* Mobile logo */}
            <Link
              href="/"
              className="mb-10 block text-center text-2xl font-bold tracking-tight text-(--primary) lg:hidden"
            >
              Job<span className="text-(--secondary)">Pilot</span>
            </Link>

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Welcome back
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Please enter your credentials to access your account.
              </p>
            </div>

            {/* FORM */}
            <SigninForm />

            {/* Sign up link */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="font-semibold text-(--primary) transition-colors hover:text-(--secondary)"
              >
                Sign up
              </Link>
            </p>

            {/* Mobile accent bar */}
            <div className="mx-auto mt-10 h-1 w-16 rounded-full bg-(--secondary) lg:hidden" />
          </div>
        </section>
      </div>
    </main>
  );
}
