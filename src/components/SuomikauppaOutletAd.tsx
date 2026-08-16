import { ArrowRight } from 'lucide-react'
import { AFFILIATE_REL } from '../data/partners'
import type { Lang } from '../i18n/useLang'
import { trackAffiliateClick } from '../lib/analytics'
import { imgSrcSet } from '../lib/img'

/**
 * Suomikauppa outlet — Daisycon 17977, 7 %.
 *
 * 🔴 Miksi MAINOS eikä katalogituotteita (Vesa 2026-08-10: "tämä outlet osiosta
 * saa jo ihan oman mainoksensa"): outletissa on 406 tuotetta ja hinnat
 * vaihtuvat viikoittain. Katalogissa jokaisella tuotteella on `priceCheckedAt`
 * ja testi vahtii sitä, koska luvattu hinta on lupaus. Alennuserän ajaminen
 * sen läpi tuottaisi vanhentuneita hintoja nopeammin kuin ehdimme päivittää.
 * Mainos näyttää mitä osiossa on ja jättää hinnan kaupan kerrottavaksi.
 *
 * 🔴 SIKSI TÄSSÄ EI OLE YHTÄÄN PROSENTTIA. Kolme tuotetta oli tätä
 * kirjoitettaessa 59–60 % alennuksessa, ja juuri siksi luku on jätetty pois:
 * se olisi väärin ensi viikolla. Ainoa väite on rakenteellinen, että kaupalla
 * on pysyvä tarjousosio.
 *
 * Kohde on `/collections/tarjoukset`. 🔴 `/collections/outlet` on 301-ohjaus
 * siihen; affiliate-linkin pitää mennä kanoniseen osoitteeseen, jotta ketjussa
 * on yksi hyppy vähemmän eikä ohjaus voi katketa.
 */

/** Kuvapaikka on kolmasosa kortin oikeasta puoliskosta, eli noin 110-150 CSS-
 *  pikseliä. Kolminkertaisella näyttötiheydellä se on ~450 px, joten 480 on
 *  ylin variantti jota kannattaa pyytää. */
const SHOT_SIZES = '(min-width: 768px) 150px, 28vw'

const SID = 'home_gifts_suomikauppa_outlet'
const DEST = 'https://suomikauppa.fi/collections/tarjoukset'
const HREF =
  'https://go.laplandvibes.com/go/suomikauppa' +
  `?sid=${SID}&dest=${encodeURIComponent(DEST)}`

/** Kaupan omat tuotekuvat, luettu kaupan katalogista 2026-08-10.
 *  Alt-tekstit 12 kielellä samalla sopimuksella kuin näkyvä copy — erisnimet
 *  (Karl Fazer, Geisha, Remix, salmiakki) säilyvät kääntämättä. */
const SHOTS: { img: string; alt: Record<Lang, string> }[] = [
  {
    img: 'prod-sk-outlet-karl-fazer',
    alt: {
      en: 'Karl Fazer milk chocolate bar, 180 g',
      fi: 'Karl Fazer maitosuklaalevy, 180 g',
      de: 'Karl Fazer Milchschokoladentafel, 180 g',
      ja: 'Karl Fazer ミルクチョコレート板チョコ 180 g',
      es: 'Tableta de chocolate con leche Karl Fazer, 180 g',
      'pt-BR': 'Barra de chocolate ao leite Karl Fazer, 180 g',
      'zh-CN': 'Karl Fazer 牛奶巧克力 180 克',
      ko: 'Karl Fazer 밀크 초콜릿 바 180 g',
      fr: 'Tablette de chocolat au lait Karl Fazer, 180 g',
      it: 'Tavoletta di cioccolato al latte Karl Fazer, 180 g',
      nl: 'Karl Fazer melkchocoladereep, 180 g',
      sv: 'Karl Fazer mjölkchokladkaka, 180 g',
    },
  },
  {
    img: 'prod-sk-outlet-geisha-robe',
    alt: {
      en: 'Geisha limited edition dressing gown',
      fi: 'Geisha-aamutakki, limited edition',
      de: 'Geisha-Morgenmantel, Limited Edition',
      ja: 'Geisha 限定版ガウン',
      es: 'Bata Geisha, edición limitada',
      'pt-BR': 'Roupão Geisha, edição limitada',
      'zh-CN': 'Geisha 限量版晨袍',
      ko: 'Geisha 리미티드 에디션 가운',
      fr: 'Peignoir Geisha, édition limitée',
      it: 'Vestaglia Geisha, edizione limitata',
      nl: 'Geisha-ochtendjas, limited edition',
      sv: 'Geisha-morgonrock, limited edition',
    },
  },
  {
    img: 'prod-sk-outlet-remix-salmiakki',
    alt: {
      en: 'Fazer Remix salmiakki and chocolate sweet bag, 300 g',
      fi: 'Fazer Remix salmiakki ja suklaa -karkkipussi, 300 g',
      de: 'Fazer Remix Beutel mit Salmiak- und Schokoladensüßigkeiten, 300 g',
      ja: 'Fazer Remix サルミアッキ&チョコレート菓子袋 300 g',
      es: 'Bolsa de golosinas Fazer Remix de salmiakki y chocolate, 300 g',
      'pt-BR': 'Pacote de doces Fazer Remix de salmiakki e chocolate, 300 g',
      'zh-CN': 'Fazer Remix 咸甘草与巧克力糖果袋 300 克',
      ko: 'Fazer Remix 살미아키·초콜릿 캔디 봉지 300 g',
      fr: 'Sachet de bonbons Fazer Remix salmiakki et chocolat, 300 g',
      it: 'Sacchetto di caramelle Fazer Remix salmiakki e cioccolato, 300 g',
      nl: 'Fazer Remix snoepzak met salmiak en chocolade, 300 g',
      sv: 'Fazer Remix godispåse med salmiak och choklad, 300 g',
    },
  },
]

