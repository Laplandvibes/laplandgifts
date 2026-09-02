import type { Lang } from '../i18n/useLang'

/**
 * Compliance-tekstit, jotka eivät kuulu minkään yksittäisen sivun copyyn.
 *
 * Oma tiedosto eikä `shopCopy.ts`:n lisäys, koska nämä ovat lakisääteisiä
 * merkintöjä eivätkä markkinointicopya: ne muuttuvat sääntelyn mukana, ja
 * on hyödyllistä nähdä yhdellä silmäyksellä mitä sivusto lupaa ja kertoo.
 * Sama syy kuin `AiDisclosure.tsx`:n omalla käännöstaulullaan.
 *
 * Kaikki kolme ovat 13.8.2026 compliance-auditin havaintoja.
 */

/** WCAG 2.4.1 (taso A): näppäimistökäyttäjän on päästävä navigaation ohi. */
export const SKIP_TO_CONTENT: Record<Lang, string> = {
  en: 'Skip to content',
  fi: 'Siirry sisältöön',
  de: 'Zum Inhalt springen',
  ja: '本文へスキップ',
  es: 'Saltar al contenido',
  'pt-BR': 'Pular para o conteúdo',
  'zh-CN': '跳到主要内容',
  ko: '본문으로 건너뛰기',
  fr: 'Aller au contenu',
  it: 'Vai al contenuto',
  nl: 'Naar de inhoud',
  sv: 'Hoppa till innehållet',
}

/**
 * Tietosuoja-asetuksen 13 artikla: rekisteröidylle on kerrottava
 * käsittelystä **keruuhetkellä**. Uutiskirjelomake keräsi sähköpostit
 * linkittämättä selosteeseen lainkaan.
 */
export const NEWSLETTER_PRIVACY: Record<Lang, { lead: string; link: string }> = {
  en: { lead: 'How we handle your data:', link: 'Privacy Policy' },
  fi: { lead: 'Näin käsittelemme tietojasi:', link: 'Tietosuojaseloste' },
  de: { lead: 'So gehen wir mit Ihren Daten um:', link: 'Datenschutzerklärung' },
  ja: { lead: '個人情報の取り扱いについて：', link: 'プライバシーポリシー' },
  es: { lead: 'Cómo tratamos sus datos:', link: 'Política de Privacidad' },
  'pt-BR': { lead: 'Como tratamos seus dados:', link: 'Política de Privacidade' },
  'zh-CN': { lead: '我们如何处理您的数据：', link: '隐私政策' },
  ko: { lead: '개인정보 처리 방법:', link: '개인정보 처리방침' },
  fr: { lead: 'Comment nous traitons vos données :', link: 'Politique de confidentialité' },
  it: { lead: 'Come trattiamo i tuoi dati:', link: 'Informativa sulla privacy' },
  nl: { lead: 'Hoe wij met uw gegevens omgaan:', link: 'Privacybeleid' },
  sv: { lead: 'Så hanterar vi dina uppgifter:', link: 'Integritetspolicy' },
}

/**
 * Kuluttajansuoja: hinnan vieressä on kerrottava mitä se sisältää.
 * 🔴 Emme voi luvata alv:n sisältyvän, koska emme aseta hintaa emmekä ylläpidä
 * kassaa: kauppa tekee sen. Siksi teksti kertoo KUKA hinnan asettaa ja mitä
 * EU:n ulkopuolelle tilaava voi joutua maksamaan päälle, eikä väitä
 * verokantaa jota emme hallitse.
 */
export const TAX_NOTE: Record<Lang, string> = {
  en: 'The shop sets the final price, taxes and delivery cost at its own checkout. Orders shipped outside the EU may be charged customs duty and import VAT on arrival, paid by the recipient.',
  fi: 'Kauppa määrittää lopullisen hinnan, verot ja toimituskulut omassa kassassaan. EU:n ulkopuolelle lähtevistä tilauksista voidaan periä tulli ja maahantuonnin arvonlisävero saapumismaassa, ja ne maksaa vastaanottaja.',
  de: 'Den Endpreis, die Steuern und die Versandkosten legt der Shop an seiner eigenen Kasse fest. Bei Lieferungen außerhalb der EU können bei der Ankunft Zoll und Einfuhrumsatzsteuer anfallen, die der Empfänger trägt.',
  ja: '最終的な価格、税金、送料は販売店が自社の決済画面で設定します。EU域外への発送では、到着時に関税と輸入付加価値税が課される場合があり、受取人のご負担となります。',
  es: 'La tienda fija el precio final, los impuestos y los gastos de envío en su propia caja. Los pedidos enviados fuera de la UE pueden estar sujetos a aranceles e IVA de importación a la llegada, a cargo del destinatario.',
  'pt-BR':
    'A loja define o preço final, os impostos e o frete no próprio checkout. Pedidos enviados para fora da UE podem ter imposto de importação e IVA cobrados na chegada, pagos pelo destinatário.',
  'zh-CN':
    '最终价格、税费和运费由商店在其自有结账页面确定。寄往欧盟以外的订单可能在到达时被征收关税和进口增值税，由收件人支付。',
  ko: '최종 가격과 세금, 배송비는 상점이 자체 결제 화면에서 정합니다. EU 밖으로 배송되는 주문은 도착 시 관세와 수입 부가가치세가 부과될 수 있으며, 수령인이 부담합니다.',
  fr: 'La boutique fixe le prix final, les taxes et les frais de livraison sur sa propre page de paiement. Les commandes expédiées hors de l’UE peuvent donner lieu à des droits de douane et à une TVA à l’importation à l’arrivée, à la charge du destinataire.',
  it: 'Il negozio stabilisce il prezzo finale, le imposte e le spese di spedizione alla propria cassa. Gli ordini spediti fuori dall’UE possono essere soggetti a dazi doganali e IVA all’importazione all’arrivo, a carico del destinatario.',
  nl: 'De winkel bepaalt de uiteindelijke prijs, de belastingen en de verzendkosten in de eigen kassa. Bij bestellingen buiten de EU kunnen bij aankomst invoerrechten en invoer-btw worden geheven, te betalen door de ontvanger.',
  sv: 'Butiken fastställer slutpriset, skatterna och fraktkostnaden i sin egen kassa. Beställningar som skickas utanför EU kan beläggas med tull och importmoms vid ankomsten, som betalas av mottagaren.',
}
