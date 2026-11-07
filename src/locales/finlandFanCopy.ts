import type { Lang } from '../i18n/useLang'

/**
 * Etusivun Suomi-fanituotteet-kaistan ingressi (7.11.2026). Otsikko on hyllyn oma nimi
 * (subgroups.ts LABELS.finlandtheme), joten se pysyy samana etusivulla ja vaatesivulla.
 *
 * 🔴 "toimittaa myös ulkomaille" pitää paikkansa vain koska jokainen hyllyn tuote on
 * Suomikaupasta (partners.ts: shipsTo 'worldwide'). Jos hyllyyn tulee toisen kaupan
 * tuote, tämä lause on muutettava. Testi `finlandFans.test.ts` vahtii sitä.
 */
export const FINLAND_FAN_COPY: Record<Lang, { lead: string }> = {
  en: { lead: 'Blue and white for match night and Finland’s Independence Day on 6 December. Everything here comes from Suomikauppa, which also ships abroad.' },
  fi: { lead: 'Sinivalkoista kisakatsomoon ja itsenäisyyspäivään 6.12. Kaikki tuotteet tulevat Suomikaupasta, joka toimittaa myös ulkomaille.' },
  sv: { lead: 'Blått och vitt till matchkvällen och Finlands självständighetsdag den 6 december. Allt här kommer från Suomikauppa, som även skickar utomlands.' },
  de: { lead: 'Blau und Weiß für Länderspielabende und den finnischen Unabhängigkeitstag am 6. Dezember. Alle Artikel stammen von Suomikauppa, einem Shop, der auch ins Ausland liefert.' },
  fr: { lead: 'Du bleu et du blanc pour les soirs de match et pour la fête de l’Indépendance finlandaise, le 6 décembre. Tous ces articles viennent de Suomikauppa, qui livre aussi à l’étranger.' },
  es: { lead: 'Azul y blanco para las noches de partido y para el Día de la Independencia de Finlandia, el 6 de diciembre. Todos estos productos vienen de Suomikauppa, que también hace envíos al extranjero.' },
  it: { lead: 'Blu e bianco per le sere delle partite e per la Festa dell\'Indipendenza finlandese, il 6 dicembre. Tutti questi articoli arrivano da Suomikauppa, che spedisce anche all\'estero.' },
  'pt-BR': { lead: 'Azul e branco para a noite de jogo e para o Dia da Independência da Finlândia, em 6 de dezembro. Tudo aqui vem da Suomikauppa, que também envia para o exterior.' },
  nl: { lead: 'Blauw-wit voor wedstrijdavonden en voor de Finse onafhankelijkheidsdag op 6 december. Alles hier komt van de webwinkel Suomikauppa, die ook naar het buitenland verzendt.' },
  ja: { lead: '試合観戦の夜にも、12月6日のフィンランド独立記念日にも、青と白を。ここに並ぶ商品はすべて Suomikauppa の取り扱いで、同店は海外発送にも対応しています。' },
  ko: { lead: '경기가 있는 밤도, 12월 6일 핀란드 독립기념일도 파란색과 흰색으로 함께하세요. 여기 소개한 상품은 모두 Suomikauppa에서 판매하며, 해외로도 배송합니다.' },
  'zh-CN': { lead: '为比赛之夜和12月6日的芬兰独立日准备蓝白装备。这里的所有商品均来自 Suomikauppa，该店也提供海外配送。' },
}
