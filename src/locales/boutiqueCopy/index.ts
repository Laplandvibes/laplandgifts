import type { Lang } from '../../i18n/useLang.ts'
import type { BoutiqueCopy } from './en.ts'
import en from './en.ts'
import fi from './fi.ts'
import de from './de.ts'
import ja from './ja.ts'
import es from './es.ts'
import ptBR from './ptBR.ts'
import zhCN from './zhCN.ts'
import ko from './ko.ts'
import fr from './fr.ts'
import it from './it.ts'
import nl from './nl.ts'
import sv from './sv.ts'

export type { BoutiqueCopy }

/**
 * Avain on putiikin slug. Kattavuus on testattu: puuttuva kuvaus on virhe
 * eikä hiljainen fallback englantiin. Puolikas lokaali näyttäisi siltä että
 * sivusto on kesken, ja tuoteryhmätagit sekoittuisivat kahdelle kielelle.
 */
export const BOUTIQUE_COPY: Record<Lang, Record<string, BoutiqueCopy>> = {
  en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl, sv,
}
