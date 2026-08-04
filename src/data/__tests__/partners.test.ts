import { describe, it, expect } from 'vitest'
import { PARTNERS, partnerHref, AFFILIATE_REL } from '../partners'

describe('AFFILIATE_REL', () => {
  it('sisältää sponsored, nofollow ja noopener', () => {
    expect(AFFILIATE_REL.split(' ').sort()).toEqual(['nofollow', 'noopener', 'sponsored'])
  })

  it('EI sisällä noreferreriä (Worker lukee Refererin attribuutioon)', () => {
    expect(AFFILIATE_REL).not.toContain('noreferrer')
  })
})

describe('partnerHref', () => {
  it('lisää UTM-parametrit suoraan kumppanilinkkiin', () => {
    const p = PARTNERS.moomin
    const href = partnerHref(p, 'https://shop.moomin.com/products/mug', 'gifts_moomin_mug')
    const u = new URL(href)
    expect(u.host).toBe('shop.moomin.com')
    expect(u.searchParams.get('utm_source')).toBe('laplandvibes')
    expect(u.searchParams.get('utm_medium')).toBe('referral')
    expect(u.searchParams.get('utm_campaign')).toBe('gifts_moomin_mug')
  })

  it('säilyttää kumppanin omat query-parametrit', () => {
    const p = PARTNERS.moomin
    const href = partnerHref(p, 'https://shop.moomin.com/p?variant=42', 'gifts_x')
    const u = new URL(href)
    expect(u.searchParams.get('variant')).toBe('42')
    expect(u.searchParams.get('utm_source')).toBe('laplandvibes')
  })

  it('vie Haltin ainoaan ohjelmaan ja www.halti.fi-kauppaan', () => {
    // 🔴🔴 Tässä testissä luki 2.–4.8.2026 päinvastoin: että reitin on oltava
    // `halticom` ja kohteen halti.com. Testi meni vihreänä läpi koko ajan,
    // vaikka jokainen Haltin ostonappi tuotannossa palautti Adtractionin
    // sivun "Invalid link". Testi tarkisti linkin MUODON, ei sitä kelpaako
    // se verkostolle — ja lukitsi väärän uskomuksen paikalleen.
    //
    // Todellisuus: Halti-ohjelmia on YKSI (adId 1622199573), ja se on
    // FI-ohjelma, joka hyväksyy vain www.halti.fi-syvälinkkejä. Sekä väärä
    // ohjelmatunnus että väärä kohdedomain ovat mykkiä vikoja: build menee
    // läpi, sivu näyttää oikealta, vain ostaja ei päädy tuotteeseen.
    //
    // Ketjun voi mitata: node scripts/verify_adtraction_routes.mjs --live
    const p = PARTNERS.halti
    const u = new URL(
      partnerHref(p, 'https://www.halti.fi/products/tokoi-dx-takki-miesten', 'p_halti_tokoi'),
    )
    expect(u.pathname).toBe('/go/halti')
    expect(u.searchParams.get('dest')).toBe('https://www.halti.fi/products/tokoi-dx-takki-miesten')
  })

  it('yksikään kumppani ei linkitä kauppaan jota se ei itse mainosta', () => {
    // Vahti bugille, joka ei näy mistään muualta: kumppanin baseUrl kertoo
    // minkä kaupan hinnat ja tuotetiedot sivulla luvataan, ja affiliate-ohjelma
    // hyvittää vain oman markkinansa domainin. Jos nämä eroavat, klikki
    // ohjautuu verkoston varasivulle (nordicnest 3.8., halti 2.–4.8.) — 200 OK,
    // ei virhettä lokissa, ei tuotetta ostajalle.
    const KNOWN_SHOP_HOSTS: Record<string, string> = {
      halti: 'www.halti.fi',
      makia: 'makia.com',
      northoutdoor: 'northoutdoor.com',
      scandinavianoutdoor: 'scandinavianoutdoor.fi',
      nordicnest: 'www.nordicnest.fi',
      ruohonjuuri: 'www.ruohonjuuri.fi',
      elamyslahjat: 'www.elamyslahjat.fi',
    }
    for (const [id, expectedHost] of Object.entries(KNOWN_SHOP_HOSTS)) {
      const p = PARTNERS[id]
      expect(p, `kumppani ${id} puuttuu`).toBeDefined()
      expect(new URL(p.baseUrl).host, `${id}.baseUrl osoittaa väärään kauppaan`).toBe(expectedHost)
    }
  })

  it('yksikään kumppani ei kirjoita verkoston linkkiä lähdekoodiin', () => {
    // Verkoston sääntö (CLAUDE.md): affiliate-CTA kulkee AINA redirect-Workerin
    // kautta. Raaka trackingTemplate tuottaa kyllä komission, mutta ilman
    // Workerin `epi=`-alatunnistetta — jolloin Adtractionin raportissa klikit
    // ovat erittelemätöntä massaa eikä niistä näe sivustoa eikä paikkaa.
    // Halti ja Makia olivat tässä tilassa 2.8.2026 asti.
    for (const [id, p] of Object.entries(PARTNERS)) {
      expect(p.trackingTemplate, `${id} kirjoittaa verkoston linkin suoraan lähteeseen`)
        .toBeUndefined()
      if (p.network === 'adtraction') {
        expect(p.workerRoute, `${id} on adtraction-kumppani ilman workerRoutea`).toBeTruthy()
      }
    }
  })

  it('reitittää Workerin kautta kun kumppanilla on workerRoute', () => {
    const p = PARTNERS.scandinavianoutdoor
    const target = 'https://scandinavianoutdoor.fi/kupilka/varusteet/juomamuki-21/'
    const href = partnerHref(p, target, 'gifts_handicrafts_card')
    const u = new URL(href)
    expect(u.origin).toBe('https://go.laplandvibes.com')
    expect(u.pathname).toBe('/go/scandinavianoutdoor')
    expect(u.searchParams.get('sid')).toBe('gifts_handicrafts_card')
    // 🔴 Worker lukee kohteen `dest`-parametrista. Väärä nimi ei kaadu vaan
    // pudottaa syvälinkin hiljaa ja vie asiakkaan kaupan etusivulle.
    expect(u.searchParams.get('dest')).toBe(target)
  })

  it('Adtraction-kumppani ei koskaan päädy paljaaseen UTM-linkkiin', () => {
    for (const [id, p] of Object.entries(PARTNERS)) {
      if (p.network !== 'adtraction') continue
      const href = partnerHref(p, `${p.baseUrl}/tuote`, 'gifts_x')
      expect(href.startsWith(p.baseUrl), `${id} meni UTM-reitille`).toBe(false)
    }
  })

  it('ei koskaan palauta raakaa partner-URLia affiliate-kumppanille', () => {
    const p = PARTNERS.halti
    const href = partnerHref(p, 'https://halti.com/x', 'gifts_x')
    expect(href).not.toBe('https://halti.com/x')
  })

  it('jokaisella kumppanilla on toimitusalue ja verifiointipäivä', () => {
    for (const [id, p] of Object.entries(PARTNERS)) {
      expect(p.shipsTo, `${id}.shipsTo puuttuu`).toBeTruthy()
      expect(p.verifiedAt, `${id}.verifiedAt puuttuu`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })
})
