import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { GIFT_EXPERIENCES, EXPERIENCE_GROUPS, experiencesByGroup } from '../experiences'
import {
  HUB_PICKS,
  HUSKY_PICKS,
  CHRISTMAS_PICKS,
  ACTIVITIES_PICKS,
  KIDS_PICKS,
  SNOWMOBILE_PICKS,
  TOURS_PICKS,
  VISIT_PICKS,
  NATURE_PICKS,
  WELLNESS_PICKS, LUXURY_PICKS } from '../../shared/gyg/picks'

const VERIFIED_PATHS = new Set(
  [
    HUB_PICKS,
    HUSKY_PICKS,
    CHRISTMAS_PICKS,
    ACTIVITIES_PICKS,
    KIDS_PICKS,
    SNOWMOBILE_PICKS,
    TOURS_PICKS,
    VISIT_PICKS,
    NATURE_PICKS,
    WELLNESS_PICKS, LUXURY_PICKS].flatMap((list) => list.map((p) => p.path))
)

describe('elämyslahjat', () => {
  /**
   * Tämä on tehtävän ainoa oikea suoja. Väärä GYG-ID ei palauta 404:ää vaan
   * tarjoilee hiljaa väärän kohteen toisesta maasta, joten polkua ei saa
   * kirjoittaa käsin: jokaisen rivin on tultava picks.ts:n jo selaimessa
   * verifioidusta listasta.
   */
  it('jokainen polku on peräisin picks.ts:n verifioiduista listoista', () => {
    for (const p of GIFT_EXPERIENCES) {
      expect(VERIFIED_PATHS.has(p.path), `${p.path} ei ole picks.ts:ssä`).toBe(true)
    }
  })

  it('listassa on rivejä eikä sama elämys toistu', () => {
    expect(GIFT_EXPERIENCES.length).toBeGreaterThan(0)
    const paths = GIFT_EXPERIENCES.map((p) => p.path)
    expect(new Set(paths).size).toBe(paths.length)
  })

  it('sid on snake_case eikä sisällä domainia', () => {
    for (const p of GIFT_EXPERIENCES) {
      expect(p.sid, p.path).toMatch(/^[a-z0-9]+(_[a-z0-9]+)*$/)
    }
  })

  /**
   * 🔴 Jokaisella elämyksellä on oltava kuvatiedosto (Vesa: "korteissa aina
   * kuvat"). Puuttuva kuva ei kaada buildia eikä näy kehityksessä — se
   * renderöityy asiakkaalle rikkinäisenä kuvakkeena. Kun elämysten määrä
   * nostettiin 8:sta 24:ään, uusia kuvia tarvittiin 17, ja juuri tällaisessa
   * erässä yksi jää helposti generoimatta.
   */
  it('jokaisella elämyksellä on kuvatiedosto public/images/:ssä', () => {
    const dir = path.join(process.cwd(), 'public', 'images')
    const missing = GIFT_EXPERIENCES.filter(
      (e) => !fs.existsSync(path.join(dir, `${e.image}.webp`)),
    ).map((e) => e.image)
    expect(missing, `kuvat puuttuvat: ${missing.join(', ')}`).toEqual([])
  })

  it('kuvat ovat uniikkeja: kaksi elämystä ei jaa samaa kuvaa', () => {
    const imgs = GIFT_EXPERIENCES.map((e) => e.image)
    expect(new Set(imgs).size, 'sama kuva useammalla kortilla').toBe(imgs.length)
  })

  it('jokaisella elämyksellä on oma nimi molemmilla kielillä', () => {
    for (const e of GIFT_EXPERIENCES) {
      expect(e.name.en.trim().length, e.path).toBeGreaterThan(0)
      expect(e.name.fi.trim().length, e.path).toBeGreaterThan(0)
      // Oma nimi on nimenomaan ERI kuin GYG:n myyntiotsikko: jos ne ovat
      // samat, rivi on jäänyt kääntämättä.
      expect(e.name.en, `${e.path}: nimi on yhä GYG:n otsikko`).not.toBe(e.title)
    }
  })

  it('jokainen ryhmä on käytössä ja ryhmissä on rivejä', () => {
    for (const g of EXPERIENCE_GROUPS) {
      expect(experiencesByGroup(g).length, `ryhmä ${g} on tyhjä`).toBeGreaterThan(0)
    }
  })
})
