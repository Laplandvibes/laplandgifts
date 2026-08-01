import { describe, it, expect } from 'vitest'
import { readdirSync } from 'node:fs'
import { PRODUCTS, productsByCategory, productBySlug, featuredProducts } from '../products'
import { CATEGORIES } from '../categories'
import { PARTNERS } from '../partners'
import { CATEGORY_IDS } from '../types'

describe('katalogin eheys', () => {
  it('tuoteslugit ovat uniikkeja', () => {
    const slugs = PRODUCTS.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('slugit ovat URL-turvallisia', () => {
    for (const p of PRODUCTS) {
      expect(p.slug, p.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
    }
  })

  it('jokainen tuote viittaa olemassa olevaan kumppaniin', () => {
    for (const p of PRODUCTS) {
      expect(PARTNERS[p.partnerId], `${p.slug} → tuntematon kumppani ${p.partnerId}`).toBeDefined()
    }
  })

  it('jokainen tuote kuuluu tunnettuun kategoriaan', () => {
    for (const p of PRODUCTS) {
      expect(CATEGORY_IDS).toContain(p.category)
    }
  })

  it('jokaisella hinnalla on tarkistuspäivä ja positiivinen arvo', () => {
    for (const p of PRODUCTS) {
      expect(p.priceFrom, p.slug).toBeGreaterThan(0)
      expect(p.priceCheckedAt, p.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })

  it('tuotelinkki osoittaa kumppanin omaan domainiin', () => {
    for (const p of PRODUCTS) {
      const partner = PARTNERS[p.partnerId]
      const host = new URL(p.partnerProductUrl).host
      const base = new URL(partner.baseUrl).host
      expect(host.endsWith(base.replace(/^www\./, '')), `${p.slug}: ${host} ei ole ${base}`).toBe(true)
    }
  })

  // Kuvat generoidaan Task 15:ssä. Katalogi listaa jo lopulliset tiedostonimet,
  // joten tämä testi otetaan käyttöön (poistetaan .skip) kun kuvat ovat paikallaan.
  it('jokaisella tuotteella on kuvatiedosto sekä avif- että webp-muodossa', () => {
    const files = new Set(readdirSync('public/images'))
    for (const p of PRODUCTS) {
      expect(files.has(`${p.image}.webp`), `${p.slug}: ${p.image}.webp puuttuu`).toBe(true)
      expect(files.has(`${p.image}.avif`), `${p.slug}: ${p.image}.avif puuttuu`).toBe(true)
    }
  })

  it('copyssa ei ole em-viivoja eikä kiellettyjä sanoja', () => {
    const banned = /stunning|breathtaking|world-class|magical/i
    for (const p of PRODUCTS) {
      for (const text of [p.name.en, p.name.fi, p.description.en, p.description.fi]) {
        expect(text.includes('—'), `${p.slug}: em-viiva copyssa`).toBe(false)
        expect(banned.test(text), `${p.slug}: kielletty sana`).toBe(false)
      }
    }
  })

  it('jokaisessa kategoriassa on vähintään yksi tuote', () => {
    // 'experiences' tulee GYG-katalogista (shared/gyg/picks.ts), ei tästä tiedostosta.
    // 'merch' odottaa Fourthwall-kaupan avaamista: emme listaa tuotteita joita ei voi ostaa.
    for (const c of CATEGORIES.filter((c) => c.id !== 'experiences' && c.id !== 'merch')) {
      expect(productsByCategory(c.id).length, `${c.id} on tyhjä`).toBeGreaterThan(0)
    }
  })

  /**
   * 🔴 Monipuolisuusportti. Ensimmäisessä versiossa käsityöt-kategoria oli kolme
   * lähes identtistä Marttiinin puukkoa: kategoria näytti siltä että se "hyppää
   * uudestaan samaan". Yksi kumppani tai valmistaja ei saa täyttää kategoriaa,
   * koska silloin kauppa on kumppanin tuoteluettelo eikä kuratoitu valikoima.
   * Raja on kolme, koska kolmella samaa merkkiä saa vielä näytettyä sarjan.
   */
  const MAX_PER_CATEGORY = 3

  it('yksikään kumppani ei täytä kategoriaa (enintään kolme tuotetta)', () => {
    for (const c of CATEGORY_IDS) {
      const counts = new Map<string, number>()
      for (const p of productsByCategory(c)) {
        counts.set(p.partnerId, (counts.get(p.partnerId) ?? 0) + 1)
      }
      for (const [partnerId, n] of counts) {
        expect(n, `${c}: ${partnerId} on ${n} tuotteella, raja ${MAX_PER_CATEGORY}`).toBeLessThanOrEqual(
          MAX_PER_CATEGORY,
        )
      }
    }
  })

  it('yksikään valmistaja ei täytä kategoriaa (enintään kolme tuotetta)', () => {
    for (const c of CATEGORY_IDS) {
      const counts = new Map<string, number>()
      for (const p of productsByCategory(c)) {
        counts.set(p.brand, (counts.get(p.brand) ?? 0) + 1)
      }
      for (const [brand, n] of counts) {
        expect(n, `${c}: ${brand} on ${n} tuotteella, raja ${MAX_PER_CATEGORY}`).toBeLessThanOrEqual(
          MAX_PER_CATEGORY,
        )
      }
    }
  })

  it('productBySlug löytää tuotteen ja palauttaa undefined tuntemattomalle', () => {
    expect(productBySlug(PRODUCTS[0].slug)?.slug).toBe(PRODUCTS[0].slug)
    expect(productBySlug('ei-ole-olemassa')).toBeUndefined()
  })

  it('featuredProducts palauttaa vain featured-tuotteita ja kunnioittaa rajaa', () => {
    const f = featuredProducts(4)
    expect(f.length).toBeLessThanOrEqual(4)
    expect(f.every((p) => p.featured)).toBe(true)
  })

  it('kategorioita on seitsemän ja slugit ovat uniikkeja', () => {
    expect(CATEGORIES.length).toBe(7)
    expect(new Set(CATEGORIES.map((c) => c.slug)).size).toBe(7)
  })
})

/**
 * Tuotetiedot on luettu kumppanin sivulta, ei keksitty. Nämä testit eivät voi
 * todistaa ettei arvoa ole keksitty, mutta ne kiinnittävät sen mikä on
 * koneellisesti tarkistettavissa: lähde osoittaa samaan kauppaan josta ostetaan,
 * molemmat kieliversiot ovat olemassa, eikä käännös muuta lukuja.
 */
describe('tuotetiedot', () => {
  const withDetails = PRODUCTS.filter((p) => p.details)

  /**
   * Numerot arvosta vertailukelpoisessa muodossa. Suomi kirjoittaa desimaalin
   * pilkulla ("14,2 g") ja englanti pisteellä ("14.2 g"), joten pilkku
   * normalisoidaan pisteeksi ennen vertailua. Kaikki muu eroavuus on virhe:
   * juuri tämä testi estää sen, että 27 cm muuttuu käännöksessä 25 cm:ksi.
   */
  const numbersIn = (s: string) =>
    (s.match(/\d+(?:[.,]\d+)?/g) ?? []).map((n) => n.replace(',', '.'))

  const bilingual = (p: (typeof PRODUCTS)[number]) => {
    const d = p.details!
    const rows: Array<[string, { en: string; fi: string }]> = d.specs.map((s, i) => [
      `${p.slug} spec[${i}] ${s.key}`,
      s.value,
    ])
    if (d.ingredients) rows.push([`${p.slug} ingredients`, d.ingredients])
    if (d.allergens) rows.push([`${p.slug} allergens`, d.allergens])
    return rows
  }

  it('jokaisella details-lohkolla on lähde kumppanin omassa domainissa', () => {
    for (const p of withDetails) {
      const partner = PARTNERS[p.partnerId]
      const sourceHost = new URL(p.details!.sourceUrl).host
      const productHost = new URL(p.partnerProductUrl).host
      const base = new URL(partner.baseUrl).host.replace(/^www\./, '')
      expect(sourceHost.endsWith(base), `${p.slug}: lähde ${sourceHost} ei ole ${base}`).toBe(true)
      expect(
        sourceHost,
        `${p.slug}: lähde on eri kaupasta kuin ostolinkki`,
      ).toBe(productHost)
    }
  })

  it('fetchedAt on ISO-päivä', () => {
    for (const p of withDetails) {
      expect(p.details!.fetchedAt, p.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(Number.isNaN(Date.parse(p.details!.fetchedAt)), p.slug).toBe(false)
    }
  })

  it('jokaisella tuotetietorivillä on sekä en että fi, kumpikaan ei tyhjä', () => {
    for (const p of withDetails) {
      expect(p.details!.specs.length, `${p.slug}: tyhjä spec-lista`).toBeGreaterThan(0)
      for (const [where, value] of bilingual(p)) {
        expect(value.en.trim().length, `${where}: en puuttuu`).toBeGreaterThan(0)
        expect(value.fi.trim().length, `${where}: fi puuttuu`).toBeGreaterThan(0)
      }
    }
  })

  it("key 'other' vaatii labelin, muut avaimet eivät saa sitä käyttää", () => {
    for (const p of withDetails) {
      for (const [i, spec] of p.details!.specs.entries()) {
        if (spec.key === 'other') {
          expect(spec.label, `${p.slug} spec[${i}]: 'other' ilman labelia`).toBeDefined()
          expect(spec.label!.en.trim().length, `${p.slug} spec[${i}]: label.en tyhjä`).toBeGreaterThan(0)
          expect(spec.label!.fi.trim().length, `${p.slug} spec[${i}]: label.fi tyhjä`).toBeGreaterThan(0)
        } else {
          expect(spec.label, `${p.slug} spec[${i}]: ${spec.key} ei saa omaa labelia`).toBeUndefined()
        }
      }
    }
  })

  it('tuotetiedoissa ei ole em-viivoja eikä kiellettyjä sanoja', () => {
    const banned = /stunning|breathtaking|world-class|magical/i
    for (const p of withDetails) {
      const texts = bilingual(p).flatMap(([where, v]) => [
        [where + ' en', v.en] as const,
        [where + ' fi', v.fi] as const,
      ])
      for (const spec of p.details!.specs) {
        if (spec.label) texts.push([`${p.slug} label en`, spec.label.en], [`${p.slug} label fi`, spec.label.fi])
      }
      for (const [where, text] of texts) {
        expect(text.includes('—'), `${where}: em-viiva`).toBe(false)
        expect(banned.test(text), `${where}: kielletty sana`).toBe(false)
      }
    }
  })

  it('numerot täsmäävät kieliversioiden välillä', () => {
    for (const p of withDetails) {
      for (const [where, value] of bilingual(p)) {
        expect(numbersIn(value.fi), `${where}: luvut eroavat kieliversioiden välillä`).toEqual(
          numbersIn(value.en),
        )
      }
    }
  })

  it('elintarvikkeiden ainesosat ja allergeenit ovat kaksikielisiä pareja', () => {
    // Kenttä saa puuttua (kumppani ei ilmoita), mutta ei saa olla puolikas.
    for (const p of withDetails) {
      for (const field of ['ingredients', 'allergens'] as const) {
        const v = p.details![field]
        if (!v) continue
        expect(typeof v.en, `${p.slug}.${field}.en`).toBe('string')
        expect(typeof v.fi, `${p.slug}.${field}.fi`).toBe('string')
      }
    }
  })
})
