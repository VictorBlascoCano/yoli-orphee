// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://yoli-orphee.vercel.app',
  trailingSlash: 'never',

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' }
      }
    })
  ],

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      // Spanish (default) lives at the root: /sobre-mi
      // English lives prefixed: /en/about
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
