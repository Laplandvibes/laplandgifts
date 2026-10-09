import { Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang, useLocalePath } from '../i18n/useLang'
import { imgSrcSet } from '../lib/img'
import PhotoMark from './PhotoMark'
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
    // 🔴🔴 Puhelimessa ja tabletissa kuva on OMA NAUHANSA tekstin yläpuolella
    // (Vesa 28.9.2026: "mobiilissa hero kuva ei näy ollenkaan ja tunnelma on
    // todella synkkä"). Kuva on vaalea ja kirkas (lumiset ikkunat, vaalea pöytä),
    // ja keskitetty valkoinen teksti sen päällä tarvitsi 21.9. alkaen kaksi
    // päällekkäistä tummennusta (vaakagradientti + night/76), jotka yhdessä
    // peittivät kuvasta 83–99 %. Nyt alle lg:n teksti on kuvan alla tummalla
    // pohjalla (heroteksti-portin heromalli C), joten kuva näkyy kokonaan eikä
    // kontrasti riipu valokuvasta. lg:stä ylöspäin ennallaan: kuva taustana,
    // teksti vasemmalla gradientin päällä.
    <section className="relative overflow-hidden bg-night lg:flex lg:min-h-[78svh] lg:items-center">
      {/* Heron kuva on sivun LCP-elementti: se ladataan korkealla prioriteetilla
          eikä laiskasti, ja index.html avaa sille esilatauksen jo ennen kuin
          React on käynnistynyt. */}
      {/* 🔴 Hero on LCP-elementti, ja se latasi 2400 pikselin tiedoston 390
          pikselin ruudulle: 85 kt siitä että kuva venytettiin 6-kertaiseksi
          alaspäin. Nyt tarjolla on 800/1200/1600 pikselin versiot ja selain
          valitsee ruudun leveyden × näyttötiheyden mukaan. index.html:n
          esilataus tarjoaa saman srcSetin, muuten esilataus hakisi eri
          tiedoston kuin <img> ja kuva ladattaisiin kahdesti. */}
      <div className="relative aspect-[16/9] w-full lg:absolute lg:inset-0 lg:aspect-auto">
      <picture className="block h-full w-full">
        <source srcSet={imgSrcSet('hero-shop', 'avif')} sizes="100vw" type="image/avif" />
        <img
          src="/images/hero-shop.webp"
          srcSet={imgSrcSet('hero-shop', 'webp')}
          sizes="100vw"
          alt=""
          width={2560}
          height={1709}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>
        <PhotoMark image="hero-shop" />
      </div>
      {/* Työpöydällä teksti on vasemmalla kuvan päällä: gradientti tummentaa
          tekstin puolen ja pitää oikean laidan kuvana. Alle lg:n teksti ei ole
          kuvan päällä, joten tummennusta ei tarvita lainkaan. */}
      <div
        className="absolute inset-0 hidden bg-gradient-to-r from-night/94 via-night/88 to-night/55 lg:block"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-10 md:pb-20 md:pt-14 lg:py-28">
        {/* @container: otsikon koko lasketaan tämän palstan leveydestä (100cqi). */}
        <div className="@container mx-auto max-w-2xl xl:max-w-4xl text-center lg:mx-0 lg:text-left">
          {/* Ei yläotsikkoa otsikon yllä: toimituslupaus on ingressissä. Erillinen
              harvennettu versaalirivi toisti saman asian kuin ingressi (Vesa 1.10.2026). */}
          {/* Bebas Neue on kapea versaalifontti: sama pistekoko näyttää
              selvästi pienemmältä kuin Playfairilla, joten koot ovat isot.
              tracking-wide avaa versaalit luettaviksi.

              🔴 Koot on mitoitettu otsikon pituuden mukaan, ei toisin päin.
              Hakusanaotsikko on 35 merkkiä siinä missä vanha fraasi oli 26,
              ja tekstilohko on `max-w-2xl` eli 672 px. text-9xl (128 px)
              katkaisi uuden otsikon kolmelle riville sekä 1440 että 375
              pikselissä. Nyt rivejä on kaksi ja katkos osuu accentin eteen.

              🔴 Accent on `block`, eli rivinvaihto on pakotettu eikä jätetty
              rivityksen päätettäväksi. Ilman sitä katkos vaelsi leveyden
              mukaan: 640–767 pikselissä ensimmäiselle riville mahtui vielä
              "…and Lapland", jolloin amberia jäi alariville yksi sana. Nyt
              ylärivi on aina valkoinen ja alarivi aina amber.

              🔴 Pienin koko on clamp eikä porras, koska 48 px riitti 375
              pikselin ruudulle mutta ei 360:lle eikä 320:lle: suomen
              "suomalaiset lahjat" katkesi kolmannelle riville yksinäiseksi
              sanaksi. Mitattu selaimesta kymmenellä leveydellä, ei arvattu. */}
          {/* ja/ko: rivi katkeaa vain sanan rajalta (keep-all). Japanin otsikossa
              sallitut katkokohdat ovat datassa nollalevyisinä välilyönteinä (U+200B);
              ilman niitä 360 px:ssä otsikko katkesi "ラップラン / ド". */}
          {/* Puhelin (< 640) pitää kiinteän clamp-koon; sm+ = min(suunniteltu --h1-max, palstaan mahtuva).
              lg (1024–1279): rivi korkeintaan 85 % palstasta (--h1-fit). Täysleveä pinkki rivi ulottui 1024 px:llä
              kuvan vaaleaan ikkunaan, ja heroteksti-portti mittasi de/ja/sv:n korostusrivistä 10–13 % rajan alle. */}
          <h1
            className={`font-heading text-[clamp(2.25rem,11.5vw,2.75rem)] tracking-wide text-white sm:[--h1-max:3rem] md:[--h1-max:4.5rem] lg:[--h1-max:6rem] xl:[--h1-max:clamp(96px,1.5vw_+_76.8px,115.2px)] lg:[--h1-fit:0.85] xl:[--h1-fit:1] sm:[font-size:min(var(--h1-max),calc(100cqi*var(--h1-fit,1)/var(--h1-em)))] ${keepAll}`}
            style={{ ['--h1-em' as string]: h1Em.toFixed(2) }}
          >
            {s.home.heroTitle} <span className="block text-vibe-pink drop-shadow-[0_0_40px_rgba(236,72,153,0.8)]">{s.home.heroTitleAccent}</span>
          </h1>
          <p className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85 [text-wrap:pretty] md:text-xl lg:mx-0 xl:max-w-3xl xl:text-2xl ${lang === 'ko' ? keepAll : ''}`}>
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
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-4 text-xl font-bold text-white transition-colors hover:border-amber hover:text-amber"
            >
              {s.nav.guides}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
