# Yoli Orphée — Astro 7 site

A minimalist, bilingual (ES/EN) site for a holistic therapist & painter, built with
Astro 7, Tailwind CSS v4 and Astro's built-in i18n routing. Rebuilt from
https://yoliorphee.wordpress.com/ as a fast, static, framework-native site.

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to /dist
npm run preview
```

## Why `views/` instead of duplicating markup per language

Every page's actual layout/markup lives **once**, in `src/views/*.astro`. Each
view takes a `lang` prop and reads its own copy from the matching JSON
dictionary. The files under `src/pages/` (and `src/pages/en/`) are tiny
one-line stubs whose only job is to declare "this URL renders `HomeView` in
`es`" or "in `en`". So a layout change (spacing, new section, grid tweak) is
made **once** in the view file and shows up in both languages automatically —
adding a third language later means adding one JSON file and one small stub
per page, never touching the markup.

## i18n approach

Astro's native `i18n` config (`astro.config.mjs`) handles routing: Spanish is the
default locale and lives at the root (`/terapias`), English is prefixed
(`/en/therapies`). Route slugs are translated too (see `routes` in
`src/i18n/config.ts`), which is better for SEO than a generic `/en/terapias`.

All copy lives in `src/i18n/es.json` and `src/i18n/en.json` — plain data files,
completely separate from components and pages. To add a language:

1. Add the locale code to `locales` in `src/i18n/config.ts`.
2. Duplicate `en.json` → `xx.json` and translate it.
3. Add it to the `dictionaries` map in `src/i18n/utils.ts`.
4. Duplicate the `src/pages/en/` folder as `src/pages/xx/`.
