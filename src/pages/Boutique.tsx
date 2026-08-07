import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import { boutiqueBySlug, boutiqueOutboundUrl } from '../data/boutiques'
import { categoryById } from '../data/categories'
import { BOUTIQUE_COPY } from '../locales/boutiqueCopy'
import { SHOP_COPY } from '../locales/shopCopy'
import { useLang, useLocalePath } from '../i18n/useLang'
import NotFound from './NotFound'

export default function Boutique() {
  const lang = useLang()
  const localePath = useLocalePath()
  const { slug } = useParams<{ slug: string }>()
  const t = SHOP_COPY[lang].boutique
  const tc = SHOP_COPY[lang].category

  const boutique = slug ? boutiqueBySlug(slug) : undefined
  if (!boutique) return <NotFound />

  const c = BOUTIQUE_COPY[lang][boutique.slug]
  const category = categoryById(boutique.giftsCategory)

  return (
    <>
      <ShopNav />
      <main className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 pt-8 pb-4">
          <Link
            to={localePath('/boutiques')}
            className="inline-flex min-h-11 items-center text-sm text-muted hover:text-amber hover:underline"
          >
            {t.hubTitle}
          </Link>
        </div>

        <header className="mx-auto max-w-3xl px-4 pb-6">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-muted">
            {t.townNames[boutique.town]}
            {boutique.district ? `, ${boutique.district}` : ''}
          </span>
          {/* Nimi on font-bodylla, ei Bebasilla: versaali tekisi pitkistä
              nimistä lukukelvottomia. Sama päätös kuin tuotesivulla. */}
          <h1 className="mt-1 font-body text-3xl font-semibold text-gray sm:text-4xl">
            {boutique.name}
          </h1>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {boutique.hasOnlineStore && (
              <span className="rounded bg-finland/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-finland">
                {t.onlineBadge}
              </span>
            )}
            {boutique.hasPhysicalStore && (
              <span className="rounded bg-night/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-night">
                {t.physicalBadge}
              </span>
            )}
            {boutique.samiAuthorized && (
              <span className="rounded bg-amber/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-amber">
                {t.duodjiAuthorized}
              </span>
            )}
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-4 pb-8">
          <p className="text-lg leading-relaxed text-gray">{c.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {c.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-card px-3 py-1 text-sm text-gray">
                {tag}
              </span>
            ))}
          </div>

          {/* 🔴 Tämä ei ole affiliate-linkki vaan viittaus lappilaiseen
              yritykseen, joten rel="sponsored" olisi väärä signaali Googlelle:
              se kertoisi maksetusta suhteesta jota ei ole. UTM riittää. */}
          <a
            href={boutiqueOutboundUrl(boutique)}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-amber px-5 font-medium text-white transition-colors hover:bg-amber/90"
          >
            {t.outboundCta}
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </section>

        {/* Ristiinlinkki kauppaan. Tämä on se mekanismi jolla hakemisto
            ansaitsee paikkansa giftsin sisällä eikä jää irralliseksi osioksi. */}
        <section className="mx-auto max-w-3xl px-4 pb-16">
          <div className="rounded-2xl border border-line bg-card p-6">
            <h2 className="font-heading text-2xl tracking-wide text-night">{t.crossSellH2}</h2>
            <p className="mt-2 text-muted">{tc.intro[category.id]}</p>
            <Link
              to={localePath(category.slug)}
              className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold text-amber hover:underline"
            >
              {tc.names[category.id]}: {t.crossSellCta}
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
