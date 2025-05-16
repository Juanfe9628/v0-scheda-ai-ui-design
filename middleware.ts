import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // This is a simplified example - in a real app, you would check for authentication
  // and redirect accordingly

  // For demo purposes, we'll redirect /dashboard to / if not authenticated
  // In a real app, you would check for a session cookie or token
  const isAuthenticated = true // This would be a real check in production

  if (request.nextUrl.pathname === "/") {
    // If user is authenticated and tries to access the landing page,
    // redirect them to the dashboard
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
