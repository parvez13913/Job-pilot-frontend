"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type SignupFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const password = watch("password");

  const onSubmit = async (data: SignupFormValues) => {
    console.log(data);

    // Later connect your RTK Query mutation here:
    //
    // await signup({
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    // }).unwrap();
    //
    // router.push(`/verify-signup?email=${data.email}`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Full name
        </label>

        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          {...register("name", {
            required: "Full name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
          className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:ring-4 focus:ring-(--primary)/10 ${
            errors.name
              ? "border-red-400 focus:border-red-400"
              : "border-gray-200 focus:border-(--primary)"
          }`}
        />

        {errors.name && (
          <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

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
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
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
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 transition-colors hover:text-(--primary) cursor-pointer"
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

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Confirm password
        </label>

        <div className="relative">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className={`h-12 w-full rounded-xl border bg-white px-4 pr-16 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:ring-4 focus:ring-(--primary)/10 ${
              errors.confirmPassword
                ? "border-red-400 focus:border-red-400"
                : "border-gray-200 focus:border-(--primary)"
            }`}
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 transition-colors hover:text-(--primary) cursor-pointer"
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errors.confirmPassword && (
          <p className="mt-1.5 text-xs text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Terms */}
      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            {...register("terms", {
              required: "You must accept the terms",
            })}
            className="mt-1 h-4 w-4 cursor-pointer rounded border-gray-300 accent-(--primary)"
          />

          <span className="text-xs leading-5 text-gray-500">
            I agree to the{" "}
            <Link
              href="/terms"
              className="font-medium text-(--primary) hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-medium text-(--primary) hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        {errors.terms && (
          <p className="mt-1.5 text-xs text-red-500">{errors.terms.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative h-12 w-full overflow-hidden rounded-xl bg-(--primary) text-sm font-semibold text-white shadow-lg shadow-(--primary)/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
      >
        <span className="relative z-10">
          {isSubmitting ? "Creating account..." : "Create account"}
        </span>

        <span className="absolute inset-0 -translate-x-full bg-(--secondary) transition-transform duration-500 group-hover:translate-x-0" />
      </button>
    </form>
  );
}
