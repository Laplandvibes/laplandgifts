# Putiikkihakemisto: laplandstore.fi sulautuu laplandgifts.comiin

**Päivä:** 2026-08-07
**Tila:** hyväksytty (Vesa 2026-08-07)
**Koskee:** `laplandgifts/` (uusi `/boutiques`-osio) + `laplandstore-new/` (kevennys ja tyylin yhtenäistys)

---

## 1. Ongelma

laplandstore.fi ja laplandgifts.com myyvät samaa tavaraa. Neljä kuudesta storen
tuotekategoriasta on suoraan giftsin kategorioita, ja Marttiini sekä Pentik esiintyvät
molemmilla. Store on käytännössä giftsin heikompi versio: samat tuotteet, ei ostonappia,
ei komissiota.

Mitattu tilanne 2026-08-07:

| | laplandgifts.com | laplandstore.fi |
|---|---|---|
| Rakenne | 7 kategoriaa, ~82 tuotetta, 1 176 sitemap-URLia | 1 sivu, 48 sitemap-URLia |
| Ansainta | Adtraction-komissio Workerin kautta | Pelkkä UTM, nolla komissiota |
| Mainospaikat | Käytössä | Kaikki tyhjiä (`sponsors: [null, null]`) |
| GSC 7/2026 | ei raportoinut | **113 klikkiä / 1,96K näyttöä / CTR 5,8 %** |

Storen 15 putiikista **13 ei ole missään affiliate-verkossa** eikä tule olemaan. Ne ovat
pieniä lappilaisia yrityksiä. Kaksi jotka ovat giftsissä (Marttiini, Pentik) ovat siellä
`network: 'direct'`, eli myös ilman komissiota. **Putiikkihakemisto ei voi tuottaa
affiliate-komissiota.** Sen tuote on näkyvyys, ja sen asiakas on putiikki, ei turisti.

## 2. Päätös

Hakemistosisältö siirtyy giftsiin. laplandstore.fi jää elossa ohuena suomipainotteisena
porttina.

Vaihtoehto "täysi 301" hylättiin, koska storen CTR 5,8 % on verkoston toiseksi paras ja
sen hakuaikomus ("lapin putiikit", "matkamuistot Rovaniemi") on eri kuin giftsin
("finnish gifts online"). 301 ei-vastaavalle sivulle valuttaisi ne sijoitukset. Lisäksi
`.fi` on geosignaali Suomen haussa, jota `laplandgifts.com` ei saa.

**Jäsennysperiaate on paikkakunta, ei tuoteryhmä.** Tuoteryhmä olisi giftsin taksonomian
kopio. Paikkakunta vastaa siihen mihin gifts ei pysty: missä tavaran saa käteen.

## 3. Kaksi asiakasta, kaksi lupausta

| | laplandgifts.com kauppa | /boutiques hakemisto |
|---|---|---|
| Kuluttajalle | Osta tämä, toimitetaan kotiin | Kun olet Lapissa, mene tänne |
| Yritykselle | Affiliate-kumppani, komissio | Mainostaja, kumppanimaksu |
| Hakusana | finnish gifts online | lapin putiikit, matkamuistot Rovaniemi |
| Yksikkö | Tuote | Putiikki |

Nollapäällekkäisyys tuotteissa, koska hakemisto ei myy tuotetta.

`/boutiques` ansaitsee paikkansa kaupan sisällä syöttämällä kauppaan: jokainen
putiikkisivu linkittää giftsin vastaavaan tuotekategoriaan.

## 4. Datan nykytila (mitattu, ei arvattu)

15 putiikkia, joista 9 pitää verkkokauppaa.

| # | Putiikki | Sijainti | Verkkokauppa |
|---|---|---|---|
| 1 | Lauri Handicrafts | Rovaniemi | kyllä |
| 2 | Marttiini | Rovaniemi | kyllä |
| 3 | Pentik | Posio | kyllä |
| 4 | Duodji Shop | Inari (Sajos) | kyllä |
| 5 | Samekki, Sámi Duodji | Inari | kyllä |
| 6 | Piece of Lapland | Rovaniemi | kyllä |
| 7 | Rovaniemi Souvenirs Shop | Joulupukin Pajakylä | kyllä |
| 8 | Taigakoru | Oulu | kyllä |
| 9 | Lapin Kelloseppä | Rovaniemi | kyllä |
| 10 | Arctic Design Shop | Rovaniemi | ei |
| 11 | Christmas House Shop | Joulupukin Pajakylä | ei |
| 12 | Korundi Shop | Rovaniemi | ei |
| 13 | SHOPPI Craft & Design | Levi | ei |
| 14 | Siida Shop | Inari (Saamelaismuseo) | ei |
| 15 | Tankavaaran Kultakylä | Tankavaara (Sodankylä) | ei |

