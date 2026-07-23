export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'es'

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English'
}

export const routes = {
  about: { es: 'sobre-mi', en: 'about' },
  therapies: { es: 'terapias', en: 'therapies' },
  shop: { es: 'tienda', en: 'shop' },
  commission: { es: 'tienda/encargo', en: 'shop/commission' }
} as const

export type RouteKey = keyof typeof routes
