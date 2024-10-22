import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
      implementation: 'sass-embedded',
    },
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['en-US', 'fr', 'nl-NL'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'ru',
    },
};

export default nextConfig;