/** 12 kielen copy (fi/en ennallaan; loput käännetty samasta viestistä).
 *  Ei prosentteja millään kielellä — ks. tiedoston yläkommentti. */
const COPY: Record<Lang, { eyebrow: string; headline: string; sub: string; cta: string }> = {
  en: {
    eyebrow: 'Suomikauppa offers',
    headline: 'The Finnish shelf, marked down',
    sub: 'Suomikauppa keeps a standing offers section, several hundred products deep, and it is where the Fazer shelf usually ends up. Worth checking before you pay full price for the same bar somewhere else.',
    cta: 'See the offers',
  },
  fi: {
    eyebrow: 'Suomikaupan tarjoukset',
    headline: 'Suomalainen hylly alennuksessa',
    sub: 'Suomikaupalla on pysyvä tarjousosio, jossa on satoja tuotteita, ja sinne Fazerin hylly yleensä päätyy. Kannattaa vilkaista ennen kuin maksaa samasta levystä täyden hinnan muualla.',
    cta: 'Katso tarjoukset',
  },
  de: {
    eyebrow: 'Suomikauppa-Angebote',
    headline: 'Das finnische Regal, reduziert',
    sub: 'Suomikauppa führt eine ständige Angebotsrubrik mit mehreren hundert Produkten, und dort landet das Fazer-Regal meistens. Ein Blick lohnt sich, bevor man dieselbe Tafel anderswo zum vollen Preis kauft.',
    cta: 'Zu den Angeboten',
  },
  ja: {
    eyebrow: 'Suomikauppaのセール',
    headline: 'フィンランドの棚が、値下げ中',
    sub: 'Suomikauppaには数百点規模の常設セールコーナーがあり、Fazerの棚はたいていそこに行き着きます。よそで同じ板チョコに定価を払う前に、のぞいてみる価値があります。',
    cta: 'セールを見る',
  },
  es: {
    eyebrow: 'Ofertas de Suomikauppa',
    headline: 'El estante finlandés, rebajado',
    sub: 'Suomikauppa mantiene una sección de ofertas permanente con varios cientos de productos, y ahí suele acabar el estante de Fazer. Merece la pena mirarla antes de pagar el precio completo por la misma tableta en otro sitio.',
    cta: 'Ver las ofertas',
  },
  'pt-BR': {
    eyebrow: 'Ofertas da Suomikauppa',
    headline: 'A prateleira finlandesa, com desconto',
    sub: 'A Suomikauppa mantém uma seção permanente de ofertas com centenas de produtos, e é lá que a prateleira da Fazer costuma parar. Vale conferir antes de pagar o preço cheio pela mesma barra em outro lugar.',
    cta: 'Ver as ofertas',
  },
  'zh-CN': {
    eyebrow: 'Suomikauppa 特惠',
    headline: '芬兰货架，正在打折',
    sub: 'Suomikauppa 设有常设特惠区，收录数百件商品，Fazer 的货架通常最终都会到那里。在别处为同一块巧克力付全价之前，值得先来看看。',
    cta: '看看特惠',
  },
  ko: {
    eyebrow: 'Suomikauppa 할인',
    headline: '핀란드 진열대, 할인 중',
    sub: 'Suomikauppa에는 수백 개 제품이 모인 상설 할인 코너가 있고, Fazer 진열대는 대개 그곳으로 갑니다. 다른 곳에서 같은 초콜릿에 제값을 치르기 전에 한번 들러 볼 만합니다.',
    cta: '할인 보기',
  },
  fr: {
    eyebrow: 'Les offres Suomikauppa',
    headline: 'Le rayon finlandais, en promotion',
    sub: 'Suomikauppa tient une rubrique d’offres permanente, riche de plusieurs centaines de produits, et c’est là que finit généralement le rayon Fazer. Un coup d’œil s’impose avant de payer plein tarif la même tablette ailleurs.',
    cta: 'Voir les offres',
  },
  it: {
    eyebrow: 'Le offerte Suomikauppa',
    headline: 'Lo scaffale finlandese, scontato',
    sub: 'Suomikauppa tiene una sezione offerte permanente con diverse centinaia di prodotti, ed è lì che di solito finisce lo scaffale Fazer. Vale la pena dare un’occhiata prima di pagare altrove il prezzo pieno per la stessa tavoletta.',
    cta: 'Vedi le offerte',
  },
  nl: {
    eyebrow: 'Suomikauppa-aanbiedingen',
    headline: 'Het Finse schap, afgeprijsd',
    sub: 'Suomikauppa heeft een vaste aanbiedingenafdeling met honderden producten, en daar belandt het Fazer-schap meestal. De moeite waard om te checken voordat je elders de volle prijs betaalt voor dezelfde reep.',
    cta: 'Bekijk de aanbiedingen',
  },
  sv: {
    eyebrow: 'Suomikauppas erbjudanden',
    headline: 'Den finska hyllan, nedsatt',
    sub: 'Suomikauppa har en stående erbjudandesektion med flera hundra produkter, och det är dit Fazer-hyllan oftast tar vägen. Värd en titt innan du betalar fullt pris för samma chokladkaka någon annanstans.',
    cta: 'Se erbjudandena',
  },
}

