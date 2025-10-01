"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "../utils/auth";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path) => {
    return pathname === path;
  };

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const navItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      path: "/dashboard/analytics",
      label: "Analytics",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      path: "/dashboard/projects",
      label: "Projects",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    },
    {
      path: "/dashboard/settings",
      label: "Settings",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-[var(--color-grey-14)] flex flex-col shadow-xl border-r border-[var(--color-grey-13)]">
      {/* Header with logo and title */}
      <div className="p-6 border-b border-[var(--color-grey-13)]">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-md bg-[var(--color-chartreuse-green-60)] flex items-center justify-center">
            <svg
              className="w-5 h-5 text-[var(--color-black-solid)]"
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
          </div>
          <h2 className="text-lg font-bold text-[var(--color-white-solid)]">
            Zahid{" "}
            <span className="text-[var(--color-chartreuse-green-60)]">
              Newaz
            </span>
          </h2>
        </div>
      </div>

      {/* Navigation section */}
      <nav className="flex-grow px-3 py-6">
        <div className="mb-2 px-4">
          <p className="uppercase text-xs tracking-wider text-[var(--color-grey-64-400)]">
            Main Menu
          </p>
        </div>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`flex items-center px-4 py-3 rounded-md transition-all ${
                  isActive(item.path)
                    ? "bg-[var(--color-grey-13)] active-link border-l-2 border-[var(--color-chartreuse-green-60)]"
                    : "hover:bg-[var(--color-grey-13)] border-l-2 border-transparent"
                }`}
              >
                <svg
                  className={`w-5 h-5 mr-3 ${
                    isActive(item.path)
                      ? "text-[var(--color-chartreuse-green-60)]"
                      : "text-[var(--color-grey-64-400)]"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={item.icon}
                  />
                </svg>
                <span
                  className={`navigation_text ${
                    isActive(item.path) ? "" : "text-[var(--color-white--800)]"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Additional section divider */}
        <div className="mt-8 mb-2 px-4">
          <p className="uppercase text-xs tracking-wider text-[var(--color-grey-64-400)]">
            User
          </p>
        </div>

        {/* Profile link */}
        <ul className="space-y-1">
          <li>
            <Link
              href="/dashboard/profile"
              className={`flex items-center px-4 py-3 rounded-md transition-all ${
                isActive("/dashboard/profile")
                  ? "bg-[var(--color-grey-13)] active-link border-l-2 border-[var(--color-chartreuse-green-60)]"
                  : "hover:bg-[var(--color-grey-13)] border-l-2 border-transparent"
              }`}
            >
              <svg
                className="w-5 h-5 mr-3 text-[var(--color-grey-64-400)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="navigation_text text-[var(--color-white--800)]">
                Profile
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer with copyright and logout button */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-[var(--color-grey-13)] bg-[var(--color-grey-13)] bg-opacity-30">
        <div className="text-xs text-[var(--color-grey-64-400)]">
          © 2024 Zahid Newaz
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center text-[var(--color-white--800)] hover:text-[var(--color-red-55)] transition-all rounded-md p-1"
          title="Logout"
        >
          <svg
            className="w-5 h-5 text-[var(--color-red-55)]"
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
        </button>
      </div>
    </div>
  );
}
