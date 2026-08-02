import { describe, expect, it } from 'vitest'
import { PRODUCTS, productsByCategory } from '../products'
import { CATEGORIES } from '../categories'
import { SUBGROUP_ORDER, groupProducts, subgroupLabel, subgroupOf } from '../subgroups'
import type { Lang } from '../../i18n/useLang'

const CATEGORY_IDS = CATEGORIES.map((c) => c.id)

describe('kategorioiden alaryhmät', () => {
  /**
   * 🔴 Tämä on ryhmittelyn ainoa oikea suoja. Kartasta puuttuva tuote ei
   * katoa — se päätyy nimettömään `other`-ryhmään listan loppuun — mutta se
   * näyttää sivulla irralliselta ja jää ilman otsikkoa. Uusi tuote unohtuu
   * kartasta juuri silloin kun tuotteita lisätään erissä, eli aina.
   */
  it('jokainen tuote kuuluu johonkin nimettyyn ryhmään', () => {
    const orphans = PRODUCTS.filter((p) => subgroupOf(p.slug) === 'other').map((p) => p.slug)
    expect(orphans, `puuttuvat alaryhmäkartasta: ${orphans.join(', ')}`).toEqual([])
  })

  it('tuotteen ryhmä on ilmoitettu sen oman kategorian järjestyksessä', () => {
    for (const p of PRODUCTS) {
      const order = SUBGROUP_ORDER[p.category]
      expect(
        order.includes(subgroupOf(p.slug)),
        `${p.slug}: ryhmä "${subgroupOf(p.slug)}" ei ole kategorian ${p.category} listassa`,
      ).toBe(true)
    }
  })

  it('ryhmittely ei hukkaa eikä monista tuotteita', () => {
    for (const c of CATEGORY_IDS) {
      const items = productsByCategory(c)
      const grouped = groupProducts(c, items).flatMap((g) => g.items)
      expect(grouped.length, `${c}: määrä muuttui ryhmittelyssä`).toBe(items.length)
      expect(new Set(grouped.map((p) => p.slug)).size, `${c}: tuote toistuu`).toBe(items.length)
    }
  })

  it('jokaisella käytössä olevalla ryhmällä on nimi en ja fi', () => {
    const used = new Set(PRODUCTS.map((p) => subgroupOf(p.slug)))
    for (const id of used) {
      for (const lang of ['en', 'fi'] as Lang[]) {
        expect(subgroupLabel(id, lang).trim().length, `${id} (${lang})`).toBeGreaterThan(0)
      }
    }
  })

  /**
   * Ryhmittely on esitystapa: jos kategoriassa on vain yksi ryhmä, otsikko on
   * turha ja sivu renderöi tavallisen ruudukon. Testi varmistaa, ettei
   * järjestyslista sisällä ryhmiä joita ei ole olemassa — sellainen rivi ei
   * kaada mitään mutta jää kuolleeksi koodiksi.
   */
  it('järjestyslistassa ei ole ryhmiä joita yksikään tuote ei käytä', () => {
    const used = new Set(PRODUCTS.map((p) => subgroupOf(p.slug)))
    for (const [cat, order] of Object.entries(SUBGROUP_ORDER)) {
      const dead = order.filter((id) => !used.has(id))
      expect(dead, `${cat}: käyttämättömiä ryhmiä ${dead.join(', ')}`).toEqual([])
    }
  })
})
