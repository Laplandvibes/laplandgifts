import { ArrowRight, FileText } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

/**
 * Ilmaiset PDF-oppaat, jotka saa uutiskirjeen tilaajana.
 *
 * 🔴 Kirjoitettu uusiksi 2.8.2026 (Vesa: "oppaat osio on todella poor ja tehty
 * kiireessä"). Mikä siinä oli vialla:
 *
 *   1. EI KUVIA. Kortissa oli ikonilaatikko ja tekstiä. Opas on painotuotteen
 *      kaltainen esine, ja sellaista myydään kannella — ilman kantta kortti on
 *      pelkkä laatikko jossa lukee "9 sivua · PDF".
 *   2. KORTTI EI OLLUT KLIKATTAVA. Osion ainoa toiminto oli alareunan
 *      pomppiva nuoli, jonka teksti kehotti rullaamaan alaspäin. Lukija joka
 *      halusi oppaan luettuaan kortin joutui etsimään toiminnon muualta.
 *   3. LUPAUS JA TOIMINTO OLIVAT ERI PAIKOISSA. Ingressissä luki "lataa heti",
 *      mutta latausta ei ollut näkyvissä.
 *
 * Nyt kummallakin kortilla on oma kansi ja oma nappi, joka vie
 * uutiskirjelomakkeeseen ja siirtää kohdistuksen sähköpostikenttään. Kohdistus
 * on olennainen: pelkkä ankkurihyppy jättää lukijan lomakkeen viereen ilman
 * että mikään kertoo mitä seuraavaksi pitäisi tehdä.
 *
 * Kannet ovat AI-generoituja (Picsart, gpt-image-2) eivätkä oppaiden oikeita
 * sivuja: PDF:n ensimmäistä sivua ei saa kuvaksi ilman erillistä
 * renderöintityökalua, jota tässä ympäristössä ei ole. Kuvat esittävät
 * oppaiden aihetta eivätkä väitä olevansa kansikuvia.
 */
const COVERS = ['guide-craft', 'guide-itinerary']

function Guides() {
  const lang = useLang()
  const t = COPY[lang].guides
  /**
   * Napin teksti tulee uutiskirjeen omasta lähetysnapista ("Hae molemmat
   * oppaat", "Get Both Guides"), ei `guides.cta`:sta. Syy: `guides.cta` on
   * kirjoitettu rullausvihjeeksi ja on 41–82 merkkiä pitkä kielestä riippuen
   * (japaniksi 82), jolloin se rivittyisi napissa kolmelle riville. Sama
   * merkkijono on jo käännetty kaikille kielille ja tarkoittaa täsmälleen
   * sitä mihin nappi vie, joten uutta kääntämätöntä avainta ei tarvita.
   */
  const buttonLabel = COPY[lang].newsletter.submit

  /**
   * Vie lomakkeeseen ja kohdistaa sähköpostikenttään. Ankkuri `href`issä on
   * silti tallella, joten linkki toimii myös ilman JavaScriptiä ja näkyy
   * selaimen tilarivillä.
   */
  const toNewsletter = (e: React.MouseEvent) => {
    const form = document.getElementById('newsletter')
    if (!form) return
    e.preventDefault()
    form.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const field = form.querySelector<HTMLInputElement>('input[type="email"]')
    // Kohdistus vasta rullauksen jälkeen: heti kutsuttuna selain hyppää
    // kenttään ja tekee rullausanimaatiosta turhan.
    if (field) window.setTimeout(() => field.focus({ preventScroll: true }), 500)
  }

  return (
    <section id="guides" className="bg-sand py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 md:mb-12">
          <div className="mb-3 flex items-center gap-2">
            <FileText className="h-5 w-5 text-amber" />
            <span className="text-sm font-medium uppercase tracking-widest text-amber">{t.kicker}</span>
          </div>
          <h2 className="mb-3 font-heading text-3xl leading-none tracking-wide text-gray md:text-5xl">{t.h2}</h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-muted md:text-base">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          {t.guides.map((guide, i) => (
            <article
              key={guide.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_32px_-20px_rgba(15,23,42,0.25)] transition-all hover:border-amber/40"
            >
              {/* Kansi. 8:5 pitää kortit samankorkuisina riippumatta siitä
                  kuinka pitkä kuvausteksti on. */}
              <div className="aspect-[8/5] overflow-hidden bg-sand-deep">
                <picture>
                  <source type="image/avif" srcSet={`/images/${COVERS[i]}.avif`} />
                  <img
                    src={`/images/${COVERS[i]}.webp`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </picture>
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber">
                  {t.pagesPdf(guide.pages)}
                </p>
                <h3 className="font-heading text-2xl leading-tight tracking-wide text-gray md:text-3xl">
                  {guide.title}
                </h3>
                <p className="mb-3 mt-1 text-sm font-medium text-amber/90">{guide.subtitle}</p>
                <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray/75 md:line-clamp-none">{guide.description}</p>

                <div className="mb-6 hidden flex-wrap gap-2 sm:flex">
                  {guide.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-line bg-sand-deep px-3 py-1 text-xs text-gray/75"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* `mt-auto` pitää napit samalla korkeudella vaikka
                    kuvaustekstit ovat eri mittaisia. */}
                <a
                  href="#newsletter"
                  onClick={toNewsletter}
                  className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-semibold text-night transition-colors hover:bg-amber/90"
                >
                  {buttonLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Guides
