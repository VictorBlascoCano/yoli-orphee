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

## Project structure

```
src/
  i18n/
    config.ts     # locales, default locale, translated route slugs
    es.json        # ALL Spanish copy — edit text here, never in components
    en.json        # ALL English copy
    utils.ts        # getDictionary(), getLangFromUrl(), getRoutePath()...
  data/
    paintings.ts    # gallery data, decoupled from markup/copy
  components/       # small, single-purpose .astro components
  layouts/
    BaseLayout.astro
  views/            # the ACTUAL page markup, one file per page, language-agnostic
    HomeView.astro        # takes a `lang` prop, renders dict[lang]
    AboutView.astro
    TherapiesView.astro
    ShopView.astro
    CommissionView.astro
  pages/            # thin route stubs — ONLY declare which locale + URL
    index.astro           # <HomeView lang="es" />        → /
    sobre-mi.astro         # <AboutView lang="es" />       → /sobre-mi
    terapias.astro         # <TherapiesView lang="es" />   → /terapias
    tienda.astro            # <ShopView lang="es" />        → /tienda
    tienda/encargo.astro    # <CommissionView lang="es" />  → /tienda/encargo
    en/
      index.astro           # <HomeView lang="en" />        → /en
      about.astro            # <AboutView lang="en" />      → /en/about
      therapies.astro         # <TherapiesView lang="en" /> → /en/therapies
      shop.astro               # <ShopView lang="en" />      → /en/shop
      shop/commission.astro     # <CommissionView lang="en" /> → /en/shop/commission
public/
  images/           # replace the placeholder SVGs with real photos of the paintings
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

## Design notes

- Palette: warm stone paper, ink, deep plum and clay-green, with a soft
  rose-quartz accent — tokens live in `src/styles/global.css` under `@theme`.
- Typefaces: Fraunces (display), Work Sans (body), Space Mono (labels/nav language codes).
- Signature element: the hand-drawn brushstroke (`BrushDivider.astro`) ties
  together the "energy flow" of Reiki and the literal stroke of a paintbrush.
- No client-side JS framework is used; the mobile menu is a native
  `<details>/<summary>` disclosure, keeping the site at (near) zero JS.
