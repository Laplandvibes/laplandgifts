// Kumppanien määräaikaiset kampanjat yhdessä rekisterissä.
//
// Vesa 12.11.2026: "Ota heidän uudet kampanjat käyttöön ja ajasta niin että loppuu automaattisesti
// ja perusmainos tulee takaisin kun kampanja loppuu." Kampanja on lisäys perusmainokseen, ei sen
// korvaaja: nauha (KampanjaNauha.tsx) näkyy mainoksen yhteydessä vain aikaikkunassa ja vain
// kielillä, joilla ehdot on luettu. Päätös tehdään renderöinnin hetkellä selaimessa, joten
// kumpikaan pää ei tarvitse julkaisua (sivustot käyttävät createRootia, eikä esirenderöinnin
// tekstikeruu jäädytä nauhaa staattiseen HTML:ään).
//
// Uusi kampanja mainostajalle, jolla on jo nauha sijoituksessaan = yksi rivi KAMPANJAT-listaan.
// Uusi mainostaja = lisäksi <KampanjaNauha mainostaja="…"/> sen sijoitukseen.
//
// 🔴 Jokainen rivi vaatii: lähde (kumppanin viesti + kumppanin oma sivu, lukupäivä), tarkka
// päättymishetki Suomen aikaa, ja ehdot kokonaisina virkkeinä. Hinnat ja prosentit kirjoitetaan
// vain, kun ne on luettu kumppanin omalta sivulta. Mennyt kampanja saa jäädä listaan (se ei näy);
// siivoa, kun lista kasvaa.

const NBSP = String.fromCharCode(160)

export interface KampanjaTeksti {
  otsikko: string
  /** Yksi tarjous per rivi (lyhyt, luku mukana). Puuttuu, kun kampanja on yksi ehto. */
  rivit?: readonly string[]
  /** Ehdot ja voimassaolo kokonaisina virkkeinä. */
  ehdot: string
  /** Nauhan oman linkin teksti. Näkyy vain, kun kampanjalla on `landing` ja sijoitus antaa hrefin. */
  cta?: string
}

export interface Kampanja {
  /** Mainostajan avain: AdSpec.key (esim. 'ikaalinenspa') tai laplandgiftsin partnerId ('ruohonjuuri'). */
  mainostaja: string
  /** Aikaikkuna, UTC-millisekunteina. Suomen talviaika (EET) = UTC+2: klo 00.00 = edellisen päivän 22.00 UTC. */
  showFrom: number
  showUntil: number
  /** Kampanjan oma sivu Worker-linkin dest=-kenttään. Puuttuu, kun kampanja koskee koko kauppaa. */
  landing?: string
  /** Kielet, joilla kampanja näytetään: avain on kielikoodin alkuosa ('fi'). */
  teksti: Readonly<Record<string, KampanjaTeksti>>
}

