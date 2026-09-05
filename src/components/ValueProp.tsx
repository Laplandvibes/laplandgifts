import { Search, Globe, Store } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'

/**
 * "Näin ostaminen etenee" — FUNKTIO: epäilijälle kolme askelta siitä, miten
 * osto tapahtuu, kun meillä ei ole kassaa. Tertiäärinen osio: se tukee
 * päätöstä, se ei ole sivun sisältöä.
 *
 * 🔴 Vesa 5.9.2026: "mobiilissa toi etusivu on ihan kama, hierarkia puuttuu
 * kokonaan." Mitattu 390 px: tämä ja "Mitä LaplandGifts tekee" olivat kaksi
 * peräkkäistä keskitettyä osiota 64 px ikonilaatoilla, yhteensä ~2 500 px —
 * samalla painolla kuin kauppa itse. Nyt: vasen tasaus kuten muu sivu,
 * askeleet riveinä kapealla (numero + otsikko + yksi lause), pienemmät
 * otsikot, puolet tilasta.
 *
 * 🔴 Teksti tulee SHOP_COPYsta, ei ChromeCopysta (ChromeCopyn valueProp lupaa
 * pakkaamista ja lähettämistä, joita me emme tee).
 */
const ICONS = [Search, Globe, Store]

function ValueProp() {
  const t = SHOP_COPY[useLang()].home.valueProp
  return (
    <section className="bg-sand-deep py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-3xl leading-none tracking-wide text-gray md:text-5xl">{t.h2}</h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">{t.sub}</p>
        <ol className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-3 md:gap-8">
          {t.steps.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <li key={i} className="flex gap-4">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber/10" aria-hidden="true">
                  <Icon className="h-5 w-5 text-amber" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-2xl leading-none tracking-wide text-gray">{s.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{s.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default ValueProp
