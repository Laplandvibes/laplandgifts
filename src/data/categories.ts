import type { CategoryId } from './types'

export interface Category {
  id: CategoryId
  /** URL-polku ilman kieliprefixiä, esim. "/design". */
  slug: string
  /** Kuvatiedoston runko public/images/:ssä. */
  image: string
  /** object-position heron rajaukseen (Vesa 5.9.: 'kuvat leikkaantuu väärin').
   *  Mitattu 1280×~460-kaistalla: kohde on kuvan ylä-/keskiosassa. */
  focal?: string
  order: number
}

export const CATEGORIES: Category[] = [
  { id: 'design',       slug: '/design',       image: 'cat-design', focal: 'center 58%',        order: 1 },
  { id: 'clothing',     slug: '/clothing',     image: 'cat-clothing', focal: 'center 38%',      order: 2 },
  { id: 'handicrafts',  slug: '/handicrafts',  image: 'cat-artisan-crafts', focal: 'center 55%', order: 3 },
  { id: 'treats',       slug: '/treats',       image: 'cat-treats', focal: 'center 52%',        order: 4 },
  { id: 'superfoods',   slug: '/superfoods',   image: 'cat-superfoods', focal: 'center 50%',    order: 5 },
  { id: 'merch',        slug: '/merch',        image: 'cat-pod-merch', focal: 'center 58%',     order: 6 },
  { id: 'experiences',  slug: '/experiences',  image: 'cat-gift-experiences', focal: 'center 62%', order: 7 },
]

export function categoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}

export function categoryById(id: CategoryId): Category {
  const c = CATEGORIES.find((x) => x.id === id)
  if (!c) throw new Error(`Tuntematon kategoria: ${id}`)
  return c
}