/** Mainosmerkintä sivun kielellä — sanasta sanaan samat kuin laplandfoodin
 *  Suomikauppa-pintojen CHROME.adLabel, jotta merkintä on identtinen joka
 *  Suomikauppa-pinnalla verkostossa. */
const AD_LABEL: Record<Lang, string> = {
  en: 'Ad', fi: 'Mainos', de: 'Anzeige', ja: '広告', es: 'Anuncio',
  'pt-BR': 'Anúncio', 'zh-CN': '广告', ko: '광고', fr: 'Annonce',
  it: 'Annuncio', nl: 'Advertentie', sv: 'Annons',
}

export default function SuomikauppaOutletAd({ lang }: { lang: Lang }) {
  const copy = COPY[lang] ?? COPY.en

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="relative overflow-hidden rounded-3xl bg-card ring-1 ring-line">
        <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-amber">
              {copy.eyebrow}
            </p>
            <h2 className="font-heading text-2xl leading-tight tracking-wide sm:text-3xl">
              {copy.headline}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              {copy.sub}
            </p>
            <a
              href={HREF}
              target="_blank"
              rel={AFFILIATE_REL}
              onClick={() => trackAffiliateClick('suomikauppa', `ad_unit:${SID}`, HREF)}
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#063092] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#04205f]"
            >
              {copy.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="relative flex items-center justify-center gap-3 bg-sand-deep p-6 sm:gap-4 sm:p-8">
            {SHOTS.map((s) => (
              <div
                key={s.img}
                className="w-1/3 overflow-hidden rounded-2xl bg-white p-2 shadow-sm ring-1 ring-line"
              >
                {/* 🔴 srcSet tulee jaetusta `imgSrcSet`-apurista eikä käsin
                    kirjoitettuna. Ensimmäinen versio latoi leveydet itse ja
                    jätti `sizes`in pois, jolloin kortti ei noudattanut samaa
                    kuvasopimusta kuin sivuston muut kortit ja olisi ajautunut
                    erilleen heti kun manifestin leveydet muuttuvat. Apuri lukee
                    leveydet IMAGE_VARIANTSista, joten kuva ei voi pyytää
                    varianttia jota ei ole. */}
                <picture>
                  <source type="image/avif" srcSet={imgSrcSet(s.img, 'avif')} sizes={SHOT_SIZES} />
                  <img
                    src={`/images/${s.img}.webp`}
                    srcSet={imgSrcSet(s.img, 'webp')}
                    sizes={SHOT_SIZES}
                    alt={s.alt[lang] ?? s.alt.en}
                    width={320}
                    height={320}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-contain"
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>

        <span className="absolute bottom-3 right-4 rounded-full bg-night/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
          {AD_LABEL[lang]}
        </span>
      </div>
    </div>
  )
}
