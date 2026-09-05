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
    <section id="categories" className="bg-sand py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-4xl leading-none tracking-wide text-gray md:text-6xl">{t.categoriesH2}</h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">{t.categoriesSub}</p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:mt-10 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            /* 7 kategoriaa kolmessa palstassa jätti viimeisen tiilen yksin
               omalle rivilleen. Viimeinen tiili leviää koko riville, kun
               jakojäännös on yksi. */
            <CategoryCard key={c.id} category={c} lang={lang} wide={i === CATEGORIES.length - 1 && CATEGORIES.length % 3 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
