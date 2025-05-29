// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Add any custom logic here
  return NextResponse.next()
}

// Optional: Export config to specify matching paths
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}