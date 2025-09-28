"use client";

import { useRouter } from "next/navigation";
import { logout } from "../utils/auth";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center w-full px-4 py-3 text-[var(--color-white-solid)] hover:bg-[var(--color-grey-13)] transition-colors rounded-md mt-auto"
    >
      <svg
        className="w-5 h-5 mr-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      Logout
    </button>
  );
}
