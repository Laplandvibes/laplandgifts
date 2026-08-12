import { describe, expect, it } from 'vitest'
import { PRODUCTS } from '../products'
import { BRANDS, brandById, brandByName } from '../brands'
import { productsByBrand, brandsWithProducts } from '../brandProducts'
import { BRAND_COPY } from '../../locales/brandCopy'
import { LANG_PREFIX, type Lang } from '../../i18n/useLang'

const LANGS = Object.keys(LANG_PREFIX) as Lang[]

describe('brändiesittelyt', () => {
  it('jokainen esittely vastaa vähintään yhtä tuotetta', () => {
    // 🔴 Sidos on tuotteen `brand`-merkkijono. Jos brändin nimeä muutetaan
    // products.ts:ssä, esittely jää orvoksi ja sivu näyttää tyhjältä —
    // mutta mikään ei kaadu. Siksi tämä on testi eikä toive.
    for (const b of BRANDS) {
      expect(productsByBrand(b.id).length, `${b.id}: ei yhtään tuotetta`).toBeGreaterThan(0)
    }
  })

  it('tunnukset ja nimet ovat uniikkeja', () => {
    expect(new Set(BRANDS.map((b) => b.id)).size).toBe(BRANDS.length)
    expect(new Set(BRANDS.map((b) => b.name)).size).toBe(BRANDS.length)
  })

  it('tunnus on URL-kelpoinen slug', () => {
    for (const b of BRANDS) expect(b.id, b.name).toMatch(/^[a-z0-9-]+$/)
  })

  it('jokaisella on toimivan näköinen lähdelinkki', () => {
    for (const b of BRANDS) expect(b.officialUrl, b.id).toMatch(/^https:\/\/[^\s]+$/)
  })

  it('perustamisvuosi on vuosiluku tai tyhjä, ei arvaus', () => {
    for (const b of BRANDS) {
      // 🔴 Alaraja on 1600-luku eikä 1800-luku: Fiskars on perustettu 1649 ja
      // on yksi maailman vanhimpia yhä toimivia yrityksiä. Ensimmäinen versio
      // tästä testistä hylkäsi oikean vuosiluvun.
      if (b.founded) expect(b.founded, b.id).toMatch(/^(1[6789]|20)\d{2}$/)
    }
  })

  it('brandByName löytää esittelyn ja sivuuttaa tuntemattoman', () => {
    for (const b of BRANDS) expect(brandByName(b.name)?.id).toBe(b.id)
    expect(brandByName('Ei Ole Olemassa')).toBeUndefined()
    expect(brandById('ei-ole')).toBeUndefined()
  })

  it('käännökset ovat olemassa kaikilla kielillä ja kaikille brändeille', () => {
    for (const lang of LANGS) {
      const c = BRAND_COPY[lang]
      expect(c, `${lang}: BRAND_COPY puuttuu`).toBeTruthy()
      for (const b of BRANDS) {
        const p = c.profile[b.id]
        expect(p, `${lang}/${b.id}: esittely puuttuu`).toBeTruthy()
        expect(p.length, `${lang}/${b.id}: esittely liian lyhyt`).toBeGreaterThan(80)
      }
      expect(c.founded('1928')).toContain('1928')
      expect(c.officialSite('Marttiini')).toContain('Marttiini')
      expect(c.productsH2('Marttiini')).toContain('Marttiini')
    }
  })

  it('esittelyissä ei ole em-viivoja eikä kiellettyjä sanoja', () => {
    const banned =
      /stunning|breathtaking|world-?class|\biconic\b|timeless|legendary|upea|henkeäsalpaav|maailmanluokan|ajaton|legendaarinen/i
    for (const lang of LANGS) {
      for (const b of BRANDS) {
        const p = BRAND_COPY[lang].profile[b.id]
        expect(p.includes('—'), `${lang}/${b.id}: em-viiva`).toBe(false)
        expect(banned.test(p), `${lang}/${b.id}: kielletty sana`).toBe(false)
      }
    }
  })

  it('🔴 käännös ei saa keksiä alkuperäväitettä jota lähde ei käsittele', () => {
    // Alkuperäväite on kuluttajansuoja-asia. Käännös ei saa lisätä väitettä,
    // jota alkuperäinen ei tee.
    //
    // 🔴 Portti koskee vain brändejä, joiden lähdeteksti EI puhu suomalaisesta
    // valmistuksesta lainkaan. Kiellon sisältävä lause on rajattava ulos
    // lähteen perusteella: japanissa ja kiinassa kielto tulee lauseen
    // loppuun, joten hakusana osuu myös lauseeseen "ei väitä koko malliston
    // olevan Suomessa valmistettu". Testin ensimmäinen versio kaatui juuri
    // siihen, eli oikein kirjoitettuun käännökseen.
    const claims =
      /made in finland|valmistettu suomessa|in finnland hergestellt|tillverkad i finland|fabriqué en finlande|fabricado en finlandia|prodotto in finlandia|gemaakt in finland|feito na finlândia|フィンランド製|芬兰制造|핀란드에서 제조/i
    for (const b of BRANDS) {
      // 🔴 Tunnistimen on osuttava KAIKKIIN tapoihin, joilla lähde voi puhua
      // suomalaisesta valmistuksesta — myös aktiivimuotoon ("it manufactures
      // its fragrances in Finland", "valmistavansa Suomessa"). Liian kapea
      // tunnistin kaatoi testin oikein käännettyyn kiinankieliseen tekstiin,
      // jossa varaus oli tallella.
      const discussesOrigin =
        /finnish-manufactur|finnish-made|manufactur\w*[^.]{0,60}in finland|made in finland|produc\w*[^.]{0,60}in finland|valmist\w*[^.]{0,60}suomessa|suomessa[^.]{0,40}valmist|suomalaisvalmiste/i
      if (
        discussesOrigin.test(BRAND_COPY.en.profile[b.id]) ||
        discussesOrigin.test(BRAND_COPY.fi.profile[b.id])
      ) {
        continue
      }
      for (const lang of LANGS) {
        expect(
          claims.test(BRAND_COPY[lang].profile[b.id]),
          `${lang}/${b.id}: käännös lisäsi alkuperäväitteen jota lähde ei tee`,
        ).toBe(false)
      }
    }
  })

  it('brandsWithProducts järjestää suurimman valikoiman ensin', () => {
    const rows = brandsWithProducts()
    expect(rows.length).toBe(BRANDS.length)
    for (let i = 1; i < rows.length; i++) {
      expect(rows[i - 1].count).toBeGreaterThanOrEqual(rows[i].count)
    }
    expect(rows.reduce((n, r) => n + r.count, 0)).toBeLessThanOrEqual(PRODUCTS.length)
  })
})
