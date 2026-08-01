/** Kaupan seitsemän kategoriaa. URL-slug = tämä arvo. */
export type CategoryId =
  | 'design'
  | 'clothing'
  | 'handicrafts'
  | 'treats'
  | 'superfoods'
  | 'merch'
  | 'experiences'

export const CATEGORY_IDS: CategoryId[] = [
  'design', 'clothing', 'handicrafts', 'treats', 'superfoods', 'merch', 'experiences',
]

/**
 * Mihin kumppani toimittaa. Tämä ratkaisee sekä tuotekortin merkinnän että
 * kategoriasivun toimitusmaasuodattimen.
 *   worldwide = maailmanlaajuinen
 *   eu        = vain EU (esim. Halti, Luhta, kuivalihat)
 *   fi        = vain Suomi (esim. Finlayson, Riipisen)
 */
export type ShippingZone = 'worldwide' | 'eu' | 'fi'

/** Verkosto, jonka kautta klikki laskutetaan. */
export type PartnerNetwork =
  | 'adtraction'
  | 'awin'
  | 'daisycon'
  | 'circlewise'
  | 'inhouse'
  | 'gyg'
  | 'pod'
  | 'direct'

export interface Partner {
  id: string
  name: string
  network: PartnerNetwork
  /** Kumppanin kaupan origin, esim. "https://halti.com". */
  baseUrl: string
  shipsTo: ShippingZone
  /**
   * Affiliate-verkoston trackinglinkki, jossa `{URL}` on paikanpitäjä
   * enkoodatulle kohde-URL:lle. Otetaan verkoston paneelista, ei arvata.
   * Puuttuu suorilta kumppaneilta (network: 'direct') → UTM-reitti.
   */
  trackingTemplate?: string
  /** Päivä jona toimitusalue ja linkki verifioitiin kumppanin sivulta. */
  verifiedAt: string
  /** Näytetään tuotesivulla: "Osto tapahtuu kumppanin kaupassa". */
  checkoutNote?: { en: string; fi: string }
}

export interface Product {
  slug: string
  category: CategoryId
  brand: string
  name: { en: string; fi: string }
  description: { en: string; fi: string }
  /** Kumppanin sivulta luettu "alkaen"-hinta. Ei koskaan arvattu. */
  priceFrom: number
  currency: 'EUR' | 'GBP' | 'USD'
  /** ISO-päivä jona hinta luettiin kumppanin sivulta. */
  priceCheckedAt: string
  /** Tiedostonimen runko ilman päätettä, esim. "prod-kuksa-cup". */
  image: string
  /**
   * true = kuva on kumppanin oma tuotekuva (haettu kumppanin tuotesivun
   * og:image-tagista, joka on nimenomaan julkaisua varten tarkoitettu),
   * false/puuttuu = AI-tunnelmakuva.
   *
   * Ratkaisee tuotesivun kuvamerkinnän: tunnelmakuva on merkittävä
   * tunnelmakuvaksi, kumppanin tuotekuva saa lähdemerkinnän. Väärä arvo
   * kertoo ostajalle väärää tietoa siitä mitä hän on ostamassa.
   */
  imageIsPartner?: boolean
  partnerId: string
  /** Syvälinkki kumppanin tuotesivulle. */
  partnerProductUrl: string
  featured?: boolean
  badges?: Array<'bestseller' | 'sami-authorized' | 'made-in-lapland' | 'eco'>
}
