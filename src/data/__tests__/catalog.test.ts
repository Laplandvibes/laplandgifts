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
  it.skip('jokaisella tuotteella on kuvatiedosto sekä avif- että webp-muodossa', () => {
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
