import { CATEGORIES } from '../data/categories'
import { useLang } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import CategoryCard from './shop/CategoryCard'

/**
 * Etusivun kategoriagrid. Kortit tulevat `categories.ts`:stä, joten uusi
 * kategoria ilmestyy etusivulle, naviin ja reitteihin yhdellä datarivillä.
 * Aiemmin tässä oli kolme kovakoodattua kuvaa ja copyn oma kolmen kohdan
 * lista, joka ei enää vastannut kaupan seitsemää kategoriaa. Myös otsikko
 * tulee siksi SHOP_COPYsta: ChromeCopyn "Three Ways to Gift Lapland" laskisi
 * väärin nyt kun kortteja on seitsemän.
 */
export default function ProductCategories() {
  const lang = useLang()
  const t = SHOP_COPY[lang].home
  return (
    <section id="categories" className="bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-4xl tracking-wide text-gray md:text-6xl">{t.categoriesH2}</h2>
        <p className="mt-3 max-w-2xl text-muted">{t.categoriesSub}</p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.id} category={c} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
