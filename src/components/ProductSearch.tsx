import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import { CATEGORIES } from '../data/categories'
import { useLang, useLocalePath } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import { NAV_COPY } from '../locales/navCopy'
import { productName } from '../locales/productCopy'

/**
 * Kaupan haku.
 *
 * 🔴 Miksi tämä on olemassa (Vesa 2.8.2026: "onko tämä header mielestäsi paras
 * mahdollinen?"): sivulla on 56 tuotetta seitsemässä kategoriassa eikä mitään
 * tapaa etsiä yhtä niistä. Kategorialinkit ovat ainoa reitti, eli lukijan on
 * arvattava kumpaan kategoriaan "merinopipo" kuuluu. Hakukenttä on se yksi
 * elementti joka erottaa verkkokaupan tuoteluettelosta.
 *
 * Toteutus on tarkoituksella paikallinen eikä oma reitti:
 *   - 56 tuotetta on pieni joukko, joten suodatus tapahtuu muistissa ilman
 *     verkkopyyntöä ja tulos näkyy näppäilyn tahdissa.
 *   - Oma /search-reitti olisi tarkoittanut 12 uutta prerenderöityä sivua,
 *     joilla ei ole indeksoitavaa sisältöä (tulos syntyy vasta selaimessa).
 *
 * Osumaperuste on nimi, brändi ja kategorian nimi. Kuvausteksti on jätetty
 * pois tarkoituksella: se tuotti osumia joissa hakusana esiintyi ohimennen
 * ("villa" osui jokaiseen merinotuotteeseen), jolloin lista näytti siltä
 * ettei haku toimi.
 *
 * 🔴 Tuotenimet ovat tyypissä vain en/fi (Product.name). Muut kielet näkevät
 * siis englanninkielisen nimen, kuten kaikkialla muuallakin kaupassa. Haku ei
 * korjaa sitä eikä teeskentele korjaavansa: se hakee samasta tekstistä joka
 * kortissa lukee, jolloin osuma vastaa aina sitä mitä lukija näkee.
 */
const MAX_HITS = 6

export default function ProductSearch({
  variant = 'bar',
  onNavigate,
}: {
  /** 'bar' = pääpalkin kapea kenttä, 'panel' = mobiilivalikon täysleveä. */
  variant?: 'bar' | 'panel'
  onNavigate?: () => void
}) {
  const lang = useLang()
  const to = useLocalePath()
  const navigate = useNavigate()
  const n = NAV_COPY[lang]
  const catNames = SHOP_COPY[lang].category.names

  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const boxRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  /** Hakuindeksi rakennetaan kerran kieltä kohden, ei joka näppäimenpainalluksella. */
  const index = useMemo(
    () =>
      PRODUCTS.map((p) => {
        const name = productName(p, lang)
        const cat = CATEGORIES.find((c) => c.id === p.category)
        return {
          slug: p.slug,
          name,
          brand: p.brand,
          catLabel: catNames[p.category],
          catSlug: cat?.slug ?? '/',
          haystack: `${name} ${p.brand} ${catNames[p.category]}`.toLowerCase(),
        }
      }),
    [lang, catNames],
  )

  const hits = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (term.length < 2) return []
    // Sanan alusta osuvat ensin: "kev" nostaa Kevo-sormikkaat ennen tuotetta
    // jonka nimen keskellä sattuu olemaan sama kirjainjono.
    const scored = index
      .filter((it) => it.haystack.includes(term))
      .map((it) => ({ it, lead: new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(it.haystack) ? 0 : 1 }))
      .sort((a, b) => a.lead - b.lead)
    return scored.slice(0, MAX_HITS).map((s) => s.it)
  }, [q, index])

  useEffect(() => setActive(0), [q])

  // Klikkaus kentän ulkopuolelle sulkee listan. Ilman tätä lista jäi auki
  // sivun päälle ja peitti ensimmäisen tuotekortin.
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  const go = (slug: string) => {
    setQ('')
    setOpen(false)
    onNavigate?.()
    navigate(to(`/product/${slug}`))
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false)
      return
    }
    if (!hits.length) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => (i + 1) % hits.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => (i - 1 + hits.length) % hits.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      go(hits[active].slug)
    }
  }

  const wide = variant === 'panel'

  return (
    <div ref={boxRef} className={`relative ${wide ? 'w-full' : 'w-full max-w-xs'}`}>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
          aria-hidden="true"
        />
        <input
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={n.searchPlaceholder}
          aria-label={n.searchLabel}
          role="combobox"
          aria-expanded={open && hits.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          // 16 px estää iOS Safaria zoomaamasta koko sivua kenttään
          // kosketettaessa, sama sääntö kuin toimitusmaavalitsimessa.
          className="min-h-11 w-full rounded-full border border-white/20 bg-white/10 pl-9 pr-9 text-base text-white placeholder:text-white/50 focus:border-vibe-pink focus:outline-none focus:ring-2 focus:ring-vibe-pink/40 md:min-h-9 md:text-sm"
        />
        {q && (
          <button
            type="button"
            onClick={() => {
              setQ('')
              setOpen(false)
            }}
            aria-label={n.searchClear}
            className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-white/60 hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Tulosmäärä ruudunlukijalle. Näkevä lukija näkee listan, mutta ilman
          tätä hakukentän tila ei välity mitenkään ruudunlukijalle. */}
      <p className="sr-only" aria-live="polite">
        {q.trim().length >= 2 ? n.searchResults(hits.length) : ''}
      </p>

      {open && q.trim().length >= 2 && (
        <div
          className={`absolute left-0 right-0 top-full z-[70] mt-2 overflow-hidden rounded-2xl border border-line bg-card shadow-lg ${
            wide ? '' : 'min-w-[18rem]'
          }`}
        >
          {hits.length === 0 ? (
            <p className="px-4 py-3 text-sm text-muted">{n.searchEmpty}</p>
          ) : (
            <ul id={listId} role="listbox" aria-label={n.searchLabel}>
              {hits.map((h, i) => (
                <li key={h.slug} role="option" aria-selected={i === active}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(h.slug)}
                    className={`flex min-h-12 w-full flex-col items-start gap-0.5 border-b border-line/60 px-4 py-2 text-left last:border-0 ${
                      i === active ? 'bg-sand' : ''
                    }`}
                  >
                    <span className="text-sm font-medium text-gray">{h.name}</span>
                    <span className="text-xs text-muted">
                      {h.brand} · {h.catLabel}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
