import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale } from './app/i18n/config';

export function middleware(request: NextRequest) {
  // Get country from Vercel's geolocation headers
  const country = request.headers.get('x-vercel-ip-country')?.toLowerCase() || '';
  
  // Define French-speaking countries
  const frenchCountries = ['fr', 'be', 'ch', 'lu', 'mc'];
  
  // Set locale based on country
  const locale = frenchCountries.includes(country) ? 'fr' : defaultLocale;
  
  // Store the locale in a cookie
  const response = NextResponse.next();
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 