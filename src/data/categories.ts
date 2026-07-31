import type { CategoryId } from './types'

export interface Category {
  id: CategoryId
  /** URL-polku ilman kieliprefixiä, esim. "/design". */
  slug: string
  /** Kuvatiedoston runko public/images/:ssä. */
  image: string
  order: number
}

export const CATEGORIES: Category[] = [
  { id: 'design',       slug: '/design',       image: 'cat-design',        order: 1 },
  { id: 'clothing',     slug: '/clothing',     image: 'cat-clothing',      order: 2 },
  { id: 'handicrafts',  slug: '/handicrafts',  image: 'cat-artisan-crafts', order: 3 },
  { id: 'treats',       slug: '/treats',       image: 'cat-treats',        order: 4 },
  { id: 'superfoods',   slug: '/superfoods',   image: 'cat-superfoods',    order: 5 },
  { id: 'merch',        slug: '/merch',        image: 'cat-pod-merch',     order: 6 },
  { id: 'experiences',  slug: '/experiences',  image: 'cat-gift-experiences', order: 7 },
]

export function categoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}

export function categoryById(id: CategoryId): Category {
  const c = CATEGORIES.find((x) => x.id === id)
  if (!c) throw new Error(`Tuntematon kategoria: ${id}`)
  return c
}
