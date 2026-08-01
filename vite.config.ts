import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },
  build: {
    /**
     * Assetit tarjoillaan hakemistosta /static, ei /assets.
     *
     * Syy on operatiivinen, ei tekninen: 31.7.2026 Cloudflaren reunavälimuistiin
     * jäi /assets/*-osoitteiden alle SPA-fallbackin HTML statuksella 200, koska
     * asset ei ollut vielä levinnyt kun sitä pyydettiin. _headers merkitsee ne
     * immutableksi vuodeksi, joten merkintä ei vanhene, eikä Pages-projektiin
     * ole purge-oikeutta. Nimiavaruuden vaihto on ainoa tapa ohittaa jo
     * myrkyttyneet osoitteet. _redirects estää nyt saman toistumisen.
     */
    assetsDir: 'static',
    rollupOptions: {
      output: {
        /**
         * Kaikki assetit alihakemistoon /static/c2. Syy on operatiivinen:
         * yksittäisiä /static-osoitteita oli myrkyttynyt Cloudflaren
         * reunavälimuistiin (200 + text/html) vanhalla immutable-otsakkeella,
         * eikä niitä voi purgeta ilman zone-oikeuksia eikä vanhentaa
         * takautuvasti. Nimiavaruuden vaihto on ainoa varma pako. Uudet
         * vastaukset tallentuvat s-maxage=600:lla, joten sama ei toistu.
         * Jos joudut tekemään tämän uudestaan, nosta c2 -> c3.
         */
        chunkFileNames: 'static/c2/[name]-[hash].js',
        entryFileNames: 'static/c2/[name]-[hash].js',
        assetFileNames: 'static/c2/[name]-[hash][extname]',
      },
    },
  },
})
