import type { Locale } from '../i18n/config'

export interface Painting {
  id: string
  image: string
  caption: Record<Locale, string>
}

export const paintings: Painting[] = [
  {
    id: 'piece-01',
    image: '/images/painting-01.webp',
    caption: { es: 'Óleo sobre lienzo, 2025', en: 'Oil on canvas, 2025' }
  },
  {
    id: 'piece-02',
    image: '/images/painting-02.webp',
    caption: {
      es: 'Acrílico sobre lienzo, 2025',
      en: 'Acrylic on canvas, 2025'
    }
  },
  {
    id: 'piece-03',
    image: '/images/painting-03.webp',
    caption: { es: 'Técnica mixta, 2025', en: 'Mixed media, 2025' }
  }
]
