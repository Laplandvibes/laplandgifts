/** Elämyskorttien kuvat (3:2) AVIF+WebP-pareiksi. */
import sharp from 'sharp'
import { existsSync } from 'node:fs'
const OUT = 'public/images'
const JOBS = [
  ['output/3f9bc495-ada2-4319-bf0e-287ade281cf1.png', 'exp-aurora'],
  ['output/1d29030d-3ebc-442c-ba9f-20e373d2cdb1.png', 'exp-icebreaker'],
  ['output/d466c32d-0c65-4d9b-99e6-bb4eb9586def.png', 'exp-husky'],
  ['output/4db8a317-1e6a-4005-a2e3-a96c03c76f02.png', 'exp-korouoma'],
  ['output/aa00f8cc-4312-4985-b97a-dce8ba561a10.png', 'exp-snowhotel'],
  ['output/0cb23996-a95a-4175-ab4d-6bc408ab5741.png', 'exp-santavillage'],
  ['output/26754e53-8fc5-4cda-b532-9d441aa04959.png', 'exp-reindeer'],
  ['output/75e184d7-2caa-4c76-8ce2-45083cde8845.png', 'exp-snowmobile'],
]
for (const [src, name] of JOBS) {
  if (!existsSync(src)) { console.error(`PUUTTUU ${src}`); process.exitCode = 1; continue }
  for (const w of [480, 800]) {
    const b = sharp(src).resize({ width: w, withoutEnlargement: true })
    await b.clone().webp({ quality: 82 }).toFile(`${OUT}/${name}-${w}.webp`)
    await b.clone().avif({ quality: 55 }).toFile(`${OUT}/${name}-${w}.avif`)
  }
  const b = sharp(src).resize({ width: 800, withoutEnlargement: true })
  await b.clone().webp({ quality: 82 }).toFile(`${OUT}/${name}.webp`)
  await b.clone().avif({ quality: 55 }).toFile(`${OUT}/${name}.avif`)
  console.log(name)
}
