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
  },
})
