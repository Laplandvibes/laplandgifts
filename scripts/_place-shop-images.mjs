/**
 * Muuntaa Picsart-generoidut PNG:t sivuston kuvapareiksi (AVIF + WebP).
 * Kertakäyttöinen apuri kaupan V1-kuvaerälle; jätetään repoon jotta seuraava
 * erä voi ajaa saman muunnoksen samoilla asetuksilla.
 */
import sharp from 'sharp'
import { existsSync } from 'node:fs'

const OUT = 'public/images'

/** [lähde-PNG, kohdenimi, leveys] */
const JOBS = [
  ['output/2cb910ef-d2ac-4e72-9246-145675f3e08b.png', 'cat-design', 1200],
  ['output/ad52ac3d-93cc-4736-a2af-9160d0f79ed6.png', 'cat-clothing', 1200],
  ['output/92af7743-d9df-4a0d-88cc-3381d2b1e6ca.png', 'cat-treats', 1200],
  ['output/c9b6f049-e5c2-47d9-8072-16f636a36f06.png', 'cat-superfoods', 1200],
  ['output/7e17dc36-6e3d-49b3-b963-0ba01b0728e6.png', 'hero-shop', 2400],
  // Tuotekorttien tunnelmakuvat (3:4). Nämä EIVÄT ole kuvia myytävästä
  // brändituotteesta: kortti merkitsee ne tunnelmakuviksi ja ohjaa kumppanin
  // sivulle, jossa ovat tuotteen omat kuvat.
  ['output/3d3d4b69-93b3-4a03-9f0c-7de6d776c3c6.png', 'prod-reindeer-jerky', 800],
  ['output/41563cf3-cfb3-4a3b-af62-3f5c4085a329.png', 'prod-salmiakki-liquorice', 800],
  ['output/67358b8d-2888-4767-9f0e-37a6ed832507.png', 'prod-blueberry-powder', 800],
  ['output/566c90d9-6009-4955-92cf-36999ea4411a.png', 'prod-sea-buckthorn-powder', 800],
  ['output/ef644829-c712-48ef-8638-c2b2a1b30e89.png', 'prod-chaga-powder', 800],
  ['output/1b59ab4f-3709-43ac-8ed6-7a1e83fe934f.png', 'prod-moomin-mug', 800],
  ['output/340323d6-a351-456c-8338-6a70b9397b23.png', 'prod-moomin-tumblers', 800],
  ['output/8fb643b9-8350-4dd6-9337-cb716f29d610.png', 'prod-halti-tokoi-jacket', 800],
  ['output/90f5b28a-3687-41b4-adc8-89e5a8bef44d.png', 'prod-leuku-knife', 800],
  ['output/3c1394e0-ad38-4101-85eb-a68b28538f2c.png', 'prod-marttiini-ilves', 800],
]

for (const [src, name, width] of JOBS) {
  if (!existsSync(src)) {
    console.error(`PUUTTUU: ${src}`)
    process.exitCode = 1
    continue
  }
  const base = sharp(src).resize({ width, withoutEnlargement: true })
  await base.clone().webp({ quality: 82 }).toFile(`${OUT}/${name}.webp`)
  await base.clone().avif({ quality: 55 }).toFile(`${OUT}/${name}.avif`)
  const meta = await sharp(`${OUT}/${name}.webp`).metadata()
  console.log(`${name}  ${meta.width}x${meta.height}`)
}
