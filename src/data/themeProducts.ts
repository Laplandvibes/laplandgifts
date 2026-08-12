import { PRODUCTS } from './products'
import { subgroupOf } from './subgroups'
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
 * Kaksi ehtoa, molemmat opittu ensimmäisestä livekokeilusta:
 *
 * 1. Vähintään neljä tuotetta. Nostoruudukko on neljä korttia leveä, ja
 *    kolmen kortin rivi jonka perässä lukee "katso kaikki" näyttää siltä
 *    että valikoima loppui kesken.
 *
 * 2. 🔴 Teeman on ylitettävä alaryhmäraja TÄLLÄ sivulla. Käsityösivulla
 *    Sauna-teeman yhdeksän tuotetta ovat kaikki alaryhmässä "Sauna", joten
 *    nosto piirsi otsikon "Sauna" ja heti sen alle toisen otsikon "Sauna" —
 *    samat tuotteet kahdesti. Teema ansaitsee noston vain jos se kokoaa
 *    jotain, mitä sivun oma ryhmittely ei jo kokoa.
 */
export function themesForCategory(cat: CategoryId): Array<{ theme: Theme; items: Product[] }> {
  return THEMES.map((theme) => ({
    theme,
    items: productsByTheme(theme.id).filter((p) => p.category === cat),
  }))
    .filter((x) => x.items.length >= 4)
    .filter((x) => new Set(x.items.map((p) => subgroupOf(p.slug))).size > 1)
    .sort((a, b) => b.items.length - a.items.length)
    // 🔴 3. ehto: teema ei saa toistaa jo näytettyä. Herkkusivulla Muumit-
    // teeman neljä tuotetta ovat Muumi-brändättyjä marjatuotteita eli
    // kaikki myös Lapin luonto -teemassa, joten sivulle piirtyi kaksi
    // otsikkoa ja niiden alle täsmälleen samat neljä korttia. Teemat saavat
    // mennä päällekkäin — sama tuote kuuluu aidosti moneen aiheeseen — mutta
    // kategoriasivulla ei näytetä toista listaa, joka on jo katettu.
    .reduce<Array<{ theme: Theme; items: Product[] }>>((kept, x) => {
      const shown = new Set(kept.flatMap((k) => k.items.map((p) => p.slug)))
      const fresh = x.items.filter((p) => !shown.has(p.slug))
      if (fresh.length >= 4) kept.push(x)
      return kept
    }, [])
}