Paikkakuntajakauma: Rovaniemi 8 (Joulupukin Pajakylä mukaan luettuna), Inari 3,
Posio 1, Levi 1, Sodankylä 1, Oulu 1.

## 5. Korjattavat rehellisyysvirheet

Nämä korjataan riippumatta muusta. Ne ovat valelukuja ja katteettomia väitteitä, mikä
rikkoo brändin kovaa sääntöä.

1. **Väärä lukumäärä.** `Hero.copy.*.ts` badge sanoo "16 verifioitua putiikkia" ja
   `ArtisanStory` sanoo "16 putiikkia, kaikki kivijalassa". Putiikkeja on 15. Kaksi
   paikkaa × 12 kieltä. Korjataan 15:ksi, tai paremmin: luku luetaan `shops.length`:sta
   niin ettei se voi enää eriytyä datasta.
2. **Taigakoru on Oulussa.** `LocalShops` lupaa "Mukaan pääsee vain lappilaisia
   yrityksiä", ja `WhyBuyFromUs` toistaa saman. Oulu ei ole Lappia, sama sääntö kuin
   Ruka ja Kuusamo. **Ratkaisu:** Taigakoru poistetaan hakemistosta. Sen jälkeen
   putiikkeja on 14, joista 8 verkkokauppaa, ja lupaus pitää paikkansa. Vaihtoehto
   (lupauksen muotoilu uusiksi) hylättiin, koska "vain lappilaisia" on hakemiston koko
   myyntiargumentti.
3. **Aukioloaikoja ei lisätä.** 14 kaupan aukiolot vanhenevat, eikä niille ole
   ylläpitoprosessia. Väärä aukioloaika on huonompi kuin ei aukioloaikaa. Osoite ja
   paikkakunta riittävät.

Korjausten jälkeen kaikki luvut sivustolla: **14 putiikkia, 8 verkkokauppaa.**

## 6. A: laplandgifts.com/boutiques

### Reitit

```
/boutiques                 hub: kaikki 14, suodattimet
                           (paikkakunta · tuoteryhmä · verkkokauppa/kivijalka)
/boutiques/rovaniemi       8 putiikkia
/boutiques/inari           3 putiikkia, duodji-painotus
/boutiques/<putiikki>      14 putiikkisivua
```

**Polku on englanniksi eikä lokalisoidu.** Se on giftsin mitattu nykykäytäntö:
sitemapissa `/treats/`, `/superfoods/`, `/shipping/` ja `/product/<slug>` esiintyvät
samalla englanninkielisellä slugilla kaikilla 12 kielellä, pelkkä kieliprefiksi vaihtuu.
`/putiikit` jäisi ainoaksi suomenkieliseksi poluksi koko sivustolla.

Kaikki 12 kielellä, giftsin nykyisen `LANG_PREFIX`-käytännön mukaisesti.
Reitit generoidaan datasta `src/routes.tsx`:n olemassa olevalla kuviolla, ei käsin
monistamalla.

### Paikkakuntasivun kynnys

Paikkakuntasivu syntyy vasta kun paikkakunnalla on **vähintään 3 putiikkia**. Nyt
kynnyksen ylittävät Rovaniemi (8) ja Inari (3). Posio, Levi ja Sodankylä jäävät hubin
"muualla Lapissa" -osioon.

Peruste: yhden putiikin paikkakuntasivu on ohut sisältö, ja Google kohtelee sitä sen
mukaisesti. Kynnys on datavetoinen, joten sivu ilmestyy itsestään kun yrittäjäkampanja
tuo lisää putiikkeja.

### Putiikkisivun sisältö

Yksi sivu per putiikki, 12 kielellä:

- Nimi, paikkakunta, osoite
- Mitä tekevät: materiaalit, perinne, vuosiluku jos tiedossa
- Verkkokauppa vai kivijalka vai molemmat
- **Ulos:** linkki omille sivuille UTM:llä
  `?utm_source=laplandvibes&utm_medium=referral&utm_campaign=store_<slug>`
  (nykyinen `utmLink()`-standardi säilyy)
