import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { PageProvider } from '@/layers/app/providers'
import { Language } from '@/layers/shared/types'
import { Navbar } from '@/layers/widgets/navbar'

import './globals.scss'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'Intercall',
    description: 'Intercall',
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ lang: Language }>
}>) {
    const { lang } = await params

    return (
        <html lang={lang}>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <PageProvider lang={lang}>
                    <>
                        <Navbar />
                        {children}
                    </>
                </PageProvider>
            </body>
        </html>
    )
}
