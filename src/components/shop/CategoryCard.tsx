import { Link } from 'react-router-dom'
import type { Category } from '../../data/categories'
import type { Lang } from '../../i18n/useLang'
import { useLocalePath } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'

/**
 * Kategoriakortti etusivun gridiin.
 *
 * Kuvasäiliöllä on kiinteä kuvasuhde (`.category-media` = 3/2) ja hiekkainen
 * taustaväri, joten grid pitää ryhtinsä myös silloin kun kuvatiedostoa ei vielä
 * ole: kortti näyttää tyhjältä pinnalta eikä romahda nimen korkuiseksi riviksi.
 * Otsikko istuu kuvan päällä omassa tummennuksessaan, joten se on luettava
 * riippumatta siitä latautuiko kuva.
 */
export default function CategoryCard({ category, lang }: { category: Category; lang: Lang }) {
  const to = useLocalePath()
  const t = SHOP_COPY[lang].category
  const name = t.names[category.id]
  return (
    <Link
      to={to(category.slug)}
      className="group relative block overflow-hidden rounded-2xl border border-line bg-card"
    >
      <div className="category-media overflow-hidden bg-sand-deep">
        <picture>
          <source srcSet={`/images/${category.image}.avif`} type="image/avif" />
          <img
            src={`/images/${category.image}.webp`}
            alt=""
            loading="lazy"
            decoding="async"
            width={800}
            height={533}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </picture>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 to-transparent p-5 pt-14">
        <h3 className="font-heading text-2xl tracking-wide text-white md:text-3xl">{name}</h3>
      </div>
    </Link>
  )
}
