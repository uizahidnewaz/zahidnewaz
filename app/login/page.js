"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authenticateUser, login } from "../../utils/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // For smooth appearance animation
  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (authenticateUser(email, password)) {
        console.log("Login successful");
        login(rememberMe);
        router.push("/dashboard");
      } else {
        setError("Invalid credentials. Please check your email and password.");
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-[var(--color-black-solid)] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-opacity duration-500 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-96 w-96 bg-[var(--color-chartreuse-green-60)] rounded-full filter blur-3xl opacity-[0.07] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 h-96 w-96 bg-[var(--color-chartreuse-green-60)] rounded-full filter blur-3xl opacity-[0.07] translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute left-1/4 top-1/4 h-64 w-64 bg-[var(--color-chartreuse-green-60)] rounded-full filter blur-3xl opacity-[0.04]"></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="max-w-md w-full bg-[var(--color-grey-14)] rounded-xl shadow-2xl overflow-hidden z-10 backdrop-blur-sm bg-opacity-90 border border-[var(--color-grey-13)] transition-transform duration-500 ease-out transform hover:scale-[1.01]">
        {/* Login Header with enhanced styling */}
        <div className="bg-[var(--color-grey-13)] p-8 border-b border-[var(--color-chartreuse-green-60)] relative overflow-hidden">
          {/* Header subtle pattern */}
          <div className="absolute inset-0 opacity-10 bg-noise-pattern"></div>

          {/* Logo and branding */}
          <div className="flex items-center justify-center mb-6 relative">
            <div className="h-16 w-16 rounded-xl bg-[var(--color-chartreuse-green-60)] flex items-center justify-center shadow-lg relative z-10">
              <svg
                className="w-9 h-9 text-[var(--color-black-solid)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <div className="absolute -inset-0.5 rounded-xl bg-[var(--color-chartreuse-green-60)] opacity-40 blur-md"></div>
            </div>
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-[var(--color-white-solid)] mb-2">
              Welcome Back
            </h2>
            <p className="text-sm text-[var(--color-white--800)] max-w-xs mx-auto">
              Sign in to your account to access the admin dashboard and manage
              your content
            </p>
          </div>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-6 bg-[rgba(229,57,53,0.08)] border-l-4 border-[var(--color-red-55)] p-4 rounded-md animate-fadeIn">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-[var(--color-red-55)]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-[var(--color-red-69)]">{error}</p>
                </div>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Email field with enhanced styling */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--color-white-solid)] mb-2 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1.5 text-[var(--color-chartreuse-green-60)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-lg border border-[var(--color-grey-13)] bg-[rgba(35,31,32,0.6)] text-[var(--color-white-solid)] shadow-sm focus:ring-[var(--color-chartreuse-green-60)] focus:border-[var(--color-chartreuse-green-60)] py-3 pl-4 pr-10 text-sm transition-all"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {email && (
                    <button
                      type="button"
                      onClick={() => setEmail("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-grey-64-400)] hover:text-[var(--color-white-solid)] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Password field with enhanced styling */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[var(--color-white-solid)] flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-1.5 text-[var(--color-chartreuse-green-60)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-medium text-[var(--color-chartreuse-green-60)] hover:underline hover:text-[#a6ff00] transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-lg border border-[var(--color-grey-13)] bg-[rgba(35,31,32,0.6)] text-[var(--color-white-solid)] shadow-sm focus:ring-[var(--color-chartreuse-green-60)] focus:border-[var(--color-chartreuse-green-60)] py-3 pl-4 pr-10 text-sm transition-all"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Remember me checkbox with enhanced styling */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-[var(--color-grey-13)] text-[var(--color-chartreuse-green-60)] focus:ring-[var(--color-chartreuse-green-60)] transition-colors"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-[var(--color-white--800)]"
                  >
                    Keep me signed in
                  </label>
                </div>
              </div>
            </div>

            {/* Sign in button with enhanced styling */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-semibold text-[var(--color-black-solid)] bg-[var(--color-chartreuse-green-60)] hover:bg-[#a6ff00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-chartreuse-green-60)] transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out opacity-0 group-hover:opacity-20 group-hover:scale-110 bg-gradient-to-r from-white via-transparent to-transparent"></span>
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-[var(--color-black-solid)]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Sign in</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Demo credentials with enhanced styling */}
          <div className="mt-10 pt-6 border-t border-[var(--color-grey-13)]">
            <div className="text-sm">
              <h3 className="font-medium mb-3 text-[var(--color-white-solid)] flex items-center justify-center">
                <svg
                  className="w-4 h-4 mr-1.5 text-[var(--color-chartreuse-green-60)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Demo Credentials
              </h3>
              <div className="grid grid-cols-2 gap-2 p-4 rounded-lg bg-[rgba(35,31,32,0.6)] border border-[var(--color-grey-13)] transition-all hover:border-[var(--color-chartreuse-green-60)]">
                <div className="text-left text-[var(--color-white--800)] font-medium">
                  Email:
                </div>
                <div className="text-right font-mono text-[var(--color-chartreuse-green-60)]">
                  newaz.blinto@gmail.com
                </div>
                <div className="text-left text-[var(--color-white--800)] font-medium">
                  Password:
                </div>
                <div className="text-right font-mono text-[var(--color-chartreuse-green-60)]">
                  demopass123
                </div>
              </div>
            </div>
          </div>

          {/* Security notice */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[var(--color-grey-64-400)] flex items-center justify-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Secured with end-to-end encryption
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-[var(--color-grey-64-400)]">
        &copy; {new Date().getFullYear()} Zahid Newaz. All rights reserved.
      </div>
    </div>
  );
}
