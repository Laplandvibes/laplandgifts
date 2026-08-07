import type { Lang } from '../../i18n/useLang'
import type { BoutiqueCopy } from './en'
import en from './en'
import fi from './fi'
import de from './de'
import ja from './ja'
import es from './es'
import ptBR from './ptBR'
import zhCN from './zhCN'
import ko from './ko'
import fr from './fr'
import it from './it'
import nl from './nl'
import sv from './sv'

export type { BoutiqueCopy }

/**
 * Avain on putiikin slug. Kattavuus on testattu: puuttuva kuvaus on virhe
 * eikä hiljainen fallback englantiin. Puolikas lokaali näyttäisi siltä että
 * sivusto on kesken, ja tuoteryhmätagit sekoittuisivat kahdelle kielelle.
 */
export const BOUTIQUE_COPY: Record<Lang, Record<string, BoutiqueCopy>> = {
  en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl, sv,
}
