"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  return (
    <>
      {!isDashboard && <Header />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
