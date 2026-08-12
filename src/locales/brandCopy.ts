import type { Lang } from '../i18n/useLang'

/**
 * Brändiesittelyjen tekstit.
 *
 * 🔴 `profile` on kirjoitettu omin sanoin brändin omalta sivulta luetuista
 * tosiasioista, EI käännetty heidän markkinointitekstistään. Ks. perustelu
 * data/brands.ts:n kommentista.
 *
 * 🔴 Alkuperävaraukset ("vain sukat ja pipot", "suunnittelu Suomessa mutta
 * valmistus useassa maassa") ovat käännöksissä tarkoituksella kömpelöitä
 * silloin kun luonteva muotoilu olisi hävittänyt varauksen. Väärä
 * alkuperäväite on kuluttajansuoja-asia, sujuvuus ei.
 */
export interface BrandCopy {
  eyebrow: string
  founded: (year: string) => string
  officialSite: (name: string) => string
  productsH2: (name: string) => string
  /** Brändihakemiston otsikko, ingressi ja korttien tuotelaskuri. */
  indexH1: string
  indexIntro: string
  indexCount: (n: number) => string
  profile: Record<string, string>
}

export const BRAND_COPY: Record<Lang, BrandCopy> = {
  en: {
    eyebrow: 'Brand',
    founded: (y) => `Founded in ${y}`,
    officialSite: (n) => `${n}'s own site`,
    productsH2: (n) => `${n} in this shop`,
    indexH1: 'Brands we carry',
    indexIntro:
      'Who makes the things in this shop, and where. Every profile is written from what the brand publishes about itself, and links to their own site.',
    indexCount: (n) => `${n} products`,
    profile: {
      'aarikka':
        'Aarikka is a Finnish design house founded in 1954 by Kaija Aarikka and Erkki Ruokonen, known for wooden beads and jewellery, and owned by Martinex Oy since 2017. The brand credits Finland with design and with hand assembly of its wooden jewellery and wooden home products, but it does not present itself as a wholly Finnish-manufactured range. Its clothing carries explicit per-product manufacturing countries outside Finland, and some raw materials are sourced abroad.',
      'foodin':
        'Foodin is a family-owned Finnish organic food company based in Vaajakoski, Jyväskylä, which describes itself as manufacturing rather than only importing. Its raw chocolate line is stone-ground and hand-finished at the company\'s own Vaajakoski plant, with cocoa sourced from Criollo beans grown in the Peruvian Amazon. The same plant is also named as the production site for the company\'s protein bars.',
      'kuivalihakundi':
        'Kuivalihakundi (Dried Buddy Oy) is a Finnish jerky maker that dries, cuts and packs its meat at its own approved meat plant in Jokela, Tuusula, a roughly 1,500 m2 facility it moved into at the end of 2023. The manufacturing location is backed both by the brand\'s own pages and by the municipality\'s official food-establishment decision. The brand\'s own labelling says the beef is raised and slaughtered in the EU, so the raw meat itself is not confirmed to be Finnish.',
      'halti':
        'Halti is a Finnish outdoor brand founded in 1976 by Juhani Hyokyvaara, with design done at its Sipoo headquarters. The brand states on its own site that production is spread across several countries: China, Vietnam and Bangladesh for technical sportswear, plus European suppliers in Italy, Ukraine and Lithuania. By Halti\'s own account, only socks and beanies are made in Finland, so the brand should be described as Finnish-designed rather than Finnish-made.',
      'north-outdoor':
        'North Outdoor is a Finnish merino wool clothing brand operated by Pyka Oy, best known for the knitting mill it opened in the Rusko district of Oulu in 2021, reported by Yle as the largest wool sweater mill in Finland. The brand splits production across several countries and describes the split by product category rather than as a single origin. Its own published description of that split is internally inconsistent in English, so the per-category breakdown should not be repeated as settled fact.',
      'marttiini':
        'Marttiini is a Finnish knife brand that began in 1928, when blacksmith Janne Marttiini opened a puukko workshop in Rovaniemi. The catalogue today runs from hunting and fillet knives to kitchen knives, folding knives and traditional puukkos, with handles in curly birch or reindeer antler and blades carried in leather sheaths. The broad-bladed Lapinleuku and the fillet knives that carried the brand into export markets are its most recognisable shapes.',
      'kupilka':
        'Kupilka is a Finnish outdoor tableware brand run by the family company Plasthill Oy in Kontiolahti, North Karelia. Its cups, plates and cutlery are moulded from a proprietary Kareline natural fibre composite of roughly half Nordic softwood cellulose and half food-grade polyolefins, produced in-house at the Pyytivaara site on certified renewable electricity. The dishware origin is well documented by the brand, but the wider catalogue (knives and fire steels in particular) draws on outside suppliers.',
      'nordicbuddies':
        'Nordicbuddies is a Helsinki-based Finnish design company (registered as Oy Bisly Ltd) and an official licensee of Moomin, Pippi Longstocking and Mauri Kunnas, selling socks, shirts, caps, bags and other accessories. Design work is done in Helsinki, but the brand\'s own About Us page places manufacturing mainly in Europe and Eurasia with only part of production in Finland, and its cotton in the Anhui and Henan regions of China. Retailer-declared origin data points to China at product level, so the brand should be described as Finnish-designed, not Finnish-made.',
      'marimekko':
        'Marimekko was founded in Finland in 1951 and still runs its own textile printing factory in Helsinki, which prints over a million metres of fabric a year, including every fabric sold by the metre. The finished products themselves are sewn by a network of partner suppliers, and Marimekko names Finland, the Baltic countries, Portugal, China and Thailand among its manufacturing countries. In 2025, 54 percent of products were made in the EU and other European countries, so a Marimekko product cannot be assumed to be made in Finland without checking the individual item.',
      'rento':
        'Rento is a Finnish-designed sauna range owned by the Tampere family company Tammer Brands Oy. The brand designs in Finland and carries the Design from Finland mark widely, but production is split across Finland, other European countries and Amfori BSCI-audited factories, and the country of origin is decided per product rather than per brand. Several items sold as Rento are made outside Finland, so origin has to be checked product by product.',
      'lapuan-kankurit':
        'Lapuan Kankurit is a Finnish weaving company whose main mill is in Lapua and whose roots go back to 1917. By its own account it weaves 95% of its products in Lapua, while the remainder is made at a part-owned mill in Kaunas, Lithuania, and by European subcontractors. All raw materials originate outside Finland: flax from France, the Netherlands and Belgium, mohair from South Africa.',
      'iittala':
        'Iittala is a Finnish design brand built around the Iittala glass factory, founded in 1881 in Iittala village and now part of Fiskars Group. Its parent company describes the Hämeenlinna site as the only glass factory still operating in Finland, employing around 200 people, and Iittala states on its own site that Alvar Aalto vases and Ultima Thule glass are mouth-blown there. Its ceramics, however, are made by contract manufacturers abroad, so the Finnish-origin claim applies to the glassware only.',
      'arctic-warriors':
        'Arctic Warriors is a small Finnish natural-products company registered in the village of Narkaus near Rovaniemi in Lapland, founded in 2014. It sells berry and herb powders and glycerol-based herbal elixirs made from Lappish herbs and berries sourced from local smallholders and foragers. Its own product pages mark origin as Finland but do not state a production or packing location.',
      'makia':
        'Makia is a Helsinki-based clothing company founded in 2001 that designs in Finland and manufactures abroad. Its own pages name Türkiye as the main production country, with jackets and most accessories from China, socks from Portugal and Türkiye, and a small share of woollen accessories made in Finland. However, the brand\'s own pages disagree with each other on the full country list, so no precise per-category origin breakdown can be stated as verified.',
      'pentik':
        'Pentik is a Finnish homeware brand that began in Posio in 1971 and still runs a ceramics factory and an adjoining candle workshop there. The factory does not cover the whole range, though: by the brand\'s own sustainability reporting, roughly a quarter of its products were made in Finland in 2022, with the rest sourced elsewhere in Europe and Asia. Pentik has stated that it does not highlight country of manufacture on its products.',
      'arabia':
        'Arabia is a Finnish ceramics and tableware brand rooted in Helsinki\'s Arabianranta district and today owned by Fiskars Group. Its Helsinki ceramics factory stopped producing in spring 2016, and Fiskars states on its own brand pages that Arabia products now come from long-term contract manufacturers, mainly in Thailand and Romania. Design and product development still happen in Finland, and the Arabia quarter in Helsinki continues as a museum, store and design centre.',
      'fazer':
        'Fazer is a Finnish food company founded in Helsinki in 1891, best known for Karl Fazer milk chocolate, Geisha and Marianne. Beyond confectionery the group runs bakery, mill and restaurant businesses in several countries. Its production footprint is currently shifting: a new chocolate factory is being built in Lahti, and in summer 2026 Fazer bought confectionery factories in Sweden.',
      'moomin':
        'Moomin Characters Oy Ltd is the Helsinki family company that owns and supervises the rights to Tove Jansson\'s Moomin characters, which first appeared in the 1945 book The Moomins and the Great Flood. The company stopped making goods itself decades ago: every item sold as a Moomin product comes from a licensee, and the network runs to more than 800 of them worldwide. On the gift side the most recognisable line is Arabia\'s ceramic Moomin mugs, a series that began in 1990 and now covers over a hundred designs.',
    },
  },
  fi: {
    eyebrow: 'Brändi',
    founded: (y) => `Perustettu ${y}`,
    officialSite: (n) => `${n}:n omat sivut`,
    productsH2: (n) => `${n} tässä kaupassa`,
    indexH1: 'Brändit',
    indexIntro:
      'Kuka tekee tämän kaupan tavarat ja missä. Jokainen esittely on kirjoitettu siitä, mitä brändi itse kertoo, ja linkittää heidän omille sivuilleen.',
    indexCount: (n) => `${n} tuotetta`,
    profile: {
      'aarikka':
        'Aarikka on suomalainen designtalo, jonka Kaija Aarikka ja Erkki Ruokonen perustivat vuonna 1954 ja joka on ollut Martinex Oy:n omistuksessa vuodesta 2017. Brändi kertoo suunnittelevansa Suomessa ja kokoavansa puukorunsa ja puiset kodintuotteensa käsin Suomessa, mutta se ei esitä koko mallistoaan Suomessa valmistettuna: vaatteille ilmoitetaan tuotekohtainen valmistusmaa Suomen ulkopuolelta.',
      'foodin':
        'Foodin on vaajakoskelainen perheyritys, joka valmistaa luomuruokaa ja luonnontuotteita omalla tehtaallaan Jyväskylässä. Raakasuklaat jauhetaan kivimyllyllä ja viimeistellään käsityönä Vaajakoskella, ja kaakao tulee Perun Amazonian Criollo-pavuista. Sama tehdas mainitaan myös proteiinipatukoiden valmistuspaikkana.',
      'kuivalihakundi':
        'Kuivalihakundi (Dried Buddy Oy) on suomalainen jerkyn valmistaja, joka kuivaa, leikkaa ja pakkaa lihansa omassa hyväksytyssä lihalaitoksessaan Jokelassa Tuusulassa. Yritys muutti noin 1 500 neliön tehtaaseen vuoden 2023 lopussa, ja valmistuspaikka löytyy sekä brändin omilta sivuilta että kunnan virallisesta laitospäätöksestä. Raaka-aineliha on brändin oman tuoteselosteen mukaan EU-alueelta, joten lihaa itseään ei voi kutsua vahvistetusti suomalaiseksi.',
      'halti':
        'Halti on vuonna 1976 perustettu suomalainen ulkoilubrändi, jonka suunnittelu tehdään Sipoon pääkonttorilla. Brändi kertoo omalla sivullaan valmistuttavansa tuotteita useassa maassa: teknisissä urheilutekstiileissä Kiinassa, Vietnamissa ja Bangladeshissa sekä eurooppalaisilla toimittajilla Italiassa, Ukrainassa ja Liettuassa. Haltin oman ilmoituksen mukaan Suomessa valmistetaan vain sukat ja pipot, joten kyse on suomalaisesta suunnittelusta eikä suomalaisesta valmistuksesta.',
      'north-outdoor':
        'North Outdoor on Pyka Oy:n merinovillavaatebrändi, joka avasi vuonna 2021 oman neulomon Oulun Ruskoon; Yle uutisoi sen Suomen suurimpana villapaitaneulomona. Brändin tuotanto jakautuu useaan maahan, ja brändi kuvaa jaon tuoteryhmittäin eikä yhtenä alkuperänä. Sen oma kuvaus tästä jaosta on englanniksi sisäisesti ristiriitainen, joten tuoteryhmäkohtaista erittelyä ei pidä toistaa varmana tietona.',
      'marttiini':
        'Marttiini on suomalainen puukkobrändi, jonka seppä Janne Marttiini perusti Rovaniemelle vuonna 1928. Mallisto ulottuu metsästys- ja fileointipuukoista keittiöveitsiin, taittoveitsiin ja perinnepuukkoihin; kahvoissa käytetään visakoivua ja poronsarvea, tupet ovat nahkaa. Tunnetuimpia muotoja ovat leveäteräinen lapinleuku ja kalastajille tehdyt fileveitset.',
      'kupilka':
        'Kupilka on suomalainen retkiastiabrändi, jota pyörittää perheyritys Plasthill Oy Kontiolahdella Pohjois-Karjalassa. Kupit, lautaset ja aterimet muovataan omasta Kareline-luonnonkuitukomposiitista, jossa on suunnilleen puoliksi pohjoismaista havusellua ja puoliksi elintarvikelaatuista polyolefiinia. Astiaston alkuperä on brändin itsensä hyvin dokumentoima, mutta laajemmassa valikoimassa (etenkin puukoissa ja tulentekovälineissä) on ulkopuolisia toimittajia.',
      'nordicbuddies':
        'Nordicbuddies on helsinkiläinen suomalainen designyritys (Oy Bisly Ltd) ja virallinen Muumi-, Peppi Pitkätossu- ja Mauri Kunnas -lisenssinhaltija, joka myy sukkia, paitoja, lippiksiä, laukkuja ja muita asusteita. Suunnittelu tehdään Helsingissä, mutta brändin oma About Us -sivu sijoittaa valmistuksen pääosin Eurooppaan ja Euraasiaan ja puuvillan Kiinan Anhuin ja Henanin alueille – vain osa tuotannosta on Suomessa. Jälleenmyyjien ilmoittama alkuperämaa on tuotetasolla Kiina, joten brändi tulee kuvata suomalaisena suunnitteluna, ei suomalaisvalmisteisena.',
      'marimekko':
        'Marimekko on perustettu Suomessa 1951, ja sillä on yhä oma tekstiilipaino Helsingissä, jossa painetaan yli miljoona metriä kangasta vuodessa – muun muassa kaikki metritavarana myytävä kangas. Valmiit tuotteet ompelee kumppanitoimittajien verkosto, ja Marimekko nimeää valmistusmaikseen Suomen, Baltian maat, Portugalin, Kiinan ja Thaimaan. Vuonna 2025 tuotteista 54 % valmistui EU- ja muissa Euroopan maissa, joten yksittäisen tuotteen alkuperää ei voi päätellä brändin perusteella.',
      'rento':
        'Rento on tamperelaisen perheyrityksen Tammer Brands Oy:n omistama saunatuotesarja. Suunnittelu tehdään Suomessa ja Design from Finland -merkki on laajasti käytössä, mutta valmistus jakautuu Suomen, muun Euroopan ja Amfori BSCI -auditoitujen tehtaiden kesken. Valmistusmaa määräytyy tuotekohtaisesti eikä brändin tasolla, joten alkuperä on tarkistettava tuote kerrallaan.',
      'lapuan-kankurit':
        'Lapuan Kankurit on suomalainen kutomobrändi, jonka pääkutomo sijaitsee Lapualla ja jonka juuret ulottuvat vuoteen 1917. Yritys kertoo itse kutovansa Lapualla 95 % tuotteistaan, mutta loput syntyvät osaomisteisessa kutomossa Kaunasissa Liettuassa ja eurooppalaisilla alihankkijoilla. Raaka-aineet tulevat kokonaan Suomen ulkopuolelta: pellava Ranskasta, Alankomaista ja Belgiasta, mohair Etelä-Afrikasta.',
      'iittala':
        'Iittala on suomalainen designbrändi, jonka ydin on vuonna 1881 Iittalan kylään perustettu lasitehdas; omistaja on nykyään Fiskars Group. Emoyhtiön mukaan Hämeenlinnan tehdas on Suomen ainoa yhä toimiva lasitehdas ja työllistää noin 200 henkeä, ja Iittala kertoo omilla sivuillaan Alvar Aalto -maljakoiden ja Ultima Thulen syntyvän siellä suupuhaltamalla. Keramiikka sen sijaan valmistetaan sopimusvalmistajilla ulkomailla, joten suomalaisuusväite pätee vain lasituotteisiin.',
      'arctic-warriors':
        'Arctic Warriors on pieni suomalainen luonnontuoteyritys, joka on rekisteröity Narkauksen kylään Rovaniemen lähelle ja perustettu vuonna 2014. Se myy marja- ja yrttijauheita sekä kasviglyserolipohjaisia yrttieliksiirejä, joiden raaka-aineet tulevat lappilaisilta pienviljelijöiltä ja keräilijöiltä. Brändin omilla tuotesivuilla alkuperäksi merkitään Suomi, mutta valmistus- tai pakkauspaikkaa ei kerrota.',
      'makia':
        'Makia on vuonna 2001 perustettu helsinkiläinen vaatebrändi, joka suunnittelee Suomessa mutta valmistuttaa ulkomailla. Brändin omien sivujen mukaan päätuotantomaa on Türkiye, takit ja suurin osa asusteista tulee Kiinasta, sukkia tehdään Portugalissa ja Türkiyessä, ja Suomessa valmistetaan vain pieni osa villa-asusteista. Tarkkaa tuoteryhmäkohtaista alkuperäjakaumaa ei voi kuitenkaan esittää vahvistettuna, koska brändin omat sivut ovat keskenään ristiriidassa maalistan osalta.',
      'pentik':
        'Pentik on vuonna 1971 Posiolla aloittanut suomalainen sisustusbrändi, jonka tunnetuin osa on paikkakunnalla yhä toimiva keramiikkatehdas ja sen yhteydessä oleva kynttiläpaja. Tehdas ei kuitenkaan kata koko valikoimaa: brändin oman vastuullisuusraportoinnin mukaan noin neljännes tuotteista valmistettiin Suomessa vuonna 2022, ja loput tulevat muualta Euroopasta ja Aasiasta. Pentik on itse kertonut, ettei se korosta valmistusmaata tuotteissaan.',
      'arabia':
        'Arabia on helsinkiläislähtöinen keramiikka- ja astiabrändi, joka kuuluu nykyään Fiskars Groupiin. Helsingin keramiikkatehtaan tuotanto päättyi keväällä 2016, ja Fiskars kertoo omilla brändisivuillaan, että Arabian tuotteet tulevat pitkäaikaisilta sopimusvalmistajilta pääasiassa Thaimaasta ja Romaniasta. Muotoilu ja tuotekehitys tehdään yhä Suomessa, ja Arabian kortteli Helsingissä toimii museona, myymälänä ja designkeskuksena.',
      'fazer':
        'Fazer on vuonna 1891 Helsingissä perustettu suomalainen elintarvikeyhtiö, jonka tunnetuimpia tuotteita ovat Karl Fazerin sininen maitosuklaa, Geisha ja Marianne. Konserni tekee makeisten lisäksi leipomo-, mylly- ja ravintolaliiketoimintaa useassa maassa. Tuotantoverkosto on juuri nyt murroksessa: Lahteen rakennetaan uutta suklaatehdasta.',
      'moomin':
        'Moomin Characters Oy Ltd on helsinkiläinen perheyhtiö, joka omistaa ja valvoo Tove Janssonin muumihahmojen oikeuksia; hahmot esiteltiin ensi kerran vuoden 1945 kirjassa Muumit ja suuri tuhotulva. Yhtiö ei valmista tuotteita itse, vaan kaikki muumituotteet tekevät lisenssinsaajat, joita on yli 800 eri puolilla maailmaa. Lahjatuotteista tunnetuimpia ovat Arabian keramiikkamukit, joiden sarja alkoi vuonna 1990.',
    },
  },
  de: {
    eyebrow: 'Marke',
    founded: (y) => `Gegründet ${y}`,
    officialSite: (n) => `Website von ${n}`,
    productsH2: (n) => `${n} in diesem Shop`,
    indexH1: 'Unsere Marken',
    indexIntro:
      'Wer die Dinge in diesem Shop herstellt und wo. Jedes Porträt beruht auf dem, was die Marke selbst veröffentlicht, und verlinkt auf ihre eigene Website.',
    indexCount: (n) => `${n} Produkte`,
    profile: {
      'aarikka':
        'Aarikka ist ein finnisches Designhaus, das 1954 von Kaija Aarikka und Erkki Ruokonen gegründet wurde, bekannt für Holzperlen und Schmuck und seit 2017 im Besitz von Martinex Oy. Die Marke verortet das Design und die Handmontage ihres Holzschmucks und ihrer Wohnprodukte aus Holz in Finnland, stellt ihr Sortiment aber nicht als vollständig in Finnland gefertigt dar. Bei der Kleidung werden pro Produkt ausdrücklich Herstellungsländer außerhalb Finnlands angegeben, und ein Teil der Rohstoffe stammt aus dem Ausland.',
      'foodin':
        'Foodin ist ein familiengeführtes finnisches Bio-Lebensmittelunternehmen mit Sitz in Vaajakoski, Jyväskylä, das sich selbst als Hersteller und nicht nur als Importeur beschreibt. Die Rohschokoladen-Linie wird im firmeneigenen Werk in Vaajakoski auf Steinmühlen gemahlen und von Hand fertiggestellt, der Kakao stammt von Criollo-Bohnen aus dem peruanischen Amazonasgebiet. Dasselbe Werk wird auch als Produktionsstätte für die Proteinriegel des Unternehmens genannt.',
      'kuivalihakundi':
        'Kuivalihakundi (Dried Buddy Oy) ist ein finnischer Trockenfleisch-Hersteller, der sein Fleisch im eigenen zugelassenen Fleischbetrieb in Jokela, Tuusula, trocknet, schneidet und verpackt, einer rund 1 500 m² großen Anlage, die das Unternehmen Ende 2023 bezogen hat. Der Herstellungsort ist sowohl durch die eigenen Seiten der Marke als auch durch den offiziellen Bescheid der Gemeinde über den Lebensmittelbetrieb belegt. Nach der eigenen Kennzeichnung der Marke wird das Rindfleisch in der EU aufgezogen und geschlachtet, das Rohfleisch selbst ist also nicht als finnisch bestätigt.',
      'halti':
        'Halti ist eine finnische Outdoor-Marke, die 1976 von Juhani Hyokyvaara gegründet wurde, das Design entsteht am Hauptsitz in Sipoo. Die Marke gibt auf ihrer eigenen Website an, dass sich die Produktion auf mehrere Länder verteilt: China, Vietnam und Bangladesch für technische Sportbekleidung sowie europäische Lieferanten in Italien, der Ukraine und Litauen. Nach Haltis eigener Darstellung werden nur Socken und Mützen in Finnland hergestellt, die Marke sollte daher als in Finnland entworfen und nicht als in Finnland gefertigt beschrieben werden.',
      'north-outdoor':
        'North Outdoor ist eine finnische Merinowoll-Bekleidungsmarke der Pyka Oy, am bekanntesten für die Strickerei, die sie 2021 im Stadtteil Rusko in Oulu eröffnete und die Yle als größte Wollpullover-Strickerei Finnlands bezeichnete. Die Marke verteilt die Produktion auf mehrere Länder und beschreibt diese Aufteilung nach Produktkategorien statt als eine einzige Herkunft. Ihre eigene veröffentlichte Darstellung dieser Aufteilung ist auf Englisch in sich widersprüchlich, die Aufschlüsselung nach Kategorien sollte deshalb nicht als gesicherte Tatsache wiedergegeben werden.',
      'marttiini':
        'Marttiini ist eine finnische Messermarke, die 1928 begann, als der Schmied Janne Marttiini in Rovaniemi eine Puukko-Werkstatt eröffnete. Das Sortiment reicht heute von Jagd- und Filetiermessern bis zu Küchenmessern, Klappmessern und traditionellen Puukkos, mit Griffen aus Maserbirke oder Rentiergeweih und Klingen in Lederscheiden. Der breitklingige Lapinleuku und die Filetiermesser, die die Marke in die Exportmärkte trugen, sind ihre bekanntesten Formen.',
      'kupilka':
        'Kupilka ist eine finnische Outdoor-Geschirrmarke des Familienunternehmens Plasthill Oy in Kontiolahti, Nordkarelien. Becher, Teller und Besteck werden aus dem markeneigenen Kareline-Naturfaserverbund geformt, der etwa zur Hälfte aus nordischer Nadelholzzellulose und zur Hälfte aus lebensmittelechten Polyolefinen besteht und am Standort Pyytivaara im eigenen Haus mit zertifiziertem Strom aus erneuerbaren Quellen produziert wird. Die Herkunft des Geschirrs ist von der Marke gut dokumentiert, das übrige Sortiment (insbesondere Messer und Feuerstähle) greift jedoch auf externe Lieferanten zurück.',
      'nordicbuddies':
        'Nordicbuddies ist ein finnisches Designunternehmen mit Sitz in Helsinki (eingetragen als Oy Bisly Ltd) und offizieller Lizenznehmer von Mumin, Pippi Langstrumpf und Mauri Kunnas, verkauft werden Socken, Shirts, Mützen, Taschen und weiteres Zubehör. Die Designarbeit findet in Helsinki statt, doch die eigene Über-uns-Seite der Marke verortet die Herstellung überwiegend in Europa und Eurasien mit nur einem Teil der Produktion in Finnland und die Baumwolle in den chinesischen Regionen Anhui und Henan. Die von Händlern angegebenen Herkunftsdaten weisen auf Produktebene auf China hin, die Marke sollte daher als in Finnland entworfen und nicht als in Finnland gefertigt beschrieben werden.',
      'marimekko':
        'Marimekko wurde 1951 in Finnland gegründet und betreibt weiterhin eine eigene Textildruckerei in Helsinki, die jährlich über eine Million Meter Stoff bedruckt, darunter jede als Meterware verkaufte Stoffbahn. Die fertigen Produkte selbst werden von einem Netz von Partnerlieferanten genäht, und Marimekko nennt Finnland, die baltischen Länder, Portugal, China und Thailand unter seinen Herstellungsländern. 2025 wurden 54 Prozent der Produkte in der EU und in anderen europäischen Ländern gefertigt, bei einem Marimekko-Produkt kann also ohne Prüfung des einzelnen Artikels nicht davon ausgegangen werden, dass es in Finnland hergestellt wurde.',
      'rento':
        'Rento ist eine in Finnland entworfene Sauna-Produktreihe des Familienunternehmens Tammer Brands Oy aus Tampere. Die Marke gestaltet in Finnland und trägt das Zeichen Design from Finland auf vielen Produkten, die Produktion verteilt sich jedoch auf Finnland, andere europäische Länder und nach Amfori BSCI auditierte Fabriken, und das Ursprungsland wird pro Produkt und nicht pro Marke festgelegt. Mehrere als Rento verkaufte Artikel werden außerhalb Finnlands hergestellt, die Herkunft muss also Produkt für Produkt geprüft werden.',
      'lapuan-kankurit':
        'Lapuan Kankurit ist eine finnische Weberei, deren Hauptwerk in Lapua steht und deren Wurzeln bis 1917 zurückreichen. Nach eigenen Angaben webt das Unternehmen 95 % seiner Produkte in Lapua, der Rest entsteht in einer teilweise eigenen Weberei in Kaunas, Litauen, und bei europäischen Subunternehmern. Alle Rohstoffe stammen von außerhalb Finnlands: Flachs aus Frankreich, den Niederlanden und Belgien, Mohair aus Südafrika.',
      'iittala':
        'Iittala ist eine finnische Designmarke rund um die Glashütte Iittala, die 1881 im Dorf Iittala gegründet wurde und heute zur Fiskars Group gehört. Der Mutterkonzern beschreibt den Standort Hämeenlinna als die einzige noch in Finnland betriebene Glashütte mit rund 200 Beschäftigten, und Iittala gibt auf der eigenen Website an, dass die Vasen von Alvar Aalto und das Glas der Serie Ultima Thule dort mundgeblasen werden. Die Keramik wird dagegen von Auftragsfertigern im Ausland produziert, die Angabe finnischer Herkunft gilt also nur für das Glas.',
      'arctic-warriors':
        'Arctic Warriors ist ein kleines finnisches Naturproduktunternehmen mit Sitz im Dorf Narkaus bei Rovaniemi in Lappland, gegründet 2014. Es verkauft Beeren- und Kräuterpulver sowie Kräuterelixiere auf Glycerinbasis aus lappländischen Kräutern und Beeren von örtlichen Kleinbauern und Sammlern. Die eigenen Produktseiten geben als Herkunft Finnland an, nennen aber keinen Produktions- oder Verpackungsort.',
      'makia':
        'Makia ist ein 2001 gegründetes Bekleidungsunternehmen aus Helsinki, das in Finnland entwirft und im Ausland fertigen lässt. Die eigenen Seiten nennen die Türkei als wichtigstes Produktionsland, dazu Jacken und die meisten Accessoires aus China, Socken aus Portugal und der Türkei sowie einen kleinen Anteil an Wollaccessoires, der in Finnland hergestellt wird. Die eigenen Seiten der Marke widersprechen sich jedoch bei der vollständigen Länderliste, eine genaue Aufschlüsselung der Herkunft nach Kategorien lässt sich daher nicht als verifiziert angeben.',
      'pentik':
        'Pentik ist eine finnische Wohnaccessoire-Marke, die 1971 in Posio begann und dort weiterhin eine Keramikfabrik und eine angrenzende Kerzenwerkstatt betreibt. Die Fabrik deckt jedoch nicht das gesamte Sortiment ab: Nach der eigenen Nachhaltigkeitsberichterstattung der Marke wurde 2022 etwa ein Viertel der Produkte in Finnland hergestellt, der Rest wurde anderswo in Europa und in Asien bezogen. Pentik hat erklärt, dass das Herstellungsland auf den Produkten nicht hervorgehoben wird.',
      'arabia':
        'Arabia ist eine finnische Keramik- und Geschirrmarke mit Wurzeln im Helsinkier Stadtteil Arabianranta, die heute der Fiskars Group gehört. Die Keramikfabrik in Helsinki stellte die Produktion im Frühjahr 2016 ein, und Fiskars gibt auf den eigenen Markenseiten an, dass Arabia-Produkte nun von langjährigen Auftragsfertigern stammen, vor allem in Thailand und Rumänien. Design und Produktentwicklung finden weiterhin in Finnland statt, und das Arabia-Viertel in Helsinki besteht als Museum, Geschäft und Designzentrum fort.',
      'fazer':
        'Fazer ist ein finnisches Lebensmittelunternehmen, das 1891 in Helsinki gegründet wurde und vor allem für die Milchschokolade Karl Fazer sowie für Geisha und Marianne bekannt ist. Über Süßwaren hinaus betreibt der Konzern in mehreren Ländern Bäckerei-, Mühlen- und Restaurantgeschäfte. Die Produktionsstruktur verändert sich derzeit: In Lahti entsteht eine neue Schokoladenfabrik, und im Sommer 2026 kaufte Fazer Süßwarenfabriken in Schweden.',
      'moomin':
        'Moomin Characters Oy Ltd ist das Helsinkier Familienunternehmen, das die Rechte an Tove Janssons Mumin-Figuren besitzt und verwaltet. Die Figuren erschienen erstmals 1945 im Buch The Moomins and the Great Flood. Das Unternehmen stellt seit Jahrzehnten selbst keine Waren mehr her: Jeder als Mumin-Produkt verkaufte Artikel stammt von einem Lizenznehmer, und das Netz umfasst weltweit mehr als 800 davon. Im Geschenkbereich ist die bekannteste Linie Arabias Mumin-Keramikbecher, eine Serie, die 1990 begann und heute über hundert Designs umfasst.',
    },
  },
  sv: {
    eyebrow: 'Varumärke',
    founded: (y) => `Grundat ${y}`,
    officialSite: (n) => `${n}s egen webbplats`,
    productsH2: (n) => `${n} i den här butiken`,
    indexH1: 'Våra varumärken',
    indexIntro:
      'Vem som tillverkar sakerna i den här butiken och var. Varje presentation bygger på vad varumärket själv publicerar och länkar till deras egen webbplats.',
    indexCount: (n) => `${n} produkter`,
    profile: {
      'aarikka':
        'Aarikka är ett finländskt designhus som grundades 1954 av Kaija Aarikka och Erkki Ruokonen, känt för träpärlor och smycken, och som ägs av Martinex Oy sedan 2017. Varumärket uppger att designen och handmonteringen av träsmyckena och trävarorna för hemmet sker i Finland, men det framställer inte sortimentet som helt tillverkat i Finland. För kläderna anges tillverkningsland uttryckligen per produkt, och de ligger utanför Finland; en del råvaror köps också in utomlands.',
      'foodin':
        'Foodin är ett familjeägt finländskt ekologiskt livsmedelsföretag med bas i Vaajakoski i Jyväskylä, som beskriver sig som tillverkare och inte enbart importör. Företagets råchokladserie stenmals och handbearbetas i den egna fabriken i Vaajakoski, och kakaon kommer från Criollo-bönor odlade i den peruanska Amazonas. Samma fabrik anges också som produktionsplats för företagets proteinbarer.',
      'kuivalihakundi':
        'Kuivalihakundi (Dried Buddy Oy) är en finländsk tillverkare av torkat kött som torkar, skär och packar sitt kött i den egna godkända köttanläggningen i Jokela i Tusby, en lokal på cirka 1 500 m2 dit företaget flyttade i slutet av 2023. Tillverkningsorten bekräftas både av varumärkets egna sidor och av kommunens officiella beslut om livsmedelslokalen. Enligt varumärkets egen märkning är nötköttet uppfött och slaktat inom EU, så själva råköttet är inte bekräftat finländskt.',
      'halti':
        'Halti är ett finländskt friluftsvarumärke som grundades 1976 av Juhani Hyokyvaara, och designen görs vid huvudkontoret i Sibbo. Varumärket uppger på sin egen webbplats att produktionen är spridd över flera länder: Kina, Vietnam och Bangladesh för tekniska sportkläder, plus europeiska leverantörer i Italien, Ukraina och Litauen. Enligt Haltis egen uppgift tillverkas endast strumpor och mössor i Finland, så varumärket bör beskrivas som finländskt designat snarare än finländskt tillverkat.',
      'north-outdoor':
        'North Outdoor är ett finländskt klädmärke i merinoull som drivs av Pyka Oy och som är mest känt för den stickerifabrik det öppnade i stadsdelen Rusko i Uleåborg 2021, av Yle beskriven som Finlands största fabrik för ylletröjor. Varumärket fördelar produktionen på flera länder och beskriver fördelningen per produktkategori i stället för som ett enda ursprung. Dess egen publicerade beskrivning av fördelningen är motstridig på engelska, så uppdelningen per kategori bör inte upprepas som fastslagen fakta.',
      'marttiini':
        'Marttiini är ett finländskt knivmärke som startade 1928, när smeden Janne Marttiini öppnade en puukkoverkstad i Rovaniemi. Sortimentet omfattar i dag allt från jakt- och filékniver till kökskniver, fällkniver och traditionella puukkokniver, med skaft i masurbjörk eller renhorn och blad som bärs i läderslidor. Den bredbladiga Lapinleuku och filékniverna som förde varumärket ut på exportmarknaderna är dess mest igenkännbara former.',
      'kupilka':
        'Kupilka är ett finländskt varumärke för friluftsservis som drivs av familjeföretaget Plasthill Oy i Kontiolahti i Norra Karelen. Muggarna, tallrikarna och besticken formgjuts av den egna naturfiberkompositen Kareline, som består av ungefär hälften nordisk barrvedscellulosa och hälften livsmedelsgodkända polyolefiner, och tillverkas i egen regi vid anläggningen i Pyytivaara med certifierad förnybar el. Servisens ursprung är väl dokumenterat av varumärket, men det bredare sortimentet (särskilt knivar och eldstål) bygger på utomstående leverantörer.',
      'nordicbuddies':
        'Nordicbuddies är ett finländskt designföretag i Helsingfors (registrerat som Oy Bisly Ltd) och officiell licenstagare för Mumin, Pippi Långstrump och Mauri Kunnas, med försäljning av strumpor, tröjor, kepsar, väskor och andra accessoarer. Designarbetet görs i Helsingfors, men varumärkets egen Om oss-sida placerar tillverkningen huvudsakligen i Europa och Eurasien med endast en del av produktionen i Finland, och bomullen i regionerna Anhui och Henan i Kina. Återförsäljarnas uppgivna ursprungsdata pekar på Kina på produktnivå, så varumärket bör beskrivas som finländskt designat, inte finländskt tillverkat.',
      'marimekko':
        'Marimekko grundades i Finland 1951 och driver fortfarande sin egen textiltryckerifabrik i Helsingfors, som trycker över en miljon meter tyg per år, inklusive alla tyger som säljs i metervara. Själva de färdiga produkterna sys av ett nätverk av samarbetsleverantörer, och Marimekko nämner Finland, Baltikum, Portugal, Kina och Thailand bland sina tillverkningsländer. År 2025 tillverkades 54 procent av produkterna inom EU och andra europeiska länder, så en Marimekko-produkt kan inte antas vara tillverkad i Finland utan att den enskilda varan kontrolleras.',
      'rento':
        'Rento är ett finländskt designat bastusortiment som ägs av familjeföretaget Tammer Brands Oy i Tammerfors. Varumärket designar i Finland och bär märket Design from Finland på en stor del av sortimentet, men produktionen är fördelad på Finland, andra europeiska länder och fabriker som granskats enligt Amfori BSCI, och ursprungslandet avgörs per produkt i stället för per varumärke. Flera varor som säljs som Rento tillverkas utanför Finland, så ursprunget måste kontrolleras produkt för produkt.',
      'lapuan-kankurit':
        'Lapuan Kankurit är ett finländskt väveriföretag vars huvudväveri ligger i Lappo och vars rötter går tillbaka till 1917. Enligt egen uppgift väver företaget 95 % av sina produkter i Lappo, medan resten tillverkas vid ett delägt väveri i Kaunas i Litauen och av europeiska underleverantörer. Alla råvaror har sitt ursprung utanför Finland: lin från Frankrike, Nederländerna och Belgien, mohair från Sydafrika.',
      'iittala':
        'Iittala är ett finländskt designvarumärke som byggts kring glasbruket i Iittala, grundat 1881 i byn Iittala och i dag en del av Fiskars Group. Moderbolaget beskriver anläggningen i Tavastehus som det enda glasbruk som fortfarande är i drift i Finland, med omkring 200 anställda, och Iittala uppger på sin egen webbplats att Alvar Aalto-vaserna och Ultima Thule-glasen munblåses där. Keramiken tillverkas däremot av kontraktstillverkare utomlands, så påståendet om finländskt ursprung gäller endast glasprodukterna.',
      'arctic-warriors':
        'Arctic Warriors är ett litet finländskt naturproduktföretag som är registrerat i byn Narkaus nära Rovaniemi i Lappland och grundades 2014. Det säljer bär- och örtpulver samt glycerolbaserade örtelixir gjorda på lappländska örter och bär som köps in av lokala småbrukare och plockare. Företagets egna produktsidor anger Finland som ursprung men uppger ingen produktions- eller packningsort.',
      'makia':
        'Makia är ett klädföretag i Helsingfors som grundades 2001, designar i Finland och tillverkar utomlands. Företagets egna sidor anger Turkiet som huvudsakligt produktionsland, med jackor och de flesta accessoarer från Kina, strumpor från Portugal och Turkiet och en liten andel ylleaccessoarer tillverkade i Finland. Varumärkets egna sidor motsäger dock varandra om den fullständiga landslistan, så ingen exakt ursprungsfördelning per kategori kan anges som verifierad.',
      'pentik':
        'Pentik är ett finländskt varumärke för heminredning som startade i Posio 1971 och fortfarande driver en keramikfabrik och en intilliggande ljusverkstad där. Fabriken täcker dock inte hela sortimentet: enligt varumärkets egen hållbarhetsrapportering tillverkades ungefär en fjärdedel av produkterna i Finland 2022, medan resten köptes in på annat håll i Europa och Asien. Pentik har uppgett att företaget inte lyfter fram tillverkningsland på sina produkter.',
      'arabia':
        'Arabia är ett finländskt varumärke för keramik och bordsservis med rötter i stadsdelen Arabiastranden i Helsingfors och ägs i dag av Fiskars Group. Keramikfabriken i Helsingfors upphörde med produktionen våren 2016, och Fiskars uppger på sina egna varumärkessidor att Arabia-produkterna nu kommer från långvariga kontraktstillverkare, huvudsakligen i Thailand och Rumänien. Design och produktutveckling sker fortfarande i Finland, och Arabiakvarteret i Helsingfors fortsätter som museum, butik och designcenter.',
      'fazer':
        'Fazer är ett finländskt livsmedelsföretag som grundades i Helsingfors 1891 och är mest känt för mjölkchokladen Karl Fazer, Geisha och Marianne. Utöver konfektyr driver koncernen bageri-, kvarn- och restaurangverksamhet i flera länder. Produktionsstrukturen är i förändring just nu: en ny chokladfabrik byggs i Lahtis, och sommaren 2026 köpte Fazer konfektyrfabriker i Sverige.',
      'moomin':
        'Moomin Characters Oy Ltd är det familjeföretag i Helsingfors som äger och övervakar rättigheterna till Tove Janssons muminfigurer, som först dök upp i boken Småtrollen och den stora översvämningen från 1945. Företaget slutade själv tillverka varor för decennier sedan: varje vara som säljs som en muminprodukt kommer från en licenstagare, och nätverket omfattar över 800 av dem världen över. På presentsidan är den mest igenkännbara serien Arabias muminmuggar i keramik, en serie som startade 1990 och i dag omfattar över hundra motiv.',
    },
  },
  fr: {
    eyebrow: 'Marque',
    founded: (y) => `Fondée en ${y}`,
    officialSite: (n) => `Le site de ${n}`,
    productsH2: (n) => `${n} dans cette boutique`,
    indexH1: 'Nos marques',
    indexIntro:
      'Qui fabrique les articles de cette boutique, et où. Chaque portrait s’appuie sur ce que la marque publie elle-même et renvoie à son propre site.',
    indexCount: (n) => `${n} produits`,
    profile: {
      'aarikka':
        'Aarikka est une maison de design finlandaise fondée en 1954 par Kaija Aarikka et Erkki Ruokonen, connue pour ses perles et ses bijoux en bois, et détenue par Martinex Oy depuis 2017. La marque attribue à la Finlande la conception ainsi que l\'assemblage à la main de ses bijoux en bois et de ses articles de maison en bois, mais elle ne se présente pas comme une gamme entièrement fabriquée en Finlande. Ses vêtements indiquent, produit par produit, des pays de fabrication explicites situés hors de Finlande, et certaines matières premières proviennent de l\'étranger.',
      'foodin':
        'Foodin est une entreprise familiale finlandaise d\'aliments biologiques établie à Vaajakoski, à Jyväskylä, qui se décrit comme fabricant et non comme simple importateur. Sa gamme de chocolat cru est broyée à la meule de pierre et finie à la main dans l\'usine que l\'entreprise possède à Vaajakoski, avec un cacao issu de fèves Criollo cultivées en Amazonie péruvienne. La même usine est également citée comme site de production des barres protéinées de l\'entreprise.',
      'kuivalihakundi':
        'Kuivalihakundi (Dried Buddy Oy) est un producteur finlandais de viande séchée qui sèche, découpe et emballe sa viande dans son propre atelier de viande agréé à Jokela, à Tuusula, un site d\'environ 1 500 m2 où il s\'est installé fin 2023. Le lieu de fabrication est confirmé à la fois par les pages de la marque et par la décision officielle de la commune concernant cet établissement alimentaire. L\'étiquetage de la marque indique que le bœuf est élevé et abattu dans l\'UE : l\'origine finlandaise de la viande crue elle-même n\'est donc pas confirmée.',
      'halti':
        'Halti est une marque finlandaise de plein air fondée en 1976 par Juhani Hyokyvaara, dont la conception se fait à son siège de Sipoo. La marque indique sur son propre site que la production est répartie entre plusieurs pays : Chine, Vietnam et Bangladesh pour les vêtements de sport techniques, plus des fournisseurs européens en Italie, en Ukraine et en Lituanie. Selon les informations de Halti elle-même, seuls les chaussettes et les bonnets sont fabriqués en Finlande ; la marque doit donc être décrite comme conçue en Finlande plutôt que fabriquée en Finlande.',
      'north-outdoor':
        'North Outdoor est une marque finlandaise de vêtements en laine mérinos exploitée par Pyka Oy, surtout connue pour l\'usine de tricotage qu\'elle a ouverte dans le quartier de Rusko, à Oulu, en 2021, présentée par Yle comme la plus grande usine de pulls en laine de Finlande. La marque répartit sa production entre plusieurs pays et décrit cette répartition par catégorie de produit plutôt que comme une origine unique. Sa propre description publiée de cette répartition se contredit dans sa version anglaise, la ventilation par catégorie ne doit donc pas être reprise comme un fait établi.',
      'marttiini':
        'Marttiini est une marque finlandaise de couteaux née en 1928, lorsque le forgeron Janne Marttiini a ouvert un atelier de puukko à Rovaniemi. Le catalogue va aujourd\'hui des couteaux de chasse et à filet aux couteaux de cuisine, couteaux pliants et puukkos traditionnels, avec des manches en bouleau madré ou en bois de renne et des lames portées dans des étuis en cuir. Le Lapinleuku à lame large et les couteaux à filet qui ont porté la marque vers les marchés d\'exportation sont ses formes les plus reconnaissables.',
      'kupilka':
        'Kupilka est une marque finlandaise de vaisselle de plein air gérée par l\'entreprise familiale Plasthill Oy à Kontiolahti, en Carélie du Nord. Ses tasses, assiettes et couverts sont moulés dans un composite de fibres naturelles Kareline propre à l\'entreprise, composé pour environ moitié de cellulose de résineux nordique et pour moitié de polyoléfines de qualité alimentaire, produit en interne sur le site de Pyytivaara avec de l\'électricité renouvelable certifiée. L\'origine de la vaisselle est bien documentée par la marque, mais le reste du catalogue, les couteaux et les allume-feu en particulier, fait appel à des fournisseurs extérieurs.',
      'nordicbuddies':
        'Nordicbuddies est une entreprise de design finlandaise basée à Helsinki (immatriculée sous le nom d\'Oy Bisly Ltd) et licenciée officielle de Moumine, de Fifi Brindacier (Pippi Longstocking) et de Mauri Kunnas ; elle vend des chaussettes, chemises, casquettes, sacs et autres accessoires. La conception se fait à Helsinki, mais la page À propos de la marque situe la fabrication principalement en Europe et en Eurasie, avec une partie seulement de la production en Finlande, et son coton dans les régions chinoises d\'Anhui et du Henan. Les données d\'origine déclarées par les détaillants indiquent la Chine au niveau du produit, la marque doit donc être décrite comme conçue en Finlande et non fabriquée en Finlande.',
      'marimekko':
        'Marimekko a été fondée en Finlande en 1951 et exploite toujours sa propre usine d\'impression textile à Helsinki, qui imprime plus d\'un million de mètres de tissu par an, y compris tous les tissus vendus au mètre. Les produits finis eux-mêmes sont cousus par un réseau de fournisseurs partenaires, et Marimekko cite la Finlande, les pays baltes, le Portugal, la Chine et la Thaïlande parmi ses pays de fabrication. En 2025, 54 pour cent des produits ont été fabriqués dans l\'UE et dans d\'autres pays européens : on ne peut donc pas supposer qu\'un produit Marimekko soit fabriqué en Finlande sans vérifier l\'article en question.',
      'rento':
        'Rento est une gamme de sauna conçue en Finlande et détenue par l\'entreprise familiale Tammer Brands Oy, de Tampere. La marque conçoit en Finlande et porte largement le label Design from Finland, mais la production est répartie entre la Finlande, d\'autres pays européens et des usines auditées Amfori BSCI, et le pays d\'origine est déterminé par produit et non par marque. Plusieurs articles vendus sous le nom de Rento sont fabriqués hors de Finlande, l\'origine doit donc être vérifiée produit par produit.',
      'lapuan-kankurit':
        'Lapuan Kankurit est une entreprise de tissage finlandaise dont l\'usine principale se trouve à Lapua et dont les racines remontent à 1917. Selon ses propres informations, elle tisse 95 % de ses produits à Lapua, le reste étant fabriqué dans une usine détenue en partie à Kaunas, en Lituanie, et par des sous-traitants européens. Toutes les matières premières proviennent de l\'extérieur de la Finlande : le lin de France, des Pays-Bas et de Belgique, le mohair d\'Afrique du Sud.',
      'iittala':
        'Iittala est une marque de design finlandaise construite autour de la verrerie d\'Iittala, fondée en 1881 dans le village d\'Iittala et aujourd\'hui intégrée au groupe Fiskars. Sa société mère décrit le site de Hämeenlinna comme la seule verrerie encore en activité en Finlande, employant environ 200 personnes, et Iittala indique sur son propre site que les vases d\'Alvar Aalto et le verre Ultima Thule y sont soufflés à la bouche. Sa céramique, en revanche, est fabriquée par des sous-traitants à l\'étranger : l\'origine finlandaise ne vaut donc que pour la verrerie.',
      'arctic-warriors':
        'Arctic Warriors, fondée en 2014, est une petite entreprise finlandaise de produits naturels immatriculée au village de Narkaus, près de Rovaniemi en Laponie. Elle vend des poudres de baies et de plantes et des élixirs végétaux à base de glycérol, faits de plantes et de baies de Laponie achetées à de petits producteurs et cueilleurs locaux. Ses propres fiches produits indiquent la Finlande comme origine, mais sans préciser de lieu de production ni de conditionnement.',
      'makia':
        'Makia est une entreprise de vêtements basée à Helsinki, fondée en 2001, qui conçoit en Finlande et fabrique à l\'étranger. Ses propres pages citent la Türkiye comme principal pays de production, avec les vestes et la plupart des accessoires venant de Chine, les chaussettes du Portugal et de Türkiye, et une petite part d\'accessoires en laine fabriquée en Finlande. Les pages de la marque se contredisent toutefois sur la liste complète des pays : aucune ventilation précise de l\'origine par catégorie ne peut donc être présentée comme vérifiée.',
      'pentik':
        'Pentik est une marque finlandaise d\'articles pour la maison qui a débuté à Posio en 1971 et qui y exploite toujours une fabrique de céramique et un atelier de bougies attenant. L\'usine ne couvre cependant pas toute la gamme : selon les propres rapports de durabilité de la marque, environ un quart de ses produits ont été fabriqués en Finlande en 2022, le reste étant produit ailleurs en Europe et en Asie. Pentik a déclaré qu\'elle ne met pas en avant le pays de fabrication sur ses produits.',
      'arabia':
        'Arabia est une marque finlandaise de céramique et d\'arts de la table enracinée dans le quartier d\'Arabianranta à Helsinki et détenue aujourd\'hui par le groupe Fiskars. Son usine de céramique d\'Helsinki a cessé la production au printemps 2016, et Fiskars indique sur ses propres pages de marque que les produits Arabia proviennent désormais de sous-traitants de longue date, principalement en Thaïlande et en Roumanie. La conception et le développement des produits ont toujours lieu en Finlande, et le quartier Arabia d\'Helsinki poursuit son activité comme musée, boutique et centre de design.',
      'fazer':
        'Fazer est une entreprise alimentaire finlandaise fondée à Helsinki en 1891, surtout connue pour le chocolat au lait Karl Fazer, Geisha et Marianne. Au-delà de la confiserie, le groupe exploite des activités de boulangerie, de meunerie et de restauration dans plusieurs pays. Son implantation industrielle est en train de changer : une nouvelle chocolaterie est en construction à Lahti, et à l\'été 2026 Fazer a acheté des usines de confiserie en Suède.',
      'moomin':
        'Moomin Characters Oy Ltd est l\'entreprise familiale d\'Helsinki qui détient et supervise les droits sur les personnages des Moumines de Tove Jansson, apparus pour la première fois dans le livre de 1945 The Moomins and the Great Flood. L\'entreprise a cessé de fabriquer elle-même des produits il y a des décennies : chaque article vendu comme produit Moumine provient d\'un licencié, et le réseau en compte plus de 800 dans le monde. Côté cadeaux, la ligne la plus reconnaissable est celle des mugs Moumine en céramique d\'Arabia, une série lancée en 1990 et qui compte aujourd\'hui plus d\'une centaine de motifs.',
    },
  },
  es: {
    eyebrow: 'Marca',
    founded: (y) => `Fundada en ${y}`,
    officialSite: (n) => `La web de ${n}`,
    productsH2: (n) => `${n} en esta tienda`,
    indexH1: 'Nuestras marcas',
    indexIntro:
      'Quién fabrica lo que hay en esta tienda, y dónde. Cada perfil parte de lo que la propia marca publica y enlaza a su web.',
    indexCount: (n) => `${n} productos`,
    profile: {
      'aarikka':
        'Aarikka es una casa de diseño finlandesa fundada en 1954 por Kaija Aarikka y Erkki Ruokonen, conocida por sus cuentas y joyas de madera, y propiedad de Martinex Oy desde 2017. La marca atribuye a Finlandia el diseño y el ensamblaje a mano de sus joyas de madera y de sus productos de madera para el hogar, pero no se presenta como una gama fabricada íntegramente en Finlandia. Su ropa indica de forma explícita el país de fabricación de cada producto fuera de Finlandia, y algunas materias primas se obtienen en el extranjero.',
      'foodin':
        'Foodin es una empresa finlandesa de alimentos ecológicos de propiedad familiar, con sede en Vaajakoski, Jyväskylä, que se describe a sí misma como fabricante y no solo como importadora. Su línea de chocolate crudo se muele a la piedra y se termina a mano en la planta propia de la empresa en Vaajakoski, con cacao procedente de granos criollo cultivados en la Amazonía peruana. Esa misma planta se menciona también como lugar de producción de las barritas de proteína de la empresa.',
      'kuivalihakundi':
        'Kuivalihakundi (Dried Buddy Oy) es un fabricante finlandés de carne seca que seca, corta y envasa su carne en su propia planta cárnica autorizada de Jokela, Tuusula, unas instalaciones de aproximadamente 1.500 m2 a las que se trasladó a finales de 2023. El lugar de fabricación está respaldado tanto por las páginas de la propia marca como por la decisión oficial del municipio sobre el establecimiento alimentario. El etiquetado de la propia marca indica que la carne de vacuno se cría y se sacrifica en la UE, por lo que no está confirmado que la carne cruda sea finlandesa.',
      'halti':
        'Halti es una marca finlandesa de ropa de exterior fundada en 1976 por Juhani Hyokyvaara, con el diseño hecho en su sede de Sipoo. La marca afirma en su propio sitio que la producción se reparte entre varios países: China, Vietnam y Bangladés para la ropa deportiva técnica, además de proveedores europeos en Italia, Ucrania y Lituania. Según la propia Halti, solo los calcetines y los gorros se fabrican en Finlandia, por lo que la marca debe describirse como diseñada en Finlandia y no como fabricada en Finlandia.',
      'north-outdoor':
        'North Outdoor es una marca finlandesa de ropa de lana merina gestionada por Pyka Oy, conocida sobre todo por la fábrica de punto que abrió en el distrito de Rusko, en Oulu, en 2021, descrita por Yle como la mayor fábrica de jerséis de lana de Finlandia. La marca reparte la producción entre varios países y describe ese reparto por categoría de producto en lugar de dar un origen único. Su propia descripción publicada de ese reparto es contradictoria en inglés, por lo que el desglose por categorías no debe repetirse como un hecho establecido.',
      'marttiini':
        'Marttiini es una marca finlandesa de cuchillos que empezó en 1928, cuando el herrero Janne Marttiini abrió un taller de puukko en Rovaniemi. Hoy el catálogo va de los cuchillos de caza y de fileteado a los de cocina, los plegables y los puukko tradicionales, con mangos de abedul rizado o asta de reno y hojas que se llevan en fundas de cuero. El Lapinleuku de hoja ancha y los cuchillos de fileteado que llevaron la marca a los mercados de exportación son sus formas más reconocibles.',
      'kupilka':
        'Kupilka es una marca finlandesa de vajilla de exterior gestionada por la empresa familiar Plasthill Oy en Kontiolahti, Carelia del Norte. Sus tazas, platos y cubiertos se moldean con Kareline, un compuesto propio de fibra natural formado aproximadamente por mitad de celulosa de madera de conífera nórdica y mitad de poliolefinas aptas para uso alimentario, producido internamente en la planta de Pyytivaara con electricidad renovable certificada. El origen de la vajilla está bien documentado por la marca, pero el resto del catálogo (en particular los cuchillos y los pedernales de ferrocerio) recurre a proveedores externos.',
      'nordicbuddies':
        'Nordicbuddies es una empresa finlandesa de diseño con sede en Helsinki (registrada como Oy Bisly Ltd) y licenciataria oficial de Moomin, Pippi Calzaslargas y Mauri Kunnas, que vende calcetines, camisetas, gorras, bolsos y otros accesorios. El trabajo de diseño se hace en Helsinki, pero la página About Us de la propia marca sitúa la fabricación principalmente en Europa y Eurasia, con solo una parte de la producción en Finlandia, y su algodón en las regiones chinas de Anhui y Henan. Los datos de origen declarados por los minoristas apuntan a China a nivel de producto, por lo que la marca debe describirse como diseñada en Finlandia, no como fabricada en Finlandia.',
      'marimekko':
        'Marimekko se fundó en Finlandia en 1951 y sigue teniendo su propia fábrica de estampación textil en Helsinki, que imprime más de un millón de metros de tela al año, incluida toda la tela que se vende por metros. Los productos acabados los cosen una red de proveedores asociados, y Marimekko cita a Finlandia, los países bálticos, Portugal, China y Tailandia entre sus países de fabricación. En 2025, el 54 por ciento de los productos se fabricó en la UE y en otros países europeos, por lo que no se puede dar por hecho que un producto de Marimekko esté fabricado en Finlandia sin comprobar el artículo concreto.',
      'rento':
        'Rento es una gama de sauna de diseño finlandés propiedad de la empresa familiar Tammer Brands Oy, de Tampere. La marca diseña en Finlandia y usa ampliamente el sello Design from Finland, pero la producción se reparte entre Finlandia, otros países europeos y fábricas auditadas según Amfori BSCI, y el país de origen se decide por producto y no por marca. Varios artículos vendidos como Rento se fabrican fuera de Finlandia, así que el origen hay que comprobarlo producto por producto.',
      'lapuan-kankurit':
        'Lapuan Kankurit es una empresa textil finlandesa cuya fábrica principal está en Lapua y cuyas raíces se remontan a 1917. Según sus propios datos, teje el 95 % de sus productos en Lapua, mientras que el resto se hace en una fábrica participada en Kaunas, Lituania, y en subcontratistas europeos. Todas las materias primas proceden de fuera de Finlandia: el lino de Francia, los Países Bajos y Bélgica, el mohair de Sudáfrica.',
      'iittala':
        'Iittala es una marca de diseño finlandesa construida en torno a la fábrica de vidrio de Iittala, fundada en 1881 en la aldea de Iittala y hoy parte de Fiskars Group. Su empresa matriz describe la planta de Hämeenlinna como la única fábrica de vidrio que sigue operando en Finlandia, con unos 200 empleados, e Iittala afirma en su propio sitio que allí se soplan a boca los jarrones de Alvar Aalto y el vidrio Ultima Thule. Su cerámica, en cambio, la hacen fabricantes subcontratados en el extranjero, por lo que la afirmación de origen finlandés se aplica solo a la cristalería.',
      'arctic-warriors':
        'Arctic Warriors es una pequeña empresa finlandesa de productos naturales registrada en la aldea de Narkaus, cerca de Rovaniemi, en Laponia, y fundada en 2014. Vende polvos de bayas y hierbas y elixires de hierbas a base de glicerol elaborados con hierbas y bayas de Laponia obtenidas de pequeños productores y recolectores locales. Sus propias fichas de producto indican Finlandia como origen, pero no señalan un lugar de producción o de envasado.',
      'makia':
        'Makia es una empresa de ropa con sede en Helsinki, fundada en 2001, que diseña en Finlandia y fabrica en el extranjero. Sus propias páginas señalan a Türkiye (Turquía) como principal país de producción, con las chaquetas y la mayoría de los accesorios de China, los calcetines de Portugal y Türkiye, y una pequeña parte de los accesorios de lana hecha en Finlandia. Sin embargo, las páginas de la propia marca se contradicen entre sí sobre la lista completa de países, por lo que no se puede dar por verificado ningún desglose exacto de origen por categoría.',
      'pentik':
        'Pentik es una marca finlandesa de artículos para el hogar que empezó en Posio en 1971 y que sigue teniendo allí una fábrica de cerámica y un taller de velas contiguo. Aun así, la fábrica no cubre toda la gama: según los informes de sostenibilidad de la propia marca, alrededor de una cuarta parte de sus productos se fabricó en Finlandia en 2022, y el resto se obtuvo en otros lugares de Europa y Asia. Pentik ha declarado que no destaca el país de fabricación en sus productos.',
      'arabia':
        'Arabia es una marca finlandesa de cerámica y vajilla arraigada en el barrio de Arabianranta, en Helsinki, y hoy propiedad de Fiskars Group. Su fábrica de cerámica de Helsinki dejó de producir en la primavera de 2016, y Fiskars afirma en sus propias páginas de marca que los productos de Arabia proceden ahora de fabricantes subcontratados a largo plazo, principalmente en Tailandia y Rumanía. El diseño y el desarrollo de producto siguen haciéndose en Finlandia, y el barrio de Arabia en Helsinki continúa como museo, tienda y centro de diseño.',
      'fazer':
        'Fazer es una empresa alimentaria finlandesa fundada en Helsinki en 1891, conocida sobre todo por el chocolate con leche Karl Fazer, Geisha y Marianne. Además de la confitería, el grupo tiene negocios de panadería, molinería y restauración en varios países. Su huella productiva está cambiando ahora mismo: se está construyendo una nueva fábrica de chocolate en Lahti y, en el verano de 2026, Fazer compró fábricas de confitería en Suecia.',
      'moomin':
        'Moomin Characters Oy Ltd es la empresa familiar de Helsinki que posee y supervisa los derechos de los personajes Moomin de Tove Jansson, que aparecieron por primera vez en el libro de 1945 Los Moomin y la gran inundación. La empresa dejó de fabricar productos ella misma hace décadas: todo artículo vendido como producto Moomin procede de un licenciatario, y la red suma más de 800 en todo el mundo. En el ámbito del regalo, la línea más reconocible son las tazas de cerámica Moomin de Arabia, una serie que empezó en 1990 y que hoy abarca más de cien diseños.',
    },
  },
  it: {
    eyebrow: 'Marchio',
    founded: (y) => `Fondata nel ${y}`,
    officialSite: (n) => `Il sito di ${n}`,
    productsH2: (n) => `${n} in questo negozio`,
    indexH1: 'I nostri marchi',
    indexIntro:
      'Chi produce le cose di questo negozio, e dove. Ogni profilo parte da ciò che il marchio pubblica di sé e rimanda al suo sito.',
    indexCount: (n) => `${n} prodotti`,
    profile: {
      'aarikka':
        'Aarikka è una casa di design finlandese fondata nel 1954 da Kaija Aarikka ed Erkki Ruokonen, nota per le perle e i gioielli in legno, di proprietà di Martinex Oy dal 2017. Il marchio attribuisce alla Finlandia il design e l\'assemblaggio a mano dei suoi gioielli in legno e dei suoi prodotti in legno per la casa, ma non si presenta come una gamma interamente fabbricata in Finlandia. I suoi capi di abbigliamento riportano esplicitamente, prodotto per prodotto, paesi di fabbricazione fuori dalla Finlandia, e alcune materie prime provengono dall\'estero.',
      'foodin':
        'Foodin è un\'azienda finlandese di alimenti biologici a conduzione familiare con sede a Vaajakoski, Jyväskylä, che si descrive come produttore e non solo come importatore. La sua linea di cioccolato crudo viene macinata a pietra e rifinita a mano nello stabilimento di proprietà dell\'azienda a Vaajakoski, con cacao ottenuto da fave Criollo coltivate nell\'Amazzonia peruviana. Lo stesso stabilimento è indicato anche come sito di produzione delle barrette proteiche dell\'azienda.',
      'kuivalihakundi':
        'Kuivalihakundi (Dried Buddy Oy) è un produttore finlandese di carne essiccata che essicca, taglia e confeziona la carne nel proprio stabilimento di lavorazione carni approvato a Jokela, Tuusula, una struttura di circa 1.500 m2 in cui si è trasferito alla fine del 2023. Il luogo di fabbricazione è confermato sia dalle pagine del marchio sia dalla decisione ufficiale del comune sull\'impianto alimentare. L\'etichettatura del marchio indica che il manzo è allevato e macellato nell\'UE, quindi non è confermato che la carne cruda stessa sia finlandese.',
      'halti':
        'Halti è un marchio finlandese di abbigliamento outdoor fondato nel 1976 da Juhani Hyokyvaara, con il design realizzato nella sede di Sipoo. Sul proprio sito il marchio dichiara che la produzione è distribuita su più paesi: Cina, Vietnam e Bangladesh per l\'abbigliamento sportivo tecnico, oltre a fornitori europei in Italia, Ucraina e Lituania. Secondo quanto dichiara Halti stessa, solo i calzini e i berretti sono fabbricati in Finlandia, quindi il marchio va descritto come progettato in Finlandia e non come fabbricato in Finlandia.',
      'north-outdoor':
        'North Outdoor è un marchio finlandese di abbigliamento in lana merino gestito da Pyka Oy, noto soprattutto per il maglificio che ha aperto nel quartiere Rusko di Oulu nel 2021, indicato da Yle come il più grande maglificio di maglioni di lana della Finlandia. Il marchio distribuisce la produzione su più paesi e descrive tale suddivisione per categoria di prodotto invece che con un\'unica origine. La descrizione di quella suddivisione che il marchio pubblica in inglese è internamente incoerente, quindi la ripartizione per categoria non va ripetuta come dato certo.',
      'marttiini':
        'Marttiini è un marchio finlandese di coltelli nato nel 1928, quando il fabbro Janne Marttiini aprì una bottega di puukko a Rovaniemi. Il catalogo odierno va dai coltelli da caccia e da filetto ai coltelli da cucina, ai coltelli pieghevoli e ai puukko tradizionali, con manici in betulla fiammata o corno di renna e lame custodite in foderi di cuoio. Il Lapinleuku dalla lama larga e i coltelli da filetto che portarono il marchio sui mercati d\'esportazione sono le sue forme più riconoscibili.',
      'kupilka':
        'Kupilka è un marchio finlandese di stoviglie da outdoor gestito dall\'azienda familiare Plasthill Oy a Kontiolahti, nella Carelia settentrionale. Tazze, piatti e posate sono stampati in un composito proprietario di fibre naturali Kareline, formato per circa metà da cellulosa di conifere nordiche e per metà da poliolefine per uso alimentare, prodotto internamente nel sito di Pyytivaara con elettricità rinnovabile certificata. L\'origine delle stoviglie è ben documentata dal marchio, ma il resto del catalogo, in particolare i coltelli e gli acciarini, si appoggia a fornitori esterni.',
      'nordicbuddies':
        'Nordicbuddies è un\'azienda di design finlandese con sede a Helsinki (registrata come Oy Bisly Ltd) e licenziataria ufficiale di Moomin, Pippi Calzelunghe e Mauri Kunnas, che vende calzini, magliette, cappellini, borse e altri accessori. Il lavoro di design viene svolto a Helsinki, ma la pagina About Us del marchio colloca la fabbricazione principalmente in Europa e in Eurasia, con solo una parte della produzione in Finlandia, e il suo cotone nelle regioni cinesi di Anhui e Henan. I dati di origine dichiarati dai rivenditori indicano la Cina a livello di prodotto, quindi il marchio va descritto come progettato in Finlandia, non come fabbricato in Finlandia.',
      'marimekko':
        'Marimekko è stata fondata in Finlandia nel 1951 e gestisce tuttora la propria stamperia tessile a Helsinki, che stampa oltre un milione di metri di tessuto all\'anno, compresi tutti i tessuti venduti al metro. I prodotti finiti sono invece cuciti da una rete di fornitori partner, e Marimekko indica tra i propri paesi di fabbricazione Finlandia, paesi baltici, Portogallo, Cina e Thailandia. Nel 2025 il 54 percento dei prodotti è stato realizzato nell\'UE e in altri paesi europei, quindi non si può dare per scontato che un prodotto Marimekko sia fabbricato in Finlandia senza controllare il singolo articolo.',
      'rento':
        'Rento è una gamma di prodotti per la sauna progettata in Finlandia e di proprietà dell\'azienda familiare Tammer Brands Oy di Tampere. Il marchio progetta in Finlandia e usa ampiamente il marchio Design from Finland, ma la produzione è distribuita tra la Finlandia, altri paesi europei e fabbriche verificate secondo Amfori BSCI, e il paese di origine è deciso per singolo prodotto e non per marchio. Diversi articoli venduti come Rento sono fabbricati fuori dalla Finlandia, quindi l\'origine va verificata prodotto per prodotto.',
      'lapuan-kankurit':
        'Lapuan Kankurit è un\'azienda tessile finlandese il cui stabilimento principale si trova a Lapua e le cui radici risalgono al 1917. Secondo quanto dichiara, tesse il 95% dei suoi prodotti a Lapua, mentre il resto è realizzato in uno stabilimento partecipato a Kaunas, in Lituania, e da subappaltatori europei. Tutte le materie prime provengono da fuori dalla Finlandia: il lino da Francia, Paesi Bassi e Belgio, il mohair dal Sudafrica.',
      'iittala':
        'Iittala è un marchio di design finlandese costruito attorno alla vetreria di Iittala, fondata nel 1881 nel villaggio di Iittala e oggi parte di Fiskars Group. La sua casa madre descrive il sito di Hämeenlinna come l\'unica vetreria ancora in attività in Finlandia, con circa 200 dipendenti, e Iittala dichiara sul proprio sito che i vasi di Alvar Aalto e i bicchieri Ultima Thule vengono soffiati a bocca lì. Le sue ceramiche sono invece prodotte da terzisti all\'estero, quindi l\'affermazione sull\'origine finlandese vale solo per gli articoli in vetro.',
      'arctic-warriors':
        'Arctic Warriors è una piccola azienda finlandese di prodotti naturali registrata nel villaggio di Narkaus, vicino a Rovaniemi in Lapponia, fondata nel 2014. Vende polveri di bacche ed erbe ed elisir di erbe a base di glicerolo, ottenuti da erbe e bacche lapponi raccolte presso piccoli produttori e raccoglitori locali. Le sue pagine di prodotto indicano la Finlandia come origine, ma non dichiarano un luogo di produzione o di confezionamento.',
      'makia':
        'Makia è un\'azienda di abbigliamento con sede a Helsinki, fondata nel 2001, che progetta in Finlandia e fabbrica all\'estero. Le sue pagine indicano la Türkiye come principale paese di produzione, con le giacche e la maggior parte degli accessori dalla Cina, i calzini da Portogallo e Türkiye e una piccola quota di accessori in lana fabbricata in Finlandia. Le pagine del marchio però non concordano tra loro sull\'elenco completo dei paesi, quindi non si può indicare come verificata alcuna ripartizione precisa dell\'origine per categoria.',
      'pentik':
        'Pentik è un marchio finlandese di articoli per la casa nato a Posio nel 1971, dove gestisce ancora una fabbrica di ceramica e un attiguo laboratorio di candele. La fabbrica però non copre l\'intera gamma: secondo il rendiconto di sostenibilità del marchio, nel 2022 circa un quarto dei suoi prodotti è stato fabbricato in Finlandia, mentre il resto proveniva da altre località in Europa e in Asia. Pentik ha dichiarato di non evidenziare il paese di fabbricazione sui propri prodotti.',
      'arabia':
        'Arabia è un marchio finlandese di ceramiche e stoviglie radicato nel quartiere Arabianranta di Helsinki e oggi di proprietà di Fiskars Group. La sua fabbrica di ceramica di Helsinki ha cessato la produzione nella primavera 2016, e Fiskars dichiara sulle proprie pagine di marchio che i prodotti Arabia provengono ora da terzisti di lungo periodo, soprattutto in Thailandia e Romania. Il design e lo sviluppo prodotto avvengono ancora in Finlandia, e il quartiere Arabia di Helsinki prosegue come museo, negozio e centro del design.',
      'fazer':
        'Fazer è un\'azienda alimentare finlandese fondata a Helsinki nel 1891, nota soprattutto per il cioccolato al latte Karl Fazer, Geisha e Marianne. Oltre ai dolciumi il gruppo gestisce attività di panificazione, molitura e ristorazione in diversi paesi. La sua struttura produttiva è attualmente in movimento: a Lahti è in costruzione una nuova fabbrica di cioccolato e nell\'estate 2026 Fazer ha acquistato fabbriche dolciarie in Svezia.',
      'moomin':
        'Moomin Characters Oy Ltd è l\'azienda familiare di Helsinki che possiede e sorveglia i diritti sui personaggi Moomin di Tove Jansson, apparsi per la prima volta nel libro del 1945 The Moomins and the Great Flood. L\'azienda ha smesso di produrre articoli in proprio decenni fa: ogni articolo venduto come prodotto Moomin proviene da un licenziatario, e la rete ne conta oltre 800 in tutto il mondo. Sul fronte dei regali la linea più riconoscibile sono le tazze in ceramica Moomin di Arabia, una serie iniziata nel 1990 che oggi comprende oltre cento design.',
    },
  },
  nl: {
    eyebrow: 'Merk',
    founded: (y) => `Opgericht in ${y}`,
    officialSite: (n) => `De site van ${n}`,
    productsH2: (n) => `${n} in deze winkel`,
    indexH1: 'Onze merken',
    indexIntro:
      'Wie de spullen in deze winkel maakt, en waar. Elk profiel is geschreven op basis van wat het merk zelf publiceert en linkt naar hun eigen site.',
    indexCount: (n) => `${n} producten`,
    profile: {
      'aarikka':
        'Aarikka is een Fins designhuis, in 1954 opgericht door Kaija Aarikka en Erkki Ruokonen, bekend om houten kralen en sieraden, en sinds 2017 eigendom van Martinex Oy. Het merk schrijft aan Finland het ontwerp toe en het met de hand assembleren van zijn houten sieraden en houten woonproducten, maar presenteert zijn assortiment niet als volledig in Finland vervaardigd. Bij de kleding staat per product expliciet een productieland buiten Finland vermeld, en een deel van de grondstoffen komt uit het buitenland.',
      'foodin':
        'Foodin is een Fins biologisch voedingsbedrijf in familiebezit, gevestigd in Vaajakoski, Jyväskylä, dat zichzelf omschrijft als producent en niet alleen als importeur. De rauwe chocoladelijn wordt in de eigen fabriek in Vaajakoski op steen gemalen en met de hand afgewerkt, met cacao van Criollo-bonen uit het Peruaanse Amazonegebied. Dezelfde fabriek wordt ook genoemd als productielocatie van de proteïnerepen van het bedrijf.',
      'kuivalihakundi':
        'Kuivalihakundi (Dried Buddy Oy) is een Finse jerkyproducent die zijn vlees droogt, snijdt en verpakt in een eigen goedgekeurde vleesinrichting in Jokela, Tuusula, een pand van ongeveer 1.500 m2 waar het eind 2023 introk. De productielocatie wordt onderbouwd door zowel de eigen pagina\'s van het merk als het officiële besluit van de gemeente over de levensmiddeleninrichting. Op het etiket van het merk zelf staat dat het rundvlees in de EU is gehouden en geslacht, dus dat het vlees zelf Fins is, staat niet vast.',
      'halti':
        'Halti is een Fins outdoormerk, in 1976 opgericht door Juhani Hyokyvaara, met het ontwerp op het hoofdkantoor in Sipoo. Het merk vermeldt op zijn eigen site dat de productie over meerdere landen verspreid is: China, Vietnam en Bangladesh voor technische sportkleding, plus Europese leveranciers in Italië, Oekraïne en Litouwen. Volgens Halti zelf worden alleen sokken en mutsen in Finland gemaakt, dus het merk kan beter Fins ontworpen dan Fins gemaakt worden genoemd.',
      'north-outdoor':
        'North Outdoor is een Fins merk van merinowollen kleding, geëxploiteerd door Pyka Oy, vooral bekend om de breierij die het in 2021 opende in het stadsdeel Rusko in Oulu, door Yle beschreven als de grootste wollen-truienfabriek van Finland. Het merk verdeelt de productie over meerdere landen en beschrijft die verdeling per productcategorie in plaats van als één herkomst. De eigen gepubliceerde beschrijving van die verdeling is in het Engels intern tegenstrijdig, dus de uitsplitsing per categorie mag niet als vaststaand feit worden herhaald.',
      'marttiini':
        'Marttiini is een Fins messenmerk dat begon in 1928, toen smid Janne Marttiini in Rovaniemi een puukko-werkplaats opende. Het assortiment loopt vandaag van jacht- en fileermessen tot keukenmessen, zakmessen en traditionele puukko\'s, met heften van kroezenberk of rendiergewei en lemmeten in leren scheden. De breedbladige Lapinleuku en de fileermessen die het merk naar de exportmarkten brachten, zijn de bekendste vormen.',
      'kupilka':
        'Kupilka is een Fins merk van outdoorservies, gerund door het familiebedrijf Plasthill Oy in Kontiolahti, Noord-Karelië. De bekers, borden en het bestek worden gegoten uit het eigen natuurvezelcomposiet Kareline, dat ongeveer half uit Noordse naaldhoutcellulose en half uit polyolefinen van voedselkwaliteit bestaat en in eigen huis op de locatie Pyytivaara wordt gemaakt met gecertificeerde hernieuwbare elektriciteit. De herkomst van het serviesgoed is door het merk goed gedocumenteerd, maar het bredere assortiment (met name messen en vuurstalen) leunt op externe leveranciers.',
      'nordicbuddies':
        'Nordicbuddies is een Fins designbedrijf uit Helsinki (geregistreerd als Oy Bisly Ltd) en officieel licentiehouder van Moomin, Pippi Langkous en Mauri Kunnas, dat sokken, shirts, petten, tassen en andere accessoires verkoopt. Het ontwerpwerk gebeurt in Helsinki, maar de eigen About Us-pagina van het merk legt de productie vooral in Europa en Eurazië met slechts een deel van de productie in Finland, en het katoen in de Chinese regio\'s Anhui en Henan. Door retailers opgegeven herkomstgegevens wijzen op productniveau naar China, dus het merk kan beter Fins ontworpen dan Fins gemaakt worden genoemd.',
      'marimekko':
        'Marimekko werd in 1951 in Finland opgericht en heeft nog steeds een eigen textieldrukkerij in Helsinki, waar per jaar ruim een miljoen meter stof wordt bedrukt, waaronder alle stof die per meter wordt verkocht. De eindproducten zelf worden genaaid door een netwerk van partnerleveranciers, en Marimekko noemt Finland, de Baltische landen, Portugal, China en Thailand als productielanden. In 2025 werd 54 procent van de producten in de EU en andere Europese landen gemaakt, dus van een Marimekko-product kan niet zonder controle van het afzonderlijke artikel worden aangenomen dat het in Finland is gemaakt.',
      'rento':
        'Rento is een in Finland ontworpen saunacollectie van het Tamperese familiebedrijf Tammer Brands Oy. Het merk ontwerpt in Finland en draagt breed het merkteken Design from Finland, maar de productie is verdeeld over Finland, andere Europese landen en fabrieken met een Amfori BSCI-audit, en het land van herkomst wordt per product bepaald, niet per merk. Verschillende artikelen die als Rento worden verkocht, worden buiten Finland gemaakt, dus de herkomst moet product voor product worden gecontroleerd.',
      'lapuan-kankurit':
        'Lapuan Kankurit is een Fins weverijbedrijf waarvan de belangrijkste weverij in Lapua staat en waarvan de wortels teruggaan tot 1917. Naar eigen zeggen weeft het 95% van zijn producten in Lapua, terwijl de rest wordt gemaakt in een deels eigen weverij in Kaunas, Litouwen, en door Europese onderaannemers. Alle grondstoffen komen van buiten Finland: vlas uit Frankrijk, Nederland en België, mohair uit Zuid-Afrika.',
      'iittala':
        'Iittala is een Fins designmerk dat is opgebouwd rond de glasfabriek Iittala, in 1881 opgericht in het dorp Iittala en nu onderdeel van Fiskars Group. Het moederbedrijf omschrijft de vestiging in Hämeenlinna als de enige glasfabriek die nog in Finland werkt, met ongeveer 200 medewerkers, en Iittala vermeldt op zijn eigen site dat de vazen van Alvar Aalto en het glas van Ultima Thule daar met de mond worden geblazen. Het keramiek wordt echter gemaakt door contractfabrikanten in het buitenland, dus de claim van Finse herkomst geldt alleen voor het glaswerk.',
      'arctic-warriors':
        'Arctic Warriors is een klein Fins bedrijf in natuurproducten, geregistreerd in het dorp Narkaus bij Rovaniemi in Lapland en opgericht in 2014. Het verkoopt bessen- en kruidenpoeders en kruidenelixers op glycerolbasis, gemaakt van Laplandse kruiden en bessen van lokale kleine boeren en plukkers. De eigen productpagina\'s vermelden Finland als herkomst, maar noemen geen productie- of verpakkingslocatie.',
      'makia':
        'Makia is een kledingbedrijf uit Helsinki, opgericht in 2001, dat in Finland ontwerpt en in het buitenland produceert. De eigen pagina\'s noemen Türkiye als belangrijkste productieland, met jassen en de meeste accessoires uit China, sokken uit Portugal en Türkiye, en een klein deel van de wollen accessoires gemaakt in Finland. De eigen pagina\'s van het merk spreken elkaar echter tegen over de volledige landenlijst, dus er kan geen precieze herkomstuitsplitsing per categorie als geverifieerd worden vermeld.',
      'pentik':
        'Pentik is een Fins woonmerk dat in 1971 in Posio begon en daar nog steeds een keramiekfabriek en een aangrenzend kaarsenatelier heeft. De fabriek dekt echter niet het hele assortiment: volgens de eigen duurzaamheidsrapportage van het merk werd in 2022 ongeveer een kwart van de producten in Finland gemaakt, de rest werd elders in Europa en Azië ingekocht. Pentik heeft verklaard dat het het land van productie niet op zijn producten benadrukt.',
      'arabia':
        'Arabia is een Fins merk van keramiek en serviesgoed met wortels in de Helsinkise wijk Arabianranta en tegenwoordig eigendom van Fiskars Group. De keramiekfabriek in Helsinki stopte in het voorjaar van 2016 met produceren, en Fiskars vermeldt op zijn eigen merkpagina\'s dat Arabia-producten nu komen van vaste contractfabrikanten, vooral in Thailand en Roemenië. Ontwerp en productontwikkeling gebeuren nog steeds in Finland, en de Arabia-wijk in Helsinki gaat verder als museum, winkel en designcentrum.',
      'fazer':
        'Fazer is een Fins voedingsbedrijf, in 1891 in Helsinki opgericht en vooral bekend van de melkchocolade Karl Fazer, Geisha en Marianne. Naast zoetwaren heeft de groep bakkerij-, molen- en restaurantactiviteiten in meerdere landen. De productielocaties verschuiven op dit moment: in Lahti wordt een nieuwe chocoladefabriek gebouwd, en in de zomer van 2026 kocht Fazer zoetwarenfabrieken in Zweden.',
      'moomin':
        'Moomin Characters Oy Ltd is het familiebedrijf uit Helsinki dat de rechten op de Moomin-figuren van Tove Jansson bezit en beheert; die verschenen voor het eerst in het boek The Moomins and the Great Flood uit 1945. Het bedrijf maakt al decennia zelf geen artikelen meer: elk artikel dat als Moomin-product wordt verkocht, komt van een licentiehouder, en dat netwerk telt er wereldwijd meer dan 800. Aan de cadeaukant is de bekendste lijn de keramische Moomin-mokken van Arabia, een serie die in 1990 begon en nu meer dan honderd ontwerpen omvat.',
    },
  },
  'pt-BR': {
    eyebrow: 'Marca',
    founded: (y) => `Fundada em ${y}`,
    officialSite: (n) => `O site da ${n}`,
    productsH2: (n) => `${n} nesta loja`,
    indexH1: 'Nossas marcas',
    indexIntro:
      'Quem faz as coisas desta loja, e onde. Cada perfil parte do que a própria marca publica e leva ao site dela.',
    indexCount: (n) => `${n} produtos`,
    profile: {
      'aarikka':
        'A Aarikka é uma casa de design finlandesa fundada em 1954 por Kaija Aarikka e Erkki Ruokonen, conhecida por contas e joias de madeira, e pertencente à Martinex Oy desde 2017. A marca atribui à Finlândia o design e a montagem manual de suas joias de madeira e de seus produtos de madeira para a casa, mas não se apresenta como uma linha inteiramente fabricada na Finlândia. Suas roupas trazem países de fabricação explícitos, produto a produto, fora da Finlândia, e parte das matérias-primas vem do exterior.',
      'foodin':
        'A Foodin é uma empresa finlandesa familiar de alimentos orgânicos sediada em Vaajakoski, Jyväskylä, que se descreve como fabricante e não apenas importadora. Sua linha de chocolate cru é moída em pedra e finalizada à mão na fábrica própria da empresa em Vaajakoski, com cacau de grãos Criollo cultivados na Amazônia peruana. A mesma fábrica também é indicada como local de produção das barras de proteína da empresa.',
      'kuivalihakundi':
        'A Kuivalihakundi (Dried Buddy Oy) é uma fabricante finlandesa de carne seca que seca, corta e embala sua carne em fábrica de carne própria e aprovada em Jokela, Tuusula, uma instalação de cerca de 1.500 m2 para a qual se mudou no fim de 2023. O local de fabricação é comprovado tanto pelas páginas da própria marca quanto pela decisão oficial do município sobre o estabelecimento de alimentos. A rotulagem da própria marca diz que a carne bovina é criada e abatida na UE, portanto não está confirmado que a carne crua em si seja finlandesa.',
      'halti':
        'A Halti é uma marca finlandesa de outdoor fundada em 1976 por Juhani Hyokyvaara, com design feito em sua sede em Sipoo. A marca afirma no próprio site que a produção está distribuída por vários países: China, Vietnã e Bangladesh para o vestuário esportivo técnico, além de fornecedores europeus na Itália, na Ucrânia e na Lituânia. Segundo a própria Halti, apenas as meias e os gorros são feitos na Finlândia, de modo que a marca deve ser descrita como de design finlandês, e não de fabricação finlandesa.',
      'north-outdoor':
        'A North Outdoor é uma marca finlandesa de roupas de lã merino operada pela Pyka Oy, mais conhecida pela malharia que abriu no distrito de Rusko, em Oulu, em 2021, noticiada pela Yle como a maior fábrica de suéteres de lã da Finlândia. A marca divide a produção entre vários países e descreve essa divisão por categoria de produto, e não como uma origem única. Sua própria descrição publicada dessa divisão é internamente contraditória em inglês, portanto o detalhamento por categoria não deve ser repetido como fato estabelecido.',
      'marttiini':
        'A Marttiini é uma marca finlandesa de facas que começou em 1928, quando o ferreiro Janne Marttiini abriu uma oficina de puukko em Rovaniemi. O catálogo atual vai de facas de caça e de filetar a facas de cozinha, canivetes e puukkos tradicionais, com cabos de bétula encaracolada ou chifre de rena e lâminas guardadas em bainhas de couro. O Lapinleuku, de lâmina larga, e as facas de filetar que levaram a marca aos mercados de exportação são seus formatos mais reconhecíveis.',
      'kupilka':
        'A Kupilka é uma marca finlandesa de utensílios de mesa para atividades ao ar livre, tocada pela empresa familiar Plasthill Oy em Kontiolahti, na Carélia do Norte. Seus copos, pratos e talheres são moldados em um compósito próprio de fibra natural, o Kareline, composto de cerca de metade celulose de conífera nórdica e metade poliolefinas de grau alimentício, produzido internamente na unidade de Pyytivaara com eletricidade renovável certificada. A origem dos utensílios de mesa é bem documentada pela marca, mas o catálogo mais amplo (facas e pederneiras em particular) recorre a fornecedores externos.',
      'nordicbuddies':
        'A Nordicbuddies é uma empresa de design finlandesa sediada em Helsinque (registrada como Oy Bisly Ltd) e licenciada oficial de Moomin, Píppi Meialonga e Mauri Kunnas, que vende meias, camisetas, bonés, bolsas e outros acessórios. O trabalho de design é feito em Helsinque, mas a própria página About Us da marca situa a fabricação principalmente na Europa e na Eurásia, com apenas parte da produção na Finlândia, e seu algodão nas regiões de Anhui e Henan, na China. Os dados de origem declarados pelos varejistas apontam para a China no nível do produto, portanto a marca deve ser descrita como de design finlandês, e não de fabricação finlandesa.',
      'marimekko':
        'A Marimekko foi fundada na Finlândia em 1951 e ainda opera sua própria estamparia têxtil em Helsinque, que estampa mais de um milhão de metros de tecido por ano, incluindo todos os tecidos vendidos por metro. Os produtos acabados são costurados por uma rede de fornecedores parceiros, e a Marimekko cita Finlândia, países bálticos, Portugal, China e Tailândia entre seus países de fabricação. Em 2025, 54 por cento dos produtos foram feitos na UE e em outros países europeus, portanto não se pode presumir que um produto Marimekko seja feito na Finlândia sem verificar a peça individual.',
      'rento':
        'A Rento é uma linha de sauna de design finlandês pertencente à empresa familiar Tammer Brands Oy, de Tampere. A marca faz o design na Finlândia e usa amplamente o selo Design from Finland, mas a produção está dividida entre a Finlândia, outros países europeus e fábricas auditadas pelo Amfori BSCI, e o país de origem é definido por produto, e não por marca. Vários itens vendidos como Rento são feitos fora da Finlândia, portanto a origem precisa ser verificada produto a produto.',
      'lapuan-kankurit':
        'A Lapuan Kankurit é uma tecelagem finlandesa cuja fábrica principal fica em Lapua e cujas raízes remontam a 1917. Segundo a própria empresa, 95% de seus produtos são tecidos em Lapua, enquanto o restante é feito em uma fábrica de propriedade parcial em Kaunas, na Lituânia, e por subcontratados europeus. Todas as matérias-primas vêm de fora da Finlândia: linho da França, dos Países Baixos e da Bélgica, mohair da África do Sul.',
      'iittala':
        'A Iittala é uma marca de design finlandesa construída em torno da fábrica de vidro de Iittala, fundada em 1881 no vilarejo de Iittala e hoje parte do Fiskars Group. Sua empresa-mãe descreve a unidade de Hämeenlinna como a única fábrica de vidro ainda em operação na Finlândia, com cerca de 200 funcionários, e a Iittala afirma no próprio site que os vasos de Alvar Aalto e o vidro Ultima Thule são soprados à boca ali. Sua cerâmica, porém, é feita por fabricantes terceirizados no exterior, portanto a alegação de origem finlandesa vale apenas para os artigos de vidro.',
      'arctic-warriors':
        'A Arctic Warriors é uma pequena empresa finlandesa de produtos naturais registrada no vilarejo de Narkaus, perto de Rovaniemi, na Lapônia, fundada em 2014. Vende pós de frutos silvestres e de ervas e elixires de ervas à base de glicerol feitos com ervas e frutos lapões obtidos de pequenos produtores e coletores locais. Suas próprias páginas de produto indicam a Finlândia como origem, mas não informam um local de produção ou de embalagem.',
      'makia':
        'A Makia é uma empresa de roupas sediada em Helsinque, fundada em 2001, que faz o design na Finlândia e fabrica no exterior. Suas próprias páginas apontam a Türkiye como principal país de produção, com jaquetas e a maioria dos acessórios vindos da China, meias de Portugal e da Türkiye, e uma pequena parte dos acessórios de lã feita na Finlândia. No entanto, as páginas da própria marca divergem entre si quanto à lista completa de países, portanto nenhum detalhamento preciso de origem por categoria pode ser dado como verificado.',
      'pentik':
        'A Pentik é uma marca finlandesa de artigos para a casa que começou em Posio em 1971 e ainda mantém ali uma fábrica de cerâmica e uma oficina de velas anexa. A fábrica não cobre toda a linha, porém: segundo os próprios relatórios de sustentabilidade da marca, cerca de um quarto de seus produtos foi feito na Finlândia em 2022, e o restante veio de outros lugares da Europa e da Ásia. A Pentik afirmou que não destaca o país de fabricação em seus produtos.',
      'arabia':
        'A Arabia é uma marca finlandesa de cerâmica e artigos de mesa enraizada no bairro Arabianranta, em Helsinque, e hoje pertencente ao Fiskars Group. Sua fábrica de cerâmica em Helsinque parou de produzir na primavera de 2016, e a Fiskars afirma nas próprias páginas da marca que os produtos Arabia vêm agora de fabricantes terceirizados de longo prazo, principalmente na Tailândia e na Romênia. O design e o desenvolvimento de produto continuam acontecendo na Finlândia, e o bairro Arabia, em Helsinque, segue como museu, loja e centro de design.',
      'fazer':
        'A Fazer é uma empresa finlandesa de alimentos fundada em Helsinque em 1891, mais conhecida pelo chocolate ao leite Karl Fazer, pelo Geisha e pelo Marianne. Além dos confeitos, o grupo opera negócios de panificação, moagem e restaurantes em vários países. Sua estrutura de produção está mudando no momento: uma nova fábrica de chocolate está sendo construída em Lahti e, no verão de 2026, a Fazer comprou fábricas de confeitos na Suécia.',
      'moomin':
        'A Moomin Characters Oy Ltd é a empresa familiar de Helsinque que detém e supervisiona os direitos sobre os personagens Moomin de Tove Jansson, que apareceram pela primeira vez no livro de 1945 The Moomins and the Great Flood. A empresa parou de fabricar produtos por conta própria há décadas: todo item vendido como produto Moomin vem de um licenciado, e a rede chega a mais de 800 deles no mundo todo. No lado dos presentes, a linha mais reconhecível são as canecas de cerâmica Moomin da Arabia, uma série que começou em 1990 e hoje reúne mais de cem modelos.',
    },
  },
  ja: {
    eyebrow: 'ブランド',
    founded: (y) => `${y} 年創業`,
    officialSite: (n) => `${n} の公式サイト`,
    productsH2: (n) => `この店の ${n}`,
    indexH1: '取り扱いブランド',
    indexIntro:
      'この店のものを誰がどこで作っているか。各紹介はブランド自身が公表している内容にもとづき、公式サイトへリンクしています。',
    indexCount: (n) => `商品 ${n} 点`,
    profile: {
      'aarikka':
        'Aarikkaは1954年にKaija AarikkaとErkki Ruokonenが創業したフィンランドのデザインハウスで、木製ビーズとジュエリーで知られ、2017年からMartinex Oyが所有している。同ブランドはデザインと、木製ジュエリーおよび木製ホーム用品の手作業による組み立てをフィンランドで行うとしているが、全製品がフィンランド製のシリーズだとは称していない。衣料品には製品ごとにフィンランド国外の製造国が明記されており、原材料の一部は海外から調達されている。',
      'foodin':
        'FoodinはユヴァスキュラのVaajakoskiを拠点とするフィンランドの家族経営オーガニック食品会社で、輸入だけでなく製造も行っていると自ら説明している。ローチョコレート製品は同社自身のVaajakoski工場で石臼挽きされ、手作業で仕上げられており、カカオはペルーのアマゾンで栽培されたクリオロ種の豆を使用している。同じ工場は同社のプロテインバーの生産拠点としても挙げられている。',
      'kuivalihakundi':
        'Kuivalihakundi（Dried Buddy Oy）はフィンランドのジャーキーメーカーで、TuusulaのJokelaにある自社の認可食肉施設で肉の乾燥、カット、包装を行っている。約1,500平方メートルの施設で、2023年末に移転した。製造場所はブランド自身のページと自治体の公式な食品施設決定の両方で裏付けられている。ブランド自身の表示によれば牛肉はEU域内で飼育・と畜されており、原料肉そのものがフィンランド産であることは確認されていない。',
      'halti':
        'Haltiは1976年にJuhani Hyokyvaaraが創業したフィンランドのアウトドアブランドで、デザインはSipooの本社で行われている。同ブランドは自社サイトで、生産が複数の国に分散していると述べている。技術的なスポーツウェアは中国、ベトナム、バングラデシュ、加えてイタリア、ウクライナ、リトアニアの欧州サプライヤーである。Halti自身の説明では、フィンランドで作られているのは靴下とニット帽だけであり、したがって同ブランドはフィンランド製ではなく、フィンランドでデザインされたブランドと表現すべきである。',
      'north-outdoor':
        'North OutdoorはPyka Oyが運営するフィンランドのメリノウール衣料ブランドで、2021年にオウルのRusko地区に開設した編み工場で最もよく知られている。Yleはこれをフィンランド最大のウールセーター工場と報じた。同ブランドは生産を複数の国に分けており、その分担を単一の原産地ではなく製品カテゴリー別に説明している。ただし、その分担についてブランドが公表している英語の説明は内部で矛盾しているため、カテゴリー別の内訳を確定した事実として繰り返すべきではない。',
      'marttiini':
        'Marttiiniは1928年、鍛冶職人のJanne Marttiiniがロヴァニエミにプーッコ工房を開いたことに始まるフィンランドのナイフブランドである。現在のカタログはハンティングナイフやフィレナイフから、キッチンナイフ、折りたたみナイフ、伝統的なプーッコまで幅広く、柄はカーリーバーチまたはトナカイの角、刃は革のシースに収められる。幅広の刃のLapinleukuと、ブランドを輸出市場へ導いたフィレナイフが、最も見分けやすい形である。',
      'kupilka':
        'Kupilkaは北カレリアのKontiolahtiで家族経営企業Plasthill Oyが運営するフィンランドのアウトドア食器ブランドである。カップ、皿、カトラリーは独自のKareline天然繊維コンポジット（およそ半分が北欧の針葉樹セルロース、半分が食品グレードのポリオレフィン）から成形され、認証された再生可能電力を使ってPyytivaaraの拠点で自社生産されている。食器の原産地はブランドによって十分に文書化されているが、より広いカタログ、特にナイフとファイヤースチールは外部サプライヤーに依存している。',
      'nordicbuddies':
        'Nordicbuddiesはヘルシンキを拠点とするフィンランドのデザイン会社（登記名Oy Bisly Ltd）で、ムーミン、長くつ下のピッピ、Mauri Kunnasの公式ライセンシーとして、靴下、シャツ、キャップ、バッグなどのアクセサリーを販売している。デザイン作業はヘルシンキで行われるが、ブランド自身のAbout Usページは製造を主に欧州とユーラシアに置き、フィンランドでの生産は一部のみとしており、綿は中国の安徽省と河南省としている。小売業者が申告する原産地データは製品レベルで中国を示しているため、同ブランドはフィンランド製ではなく、フィンランドでデザインされたブランドと表現すべきである。',
      'marimekko':
        'Marimekkoは1951年にフィンランドで創業し、現在もヘルシンキで自社のテキスタイルプリント工場を運営しており、年間100万メートルを超える生地をプリントしている。メートル単位で販売される生地はすべてここでプリントされる。完成品そのものはパートナーサプライヤーのネットワークが縫製しており、Marimekkoは製造国としてフィンランド、バルト諸国、ポルトガル、中国、タイを挙げている。2025年には製品の54パーセントがEUおよびその他の欧州諸国で作られたため、個々の商品を確認せずにMarimekko製品がフィンランド製だと決めつけることはできない。',
      'rento':
        'Rentoはタンペレの家族経営企業Tammer Brands Oyが所有する、フィンランドでデザインされたサウナ用品シリーズである。同ブランドはフィンランドでデザインを行い、Design from Finlandマークを広く付けているが、生産はフィンランド、その他の欧州諸国、およびAmfori BSCIの監査を受けた工場に分かれており、原産国はブランド単位ではなく製品ごとに決まる。Rentoとして販売される複数の商品はフィンランド国外で作られているため、原産地は製品ごとに確認する必要がある。',
      'lapuan-kankurit':
        'Lapuan Kankuritはフィンランドの織物会社で、主力の工場はLapuaにあり、そのルーツは1917年にさかのぼる。同社自身の説明では製品の95%をLapuaで織っており、残りはリトアニアのカウナスにある一部出資の工場と、欧州の下請け業者が製造している。原材料はすべてフィンランド国外を原産とし、亜麻はフランス、オランダ、ベルギーから、モヘアは南アフリカからである。',
      'iittala':
        'Iittalaは1881年にIittala村に創業したイッタラガラス工場を核とするフィンランドのデザインブランドで、現在はFiskars Groupの一部である。親会社はハメーンリンナの拠点をフィンランドで今も操業している唯一のガラス工場と説明し、約200人を雇用しているとしている。Iittalaは自社サイトで、Alvar Aaltoのベースとウルティマ・トゥーレ（Ultima Thule）のガラスがそこで宙吹きされていると述べている。一方、陶器は海外の委託製造業者が作っているため、フィンランド原産という主張はガラス製品にのみ当てはまる。',
      'arctic-warriors':
        'Arctic Warriorsは2014年に創業した小規模なフィンランドの自然製品会社で、ラップランドのロヴァニエミ近郊のNarkaus村に登記されている。ラップランドのハーブとベリーから作るベリー・ハーブパウダーやグリセリンベースのハーブエリキシルを販売しており、原料は地元の小規模生産者や採取者から調達している。自社の製品ページは原産地をフィンランドと記載しているが、生産地や包装地は明記していない。',
      'makia':
        'Makiaは2001年に創業したヘルシンキ拠点の衣料会社で、フィンランドでデザインし、海外で製造している。自社ページでは主な生産国をトルコとし、ジャケットと大半のアクセサリーは中国、靴下はポルトガルとトルコ、ウール製アクセサリーの一部はフィンランド製としている。ただし、ブランド自身のページどうしで国のリスト全体が食い違っているため、カテゴリー別の正確な原産地の内訳を検証済みとして述べることはできない。',
      'pentik':
        'Pentikは1971年にPosioで始まったフィンランドのホームウェアブランドで、現在も同地でセラミック工場と隣接するキャンドル工房を運営している。ただし工場が全製品をカバーしているわけではない。ブランド自身のサステナビリティ報告によれば、2022年にフィンランドで作られたのは製品の約4分の1で、残りは欧州とアジアの他地域から調達されている。Pentikは製品に製造国を強調していないと述べている。',
      'arabia':
        'ArabiaはヘルシンキのArabianranta地区に根ざしたフィンランドの陶磁器・食器ブランドで、現在はFiskars Groupが所有している。ヘルシンキの陶器工場は2016年春に生産を停止し、Fiskarsは自社のブランドページで、Arabia製品は現在、主にタイとルーマニアの長期契約製造業者から来ていると述べている。デザインと製品開発は今もフィンランドで行われており、ヘルシンキのArabia地区は美術館、店舗、デザインセンターとして続いている。',
      'fazer':
        'Fazerは1891年にヘルシンキで創業したフィンランドの食品会社で、Karl Fazerのミルクチョコレート、Geisha、Marianneで最もよく知られている。菓子以外にも、グループは複数の国でベーカリー、製粉、レストラン事業を営んでいる。生産体制は現在変化しつつあり、ラハティに新しいチョコレート工場が建設中で、2026年夏にはFazerがスウェーデンの菓子工場を買収した。',
      'moomin':
        'Moomin Characters Oy Ltdは、Tove Janssonのムーミンのキャラクターの権利を所有・管理するヘルシンキの家族経営会社である。ムーミンは1945年の書籍『小さなトロールと大きな洪水』で初めて登場した。同社は数十年前に自社での商品製造をやめており、ムーミン製品として販売されるすべての商品はライセンシーによるもので、そのネットワークは世界で800社を超える。ギフト分野で最も広く知られているのはArabiaの陶製ムーミンマグで、1990年に始まり、現在では100を超えるデザインがある。',
    },
  },
  'zh-CN': {
    eyebrow: '品牌',
    founded: (y) => `创立于 ${y} 年`,
    officialSite: (n) => `${n} 官方网站`,
    productsH2: (n) => `本店的${n}商品`,
    indexH1: '我们的品牌',
    indexIntro:
      '这家店里的东西由谁制作、在哪里制作。每篇介绍都依据品牌自己公布的信息写成,并链接到其官方网站。',
    indexCount: (n) => `${n} 件商品`,
    profile: {
      'aarikka':
        'Aarikka 是芬兰设计公司，1954 年由 Kaija Aarikka 和 Erkki Ruokonen 创立，以木珠和首饰闻名，2017 年起由 Martinex Oy 拥有。品牌把设计以及木质首饰和木质家居产品的手工组装归于芬兰，但并未把自己表述为完全在芬兰制造的产品系列。其服装按单件产品明确标注了芬兰以外的制造国，部分原材料也从国外采购。',
      'foodin':
        'Foodin 是一家芬兰家族所有的有机食品公司，位于于韦斯屈莱的 Vaajakoski，公司称自己从事制造，而不只是进口。其生巧克力系列在公司自有的 Vaajakoski 工厂石磨并手工完成，可可来自秘鲁亚马逊地区种植的 Criollo 豆。同一工厂也被列为公司蛋白棒的生产地点。',
      'kuivalihakundi':
        'Kuivalihakundi（Dried Buddy Oy）是芬兰肉干制造商，在图苏拉 Jokela 自有的核准肉类加工厂完成肉品的干燥、切割和包装；该设施约 1,500 平方米，公司于 2023 年底迁入。制造地点既有品牌自己的网页佐证，也有市政当局关于食品经营场所的正式决定佐证。品牌自己的标签写明牛肉在欧盟境内饲养和屠宰，因此原料肉本身未确认为芬兰产。',
      'halti':
        'Halti 是芬兰户外品牌，1976 年由 Juhani Hyokyvaara 创立，设计在其 Sipoo 总部完成。品牌在自家网站上说明，生产分散在多个国家：技术运动服装来自中国、越南和孟加拉国，另有意大利、乌克兰和立陶宛的欧洲供应商。按 Halti 自己的说法，只有袜子和针织帽在芬兰制造，因此该品牌应描述为芬兰设计，而非芬兰制造。',
      'north-outdoor':
        'North Outdoor 是由 Pyka Oy 经营的芬兰美利奴羊毛服装品牌，最为人知的是 2021 年在奥卢 Rusko 区开设的针织厂，Yle 报道称其为芬兰最大的羊毛衫工厂。品牌把生产分散到多个国家，并按产品类别而非单一原产地来描述这种分工。其自己公布的英文分工说明前后不一致，因此不应把各类别的具体分工当作已确定的事实复述。',
      'marttiini':
        'Marttiini 是芬兰刀具品牌，始于 1928 年，当时铁匠 Janne Marttiini 在罗瓦涅米开设了 puukko 刀作坊。如今的产品目录从猎刀、剔鱼刀到厨刀、折刀和传统 puukko 刀，刀柄用卷曲桦木或驯鹿角，刀身配皮鞘。宽刃的 Lapinleuku 和把品牌带入出口市场的剔鱼刀是其最易辨认的造型。',
      'kupilka':
        'Kupilka 是芬兰户外餐具品牌，由北卡累利阿 Kontiolahti 的家族公司 Plasthill Oy 经营。其杯子、盘子和餐具用自有的 Kareline 天然纤维复合材料模压而成，材料约一半是北欧针叶木纤维素、一半是食品级聚烯烃，在 Pyytivaara 厂区以认证可再生电力自行生产。餐具的原产地由品牌充分记录，但更广的产品线（尤其是刀具和打火棒）依赖外部供应商。',
      'nordicbuddies':
        'Nordicbuddies 是总部位于赫尔辛基的芬兰设计公司（注册名为 Oy Bisly Ltd），也是姆明、长袜子皮皮和 Mauri Kunnas 的官方被许可方，销售袜子、衬衫、帽子、包袋等配饰。设计工作在赫尔辛基完成，但品牌自己的 About Us 页面把制造主要放在欧洲和欧亚地区，只有一部分生产在芬兰，其棉花来自中国安徽和河南地区。零售商申报的原产地数据在单品层面指向中国，因此该品牌应描述为芬兰设计，而非芬兰制造。',
      'marimekko':
        'Marimekko 于 1951 年在芬兰创立，至今在赫尔辛基经营自有的纺织印花厂，每年印制超过一百万米面料，包括所有按米出售的面料。成品本身由合作供应商网络缝制，Marimekko 列出的制造国包括芬兰、波罗的海国家、葡萄牙、中国和泰国。2025 年有 54% 的产品在欧盟及其他欧洲国家生产，因此在未核对具体单品之前，不能假定某件 Marimekko 产品是在芬兰制造的。',
      'rento':
        'Rento 是芬兰设计的桑拿用品系列，由坦佩雷的家族公司 Tammer Brands Oy 拥有。品牌在芬兰设计，并广泛使用 Design from Finland 标志，但生产分散在芬兰、其他欧洲国家以及通过 Amfori BSCI 审核的工厂，原产国按产品而非按品牌确定。以 Rento 名义销售的若干产品在芬兰以外制造，因此原产地必须逐件产品核对。',
      'lapuan-kankurit':
        'Lapuan Kankurit 是芬兰织造公司，主厂在拉普阿，源头可追溯到 1917 年。按其自己的说法，95% 的产品在拉普阿织造，其余在立陶宛考纳斯一家参股工厂以及欧洲分包商处制造。所有原材料都来自芬兰以外：亚麻来自法国、荷兰和比利时，马海毛来自南非。',
      'iittala':
        'Iittala 是围绕 Iittala 玻璃厂建立的芬兰设计品牌，该厂 1881 年创立于 Iittala 村，现属 Fiskars Group。其母公司称海门林纳的厂区是芬兰唯一仍在运营的玻璃厂，约有 200 名员工；Iittala 在自家网站上说明，Alvar Aalto 花瓶和 Ultima Thule 玻璃器皿在那里由人工吹制。不过其陶瓷制品由国外的代工厂生产，因此芬兰原产的说法仅适用于玻璃制品。',
      'arctic-warriors':
        'Arctic Warriors 是一家小型芬兰天然产品公司，注册地在拉普兰罗瓦涅米附近的 Narkaus 村，成立于 2014 年。公司销售浆果和草本粉末以及甘油基草本酏剂，原料是来自当地小农和采集者的拉普兰草本与浆果。其自己的产品页面把原产地标为芬兰，但未说明生产或包装地点。',
      'makia':
        'Makia 是总部位于赫尔辛基的服装公司，成立于 2001 年，在芬兰设计、在国外制造。其自己的网页把土耳其列为主要生产国，夹克和大多数配饰来自中国，袜子来自葡萄牙和土耳其，另有一小部分羊毛配饰在芬兰制造。不过品牌自己的网页在完整国家清单上互相矛盾，因此无法把各类别的确切原产地分工当作已核实的信息陈述。',
      'pentik':
        'Pentik 是芬兰家居用品品牌，1971 年始于 Posio，至今在那里经营一家陶瓷厂和相邻的蜡烛作坊。不过该厂并不覆盖全部产品线：按品牌自己的可持续发展报告，2022 年约四分之一的产品在芬兰制造，其余从欧洲和亚洲其他地方采购。Pentik 曾表示，它不会在产品上突出标示制造国。',
      'arabia':
        'Arabia 是芬兰陶瓷和餐具品牌，根植于赫尔辛基的 Arabianranta 区，如今由 Fiskars Group 拥有。其赫尔辛基陶瓷厂已于 2016 年春季停产，Fiskars 在自家品牌页面上说明，Arabia 产品现在来自长期代工厂，主要在泰国和罗马尼亚。设计和产品开发仍在芬兰进行，赫尔辛基的 Arabia 街区继续作为博物馆、商店和设计中心运营。',
      'fazer':
        'Fazer 是芬兰食品公司，1891 年在赫尔辛基创立，以 Karl Fazer 牛奶巧克力、Geisha 和 Marianne 最为人知。除糖果外，集团还在多个国家经营烘焙、面粉厂和餐饮业务。其生产布局目前正在变化：拉赫蒂正在建设一座新的巧克力工厂，2026 年夏天 Fazer 收购了瑞典的糖果工厂。',
      'moomin':
        'Moomin Characters Oy Ltd 是位于赫尔辛基的家族公司，拥有并管理 Tove Jansson 笔下姆明角色的权利；这些角色首次出现在 1945 年的《姆明和大洪水》一书中。公司数十年前就不再自行生产商品：以姆明产品名义出售的每一件物品都来自被许可方，这一网络在全球有 800 多家。在礼品方面最易辨认的产品线是 Arabia 的姆明陶瓷马克杯，该系列始于 1990 年，如今已有一百多种设计。',
    },
  },
  ko: {
    eyebrow: '브랜드',
    founded: (y) => `${y}년 설립`,
    officialSite: (n) => `${n} 공식 사이트`,
    productsH2: (n) => `이 상점의 ${n}`,
    indexH1: '취급 브랜드',
    indexIntro:
      '이 상점의 물건을 누가 어디서 만드는가. 각 소개는 브랜드가 스스로 공개한 내용을 바탕으로 쓰였고 공식 사이트로 연결됩니다.',
    indexCount: (n) => `상품 ${n}개`,
    profile: {
      'aarikka':
        'Aarikka는 1954년 Kaija Aarikka와 Erkki Ruokonen이 설립한 핀란드 디자인 하우스로, 나무 비즈와 주얼리로 알려져 있으며 2017년부터 Martinex Oy가 소유하고 있습니다. 브랜드는 디자인과 나무 주얼리 및 목재 홈 제품의 수작업 조립을 핀란드에서 한다고 밝히지만, 제품군 전체가 핀란드에서 제조된다고 내세우지는 않습니다. 의류에는 핀란드 밖의 제조국이 제품별로 명시되어 있고, 일부 원자재는 해외에서 조달됩니다.',
      'foodin':
        'Foodin은 위베스퀼레(Jyväskylä)의 바야코스키(Vaajakoski)에 본사를 둔 가족 소유 핀란드 유기농 식품 회사로, 수입만 하는 것이 아니라 제조도 한다고 스스로 설명합니다. 로 초콜릿 제품군은 회사 자체 바야코스키 공장에서 돌로 갈아 손으로 마무리하며, 카카오는 페루 아마존에서 재배된 크리올로(Criollo) 원두를 씁니다. 같은 공장은 이 회사 단백질 바의 생산지로도 명시되어 있습니다.',
      'kuivalihakundi':
        'Kuivalihakundi(Dried Buddy Oy)는 투술라(Tuusula)의 요켈라(Jokela)에 있는 자사 승인 육류 가공장에서 고기를 건조하고 자르고 포장하는 핀란드 육포 제조사로, 2023년 말에 약 1,500 m2 규모의 이 시설로 옮겼습니다. 제조 장소는 브랜드 자체 페이지와 지자체의 공식 식품취급장 결정 양쪽으로 뒷받침됩니다. 브랜드 자체 표기에 따르면 소고기는 EU에서 사육되고 도축되므로, 원료육 자체가 핀란드산이라고 확인되지는 않습니다.',
      'halti':
        'Halti는 1976년 Juhani Hyokyvaara가 설립한 핀란드 아웃도어 브랜드로, 디자인은 시포(Sipoo) 본사에서 이루어집니다. 브랜드는 자사 사이트에서 생산이 여러 나라에 나뉘어 있다고 밝힙니다: 기능성 스포츠웨어는 중국, 베트남, 방글라데시에서 만들고, 여기에 이탈리아, 우크라이나, 리투아니아의 유럽 공급업체가 더해집니다. Halti 자신의 설명에 따르면 핀란드에서 만들어지는 것은 양말과 비니뿐이므로, 이 브랜드는 핀란드 제조가 아니라 핀란드 디자인으로 설명해야 합니다.',
      'north-outdoor':
        'North Outdoor는 Pyka Oy가 운영하는 핀란드 메리노 울 의류 브랜드로, 2021년 오울루(Oulu)의 루스코(Rusko) 지구에 문을 연 편직 공장으로 가장 잘 알려져 있으며, Yle은 이 공장을 핀란드 최대의 울 스웨터 공장으로 보도했습니다. 브랜드는 생산을 여러 나라에 나누고 있으며, 원산지를 하나로 밝히는 대신 제품 카테고리별로 그 분담을 설명합니다. 다만 그 분담에 관한 브랜드 자체 영문 설명은 내용이 서로 어긋나므로, 카테고리별 구분을 확정된 사실로 옮겨서는 안 됩니다.',
      'marttiini':
        'Marttiini는 1928년 대장장이 Janne Marttiini가 로바니에미에 푸코(puukko) 공방을 열면서 시작된 핀란드 나이프 브랜드입니다. 오늘날 제품군은 사냥용 나이프와 필렛 나이프부터 주방용 나이프, 접이식 나이프, 전통 푸코까지 이어지며, 손잡이는 무늬자작나무나 순록 뿔로 만들고 칼날은 가죽 칼집에 담아 제공합니다. 날이 넓은 라핀레우쿠(Lapinleuku)와 브랜드를 수출 시장으로 이끈 필렛 나이프가 가장 알아보기 쉬운 형태입니다.',
      'kupilka':
        'Kupilka는 북카렐리아 콘티올라흐티(Kontiolahti)에 있는 가족 회사 Plasthill Oy가 운영하는 핀란드 아웃도어 식기 브랜드입니다. 컵, 접시, 커틀러리는 북유럽산 침엽수 셀룰로스 약 절반과 식품용 폴리올레핀 약 절반으로 이루어진 자체 Kareline 천연섬유 복합재로 성형되며, 인증 재생에너지 전력을 쓰는 Pyytivaara 공장에서 자체 생산됩니다. 식기의 원산지는 브랜드가 잘 문서화해 두었지만, 더 넓은 제품군(특히 나이프와 파이어 스틸)은 외부 공급업체에 의존합니다.',
      'nordicbuddies':
        'Nordicbuddies는 헬싱키에 자리한 핀란드 디자인 회사(등록명 Oy Bisly Ltd)이자 무민, Pippi Longstocking, Mauri Kunnas의 공식 라이선시로, 양말, 셔츠, 모자, 가방 등 액세서리를 판매합니다. 디자인 작업은 헬싱키에서 하지만, 브랜드 자체 About Us 페이지는 제조가 주로 유럽과 유라시아에서 이루어지고 핀란드 생산은 일부뿐이며 면화는 중국 안후이성과 허난성에서 온다고 밝힙니다. 소매점이 신고한 원산지 자료는 제품 단위에서 중국을 가리키므로, 이 브랜드는 핀란드 제조가 아니라 핀란드 디자인으로 설명해야 합니다.',
      'marimekko':
        'Marimekko는 1951년 핀란드에서 설립되었고 지금도 헬싱키에서 자체 텍스타일 프린팅 공장을 운영하며, 이곳에서 연간 100만 미터가 넘는 원단을 인쇄합니다. 미터 단위로 판매되는 원단은 모두 여기서 인쇄됩니다. 완제품 자체는 협력 공급업체 네트워크가 봉제하며, Marimekko는 제조국으로 핀란드, 발트 국가들, 포르투갈, 중국, 태국을 꼽습니다. 2025년에는 제품의 54퍼센트가 EU 및 그 밖의 유럽 국가에서 만들어졌으므로, 개별 제품을 확인하지 않고 Marimekko 제품이 핀란드에서 만들어졌다고 단정할 수는 없습니다.',
      'rento':
        'Rento는 탐페레(Tampere)의 가족 회사 Tammer Brands Oy가 소유한, 핀란드에서 디자인된 사우나 용품군입니다. 브랜드는 핀란드에서 디자인하고 Design from Finland 마크를 폭넓게 달고 있지만, 생산은 핀란드, 다른 유럽 국가, 그리고 Amfori BSCI 감사를 받은 공장으로 나뉘며, 원산지는 브랜드 단위가 아니라 제품 단위로 정해집니다. Rento로 판매되는 여러 제품이 핀란드 밖에서 만들어지므로, 원산지는 제품마다 확인해야 합니다.',
      'lapuan-kankurit':
        'Lapuan Kankurit은 주력 공장이 라푸아(Lapua)에 있고 뿌리가 1917년까지 거슬러 올라가는 핀란드 직물 회사입니다. 자체 설명에 따르면 제품의 95%를 라푸아에서 직조하고, 나머지는 리투아니아 카우나스에 있는 일부 지분 보유 공장과 유럽 하청업체가 만듭니다. 원자재는 모두 핀란드 밖에서 옵니다: 아마는 프랑스, 네덜란드, 벨기에에서, 모헤어는 남아프리카공화국에서 옵니다.',
      'iittala':
        'Iittala는 1881년 Iittala 마을에 세워졌고 현재 Fiskars Group에 속한 Iittala 유리 공장을 중심으로 한 핀란드 디자인 브랜드입니다. 모회사는 하멘린나(Hämeenlinna) 공장을 핀란드에서 아직 가동되는 유일한 유리 공장이라고 설명하며 약 200명이 일한다고 밝히고, Iittala는 자사 사이트에서 Alvar Aalto 화병과 Ultima Thule 유리가 그곳에서 입으로 불어 만들어진다고 밝힙니다. 다만 도자기는 해외 위탁 제조사가 만들므로, 핀란드 원산지 주장은 유리 제품에만 해당합니다.',
      'arctic-warriors':
        'Arctic Warriors는 2014년에 설립된 소규모 핀란드 천연 제품 회사로, 라플란드 로바니에미 인근 나르카우스(Narkaus) 마을에 등록되어 있습니다. 지역 소농과 채집인에게서 조달한 라플란드의 허브와 베리로 만든 베리 및 허브 분말과 글리세롤 기반 허브 엘릭서를 판매합니다. 자체 제품 페이지는 원산지를 핀란드로 표시하지만, 생산지나 포장지는 밝히지 않습니다.',
      'makia':
        'Makia는 2001년에 설립된 헬싱키 기반 의류 회사로, 핀란드에서 디자인하고 해외에서 제조합니다. 자체 페이지는 주요 생산국으로 튀르키예를 꼽으며, 재킷과 액세서리 대부분은 중국에서, 양말은 포르투갈과 튀르키예에서, 모직 액세서리의 일부는 핀란드에서 만든다고 밝힙니다. 다만 브랜드 자체 페이지들이 전체 국가 목록에서 서로 어긋나므로, 카테고리별 원산지 구분을 검증된 것으로 제시할 수는 없습니다.',
      'pentik':
        'Pentik은 1971년 포시오(Posio)에서 시작된 핀란드 홈웨어 브랜드로, 지금도 그곳에서 도자기 공장과 이에 딸린 양초 공방을 운영합니다. 다만 이 공장이 전체 제품군을 감당하지는 않습니다: 브랜드 자체 지속가능성 보고에 따르면 2022년에 제품의 약 4분의 1이 핀란드에서 만들어졌고, 나머지는 유럽과 아시아의 다른 지역에서 조달되었습니다. Pentik은 제품에 제조국을 부각하지 않는다고 밝힌 바 있습니다.',
      'arabia':
        'Arabia는 헬싱키의 아라비안란타(Arabianranta) 지역에 뿌리를 둔 핀란드 도자기 및 식기 브랜드로, 현재는 Fiskars Group이 소유하고 있습니다. 헬싱키 도자기 공장은 2016년 봄에 생산을 멈췄고, Fiskars는 자사 브랜드 페이지에서 Arabia 제품이 이제 주로 태국과 루마니아의 장기 위탁 제조사에서 나온다고 밝힙니다. 디자인과 제품 개발은 여전히 핀란드에서 이루어지며, 헬싱키의 Arabia 구역은 박물관과 매장, 디자인 센터로 이어지고 있습니다.',
      'fazer':
        'Fazer는 1891년 헬싱키에서 설립된 핀란드 식품 회사로, Karl Fazer 밀크 초콜릿과 Geisha, Marianne로 가장 잘 알려져 있습니다. 제과 외에도 그룹은 여러 나라에서 제빵, 제분, 레스토랑 사업을 운영합니다. 생산 거점은 현재 옮겨지는 중입니다: 라흐티(Lahti)에 새 초콜릿 공장이 지어지고 있고, 2026년 여름에 Fazer는 스웨덴의 제과 공장들을 인수했습니다.',
      'moomin':
        'Moomin Characters Oy Ltd는 Tove Jansson의 무민 캐릭터 권리를 소유하고 관리하는 헬싱키의 가족 회사이며, 이 캐릭터들은 1945년 책 『무민 가족과 대홍수』(The Moomins and the Great Flood)에서 처음 등장했습니다. 회사는 수십 년 전에 직접 상품을 만드는 일을 그만두었습니다: 무민 제품으로 판매되는 모든 품목은 라이선시가 만들며, 그 네트워크는 전 세계 800곳이 넘습니다. 선물 쪽에서 가장 잘 알려진 제품군은 Arabia의 무민 도자기 머그로, 1990년에 시작된 이 시리즈는 이제 100가지가 넘는 디자인을 아우릅니다.',
    },
  },
}
