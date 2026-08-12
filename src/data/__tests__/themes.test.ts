import { describe, expect, it } from 'vitest'
import { PRODUCTS } from '../products'
import { THEMES, themeById } from '../themes'
import { productsByTheme, themesForCategory } from '../themeProducts'
import { THEME_COPY } from '../../locales/themeCopy'
import { LANG_PREFIX, type Lang } from '../../i18n/useLang'

const SLUGS = new Set(PRODUCTS.map((p) => p.slug))

describe('teemat', () => {
  it('ei viittaa poistettuun tuotteeseen', () => {
    // 🔴 Tämä on koko teematiedoston syy olla testattu: jäsenyys on käsin
    // ylläpidetty slug-lista, joten poistettu tuote jää siihen roikkumaan
    // eikä mikään muu huomaa sitä. Sama vikamuoto kuin occasions.ts:ssä,
    // jonka kaksi kuollutta slugia löytyivät vasta testistä 12.8.
    for (const t of THEMES) {
      for (const slug of t.slugs) {
        expect(SLUGS.has(slug), `${t.id}: tuntematon slug ${slug}`).toBe(true)
      }
    }
  })

  it('ei sisällä samaa slugia kahdesti saman teeman sisällä', () => {
    for (const t of THEMES) {
      expect(new Set(t.slugs).size, `${t.id}: duplikaatteja`).toBe(t.slugs.length)
    }
  })

  it('jokaisella teemalla on tarpeeksi tuotteita omaksi sivukseen', () => {
    // Alle kahdeksan tuotteen teemasivu on tyhjän näköinen, ja sen linkki
    // navigaatiossa lupaa enemmän kuin sivu antaa.
    for (const t of THEMES) {
      expect(productsByTheme(t.id).length, `${t.id}`).toBeGreaterThanOrEqual(8)
    }
  })

  it('themeById tunnistaa jokaisen teeman ja hylkää tuntemattoman', () => {
    for (const t of THEMES) expect(themeById(t.id)?.id).toBe(t.id)
    expect(themeById('ei-ole')).toBeUndefined()
  })

  it('nosto ei koskaan jää vajaaksi riviksi', () => {
    // themesForCategory lupaa vähintään neljä, koska ruudukko on neljä
    // korttia leveä ja kolmen kortin nosto näyttää katkenneelta.
    for (const cat of ['design', 'clothing', 'handicrafts', 'treats', 'superfoods'] as const) {
      for (const { theme, items } of themesForCategory(cat)) {
        expect(items.length, `${cat}/${theme.id}`).toBeGreaterThanOrEqual(4)
      }
    }
  })

  it('käännökset ovat olemassa kaikilla kielillä', () => {
    for (const lang of Object.keys(LANG_PREFIX) as Lang[]) {
      const c = THEME_COPY[lang]
      expect(c, `${lang}: THEME_COPY puuttuu`).toBeTruthy()
      for (const t of THEMES) {
        expect(c.name[t.id], `${lang}/${t.id}: nimi`).toBeTruthy()
        expect(c.intro[t.id], `${lang}/${t.id}: ingressi`).toBeTruthy()
      }
      for (const t of THEMES) {
        expect(c.seeAll[t.id], `${lang}/${t.id}: seeAll`).toBeTruthy()
      }
      expect(c.eyebrow, `${lang}: eyebrow`).toBeTruthy()
      expect(c.count(3), `${lang}: count`).toContain('3')
    }
  })

  it('teeman kuva on olemassa kuvamanifestissa', async () => {
    const { IMAGE_VARIANTS } = await import('../imageVariants')
    for (const t of THEMES) {
      expect(IMAGE_VARIANTS[t.image], `${t.id}: kuva ${t.image}`).toBeTruthy()
    }
  })
})
