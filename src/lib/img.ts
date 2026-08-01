import { IMAGE_VARIANTS } from '../data/imageVariants'

/**
 * Rakentaa `srcSet`-merkkijonon kuvalle, jolle `scripts/build-image-variants.mjs`
 * on tehnyt pienemmät versiot.
 *
 * 🔴 Palauttaa `undefined` jos varianttia ei ole. Silloin `<source>` saa
 * yksittäisen tiedoston kuten ennenkin — merkkijonoa ei koskaan keksitä, koska
 * olemattomaan leveyteen osoittava ehdokas tuottaisi 404:n ja selain hakisi
 * kuvan vasta sen jälkeen uudelleen.
 */
export function imgSrcSet(name: string, ext: 'avif' | 'webp'): string {
  const v = IMAGE_VARIANTS[name]
  if (!v || v.w.length === 0) return `/images/${name}.${ext}`
  return [
    ...v.w.map((w) => `/images/${name}-${w}.${ext} ${w}w`),
    `/images/${name}.${ext} ${v.full}w`,
  ].join(', ')
}

/** Alkuperäisen kuvan leveys, tai `fallback` jos kuva ei ole manifestissa. */
export function imgWidth(name: string, fallback: number): number {
  return IMAGE_VARIANTS[name]?.full ?? fallback
}
