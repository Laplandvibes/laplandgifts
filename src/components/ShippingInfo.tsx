import { Hand, Tag, FileText, Store } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'

/**
 * "Mitä LaplandGifts tekee" — FUNKTIO: neljä lupausta siitä työstä jonka me
 * oikeasti teemme (poiminta käsin, hinta lähteestä, tuotetiedot yhdessä,
 * kaupan ehdot pätevät). Tertiäärinen osio, sama kevyt rytmi kuin
 * ValueProp: vasen tasaus, pienet ikonit, 2 × 2 kapealla.
 *
 * 🔴 Vesa 5.9.2026 (mobiili): ennen neljä ~400 px korttia peräkkäin, jokaisessa
 * 56 px ikonilaatta ja keskitetty teksti — yksi lause per kortti maksoi
 * ruudullisen. Nyt osio on kolmasosa entisestä.
 *
 * 🔴 Teksti tulee SHOP_COPYsta, ei ChromeCopysta (ChromeCopyn "Lupauksemme"
 * lupasi neljä asiaa joista yksikään ei pidä paikkaansa).
 *
 * Osion id säilyy (`#shipping`): FAQ:n vastaukset linkittävät tänne.
 */
const ICONS = [Hand, Tag, FileText, Store]

function ShippingInfo() {
  const t = SHOP_COPY[useLang()].home.promises
  return (
    <section id="shipping" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-3xl leading-none tracking-wide text-gray md:text-5xl">{t.h2}</h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">{t.sub}</p>
        <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-7 md:mt-10 md:grid-cols-4 md:gap-8">
          {t.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <li key={item.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10" aria-hidden="true">
                  <Icon className="h-5 w-5 text-amber" />
                </span>
                <h3 className="mt-3 font-heading text-xl leading-none tracking-wide text-gray md:text-2xl">{item.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted md:text-[14px]">{item.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ShippingInfo
