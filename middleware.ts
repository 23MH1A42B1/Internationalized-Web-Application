import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es', 'ar', 'ja'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (locales.some(locale => pathname.startsWith(`/${locale}`))) {
    return;
  }

  const locale =
    request.headers.get('accept-language')?.split(',')[0]?.split('-')[0] || 'en';

  return NextResponse.redirect(
    new URL(`/${locales.includes(locale) ? locale : 'en'}`, request.url)
  );
}
