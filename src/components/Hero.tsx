import { Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang, useLocalePath } from '../i18n/useLang'
import { imgSrcSet } from '../lib/img'
import { COPY } from '../locales/copy'
import { SHOP_COPY } from '../locales/shopCopy'

/* ── Otsikko kahdella rivillä jokaisella kielellä tietokoneella (Vesa 3.10.2026: "tehdään turhaan kolmirivisiä") ──
 * Mitattu livenä 3.10. (12 kieltä × 1280/1536/1920): 8 löydöstä, de/pt-BR/it/sv 3 riviä 1536–1920 px:llä
 * ("Finska presenter och / souvenirer / från Lappland") ja ja 4 riviä kaikilla leveyksillä. Koko kasvoi näytön
 * mukana (96–115 px), palsta pysyi 896 px:ssä. Rivijako on datassa (valkoinen heroTitle | pinkki accent), joten
 * sm:stä ylöspäin koko on pienempi kahdesta: suunniteltu --h1-max tai koko jolla pidempi rivi mahtuu palstaan
 * (100cqi / rivin leveys em-yksiköinä). Palsta pysyy ennallaan: teksti ei siirry kuvan vaaleaan oikeaan laitaan.
 * Malli: hubin Hero.tsx (laplandvibes cadea06). */
const CJK_CHAR = /[぀-ヿ㐀-鿿가-힯＀-￯]/
/** Rivin leveysarvio em-yksiköinä: Bebas Neuen versaali ~0,36–0,39 em, arvio 0,4 jättää varaa; CJK-merkki 1,05 em;
 *  nollalevyinen katkokohta (U+200B, japanin datassa) 0. tracking-wide lisää 0,025 em jokaiseen merkkiin. */
const emWidth = (s: string): number =>
  [...s].reduce((w, ch) => {
    if (ch.charCodeAt(0) === 0x200b) return w
    return w + 0.025 + (CJK_CHAR.test(ch) ? 1.05 : ch === ' ' ? 0.25 : 0.4)
  }, 0)

/**
 * Kaupallinen hero: kuva kantaa, teksti on lyhyt ja molemmat CTA:t vievät
 * kauppaan reitittimen Linkillä, eivät ankkuriin saman sivun sisällä.
 *
 * 🔴 Vanha badge, joka lupasi kaupan avautuvan pian, on poistettu. Kauppa on
 * auki, joten lupaus avautumisesta olisi nyt valhe. Samasta syystä koko
 * tekstilohko tulee SHOP_COPYsta: ChromeCopyn hero.lead lupaa yhä, että tilata
 * voi vasta myöhemmin, ja sen otsikko on "Give a Piece of the Arctic", joka ei
 * vastaa yhtäkään hakutermiä (Vesa 1.8.). COPYsta luetaan enää nappien tekstit,
 * jotka ovat käännettyinä kaikilla 12 kielellä.
 *
 * min-h käyttää svh-yksikköä: vh laskee Safarin URL-palkin mukaan ja hero
 * hyppäisi korkeutta kun palkki piiloutuu.
 */
