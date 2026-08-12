import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { PRODUCTS, featuredProducts, productsByCategory } from '../products'
import { PARTNERS } from '../partners'
import { byShippingBreadth, pickHighlights } from '../sortProducts'

const zoneOf = (slug: string) => {
  const p = PRODUCTS.find((x) => x.slug === slug)!
  return PARTNERS[p.partnerId].shipsTo
}

describe('toimitusjärjestys', () => {
  it('nostaa laajimmin toimittavat ensin', () => {
    const sorted = byShippingBreadth(PRODUCTS)
    const rank = { worldwide: 0, eu: 1, fi: 2 } as Record<string, number>
    let prev = -1
    for (const p of sorted) {
      const r = rank[PARTNERS[p.partnerId].shipsTo]
      expect(r, `${p.slug} rikkoo järjestyksen`).toBeGreaterThanOrEqual(prev)
      prev = r
    }
  })

  it('on vakaa: sama vyöhyke säilyttää katalogin järjestyksen', () => {
    const ww = PRODUCTS.filter((p) => PARTNERS[p.partnerId].shipsTo === 'worldwide')
    const sorted = byShippingBreadth(PRODUCTS).filter(
      (p) => PARTNERS[p.partnerId].shipsTo === 'worldwide',
    )
    expect(sorted.map((p) => p.slug)).toEqual(ww.map((p) => p.slug))
  })

  it('ei pudota yhtään tuotetta — järjestys ei ole suodatin', () => {
    // 🔴 Tämä on koko säännön ydin. Suomeen rajatut tuotteet saavat jäädä
    // listaan; ne eivät vain johda sitä. Suodatus tapahtuu vasta kun lukija
    // valitsee toimitusmaan, koska väärä arvaus piilottaisi tavaraa hiljaa.
    expect(byShippingBreadth(PRODUCTS)).toHaveLength(PRODUCTS.length)
  })

  it('etusivun kahdeksan nostoa eivät ala Suomeen rajatulla', () => {
    // Vesa 12.8. kahdesti: ensin design-sivulta, sitten etusivulta.
    const shown = byShippingBreadth(featuredProducts(Number.MAX_SAFE_INTEGER)).slice(0, 8)
    expect(zoneOf(shown[0].slug), `kärjessä ${shown[0].slug}`).not.toBe('fi')
  })

  it('yhdenkään kategorian kärki ei ole Suomeen rajattu', () => {
    for (const cat of ['design', 'clothing', 'handicrafts', 'treats', 'superfoods'] as const) {
      const rows = byShippingBreadth(productsByCategory(cat))
      if (!rows.length) continue
      expect(zoneOf(rows[0].slug), `${cat}: kärjessä ${rows[0].slug}`).not.toBe('fi')
    }
  })

  it('pickHighlights ratkaisee hinnalla vasta vyöhykkeen sisällä', () => {
    const rows = productsByCategory('handicrafts')
    const picks = pickHighlights(rows, 4)
    expect(picks).toHaveLength(4)
    // Kallis Suomi-tuote ei saa ohittaa halvempaa maailmanlaajuista.
    const zones = picks.map((p) => zoneOf(p.slug))
    const rank = { worldwide: 0, eu: 1, fi: 2 } as Record<string, number>
    for (let i = 1; i < zones.length; i++) {
      expect(rank[zones[i]]).toBeGreaterThanOrEqual(rank[zones[i - 1]])
    }
  })

  it('jokainen tuotteita listaava sivu käyttää järjestystä', () => {
    // 🔴 Staattinen portti, koska tämä unohtui kahdesti: korjasin ensin vain
    // kategoriasivun, ja Vesa löysi etusivun; sitten löytyi vielä tuotesivun
    // "liittyvät" ja lahjaopas. Jos lisäät uuden tuoteruudukon, lisää se
    // tähän listaan ja kutsu järjestystä.
    const surfaces = [
      'components/ProductGrid.tsx',
      'pages/Category.tsx',
      'pages/Product.tsx',
      'pages/GiftGuides.tsx',
      'pages/Theme.tsx',
      'components/shop/ThemePicks.tsx',
    ]
    for (const rel of surfaces) {
      const src = readFileSync(join(__dirname, '..', '..', rel), 'utf8')
      expect(
        /byShippingBreadth|pickHighlights/.test(src),
        `${rel} listaa tuotteita ilman toimitusjärjestystä`,
      ).toBe(true)
    }
  })
})
