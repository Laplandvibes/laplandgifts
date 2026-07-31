# LaplandGifts.com V1 — monisivuinen verkkokauppanäkymä (design-spec)

Päivämäärä: 2026-07-31
Status: HYVÄKSYTTY suullisesti (Vesa 31.7.2026 chat) — odottaa kirjallisen speksin katselmusta
Sivusto: laplandgifts.com (CF Pages -projekti `laplandgifts`, hakemisto `laplandvibes/laplandgifts/`)

## 1. Tausta ja tavoite

LaplandGifts.com on nyt käytännössä yksisivuinen (Home + legal ×12 kieltä, vaalea
amber-variantti). Tavoite: **aidon verkkokaupan näköinen monisivuinen sivusto**,
joka myy "mitä turisti haluaa ostaa Suomesta" — mutta ilman omaa kassaa.
Jokainen tuotekortti näyttää verkkokaupan tuotteelta, ja "Osta"-nappi vie
kumppanin omaan kauppaan, jossa maksu ja toimitus tapahtuvat (sama malli kuin
GYG-kortit aktiviteettisivustoilla).

Strateginen vipu: kun tiedämme milloin turisti on Lapissa ja milloin lähtee
kotiin, voimme 2 pv ennen loman loppua suositella sähköpostilla tuliaisten
tilaamista kotiin toimitettuna. Siksi **jokaisen fyysisen kumppanin on
toimitettava kansainvälisesti**.

## 2. Tehdyt päätökset (Vesa 31.7.2026)

1. **Ostomalli:** GYG-tyylinen kortti→kumppani-malli kaikille tuoteryhmille.
   Fyysiset tuotteet → brändien/jälleenmyyjien kauppoihin, elämyslahjat →
   GYG-affiliatelinkit, oma merch → POD-kumppanin hostattu kauppa.
2. **Merch:** POD-kauppa heti V1:ssä (hostattu storefront, ei omaa kassaa).
3. **Laajuus:** kaikki 7 kategoriaa, ~8–15 kuratoitua tuotetta per kategoria
   (~60–80 tuotetta).
4. **Muistutusmaili:** "Milloin olet Lapissa?" -widget V1:ssä (kerää sähköposti +
   matkapäivät Supabaseen); itse ajastettu maili on V2.
5. **Superfoodit ja terveystuotteet mukaan** omana kategorianaan (Vesan lisäys
   kesken suunnittelun).
6. **Lähestymistapa:** laajennetaan nykyistä live-sivustoa (vaalea variantti,
   i18n-infra ja SEO-historia säilyvät). Ei uutta projektia, ei forkkeja.

## 3. Kategoriat (7)

| # | Kategoria | Reitti | Esimerkkejä |
|---|---|---|---|
| 1 | Suomalainen design | `/design` | Marimekko, Iittala, Arabia, Aarikka, Kalevala, Fiskars |
| 2 | Vaatteet & asusteet | `/clothing` | villasukat, myssyt, Reima, Halti |
| 3 | Lapin käsityöt | `/handicrafts` | puukot (Marttiini, LAURI), kuksat, saamelaistuotteet (vain Duodji-auktorisoidut) |
| 4 | Herkut | `/treats` | lakkahillo, Fazer, salmiakki, marjat, poron/hirven kuivaliha (Riipisen Kuivaliha, Kuivalihakundi) |
| 5 | Superfoodit & hyvinvointi | `/superfoods` | mustikka-/puolukkajauheet, pakuri/chaga, tyrni, koivunmahla, luonnonkosmetiikka |
| 6 | LaplandVibes-merch | `/merch` | paidat, hupparit, lippikset, tuubihuivit, pipot, mukit, tarrat |
| 7 | Elämyslahjat | `/experiences` | revontulisafarit, husky-ajelut, moottorikelkkaretket lahjaksi (GYG) |

## 4. Sivurakenne ja reitit

- **Etusivu `/`** — hero, 7 kategorianostoa kuvineen, poimitut tuotteet
  (featured ~8 kpl eri kategorioista), "Milloin olet Lapissa?" -widget,
  uutiskirje, FAQ. Nykyiset osiot (ValueProp, ShippingInfo, GiftGuide,
  RelatedSites) sulautetaan uuteen rakenteeseen.