export default function Hero() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].hero
  const s = SHOP_COPY[lang]
  // Luokka erillisenä sanana: `${…}` kiinni edelliseen luokkaan piilottaa sen Tailwindin
  // lähdeskannerilta (xl:text-2xl jäi generoimatta).
  const keepAll = lang === 'ja' || lang === 'ko' ? '[word-break:keep-all]' : ''
  const h1Em = Math.max(emWidth(s.home.heroTitle), emWidth(s.home.heroTitleAccent))
  return (
    // 🔴🔴 VALOISA HERO (Vesa 7.11.2026: "ei mitään revontuli heroa kauppaan, valoja päälle" ja
    // "kaupassa aidot kuvat ei ole ihan niin tärkeitä, jos saadaan laadukas tekoäly kuva heroon niin
    // sekin käy"). Ennen hero oli tumma: kuva taustana ja valkoinen teksti 94/88/55 %:n tummennuksen
    // päällä ("eikö etusivun hero osion kuvan päällä ole liikaa overlayta?"). Nyt teksti on vaalealla
    // pohjalla ja kuva sen vieressä ilman yhtään tummennusta: työpöydällä kaksi palstaa, puhelimessa
    // kuva omana nauhanaan tekstin yläpuolella (heroteksti-portin heromalli C). Kontrasti ei riipu
    // kuvasta lainkaan.
    // Kuva on tekoälyllä tehty asetelma (seedream-5.0-pro 7.11.2026, alkuperäinen ja kehote
    // _reissu-2026-07/_ai-originals-backup/laplandgifts/): nimettömät lahjapaketit, villalapanen,
    // kahvi, lakat ja kynttilä talviaamun ikkunan ääressä. Ei kumppanin tuotetta, ei tekstiä, ei
    // tiettyä oikeaa paikkaa (kuvasäännöt, 01-kuvat.md §0 ja §6.5).
    <section className="relative overflow-hidden bg-sand lg:grid lg:min-h-[74svh] lg:grid-cols-2">
      {/* Heron kuva on sivun LCP-elementti: korkea prioriteetti, ei laiskaa latausta, ja index.html
          esilataa saman srcSetin samalla sizes-arvolla, ettei kuvaa ladata kahdesti. */}
      <div className="relative aspect-[16/10] w-full lg:order-2 lg:aspect-auto">
        <picture className="absolute inset-0 block">
          <source srcSet={imgSrcSet('hero-lahjat', 'avif')} sizes="(min-width: 1024px) 50vw, 100vw" type="image/avif" />
          <img
            src="/images/hero-lahjat.webp"
            srcSet={imgSrcSet('hero-lahjat', 'webp')}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt=""
            width={2312}
            height={1736}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ objectPosition: '55% 60%' }}
          />
        </picture>
      </div>
      <div className="relative z-10 flex items-center lg:order-1">
        <div className="mx-auto w-full max-w-2xl px-4 pb-14 pt-10 md:pb-20 md:pt-14 lg:ml-auto lg:mr-0 lg:max-w-[42rem] lg:py-24 lg:pl-8 lg:pr-12 xl:pr-16">
        {/* @container: otsikon koko lasketaan tämän palstan leveydestä (100cqi). */}
        <div className="@container text-center lg:text-left">
          {/* Puhelin (< 640) pitää kiinteän clamp-koon; sm+ = min(suunniteltu --h1-max, palstaan mahtuva).
              Rivijako on datassa (tumma heroTitle | pinkki accent), joten otsikko on kahdella rivillä
              jokaisella kielellä (Vesa 3.10.2026). ja/ko: rivi katkeaa vain sanan rajalta (keep-all). */}
          <h1
            className={`font-heading text-[clamp(2.25rem,11.5vw,2.75rem)] tracking-wide text-night sm:[--h1-max:3rem] md:[--h1-max:4.5rem] lg:[--h1-max:5rem] xl:[--h1-max:clamp(80px,1.5vw_+_60px,96px)] sm:[font-size:min(var(--h1-max),calc(100cqi/var(--h1-em)))] ${keepAll}`}
            style={{ ['--h1-em' as string]: h1Em.toFixed(2) }}
          >
            {s.home.heroTitle} <span className="block text-amber">{s.home.heroTitleAccent}</span>
          </h1>
          <p className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray/80 [text-wrap:pretty] max-lg:w-fit max-lg:text-left md:text-xl lg:mx-0 ${lang === 'ko' ? keepAll : ''}`}>
            {s.home.heroLead}
          </p>
          {/* 🔴 Napit ovat ruudukossa, eivät flex-rivissä (Vesa 1.8.).
              Vanha `flex … sm:flex-row` tuotti kaksi vikaa:
                - 390 px: napit olivat luonnollisen levyisiä (231 ja 173 px) ja
                  keskitettyjä, eli kahden eri levyisen pillerin porras.
                - 660 px: `sm:flex-row` teki niistä vasempaan tasatun rivin
                  (vasen reuna 16 ja 263) vaikka otsikko ja ingressi olivat yhä
                  keskitettyjä. Napit ja teksti osoittivat eri suuntiin.
              Ruudukossa molemmat sarakkeet ovat aina täsmälleen yhtä leveät, ja
              säiliö noudattaa samaa tasausta kuin tekstilohko: keskitetty
              (`mx-auto`) niin kauan kuin teksti on keskitettyä, vasemmalla
              lg-koosta ylöspäin, jossa `lg:text-left` osuu. Yhden sarakkeen
              ruudukko kapealla = täysleveät napit. */}
          <div className="mx-auto mt-10 grid max-w-md gap-3 sm:max-w-xl sm:grid-cols-2 lg:mx-0">
            <Link
              to={to('/design')}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-amber px-6 py-4 text-xl font-bold text-white transition-colors hover:bg-amber/90"
            >
              <Gift className="h-5 w-5 shrink-0" aria-hidden="true" />
              {t.ctaExplore}
            </Link>
            <Link
              to={to('/gift-guides')}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-night/25 px-6 py-4 text-xl font-bold text-night transition-colors hover:border-amber hover:text-amber"
            >
              {s.nav.guides}
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
