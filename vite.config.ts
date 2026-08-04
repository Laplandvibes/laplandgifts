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
         * 🔴 c2 → c3 4.8.2026. Deployn jälkeen apex renderöi tyhjää: selain oli
         * ehtinyt pyytää /static/c2/copy.fi-*.js ennen kuin tiedosto oli
         * levinnyt reunalle, jolloin SPA-fallback vastasi HTML:llä statuksella
         * 200 ja se tallentui asset-URLin alle vuodeksi (max-age=31536000).
         * Reuna toipui s-maxagen ansiosta 10 minuutissa, mutta SELAIMEN kopio
         * ei toivu — moduulin dynaaminen import kaatuu MIME-tarkistukseen,
         * CopyGate ei avaudu (App.tsx) ja koko sivu jää tyhjäksi. curl ja
         * fetch(cache:'no-store') näyttävät oikean JS:n, joten vika ei näy
         * millään palvelinpuolen mittarilla — vain selaimen välimuistista.
         * s-maxage korjaa reunan, ei asiakasta; nimiavaruuden vaihto on ainoa
         * tapa saada jo myrkyttynyt selain hakemaan tiedosto uudelleen.
         *
         * Kaikki assetit alihakemistoon /static/c3. Syy on operatiivinen:
         * yksittäisiä /static-osoitteita oli myrkyttynyt Cloudflaren
         * reunavälimuistiin (200 + text/html) vanhalla immutable-otsakkeella,
         * eikä niitä voi purgeta ilman zone-oikeuksia eikä vanhentaa
         * takautuvasti. Nimiavaruuden vaihto on ainoa varma pako. Uudet
         * vastaukset tallentuvat s-maxage=600:lla, joten sama ei toistu.
         * Jos joudut tekemään tämän uudestaan, nosta c3 -> c4.
         *
         * 🔴 JA VÄLTÄ SYY: älä avaa apexia selaimessa deployn jälkeen ennen
         * kuin levinneisyys on todettu deploy-URLista JA curlilla apexin
         * asset-osoitteista. Liian aikainen selainpyyntö AIHEUTTAA tämän.
         */
        chunkFileNames: 'static/c3/[name]-[hash].js',
        entryFileNames: 'static/c3/[name]-[hash].js',
        assetFileNames: 'static/c3/[name]-[hash][extname]',
      },
    },
  },
})