- **Kategoriasivut ×7** — kategorian hero + esittelyteksti, tuotekorttigrid
  (kuva, brändi, nimi, "alk. X €", kumppanibadge), kategoriakohtainen
  toimitushuomio, ristiinlinkit sisarkategorioihin.
- **Tuotesivut `/product/{slug}`** — kuvagalleria, brändin tarina, kuvaus,
  hinta ("alk. X €"), toimitustiedot (mihin maihin kumppani toimittaa),
  iso "Osta [kumppani]lta" -CTA + selite "Osto tapahtuu kumppanin
  verkkokaupassa". Related products -rivi.
- **Lahjaoppaat `/gift-guides`** — nykyinen GiftGuide laajennettuna omaksi
  sivuksi: tilaisuuskohtaiset listat (joululahjat, tuliaiset kollegoille,
  lapsille jne.) joissa OIKEAT tuotelinkit katalogiin (korjaa samalla
  muistiin kirjatun Rule 5 -liputuksen: pelkkää tekstiä ilman linkkejä).
- **Toimitustiedot `/shipping`** — kumppanikohtainen kv-toimitustaulukko.
- Legal-sivut ennallaan (shared/Legal).
- **Reittigenerointi:** nykyinen käsin monistettu 12×5-reittilista App.tsx:ssä
  korvataan ohjelmallisella generoinnilla (`LANG_PREFIXES.map(...)`) — uusia
  sivuja tulee ~90+ reittiä/kieli-yhdistelmää, käsin monistus ei skaalaudu.
- Breadcrumb-labelMap täytetään (BreadcrumbShell on jo valmiina ja syttyy
  automaattisesti kun sisältöreittejä tulee).

## 5. Tuotedatan malli

Uusi `src/data/products.ts` (+ `partners.ts`):

```ts
type Partner = {
  id: string              // 'finnishdesignshop', 'gyg', 'pod', ...
  name: string
  baseUrl: string
  network: 'adtraction' | 'awin' | 'daisycon' | 'circlewise' | 'inhouse'
         | 'gyg' | 'pod' | 'direct'
  shipsTo: string[]       // ISO-maakoodit tai 'worldwide'/'eu'
  affiliateTemplate?: string  // trackinglinkki tai go.laplandvibes.com-polku
}

type Product = {
  slug: string
  category: CategoryId    // 7 kategoriaa
  brand: string
  name: Record<'en'|'fi', string>          // muut kielet en-fallback
  description: Record<'en'|'fi', string>
  priceFrom: number       // kumppanin sivulta poimittu, "alk."
  currency: 'EUR' | 'GBP' | 'USD'   // kumppanin myyntivaluutta
  priceCheckedAt: string  // ISO-pvm jolloin hinta verifioitu
  images: string[]        // /img/products/{slug}-N.avif
  partnerId: string
  partnerProductUrl: string  // syvälinkki kumppanin tuotesivulle
  featured?: boolean
  badges?: ('bestseller'|'sami-authorized'|'eco'|'made-in-lapland')[]
}
```

- Elämyslahjat käyttävät olemassa olevaa `shared/gyg/picks.ts`-katalogia
  (839 tuotetta, valinnat picks-tiedostossa) — EI duplikoida dataa, vaan
  experiences-kategorian kortit generoituvat picksien Gifts-korista.
  Lokaatiotarkkuussääntö voimassa (Ruka=Kuusamo ei ole Lappia; GYG-CTA aina
  kohteen oma lokaatio, väärä GYG-ID ei 404:ää — verifioi jokainen ID selaimella).

## 6. Kumppanit ja affiliate-säännöt

Kumppaniselvitys 31.7.2026: web-tutkimus + **Adtraction-paneelisession
verifiointi 31.7.** (komissiot luettu paneelista, hakemukset lähetetty):

**Adtraction — hyväksytyt (trackinglinkit valmiina):**

