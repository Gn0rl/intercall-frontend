import { NextRequest, NextResponse } from 'next/server'

import { Language } from './layers/shared/types'

const locales: Language[] = ['ru']
const EXCEPTIONS = ['/favicon.ico', '/api', '/image'] as const

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.split('/')[1] === locale || pathname === `/${locale}`
    )
    const isException = EXCEPTIONS.some((exception) =>
        pathname.startsWith(exception)
    )

    if (pathnameHasLocale || isException) return

    const locale = 'ru'
    request.nextUrl.pathname = `/${locale}${pathname}`

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
        // '/api',
    ],
}
