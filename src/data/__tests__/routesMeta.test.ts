import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { LANG_PREFIX, type Lang } from '../../i18n/useLang'

interface Route {
  path: string
  fallbackTitleByLang: Record<string, string>
  fallbackDescriptionByLang: Record<string, string>
  legal?: boolean
}

const ROUTES: Route[] = JSON.parse(
  readFileSync(join(__dirname, '..', '..', '..', 'scripts', 'routes.json'), 'utf8'),
)
const LANGS = Object.keys(LANG_PREFIX) as Lang[]

/**
 * Sivut, joiden oma sisältö on käännetty vain englanniksi ja suomeksi. Näille
 * englanninkielinen meta on OIKEIN: saksankielinen otsikko lupaisi
 * saksankielisen sivun jota ei ole. Kun sivu käännetään, poista se täältä.
 */
const EN_FI_ONLY = new Set(['/gift-guides', '/harvinaiset-muumimukit', '/pakuri', '/shipping'])

describe('reittien metat', () => {
  it('jokaisella reitillä on otsikko ja kuvaus kaikilla kielillä', () => {
    for (const r of ROUTES) {
      for (const l of LANGS) {
        expect(r.fallbackTitleByLang[l], `${r.path} ${l}: otsikko`).toBeTruthy()
        expect(r.fallbackDescriptionByLang[l], `${r.path} ${l}: kuvaus`).toBeTruthy()
      }
    }
  })

  it('🔴 kuvaus on kohdekielellä eikä englannin kopio', () => {
    // 🔴 Tämä on koko testin syy olla olemassa. Mitattu 12.8.2026: 175
    // reitistä 168:lla oli englanninkielinen otsikko ja kuvaus kymmenellä
    // kielellä — 1 680 URLia, jotka hreflang esitteli omina kieliversioinaan
    // mutta jotka näyttivät hakukoneelle lähes identtisiltä.
    //
    // Vika oli näkymätön, koska mikään ei kaatunut: `route(path, en, fi)`
    // kopioi englannin hiljaa. Portti on siksi datassa eikä koodissa.
    const failed: string[] = []
    for (const r of ROUTES) {
      if (r.legal || EN_FI_ONLY.has(r.path)) continue
      const d = r.fallbackDescriptionByLang
      const others = LANGS.filter((l) => l !== 'en' && l !== 'fi')
      if (others.every((l) => d[l] === d.en)) failed.push(r.path)
    }
    expect(failed, `englanninkielinen kuvaus: ${failed.slice(0, 8).join(', ')}`).toHaveLength(0)
  })

  it('otsikko saa olla sama vain kun se on erisnimi', () => {
    // Brändi- ja putiikkisivujen otsikko on nimi ja paikka ("Marimekko",
    // "Lauri Handicrafts, Rovaniemi"). Ne EIVÄT käänny, ja sama otsikko on
    // silloin oikein. Muilla sivuilla identtinen otsikko on merkki siitä,
    // että käännös on unohtunut.
    const failed: string[] = []
    for (const r of ROUTES) {
      if (r.legal || EN_FI_ONLY.has(r.path)) continue
      if (r.path.startsWith('/brand/') || r.path.startsWith('/boutique/')) continue
      const t = r.fallbackTitleByLang
      const others = LANGS.filter((l) => l !== 'en' && l !== 'fi')
      if (others.every((l) => t[l] === t.en)) failed.push(r.path)
    }
    expect(failed, `englanninkielinen otsikko: ${failed.slice(0, 8).join(', ')}`).toHaveLength(0)
  })

  it('otsikot mahtuvat hakutuloksen näyttöikkunaan', () => {
    for (const r of ROUTES) {
      for (const l of LANGS) {
        expect(r.fallbackTitleByLang[l].length, `${r.path} ${l}`).toBeLessThanOrEqual(60)
      }
    }
  })

  it('kuvaus ei ole tynkä millään kielellä', () => {
    // 🔴 Alaraja on 40 eikä hakutuloksen tavoite 150–160, koska putiikkien
    // paikkakuntasivujen kuvaus on rakenteeltaan lyhyt ("3 putiikkia: Duodji
    // Shop, Samekki, Siida Shop") eikä sitä voi pidentää keksimättä.
    // Generaattori varoittaa erikseen jokaisesta tavoiteikkunan alituksesta;
    // tämä testi vahtii vain sitä, ettei jokin kieli jää tyhjäksi.
    //
    // 🔴 CJK-kielillä raja on matalampi, ja se on kirjoitusjärjestelmän
    // ominaisuus eikä poikkeus: sama sisältö on japaniksi "3店: Duodji Shop,
    // Samekki, Siida Shop." (37 merkkiä) ja englanniksi "3 boutiques: …"
    // (46). Yhteinen merkkiraja rankaisisi tiiviimpää kieltä sisällöstä,
    // jota siinä on yhtä paljon.
    const DENSE = new Set<Lang>(['ja', 'zh-CN', 'ko'])
    for (const r of ROUTES) {
      for (const l of LANGS) {
        const min = DENSE.has(l) ? 24 : 40
        expect(r.fallbackDescriptionByLang[l].length, `${r.path} ${l}`).toBeGreaterThan(min)
      }
    }
  })
})
