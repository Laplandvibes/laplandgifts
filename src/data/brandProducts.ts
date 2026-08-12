import { PRODUCTS } from './products'
import { BRANDS, type Brand } from './brands'
import type { Product } from './types'

/**
 * Brändin tuotteet katalogin järjestyksessä.
 *
 * Sidos on tuotteen `brand`-kenttä, ei oma tunnus: brändi on jo kirjoitettu
 * jokaiseen tuotteeseen, ja toinen rinnakkainen kartta ajautuisi siitä
 * erilleen ensimmäisessä lisäyksessä. `brands.test.ts` vahtii, että jokaisen
 * esittelyn nimi vastaa vähintään yhtä tuotetta.
 */
export function productsByBrand(id: string): Product[] {
  const brand = BRANDS.find((b) => b.id === id)
  if (!brand) return []
  return PRODUCTS.filter((p) => p.brand === brand.name)
}

/** Esittelyt, joilla on vähintään yksi tuote, tuotemäärä suurin ensin. */
export function brandsWithProducts(): Array<{ brand: Brand; count: number }> {
  return BRANDS.map((brand) => ({
    brand,
    count: PRODUCTS.filter((p) => p.brand === brand.name).length,
  }))
    .filter((x) => x.count > 0)
    .sort((a, b) => b.count - a.count || a.brand.name.localeCompare(b.brand.name))
}
