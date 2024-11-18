import type { NextConfig } from 'next'

export const nextConfig: NextConfig = {
    sassOptions: {
        implementation: 'sass-embedded',
    },
    i18n: {
        locales: ['en-US', 'ru'],
        defaultLocale: 'ru',
    },
}