| Kumppani | Kategoria | Komissio | Huomiot |
|---|---|---|---|
| **Makia** | Vaatteet | 7,70 % | Feed 3015 tuotetta; kv-toimitus worldwide |
| **Halti** | Vaatteet/ulkoilu | 7,70 % | Feed 9010 tuotetta + promokoodi; toimitus vain EU → merkintä |
| **Suunto** | Premium-lahjat (urheilukellot) | 2,5 % | FI-ohjelma approved; myös ES/FR/IT/DE/UK-ohjelmat olemassa |
| **Scandinavian Outdoor** | Ulkoilu, kuksat (Kupilka) | (ennestään) | Käytössä jo kalastussivustoilla |

**Adtraction — hakemus lähetetty 31.7. (odottaa mainostajan hyväksyntää):**

| Kumppani | Kategoria | Komissio | Huomiot |
|---|---|---|---|
| **Nordic Nest FI** | Design (Marimekko, Iittala) | 8,00 % | Feed + AOV 87 €; ohjelmat myös 11 muulle markkinalle |
| **North Outdoor** | Merinoneuleet (Oulu) | 10,00 % | Feed 3328 tuotetta; worldwide DHL |
| **Luhta** | Vaatteet | 7,70 % | Toimitus vain EU → merkintä |
| **Finlayson** | Kodintekstiilit | 7,70 % | Feed; toimitus vain Suomeen (verifioitava) → merkintä |
| **Smartphoto FI** | Kuvatuotteet ("Print Your Trip") | 12 % uusi / 7 % vanha asiakas | Feed 1478; konv. 16,2 % — V5:n kuvakirjaidea toteutuu affiliatena |
| **Elämyslahjat.fi** | Elämyslahjat (FI-yleisö) | 3,85 % | Digitaalinen toimitus = ei toimitusrajaa; täydentää GYG:tä |
| **Ruohonjuuri** | Superfoodit + luonnonkosmetiikka | 5,40 % | Paikkaa luonnonkosmetiikka-aukon (pakuri, marjajauheet, Flow/Frantsila) |

