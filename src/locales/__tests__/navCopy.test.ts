import { describe, expect, it } from 'vitest'
import { NAV_COPY, type NavCopy, type SecondaryNavId } from '../navCopy'
import { CATEGORIES } from '../../data/categories'

const CATEGORY_IDS = CATEGORIES.map((c) => c.id)

const SECONDARY_IDS: SecondaryNavId[] = ['boutiques', 'luxury', 'brands', 'guides', 'shipping']

/**
 * 🔴 Navin käännösportti (2.8.2026).
 *
 * `navCopy.ts` osoitti aiemmin kymmenen kielen kohdalla samaan `en`-objektiin.
 * Se ei näkynyt mitenkään: tyypit menivät läpi, testit menivät läpi, sivu
 * renderöityi — saksankielinen lukija vain näki englanninkielisen navin.
 * Juuri tällainen vika jää huomaamatta, koska mikään ei kaadu.
 *
 * Tämä testi kaataa buildin, jos joku kieli palaa englantiin. Se ei arvioi
 * käännöksen laatua, vaan sitä että käännös on ylipäätään olemassa.
 */
const LANGS = Object.keys(NAV_COPY) as (keyof typeof NAV_COPY)[]

/** Kielet joissa jokin nyt käännetty rivi on aidosti sama kuin englannissa. */
const SHARED_WITH_EN: Partial<Record<string, string[]>> = {
  // "Design", "Merch" ja "Superfoods" ovat vakiintuneita lainasanoja, joita ei
  // käännetä näissä kielissä. Ne on lueteltava tässä, jotta testi ei pakota
  // keksimään käännöstä joka näyttäisi lukijasta oudolta.
  // "Boutiques" on ranskalainen lainasana, jonka englanti, ranska, espanja ja
  // portugali kirjoittavat samalla tavalla. Se on näissä kolmessa se hyväksytyn
  // käännöksen pääsana ("Boutiques de Laponie/Laponia/da Lapônia") — ei
  // englanniksi unohtunut rivi. Italia ja hollanti taipuvat omikseen
  // ("Boutique", "Boetieks") eivätkä tarvitse poikkeusta.
  de: ['Design', 'Merch', 'Superfoods', 'Menü'],
  sv: ['Design', 'Merch', 'Superfoods'],
  fr: ['Design', 'Merch', 'Menu', 'Boutiques'],
  it: ['Design', 'Merch', 'Menu'],
  nl: ['Design', 'Merch', 'Superfoods', 'Menu'],
  es: ['Merch', 'Boutiques'],
  'pt-BR': ['Design', 'Merch', 'Menu', 'Boutiques'],
  fi: ['Design', 'Merch'],
  ja: [],
  'zh-CN': [],
  ko: [],
}

/** Kaikki merkkijonoarvot litteänä listana, funktiot kutsuttuina. */
function strings(c: NavCopy): [string, string][] {
  const out: [string, string][] = []
  for (const id of CATEGORY_IDS) out.push([`catShort.${id}`, c.catShort[id]])
  for (const id of SECONDARY_IDS) out.push([`secShort.${id}`, c.secShort[id]])
  for (const k of [
    'openMenu',
    'closeMenu',
    'menuLabel',
    'shopNavLabel',
    'utilityNavLabel',
    'searchPlaceholder',
    'searchLabel',
    'searchClear',
    'searchEmpty',
  ] as const) {
    out.push([k, c[k]])
  }
  out.push(['searchResults', c.searchResults(3)])
  return out
}

describe('navin käännökset', () => {
  it('kaikilla 12 kielellä on oma NavCopy-objekti', () => {
    expect(LANGS).toHaveLength(12)
    for (const l of LANGS) expect(NAV_COPY[l], `${l} puuttuu`).toBeTruthy()
  })

  it('yksikään kieli ei ole englannin alias', () => {
    for (const l of LANGS) {
      if (l === 'en') continue
      expect(NAV_COPY[l], `${l} osoittaa samaan objektiin kuin en`).not.toBe(NAV_COPY.en)
    }
  })

  it('yksikään rivi ei ole jäänyt englanniksi ilman perustetta', () => {
    const enRows = new Map(strings(NAV_COPY.en))
    for (const l of LANGS) {
      if (l === 'en') continue
      const allowed = SHARED_WITH_EN[l] ?? []
      for (const [key, value] of strings(NAV_COPY[l])) {
        if (value === enRows.get(key) && !allowed.includes(value)) {
          throw new Error(`${l}.${key} on yhä englanniksi: "${value}"`)
        }
      }
    }
  })

  it('yksikään rivi ei ole tyhjä', () => {
    for (const l of LANGS) {
      for (const [key, value] of strings(NAV_COPY[l])) {
        expect(value.trim().length, `${l}.${key} on tyhjä`).toBeGreaterThan(0)
      }
    }
  })

  it('tulosmäärä sisältää luvun jokaisella kielellä', () => {
    for (const l of LANGS) {
      expect(NAV_COPY[l].searchResults(7), `${l}.searchResults`).toMatch(/7/)
    }
  })
})
