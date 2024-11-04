import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isStudioRoute = request.nextUrl.pathname.startsWith('/studio')
  const isDevelopment = process.env.NODE_ENV === 'development'

  if (isStudioRoute && !isDevelopment) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/studio/:path*'
}
