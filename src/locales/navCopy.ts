import type { Lang } from '../i18n/useLang'
import type { CategoryId } from '../data/types'

/**
 * Yläosan omat tekstit. Oma tiedosto eikä `shopCopy.ts`, koska nämä palvelevat
 * vain navigaatiota ja `shopCopy` on samaan aikaan toisen työn alla.
 *
 * 🔴 Miksi kategorioilla on erikseen lyhyt navinimi: `shopCopy.category.names`
 * on sivun otsikkoteksti ja samalla hakusanaotsikko ("Finnish clothing and
 * knitwear", "Arctic berry powders and superfoods"). Seitsemän sellaista riviä
 * vie luonnollisena leveytenä yli 1000
 * pikseliä, joten logon kanssa samalle riville ne eivät mahdu 1280 pikselin
 * näytöllä, ja vanha navi ratkaisi sen ahtaalla toisella rivillä. Navilinkki
 * tarvitsee vain kategorian pääsanan; koko nimi näkyy yhä kategoriasivun
 * otsikossa ja murupolussa, joten mikään tieto ei katoa.
 *
 * Lyhyt nimi on aina saman hyväksytyn käännöksen pääsana, ei uusi käännös.
 *
 * Kieliportaali on sama kuin `shopCopy.ts`:ssä: kääntämättömät kielet saavat
 * englannin (V1:n hyväksytty malli, validator laskee sen enFallbackiksi).
 */
export interface NavCopy {
  /** Kategorian lyhyt navinimi. Koko nimi asuu shopCopy.category.names:ssä. */
  catShort: Record<CategoryId, string>
  /** Hampurilaisvalikon nappi (aria-label + ruudunlukija). */
  openMenu: string
  closeMenu: string
  /** Kategorialinkkien <nav>-maamerkki. */
  shopNavLabel: string
  /** Yläpalkin toissijaisten linkkien <nav>-maamerkki. */
  utilityNavLabel: string
}

const en: NavCopy = {
  catShort: {
    design: 'Design',
    clothing: 'Clothing',
    handicrafts: 'Handicrafts',
    // Kategorian koko nimi on nyt "Finnish sweets and food gifts", joten
    // lyhyt navinimi on sen pääsana "Sweets" eikä enää vanha "Treats".
    treats: 'Sweets',
    superfoods: 'Superfoods',
    merch: 'Merch',
    experiences: 'Experiences',
  },
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  shopNavLabel: 'Product categories',
  utilityNavLabel: 'Guides and delivery',
}

const fi: NavCopy = {
  catShort: {
    design: 'Design',
    clothing: 'Vaatteet',
    handicrafts: 'Käsityöt',
    treats: 'Herkut',
    superfoods: 'Superfoodit',
    merch: 'Merch',
    experiences: 'Elämykset',
  },
  openMenu: 'Avaa valikko',
  closeMenu: 'Sulje valikko',
  shopNavLabel: 'Tuotekategoriat',
  utilityNavLabel: 'Oppaat ja toimitus',
}

export const NAV_COPY: Record<Lang, NavCopy> = {
  en, fi,
  de: en, ja: en, es: en, 'pt-BR': en, 'zh-CN': en, ko: en, fr: en, it: en, nl: en, sv: en,
}
