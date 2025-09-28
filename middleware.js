import { NextResponse } from "next/server";

export function middleware(request) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl;

  // Check if this is a dashboard route
  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isLoginRoute = pathname === "/login";

  // Get the authentication cookie
  const isAuthenticated =
    request.cookies.get("isAuthenticated")?.value === "true";

  // Redirect to login if accessing dashboard without authentication
  if (isDashboardRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect to dashboard if already authenticated and trying to access login
  if (isLoginRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If at root, redirect based on auth status
  if (pathname === "/") {
    return isAuthenticated
      ? NextResponse.redirect(new URL("/dashboard", request.url))
      : NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Configure which routes the middleware runs on
export const config = {
  matcher: ["/", "/login", "/dashboard/:path*"],
};
