"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authenticateUser, login } from "../../utils/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (authenticateUser(email, password)) {
      console.log("Login successful");
      login(rememberMe);
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Try email: newaq@gmail.com");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-black-solid)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-[var(--color-grey-14)] rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[var(--color-azure-42)] to-[var(--color-blue-59)] p-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[var(--color-white-solid)]">
              Dashboard Login
            </h2>
            <p className="mt-2 text-sm text-[var(--color-white--800)]">
              Enter your credentials to access the admin dashboard
            </p>
          </div>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-[var(--color-red-55)] p-4 rounded-md">
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
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--color-white-solid)]"
              >
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-[var(--color-grey-64-400)]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-10 block w-full rounded-md border-gray-300 bg-[var(--color-grey-13)] text-[var(--color-white-solid)] shadow-sm focus:ring-[var(--color-azure-50)] focus:border-[var(--color-azure-50)] sm:text-sm"
                  placeholder="newaq@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[var(--color-white-solid)]"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-[var(--color-grey-64-400)]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="pl-10 block w-full rounded-md border-gray-300 bg-[var(--color-grey-13)] text-[var(--color-white-solid)] shadow-sm focus:ring-[var(--color-azure-50)] focus:border-[var(--color-azure-50)] sm:text-sm"
                  placeholder="demopass123"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[var(--color-chartreuse-green-60)] focus:ring-[var(--color-chartreuse-green-60)] border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-[var(--color-white-solid)]"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[var(--color-black-solid)] bg-[var(--color-chartreuse-green-60)] hover:bg-[#a6ff00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-chartreuse-green-60)] transition-all duration-200"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6 bg-[var(--color-grey-14)] rounded-lg p-4 border border-[var(--color-chartreuse-green-60)]">
            <div className="text-sm text-center text-[var(--color-white-solid)]">
              <p className="font-semibold mb-1">Demo Credentials</p>
              <p>Email: newaq@gmail.com</p>
              <p>Password: demopass123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
