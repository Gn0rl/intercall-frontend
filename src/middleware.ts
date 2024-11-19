import { NextResponse } from 'next/server'

import { Language } from './layers/shared/types'

const locales: Language[] = ['en', 'ru']

export function middleware(request: any) {
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    console.log(pathname)

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = 'ru'
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|image/*).*)',
        // "/((?!.*\.svg).*)",
        // Optional: only run on root (/) URL
        '/',
        // "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\.svg|image).*)",
        '/api',
    ],
}