export const KAMPANJAT: readonly Kampanja[] = [
  // ── Ikaalinen Spa, Black Month viikko 2 ────────────────────────────────────
  // Lähde: Adtractionin ja Ikaalinen Span kumppaniviesti 12.11.2026 ("viikon tarjoukset 15.11. asti")
  // + kumppanin oma sivu, luettu 12.11.2026 (otsikko "Ikaalinen Span Black Month 2026", kohta
  // "Tässä viikon 2 lahjakorttitarjoukset"): hinnat, normaalihinnat, "Lahjakortteja rajattu erä.
  // Lahjakortit ovat voimassa 12kk ostopäivästä." Sivu on suomeksi ⇒ vain fi.
  // Teksti natiivilukijan korjaama 12.11.2026 (norm. → normaalisti, "lastenannosta", kampanjanimi
  // pois otsikosta, ehdot kolmeksi virkkeeksi; Ruohonjuuren otsikko "ja saat … 20 prosentin alennuksen").
  // Osto tapahtuu sivun napista kumppanin lahjakorttikaupassa (ikaalinenspa.givito.fi).
  {
    mainostaja: 'ikaalinenspa',
    showFrom: Date.UTC(2026, 10, 11, 22), // 12.11.2026 klo 00.00 Suomen aikaa
    showUntil: Date.UTC(2026, 10, 15, 22), // 16.11.2026 klo 00.00 Suomen aikaa
    landing: 'https://ikaalinenspa.fi/yritys-faq/kylpylatarjous/black-friday-2026',
    teksti: {
      fi: {
        otsikko: 'Viikon lahjakorttitarjoukset 15.11. asti',
        rivit: [
          `Kylpylä ja UTU Saunamaailma kahdelle aikuiselle 38${NBSP}€ (normaalisti 66${NBSP}€)`,
          `Spa-kuukausikortti 58${NBSP}€ (normaalisti 82${NBSP}€)`,
          `Kuntosalijäsenyys 1${NBSP}kuukaudeksi 19${NBSP}€ (normaalisti 33${NBSP}€)`,
          `Plazan perhelahjakortti 42${NBSP}€ (normaalisti noin 60${NBSP}€): 2 pizzaa tai pastaa ja 2 lastenannosta`,
          `Day Span avoin lahjakortti 50${NBSP}€ (arvo 70${NBSP}€)`,
        ],
        ehdot:
          `Tarjoukset ovat voimassa 15.11.2026 asti. Lahjakortteja on tarjolla rajattu erä. Lahjakortit ovat ` +
          `voimassa 12${NBSP}kuukautta ostopäivästä. Hinnat on tarkistettu kylpylän verkkosivuilta 12.11.2026.`,
        cta: 'Katso viikon tarjoukset',
      },
    },
  },
  // ── Ruohonjuuri, osta 2 samaa tuotetta ─────────────────────────────────────
  // Lähde: Adtractionin ja Ruohonjuuren kumppaniviesti 12.11.2026 ("Uusi kampanja") + ruohonjuuri.fi,
  // luettu 12.11.2026: "Osta 2 samaa tuotetta, saat molemmista -20%. Kampanja alkaa verkossa jo
  // keskiviikkona 11.11. ja myymälöissä 13.11. Kampanja kestää 15.11. asti. Tarjous koskee vain
  // normaalihintaisia tuotteita. Ei koske Ruohis-hintaisia eikä lahjakortteja."
  // Kampanjalla ei ole omaa sivua (ilmoitus osoittaa kaupan etusivulle) ⇒ ei landingia: nauhan
  // yllä oleva ostonappi vie tuotteen tai osaston omalle sivulle kuten ennenkin.
  // Vain fi: ehdot on julkaistu suomeksi, eikä niitä käännetä itse.
  {
    mainostaja: 'ruohonjuuri',
    showFrom: Date.UTC(2026, 10, 11, 22),
    showUntil: Date.UTC(2026, 10, 15, 22),
    teksti: {
      fi: {
        otsikko: `Ruohonjuuressa 15.11. asti: osta kaksi samaa tuotetta ja saat molemmista 20${NBSP}prosentin alennuksen`,
        ehdot:
          `Kampanja on voimassa Ruohonjuuren verkkokaupassa 15.11.2026 asti. Alennus koskee vain ` +
          `normaalihintaisia tuotteita, ei Ruohis-hintaisia tuotteita eikä lahjakortteja.`,
      },
    },
  },
]

const kieliavain = (lang?: string) => (lang || '').split('-')[0]

/** Mainostajan tällä hetkellä ja tällä kielellä voimassa oleva kampanja, tai undefined. */
export function kampanja(mainostaja: string | undefined, lang?: string, now: number = Date.now()): Kampanja | undefined {
  if (!mainostaja) return undefined
  const kieli = kieliavain(lang)
  return KAMPANJAT.find(
    (k) => k.mainostaja === mainostaja && !!k.teksti[kieli] && now >= k.showFrom && now < k.showUntil,
  )
}

/** Kampanjan teksti lukijan kielellä, tai undefined kun kampanjaa ei ole. */
export function kampanjaTeksti(mainostaja: string | undefined, lang?: string, now: number = Date.now()): KampanjaTeksti | undefined {
  return kampanja(mainostaja, lang, now)?.teksti[kieliavain(lang)]
}

/**
 * Vaihtaa Worker-linkin dest=-kentän kampanjan sivuksi, kun mainostajalla on voimassa kampanja,
 * jolla on oma sivu. Muuten linkki palaa sellaisenaan (perusmainoksen linkki).
 */
export function withKampanja(href: string, mainostaja: string | undefined, lang?: string, now: number = Date.now()): string {
  const k = kampanja(mainostaja, lang, now)
  if (!k?.landing) return href
  const dest = `dest=${encodeURIComponent(k.landing)}`
  if (/[?&]dest=/.test(href)) return href.replace(/([?&])dest=[^&#]*/, `$1${dest}`)
  return `${href}${href.includes('?') ? '&' : '?'}${dest}`
}
