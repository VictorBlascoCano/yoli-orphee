// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://docs.astro.build/en/guides/internationalization/
export default defineConfig({
  site: "https://yoliorphee.example",
  trailingSlash: "never",

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      // Spanish (default) lives at the root: /sobre-mi
      // English lives prefixed: /en/about
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
