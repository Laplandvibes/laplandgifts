import { useEffect, useRef, useState } from 'react'
import type { Lang } from '../../i18n/useLang'

/**
 * Matkailijoiden suosikit GetYourGuidessa (6.11.2026, Vesa: "getyourguidesta
 * parhaat tuotteet sinne").
 *
 * Miksi GetYourGuiden oma upotus eikä omia kortteja: suosikkien vahvuus on
 * arvosana, arvostelujen määrä, järjestäjän oma kuva ja tämän päivän hinta.
 * Mitään niistä emme voi itse pitää ajan tasalla (GYG:n hinnat näytetään vain
 * 7 vrk, automaattinen luku on estetty), eikä järjestäjien kuvia oteta omiin
 * tiedostoihin. GYG:n kumppaniupotus näyttää ne kaikki luvallisesti ja
 * päivittäin päivittyvinä, ja varausklikki kantaa partner_id:n. Malli:
 * laplandactivities GygPicks (`data-gyg-tour-ids`, mitattu livenä 20.9.2026).
 *
 * 🔴 Upotus latautuu vain evästesuostumuksella (lib/consent.ts lataa GYG:n
 * skriptin vasta hyväksynnän jälkeen). Siksi osio pysyy piilossa, kunnes
 * upotus on oikeasti piirtänyt iframen: ilman suostumusta tai mainosesto
 * päällä lukija ei näe tyhjää otsikkoa, ja omat korttiryhmät alla näkyvät aina.
 * Säiliö on DOMissa koko ajan, jotta myöhemmin (suostumuksen jälkeen) latautuva
 * skripti löytää sen.
 *
 * 🔴 Tunnukset tulevat data/experiences.ts:n TOP_RATED_TOUR_IDS-listasta, jonka
 * jokainen tuote on avattu selaimessa 6.11.2026 (h1 + oma osoite en ja fi-fi).
 */
/** Tyhjä GYG-kehys on 150 px; yksikin korttirivi on yli 250 px. */
const MIN_FILLED_HEIGHT = 220

const GYG_LOCALE: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES', 'pt-BR': 'pt-BR',
  'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL', sv: 'sv-SE',
}

const COPY: Record<Lang, { h2: string; note: string }> = {
  en: {
    h2: 'Traveller favourites on GetYourGuide',
    note: 'Chosen from the Lapland tours with the most reviews and the highest ratings. The photos, ratings and today’s prices are shown by GetYourGuide itself.',
  },
  fi: {
    h2: 'Matkailijoiden suosikit GetYourGuidessa',
    note: 'Valinta on tehty Lapin retkistä, joilla on eniten arvioita ja parhaat arvosanat. Kuvat, arvosanat ja päivän hinnat näyttää GetYourGuide itse.',
  },
  sv: {
    h2: 'Resenärernas favoriter på GetYourGuide',
    note: 'Utvalda bland turerna i Lappland med flest omdömen och högst betyg. Bilder, betyg och dagens priser visas av GetYourGuide själv.',
  },
  de: {
    h2: 'Lieblinge der Reisenden auf GetYourGuide',
    note: 'Ausgewählt aus den Lappland-Touren mit den meisten Bewertungen und den besten Noten. Fotos, Bewertungen und die heutigen Preise zeigt GetYourGuide selbst.',
  },
  fr: {
    h2: 'Les favoris des voyageurs sur GetYourGuide',
    note: 'Choisies parmi les excursions en Laponie qui ont le plus d’avis et les meilleures notes. Les photos, les notes et les prix du jour sont affichés par GetYourGuide.',
  },
  es: {
    h2: 'Los favoritos de los viajeros en GetYourGuide',
    note: 'Elegidas entre las excursiones por Laponia con más opiniones y mejores valoraciones. Las fotos, las valoraciones y los precios del día los muestra GetYourGuide.',
  },
  it: {
    h2: 'I preferiti dei viaggiatori su GetYourGuide',
    note: 'Scelte tra le escursioni in Lapponia con più recensioni e i voti più alti. Foto, voti e prezzi del giorno sono mostrati direttamente da GetYourGuide.',
  },
  nl: {
    h2: 'Favorieten van reizigers op GetYourGuide',
    note: 'Gekozen uit de Lapland-tours met de meeste beoordelingen en de hoogste cijfers. Foto’s, cijfers en de prijzen van vandaag toont GetYourGuide zelf.',
  },
  'pt-BR': {
    h2: 'Os favoritos dos viajantes no GetYourGuide',
    note: 'Escolhidos entre os passeios na Lapônia com mais avaliações e as notas mais altas. Fotos, notas e os preços do dia são mostrados pelo próprio GetYourGuide.',
  },
  ja: {
    h2: 'GetYourGuide で旅行者に人気のツアー',
    note: 'ラップランドのツアーの中から、レビュー数が最も多く評価の最も高いものを選びました。写真、評価、本日の料金は GetYourGuide が表示しています。',
  },
  ko: {
    h2: 'GetYourGuide 여행자 인기 투어',
    note: '라플란드 투어 가운데 후기가 가장 많고 평점이 가장 높은 것을 골랐습니다. 사진, 평점, 오늘의 가격은 GetYourGuide가 직접 보여 줍니다.',
  },
  'zh-CN': {
    h2: 'GetYourGuide 上旅行者喜爱的行程',
    note: '从评价最多、评分最高的拉普兰行程中挑选。图片、评分和当日价格由 GetYourGuide 直接显示。',
  },
}

export default function GygTopRated({ tourIds, lang }: { tourIds: string[]; lang: Lang }) {
  const box = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    setShown(false)
    const el = box.current
    if (!el) return
    // 🔴 Pelkkä iframe ei riitä: mitattu 6.11.2026, että GYG:n skripti luo
    // kehyksen myös silloin, kun se jää tyhjäksi (150 px, ei kortteja), esim.
    // tunnistamattomalta osoitteelta tai tarkistussivun takaa. Osio näytetään
    // vasta kun SDK on venyttänyt kehyksen korttien korkuiseksi.
    const check = () => {
      const f = el.querySelector('iframe')
      if (f && f.getBoundingClientRect().height >= MIN_FILLED_HEIGHT) setShown(true)
    }
    check()
    const mo = new MutationObserver(check)
    mo.observe(el, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'height'] })
    const ro = new ResizeObserver(check)
    ro.observe(el)
    return () => {
      mo.disconnect()
      ro.disconnect()
    }
  }, [lang])

  const c = COPY[lang]
  return (
    <section className={shown ? 'mb-12' : 'h-0 overflow-hidden'} aria-hidden={!shown}>
      {shown && (
        <>
          <h2 className="mb-2 font-heading text-3xl tracking-wide text-gray">{c.h2}</h2>
          <p className="mb-5 max-w-2xl text-sm text-muted">{c.note}</p>
        </>
      )}
      <div className="-mx-4 overflow-x-auto overscroll-x-contain px-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 xl:mx-0 xl:overflow-visible xl:px-0 [&::-webkit-scrollbar]:hidden">
        <div
          key={`gyg-top-${lang}`}
          ref={box}
          className="min-h-[160px] w-[1120px] max-sm:[zoom:0.72] xl:w-auto"
          data-gyg-widget="activities"
          data-gyg-partner-id="VRMKD7N"
          data-gyg-locale-code={GYG_LOCALE[lang]}
          data-gyg-cmp="lv_laplandgifts_experiences_top"
          data-gyg-tour-ids={tourIds.join(',')}
          data-gyg-number-of-items={String(tourIds.length)}
        />
      </div>
    </section>
  )
}