**Adtraction — ei mahdollinen / ei löydy:**
- Reima FI: 10 % mutta **hakua ei voi lähettää** ("Content channels are not
  allowed" meidän kanavatyypille) → Reima US Awinin kautta jää vaihtoehdoksi.
- Ei Adtractionissa: Marimekko, Iittala, Fiskars, Suomikauppa, Fazer, Moomin,
  Varusteleka, Marttiini, Kalevala, Arctic Power Berries.
- Ehdokkaita jatkoon (toimitusalue verifioitava ennen hakua): Lautapelit.fi
  7,7 %, Luontaistukku.fi 10 %, Naturelle.fi 13,2 %, You Name It 10 %,
  Coolstuff 11 %, KahviKaveri 10 %.

**Muut verkostot ja suorat (web-tutkimus):**

| Kumppani | Kategoria | Verkosto | Kv-toimitus | Huomiot |
|---|---|---|---|---|
| **Finnish Design Shop** | Design, puukot, korut | Awin (+FlexOffers US), ~6–8 % | ✅ 180+ maata Suomesta | Paras yksittäinen kumppani, 170+ brändiä. 🔴 **Awin hylkäsi julkaisijahakemuksen 31.7.** (syy lähes varmasti: sivusto on vielä yksisivuinen) → V1 julkaistaan suorilla UTM-linkeillä, **Awin-uusintahaku kun V1 on livenä**; FlexOffers (FDS US) varareittinä |
| **Suomikauppa.fi** | Herkut (Fazer, salmiakki, Moomin) | Daisycon 7 % | ✅ Worldwide (DHL/FedEx, myös US) | Herkkukategorian ratkaisu — Daisycon-tili avattavana |
| **Marttiini** | Puukot | Oma ohjelma (Circlewise) 7 % | ✅ Worldwide | Rovaniemeläinen — täydellinen Lappi-tarina |
| **Four Sigmatic** | Superfoodit | Oma ohjelma 10 % | ✅ Virosta lähes kaikkialle + US-kauppa | Haetaan suoraan |
| **Arctic Power Berries** | Superfoodit (marjajauheet) | Oma ohjelma 5 % | ✅ Worldwide (UK:sta) | Lappilainen brändi, logistiikka UK |
| **Moomin Shop** | Lahjat/design | suora linkki + UTM | ✅ Worldwide DHL Express | Ei ohjelmaa |
| **Varusteleka** | Puukot, retkeily | suora yhteydenotto | ✅ Worldwide | Kumppanuus neuvoteltavissa |
| **Duodji Shop** | Saamelaiset käsityöt | suora linkki + UTM | EU/US (verifioitava toteutuksessa) | Ainoa auktorisoitu lähde saamelaistuotteille |
| **Kuivalihakundi** | Kuivalihat (poro-jerky) | suora yhteydenotto | ✅ EU (ilmainen >99 €); "worldwide"-väite, maalista kassalla | Ainoa kv-toimittava kuivalihakauppa; Tuusula → copy "100 % suomalainen poro", EI "lappilainen yritys" |
| **Riipisen Riistaherkut** | Kuivalihat | suora yhteydenotto | ❌ vain Suomi | Kuusamo — EI saa esittää lappilaisena (Ruka/Kuusamo-sääntö); "osta paikan päältä" -kulma (Ruka, Tripla, S/K-kaupat) |
| **Tenon Luonnontuote / Deliporo** | Kuivalihat (aito Lappi: Nuorgam/Ivalo) | suora yhteydenotto | ❌ vain Suomi | Aidoin Lappi-tarina; "vain Suomeen" -merkintä |

**Monimarkkinahuomio:** Adtraction-ohjelmat ovat markkinakohtaisia (Nordic
Nest ×12, Suunto ×6, Smartphoto ×4 markkinaa). V1 käyttää FI-ohjelmien
linkkejä; toteutusvaiheessa haetaan lisämarkkinaohjelmiin sivuston
pääkielten mukaan (de, en/UK, fr, es, it, nl, sv, kr) ja tuotedataan
lisätään per-kieli-partner-URL, jotta saksalainen ostaja päätyy .de-kauppaan
oikealla trackinglinkillä. Julkaisu ei odota näitä.

**Lihatuotteiden vientirajoitukset** (kuivalihojen tuotesivuille ja
/shipping-sivulle — verifioitu viranomaislähteistä 31.7.): EU-sisämarkkina ✅
sallittu; Norja ⚠️ sallittu mutta tulli+alv; UK ❌ (4/2025 alkaen hirvieläinliha
ml. poro kielletty henkilötuonnissa, kaupallinen vaatii EHC:n); USA ❌
postimyynti (mutta matkustaja saa tuoda mukanaan dokumentein — "osta
paikan päältä" -CTA); Japani ❌. Kuivalihojen "tilaa kotiin" -lupaus
annetaan vain EU-asiakkaille.

**Toimitusrajatut kumppanit (Vesa 31.7.: mukaan rajauksella, ei pois):**
Halti ja Luhta (molemmat Adtraction FI, toimitus vain EU) otetaan mukaan
näkyvällä **"Toimitus vain Eurooppaan"** -merkinnällä tuotekorteissa ja
tuotesivuilla. Finlayson (Adtraction FI) toimitti selvityshetkellä vain
Manner-Suomeen — verifioidaan toteutuksessa; jos FI-only pitää paikkansa,
merkintä "Toimitus vain Suomeen" ja nosto Vesalle ennen tuotteiden lisäystä.
Tätä varten kategoriasivuille tulee **toimitusmaasuodatin**: käyttäjä
valitsee kotimaansa ja näkee vain sinne toimitettavat tuotteet (data:
`Partner.shipsTo`). Kuivalihat (Riipisen Kuivaliha, Kuivalihakundi — kaupat
ja mahd. ohjelmat selvityksessä): huom. lihatuotteiden vienti EU:n
ulkopuolelle on laajalti rajoitettua (esim. US kieltää lihatuotteiden
postituonnin) → kuivalihatuotteet saavat todennäköisesti EU-only-merkinnän;
rajoitteet kirjataan rehellisesti tuotesivulle.

**Muut rajaukset:** Lumene on CJ-verkostossa → ristiriita CJ-exit-linjauksen
(23.7.) kanssa, jätetään pois ilman erillistä päätöstä. Luonnonkosmetiikka
jää heikoimmin katetuksi (Flow/Frantsila/Puhdistamo: ei ohjelmia löytynyt) —
V1:ssä superfoods-kategoria kantaa hyvinvointikulman, kosmetiikka
täydennetään kun kumppani löytyy. Kalevala/Aarikka katetaan FDS:n
valikoiman kautta.

**Verkostotilit:** Adtraction (on jo) + uusina Awin, Daisycon, Circlewise
+ 2 in-house-hakua (Four Sigmatic, Arctic Power Berries). Tilien avaus ja
ohjelmiin hakeutuminen = Vesan tehtävä (§13); sivusto voidaan rakentaa ja
julkaista suorilla UTM-linkeillä ja vaihtaa trackinglinkkeihin sitä mukaa
kun hyväksynnät tulevat — julkaisu ei jää odottamaan hakemuksia.

Säännöt (ei-neuvoteltavat, olemassa olevista muisteista):

- Adtraction-ohjelmat ensisijaisia (CJ-exit tehty 23.7.) → komissio +
  viralliset tuotekuvat feedeistä.
- Ei-affiliate-kumppanit: suora linkki + **UTM kaikkiin kumppanilinkkeihin**
  (utm_source=laplandvibes, utm_medium=referral, utm_campaign=gifts_<slug>).
- Kaikissa kumppanilinkeissä `target="_blank" rel="sponsored nofollow noopener"`
  — EI `noreferrer`.
- GYG-linkit go.laplandvibes.com-Workerin kautta (`/go/activities/<slug-lID>?sid=<placement>`),
  SID-konventio: `gifts_<kategoria>_<paikka>` esim. `gifts_experiences_card`.
- GYG Integration Analyzer -skripti on jo `<head>`issä (säilytetään).
- AffiliateDisclosure: footer-only (jaetun Footerin alarivi) — ei inline-versioita.
- Saamelaistuotteet: VAIN Duodji Shop -auktorisoidut, tuotesivuille opettava
  kulttuurikonteksti, ei imitaatioita.

## 7. Oma merch + POD

**Palveluvalinta: Fourthwall** (selvitys 31.7.2026, kakkosvaihtoehto Spreadshop):

- Ainoa palvelu joka täyttää kaikki neljä kriteeriä: (1) hostattu kauppa ilman
  omaa kassaa — Fourthwall on merchant of record ja hoitaa maksut, verot ja
  fulfillmentin; (2) koko tuotelista varmistettu valikoimassa: t-paidat (alk.
  ~$9.50), hupparit, lippikset ($15.65), pipot ($13.79), mukit ($5.95) ja
  **tuubihuivi (All-Over Print Neck Gaiter $9.95, toimitus EU:sta ja US:sta)**;
  (3) kv-toimitus hajautetulla tuotannolla (US/UK/EU/CA/MX/AU/JP) — yksi
  kauppa palvelee kaikkia turisteja; (4) brändättävin: oma alidomain (esim.
  `shop.laplandvibes.com`) ilmaistasolla, myyjän brändi kassalla, 0 %
  alustapalkkio fyysisistä katalogituotteista (maksunvälitys ~2.9 % + $0.30).
- Karsitut: **Gelato** (ei hostattua kauppaa lainkaan, vain integraatiot/API),
  **Printful Quick Stores** (vain US-myyjille ja US-ostajille), **Teemill**
  (ei tuubihuiveja eikä mukeja, vain UK-tuotanto → EU-tulliriski).
- **Spreadshop** varalla jos Fourthwall kaatuu rekisteröinnissä: aidosti
  ilmainen ja vahvin EU-tuotanto (PL/CZ), mutta NA- ja EU-alustat ovat
  erilliset tilit (tarvitaan kaksi linkitettyä shoppia) ja kassan brändäys
  + gaiterin saatavuus shoppiin varmistamatta.
- Ennen sitoutumista varmistettava rekisteröityessä (jää Vesalle tilin avauksen
  yhteyteen): suomalaisen myyjän Stripe Connect -payout, kv-korttien
  maksunvälityspalkkion taso, EU-toimitusajat per tuote.

Olemassa oleva design-pohja (Drive: "LaplandVibes — Painopaketti (tarrat + merch)",
kansio-ID `1En3H4vciES8Br2FQrZpVSK5hoUJJt_Em`):

- Logot: `laplandvibes-logo-horizontal-dark.svg` / `-light.svg` / `-mono.svg`
  (+ painovalmiit-outlined-kansio)
- Painobrief: PAINOTALO-BRIEF-LAPLANDVIBES — Pantone/CMYK-arvot (Vibe Pink
  806C/213C, Deep Night 5395C, Finland Blue 288C), suoja-alueet, minimikoot,
  tuotekohtaiset ohjeet (mukit, paidat, lippikset, brodeeraus min 40 mm)
- Tarrakonseptit A (#-kolikko Ø60), B (kontuurileikattu), C (badge Ø75)
- `merch-sijoittelu.svg` — painatusten sijoittelu tuotteille

V1-merchtuotteet (painobriefin pääparilla: Deep Night -pohja + Vibe Pink +
Snow): t-paita, huppari, lippis, tuubihuivi, pipo, muki + tarra-arkki.
Tuotekuvat POD-palvelun mockup-generaattorista tai Picsartilla briefin
sijoitteluohjeen mukaan.

**Vesa tekee:** POD-tilin avaus + maksutiedot; lopullinen design-hyväksyntä
ennen kaupan julkaisua.

## 8. "Milloin olet Lapissa?" -widget (V1) + muistutusmaili (V2)

- Lomake etusivulla (+ kevyt versio tuotesivujen alla): sähköposti +
  saapumispäivä + lähtöpäivä + GDPR-suostumus.
- Uusi Supabase-taulu `gift_trip_reminders` (email, arrival_date,
  departure_date, lang, consented_at, source) — RLS päälle JA testaa
  anon-avaimella REST-apia (opittu 30.7.: RLS voi olla päällä mutta näkymä
  vuotaa — testaa oikealla avaimella oikeaa rajapintaa).
- `https://laplandgifts.com` lisätään Supabase-funktioiden CORS-allowlistiin
  osana toteutusta (opittu: CORS-katko oli hiljainen 23 pv).
- Double opt-in -vahvistus olemassa olevan welcome-email-putken tapaan;
  unsubscribe-sivu on jo olemassa.
- V2 (oma projekti): ajastin joka lähettää tuliaissuosituksen
  `departure_date - 2 pv`, mailipohja, kielikohtaisuus, GA-seuranta.

## 9. Kuvat

- Adtraction-feedien/kumppanien viralliset tuotekuvat missä ohjelma sen
  sallii (feed-kuvat = lisensoitu käyttö julkaisijalle).
- Muille tuotteille EI väärennettyjä "tuotekuvia": Picsart-generoidut
  tunnelmakuvat (kategoria-herot, lifestyle-kontekstit) + selkeä linkki
  kumppanin sivulle jossa oikeat kuvat. Picsart on ensisijainen työkalu
  (muistisääntö; lue `_shared/picsart_image_gen.md` ennen generointia).
- Merch: POD-mockupit omista designeista (aidot).
- Ei Unsplashia, ei stock-kuvia, ei samaa kuvaa kahdella sivustolla.
- AVIF + `<picture>`-fallback nykyisen sivustokäytännön mukaan.

## 10. i18n-linjaus

- UI-krominen copy (nav, napit, osiotsikot, widget, toimitussivu): kaikki
  12 kieltä natiivisti (nykyinen copy.{lang}.ts-rakenne).
- Tuotenimet ja -kuvaukset: **fi + en natiivisti V1:ssä**, muut 10 kieltä
  en-fallbackilla (sama hyväksytty malli kuin nykyinen "enFallback =
  brand/product names"). Täyskäännös V2:ssa jos kauppa vetää.
- Suomen kielioppisäännöt: appositio ei taivu postposition jälkeen
  (`finnish_voice_rule.md`); ei em-viivoja näkyvässä copyssa (Vesan pysyvä
  sääntö: em-viiva = AI-tell).

## 11. Rehellisyys- ja laatuportit

- Ei keksittyjä hintoja: jokainen `priceFrom` poimitaan kumppanin sivulta ja
  `priceCheckedAt` kirjataan; sivulla "alk."-etuliite + disclaimeri
  "hinta kumppanin sivulla [pvm], voi muuttua".
- Jokainen kumppanilinkki verifioidaan: **HTTP 200 + oikea title + rivi
  bodyä** (pelkkä statuskoodi ei riitä — pysyvä muistisääntö).
- Jokainen GYG-ID verifioidaan renderöidystä sisällöstä (väärä ID ei 404:ää).
- Ei kiellettyjä adjektiiveja (stunning/breathtaking/world-class), ei
  keksittyjä tilastoja, ei filler-copyä.
- Superlatiivit vain mitattavina väitteinä lähteineen.

## 12. Tekninen toteutus, SEO ja deploy

- Stack ennallaan: React 19, RR7, Tailwind v4, Vite 8, TypeScript, Lucide.
  Ei animaatiokirjastoja. Vaalea amber-variantti säilyy (hyväksytty
  visit-precedentillä 25.7.); Finland-blue säilyy Footer+CookieBannerissa.
- Shared-komponentit ennallaan (Footer, CookieBanner, Legal, Breadcrumbs);
  vite dedupe + Tailwind `@source` on jo kunnossa (varmistetaan buildissa).
- Prerender: uudet reitit prerender-putkeen — **molemmat metalähteet**
  päivitetään (routes + `prerender-meta.mjs`; opittu 28.7.: kaksi lähdettä).
  Kuorimittari: `find dist -name index.html | wc -l` on oltava ≈ reittimäärä
  (1 = prerender-kuori jäi päälle, opittu 30.7.).
- Sitemap ×12 kieltä kaikille uusille reiteille + hreflangit (nykyinen
  Hreflang-komponentti kattaa uudet reitit).
- OG-kuvat: etusivu + 7 kategoriasivua (og_card_recipe-muistin resepti).
- JSON-LD: Product-schema tuotesivuille (offers → kumppanin URL, EI omaa
  checkoutia → `offers.url` = kumppanilinkki), BreadcrumbList, ItemList
  kategorioille.
- Deploy AINA wranglerilla: `npx wrangler pages deploy dist
  --project-name=laplandgifts --branch=main` (CI rikki; ilman
  `--branch=main` deploy menee Preview'hun eikä apex päivity).
- Buildataan eristetysti jos monorepon puu on likainen muiden sessioiden
  WIP:istä (`isolated_deploy_from_shared_dirty_tree.md` — EI koske hubia,
  mutta gifts-hakemistoon pätee normaalisti).
- Verifiointi: CDP-mobiilikaappaukset 375+768 (`mobile-shot.mjs`),
  renderöity DOM (ei chunk-hash), affiliate-linkkien attribuutit DOM:sta.
- End-of-task: `laplandgifts.md`-muisti, CC-detaljisivu + SITES-rivi,
  CONTEXT-PACK.md, `node check_memory_index.mjs`.

## 13. Vesalle jäävät tehtävät

1. ~~Adtraction-haut~~ **TEHTY 31.7.** (agentti paneelisessiossa): hakemukset
   lähetetty Nordic Nest FI, North Outdoor, Luhta, Finlayson, Smartphoto,
   Elämyslahjat.fi, Ruohonjuuri; Makia+Halti+Suunto olivat jo approved.
2. Uudet julkaisijatilit (tilanne 31.7.): **Awin luotu mutta hakemus
   HYLÄTTY** (yksisivuinen sivusto) → uusintahaku V1-julkaisun jälkeen.
   **Daisycon** kesken — viimeistele + haku Suomikauppa-ohjelmaan. Lisäksi
   Circlewise (Marttiini) + in-house-haut Four Sigmatic ja Arctic Power
   Berries.
3. Fourthwall-tilin avaus + maksutiedot (Stripe Connect -payout Suomeen
   varmistettava rekisteröityessä; varalla Spreadshop).
4. Merch-designien ja POD-kaupan lopullinen hyväksyntä ennen julkaisua.
5. Kirjallisen speksin katselmus (tämä dokumentti).

## 14. V2-backlog (EI tässä projektissa)

- Ajastettu tuliaismuistutusmaili (departure_date - 2 pv) + mailipohja.
- Tuotekuvausten täyskäännös 10 lisäkielelle.
- "Lapland Trip Box" -lahjaboksit ja "Print Your Trip" -kuvakirjat
  (huhtikuun konseptimuistin V5).
- Oma kassa (Stripe + POD-API) jos volyymi perustelee.
- Widgetin levitys muille verkoston sivustoille.
