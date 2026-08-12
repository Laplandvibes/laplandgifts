import { PRODUCTS } from './products'
import { THEMES, type Theme, type ThemeId } from './themes'
import type { CategoryId, Product } from './types'

const BY_ID = new Map(THEMES.map((t) => [t.id, t]))

/** Teeman tuotteet katalogin järjestyksessä. */
export function productsByTheme(id: ThemeId): Product[] {
  const t = BY_ID.get(id)
  if (!t) return []
  const want = new Set(t.slugs)
  return PRODUCTS.filter((p) => want.has(p.slug))
}

/**
 * Kategoriasivulle nostettavat teemat, vahvin ensin.
 *
 * Alaraja on neljä tuotetta: nostoruudukko on neljä korttia leveä, ja
 * kolmen kortin rivi jonka perässä lukee "katso kaikki" näyttää siltä
 * että valikoima loppui kesken.
 */
export function themesForCategory(cat: CategoryId): Array<{ theme: Theme; items: Product[] }> {
  return THEMES.map((theme) => ({
    theme,
    items: productsByTheme(theme.id).filter((p) => p.category === cat),
  }))
    .filter((x) => x.items.length >= 4)
    .sort((a, b) => b.items.length - a.items.length)
}
