// Dashboard layout with sidebar, hides Header and Footer

"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { isAuthenticated } from "../../utils/auth";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  // Check if user is authenticated
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex h-screen bg-[var(--color-black-solid)]">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 pb-6 border-b border-[var(--color-grey-13)]">
            <h1 className="text-2xl font-bold text-[var(--color-white-solid)]">
              Dashboard Overview
            </h1>
            <p className="text-[var(--color-white--800)] mt-1">
              Welcome back to your admin dashboard
            </p>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