- **Sisään:** linkki giftsin vastaavaan tuotekategoriaan. Duodji Shop → käsityöt,
  Pentik → design, Christmas House → herkut. Tämä on se mekanismi jolla hakemisto
  ansaitsee paikkansa kaupassa.

Ei aukioloaikoja. Ei karttaa v1:ssä.

### Duodji-aitousosio (Inari)

`/boutiques/inari` saa oman osion siitä, mikä on auktorisoitu duodji ja miten sen
erottaa matkamuistoimitaatiosta.

Peruste: verkoston oma sääntö saamelaistuotteista sanoo "myy vain auktorisoitujen
myyjien kautta, ei koskaan imitaatioita, opettavaa sisältöä saamelaiskulttuurista".
Tämä on samalla koko hakemiston vahvin E-E-A-T-signaali, ja se on aitoa asiantuntemusta
jota kilpailijoilla ei ole.

Kaikki kolme inarilaista (Duodji Shop, Samekki, Siida Shop) ovat auktorisoituja
lähteitä, joten osio ei nolaa yhtäkään listattua putiikkia.

## 7. B: laplandstore.fi kevennys

### Tyyli

Playfair Display poistuu, Bebas Neue tilalle. Sama liike kuin laplandstays 23.7. ja
laplandchristmas 24.7.

```
--font-heading: 'Playfair Display', serif   ->   'Bebas Neue', 'Arial Narrow', sans-serif
--font-body:    'DM Sans', sans-serif            (ennallaan)
--font-logo:    'Bebas Neue', ...                (ennallaan)
--color-cream:  #FFFBF5                          (ennallaan)
--color-amber:  #D97706                          (ennallaan)
```

Playfair-@import poistetaan `index.css`:n riviltä 1, jolloin ensikäynti kevenee.

Peruste: CLAUDE.md:n varianttilista ei tunne laplandstorea lainkaan, eli Playfair on
ajautumista eikä hyväksytty poikkeus. Cream-pinta saa jäädä stays-precedentillä.

🔴 Varo `@layer base`in kaskadibugia: kerrokseton `h1..h6 { font-family }` voittaa
jokaisen Tailwind-luokan, koska utilityt asuvat `@layer utilities`issa. Pohjatyylit
pysyvät `@layer base`issa (giftsin 1.8. opetus).

### Mitä poistuu

- `Categories.tsx` (6 tuotekategoriaa) ja sen 12 kielen copy
- `FeaturedProducts.tsx` (4 tuotenostoa) ja sen 12 kielen copy

Nämä ovat giftsin tavaraa ja koko päällekkäisyyden syy.

### Mitä jää

Hero, `WhyBuyFromUs`, `ArtisanStory`, `LocalShops` (kevennettynä), `GiftsHubBanner`,
`FAQ`, `RelatedSites`, `Newsletter`, `AppPromoHero`, mainospaikat.

Mainoskortit **Kulta-Center, IVALO ja Scandinavian Outdoor jäävät**. Ne on merkitty
MAINOS-tunnisteella, ne tuottavat komissiota, eivätkä ne ole katalogi vaan mainospaikka.
Se on linjassa sen kanssa että store myy näkyvyyttä.

### Duplikaattisisällön ratkaisu

Store **ei toista giftsin tekstejä**.

- Store: 14 putiikkia lyhyinä kortteina, **nimi + paikkakunta + verkkokauppa/kivijalka**,
  ei kuvauksia. Oma suomipainotteinen copy joka vastaa kysymykseen "mistä ostan Lapin
  tuotteet". Self-canonical säilyy.
- Gifts: kuvaukset, suodattimet, paikkakuntasivut, putiikkisivut.

Eri syvyys tarkoittaa eri sivua. Storen oma canonical säilyy, ja 113 klikkiä sen mukana.

Jokainen storen putiikkikortti linkittää `laplandgifts.com/boutiques/<putiikki>`-sivulle,
ei enää suoraan putiikin omille sivuille. Uloslinkitys tapahtuu giftsissä, jossa se on
mitattavissa yhtenä paikkana.

Storen oma ankkuri `#putiikit` säilyy, koska se on jo linkitetty ja se on
suomenkielisellä sivulla oikea sana.

## 8. Ansainta: ei uutta hinnastoa

Käytetään olemassa olevaa SKU:ta. `KAMPANJA-10-YRITTAJAA.md` sanoo tämän suoraan:
"olemassa oleva SKU, ei uutta hinnastoa".

