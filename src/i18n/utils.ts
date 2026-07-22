import { defaultLocale, locales, routes, type Locale, type RouteKey } from "./config";
import es from "./es.json";
import en from "./en.json";

const dictionaries = { es, en } satisfies Record<Locale, unknown>;

export type Dictionary = typeof es;

/** Reads the locale from a URL, falling back to the default locale. */
export function getLangFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split("/");
  if (locales.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }
  return defaultLocale;
}

/** Returns the full copy dictionary for a given locale, loaded from its own JSON file. */
export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}

/** Builds the localized href for one of the site's known route keys. */
export function getRoutePath(lang: Locale, key: RouteKey): string {
  const slug = routes[key][lang];
  return lang === defaultLocale ? `/${slug}` : `/${lang}/${slug}`;
}

/** Builds the localized home href. */
export function getHomePath(lang: Locale): string {
  return lang === defaultLocale ? "/" : `/${lang}`;
}

/**
 * Given the current locale, returns the equivalent path in the other locale(s),
 * used by the language switcher to keep the visitor on the same page.
 */
export function getAlternatePaths(currentLang: Locale, currentRouteKey?: RouteKey) {
  return locales.map((lang) => ({
    lang,
    href: currentRouteKey ? getRoutePath(lang, currentRouteKey) : getHomePath(lang),
  }));
}
