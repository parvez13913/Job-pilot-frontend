"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type SignInFormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function SigninForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const onSubmit = async (data: SignInFormValues) => {
    console.log(data);

    // Connect your RTK Query mutation or NextAuth/Auth handler here:
    //
    // await login({
    //   email: data.email,
    //   password: data.password,
    // }).unwrap();
    //
    // router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email address
        </label>

        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
          className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:ring-4 focus:ring-(--primary)/10 ${
            errors.email
              ? "border-red-400 focus:border-red-400"
              : "border-gray-200 focus:border-(--primary)"
          }`}
        />

        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <Link
            href="/forgot-password"
            className="text-xs font-medium text-(--primary) transition-colors hover:text-(--secondary)"
          >
            Forgot password?
          </Link>
        </div>

        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
            })}
            className={`h-12 w-full rounded-xl border bg-white px-4 pr-16 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:ring-4 focus:ring-(--primary)/10 ${
              errors.password
                ? "border-red-400 focus:border-red-400"
                : "border-gray-200 focus:border-(--primary)"
            }`}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-xs font-medium text-gray-400 transition-colors hover:text-(--primary)"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errors.password && (
          <p className="mt-1.5 text-xs text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Remember Me */}
      <div className="flex items-center">
        <label className="flex cursor-pointer items-center gap-2.5">
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-(--primary)"
          />
          <span className="text-xs text-gray-600">
            Remember me on this device
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative h-12 w-full cursor-pointer overflow-hidden rounded-xl bg-(--primary) text-sm font-semibold text-white shadow-lg shadow-(--primary)/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="relative z-10">
          {isSubmitting ? "Signing in..." : "Sign in"}
        </span>

        <span className="absolute inset-0 -translate-x-full bg-(--secondary) transition-transform duration-500 group-hover:translate-x-0" />
      </button>
    </form>
  );
}