| Taso | Sisältö | Hinta |
|---|---|---|
| Ilmainen listaus | Kortti hakemistossa + putiikkisivu + linkki omille sivuille | 0 € |
| "Koko vuosi" -kumppanipaketti | Esittelyartikkeli hubin blogiin 12 kielellä + mainospaikka | nykyinen SKU |
| Kampanja 10 yrittäjää | Kausi 1.11.2026–31.10.2027 | 0 € |

Storen nykyinen pelkkä `mailto:`-CTA ("Omistatko lappilaisen kaupan?") korvataan
kampanjan kutsulla. Nämä 14 putiikkia ovat täsmälleen kampanjan kohdeyleisö: pieniä
lappilaisia yrityksiä joilla on heikko näkyvyys.

🔴 Kumppanimainos näkyy **kaikilla 12 kielellä**, ei fi/en/sv. Kolmen kielen rajaus
koskee vain talon omaa house-adia. `AdUnit` fallbackaa `copy.en`:ään, joten kolmen kielen
kortti näyttäisi englantia /de- ja /ja-lokaaleilla.

🔴 Ei luvata mitään mitä ei ole. Vertaa laplandworkin virheeseen, jossa myytiin
uutiskirjettä jota ei lähetetty. Jokainen taso kuvaa sitä mitä oikeasti toimitetaan.

## 9. Rajattu ulos v1:stä

- Aukioloajat ja kartat
- Oma kassa tai maksaminen
- Uudet tuotekategoriat storeen
- Uudet AI-kuvat. Cream-pinta säilyy, joten 28 nykyistä kuvaa kelpaavat sellaisenaan.
- Paikkakuntasivut alle 3 putiikin paikkakunnille
- Storen 301-ohjaus. Domain jää elämään.

## 10. Testit ja portit

Giftsin nykyinen testikanta laajenee. Uudet vahdit:

| Vahti | Mitä estää |
|---|---|
| Putiikkien lukumäärä luetaan datasta, ei kovakoodata copyyn | Herobadgen "16 vs 15" -virheen paluu |
| Jokaisella putiikilla on paikkakunta, ja paikkakunta on Lapissa | Toinen Taigakoru |
| Jokaisella putiikilla on kuvaus kaikilla 12 kielellä | Puolikas lokaali |
| Paikkakuntasivu generoituu vain kun putiikkeja >= 3 | Ohut sisältö |
| Jokainen putiikkisivu linkittää yhteen giftsin kategoriaan | Irrallinen osio kaupassa |
| Uloslinkeissä UTM-standardi, ei raakoja URLeja | Attribuution katoaminen |
| Storen ja giftsin putiikkicopy eivät ole identtisiä | Duplikaattisisältö |

Verifiointi selaimella, ei curlilla: kumpikaan sivusto ei palvelinrenderöi sisältöä.
Deployn jälkeen odotetaan propagointi ennen apexin avaamista
(`cf_pages_asset_cache_poisoning` -järjestys).

## 11. Toteutusjärjestys

Työ tehdään kahdessa vaiheessa, koska repot ovat erilliset ja giftsin osuus on selvästi
suurempi. Kumpikin vaihe on itsenäisesti julkaisukelpoinen.

1. **Gifts `/boutiques`.** Data, reitit, hub, kaksi paikkakuntasivua, 14 putiikkisivua,
   duodji-osio, testit. Julkaistaan ensin, koska storen kevennys olettaa että
   kohdesivut ovat olemassa.
2. **Store kevennys.** Bebas, `Categories` ja `FeaturedProducts` pois, putiikkikortit
   linkittämään giftsiin, lukukorjaukset, kampanja-CTA.

Rehellisyyskorjaukset (luku 5) kulkevat molemmissa vaiheissa mukana, koska sama data
elää molemmissa.

## 12. Ratkaistut kysymykset

- **Taigakorun poisto: vahvistettu (Vesa 2026-08-07).** Yksikään putiikki ei ole
  maksanut listauksestaan. Taigakoru poistetaan, ja lupaus "vain lappilaisia yrityksiä"
  jää voimaan sellaisenaan. Lopulliset luvut: **14 putiikkia, 8 verkkokauppaa.**
- **Ei suojeltavia sopimuksia.** Koska yksikään listaus tai mainospaikka ei ole
  maksettu, luvun 8 ansaintamalli voidaan toteuttaa sellaisenaan ilman siirtymäsääntöjä.
  Kaikki 14 nykyistä putiikkia ovat ilmaisella listaustasolla, ja ne ovat samalla
  yrittäjäkampanjan kohdeyleisö.
