import { NextResponse } from "next/server";

export function middleware(request) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl;

  // Check if this is a dashboard route
  const isDashboardRoute = pathname.startsWith("/dashboard");

  // Get the authentication cookie
  const isAuthenticated =
    request.cookies.get("isAuthenticated")?.value === "true";

  // Redirect to login if accessing dashboard without authentication
  if (isDashboardRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Configure which routes the middleware runs on
export const config = {
  matcher: ["/dashboard/:path*"],
};
