// src/data/services.js
// ─────────────────────────────────────────────────────────────────
// All service data lives here.
// Both Services.vue (cards) and ServiceDetail.vue (detail page) import from this file.
//
// HOW TO ADD IMAGES:
//   1. Put photos in src/assets/services/<slug>/
//   2. Import them at the top of this file:
//        import gearsHero from '@/assets/services/gears/hero.jpg'
//   3. Set the image field in the relevant service object.
// ─────────────────────────────────────────────────────────────────

export const services = [
  {
    slug: 'gears-sprockets',
    tag: 'Transmisija',
    name: 'Zupčanici i lančanici',
    shortDesc: 'Precizno rezani zupčanici i lančanici za zahtevne primene u prenosu.',
    heroImage: null,

    intro: `Vartig proizvodi širok asortiman zupčanika i lančanika za industrijske prenosne sisteme.
Svaki profil zubaca se seče prema DIN standardima ili prilagođenim specifikacijama, sa uskim tolerancijama i površinskom obradom koja obezbeđuje tih i pouzdan rad tokom dugog veka trajanja.
Radimo na osnovu crteža kupaca, uzoraka ili merenja dobijenih reverznim inženjeringom.`,

    specs: [
      { label: 'Tipovi zupčanika', value: 'Spiralni, konusni, pužni, unutrašnji' },
      { label: 'Raspon modula', value: '0.5 – 20' },
      { label: 'Maksimalni prečnik', value: '2.500 mm' },
      { label: 'Maksimalna širina čela', value: '1000 mm' },
      { label: 'Kvalitet', value: 'DIN 3962 klasa 5–8' },
      { label: 'Materijali', value: 'C45, 42CrMo4, 16MnCr5, nerđajući čelik, bronza' },
      { label: 'Termička obrada', value: 'Cementacija, indukciono kaljenje, nitriranje' },
      { label: 'Površinska završna obrada', value: 'Ra 0.8 – 1.6 µm (brušenje na zahtev)' },
    ],

    gallery: [
      { image: null, caption: 'Veliki cilindrični zupčanik, modul 12, Ø 650 mm' },
      { image: null, caption: 'Par kosih zupčanika za industrijski reduktor' },
      { image: null, caption: 'Lančanici različitih koraka' },
      { image: null, caption: 'Konusni zupčanički par, odnos 1:3' },
    ],

    highlights: [
      'Svi profili verifikovani u centru za merenje zupčanika',
      'Obrada zupčanika, oblikovanje i brušenje u našoj kompaniji',
      'Upareni parovi se isporučuju kao setovi',
      'Serije od 1 do 500+ komada',
    ],
  },

  {
    slug: 'shafts-axles',
    tag: 'Prenos snage',
    name: 'Osovine i vratila',
    shortDesc: 'Prilagođena vratila i sistemi spojnica projektovani prema zahtevima obrtnog momenta.',
    heroImage: null,

    intro: `Od jednostavnih stepenastih vratila do složenih višestepenih vretena, Vartig proizvodi vratila i osovine u širokom spektru materijala i dimenzija. Sve karakteristike — žlebovi za klinove, ozubljenja, navoji, utori i ležišta ležajeva — obrađuju se u što manjem broju stezanja kako bi se održala koncentričnost i dimenzionalna tačnost po celoj dužini.`,

    specs: [
      { label: 'Maksimalna dužina', value: '2000 mm' },
      { label: 'Maksimalni prečnik', value: '500 mm' },
      { label: 'Pravost', value: '≤ 0.02 mm/m' },
      { label: 'Okruglost', value: '≤ 0.005 mm' },
      { label: 'Površinska obrada', value: 'Ra 0.4 µm (brušeno)' },
      { label: 'Tolerancije', value: 'h5 / h6 za ležišta ležajeva' },
      { label: 'Materijali', value: 'C45, 42CrMo4, 34CrNiMo6, nerđajući čelik' },
      { label: 'Karakteristike', value: 'Klinovi, ozubljenja (DIN 5480), navoji, ravne površine' },
    ],

    gallery: [
      { image: null, caption: 'Pogonsko vratilo, Ø 120 mm × 1800 mm' },
      { image: null, caption: 'Ožlebljeno vratilo za ulaz menjača' },
      { image: null, caption: 'Šuplje vratilo sa prirubničkim krajem' },
      { image: null, caption: 'Kratka osovina sa žlebom za klin i navojem' },
    ],

    highlights: [
      'CNC struganje i cilindrično brušenje u sopstvenoj proizvodnji',
      'Kontrola pravosti pune dužine nakon brušenja',
      'Izrada žlebova za klinove prema DIN 6885',
      'Dinamičko balansiranje dostupno na zahtev',
    ],
  },

  {
    slug: 'reducers',
    tag: 'Pogonski sistemi',
    name: 'Reduktori',
    shortDesc: 'Reduktori brzine izrađeni prema specifikacijama za industrijsku primenu.',
    heroImage: null,

    intro: `Vartig projektuje i proizvodi kompletne sklopove reduktora brzine za industrijske primene gde standardne kataloške jedinice ne ispunjavaju zahteve obrtnog momenta, prenosnog odnosa ili montažnog prostora.
Obrađujemo kućišta, proizvodimo sve unutrašnje zupčanike i vratila, nabavljamo ležajeve i zaptivke, sklapamo i testiramo svaku jedinicu pre isporuke.`,

    specs: [
      { label: 'Prenosni odnosi', value: 'Jednostepeni: 1:2 – 1:8 / Višestepeni: do 1:200' },
      { label: 'Izlazni obrtni moment', value: 'Do 50 000 Nm (po zahtevu)' },
      { label: 'Ulazna brzina', value: 'Do 3000 o/min' },
      { label: 'Materijal kućišta', value: 'Liveno gvožđe GJL-250, čelične konstrukcije' },
      { label: 'Konfiguracija vratila', value: 'Koaksijalna, ugaona, pomerena' },
      { label: 'Stepeni', value: '1, 2 ili 3 stepena' },
      { label: 'Podmazivanje', value: 'Uljna kupka ili prinudno podmazivanje' },
      { label: 'Testiranje', value: 'Test bez opterećenja i pod opterećenjem pre isporuke' },
    ],

    gallery: [
      { image: null, caption: 'Dvostepeni kosi reduktor, odnos 1:28' },
      { image: null, caption: 'Ugaoni pužni reduktor' },
      { image: null, caption: 'Kućište reduktora nakon obrade' },
      { image: null, caption: 'Sklopljena jedinica na ispitnom stolu' },
    ],

    highlights: [
      'Potpuno prilagođeno — odnos, raspored vratila i montažni priključci',
      'Kućišta projektovana i obrađena u našoj radionici',
      'Sve unutrašnje komponente proizvodi Vartig',
      'Ispitivanje pod opterećenjem sa izveštajem uključeno',
    ],
  },

  {
    slug: 'couplings-flanges',
    tag: 'Povezivanje',
    name: 'Spojnice i prirubnice',
    shortDesc: 'Krute i elastične spojnice i prirubnički spojevi za prenos obrtnog momenta.',
    heroImage: null,

    intro: `Vartig proizvodi krute i elastične spojnice vratila, kandžaste spojnice, lamelne spojnice
    i prilagođene prirubničke adaptere za povezivanje rotacione opreme. Bilo da vam je potrebna tačna
    zamena za istrošenu spojnicu ili potpuno prilagođena prirubnica za povezivanje dva različita
    standarda vratila, izrađujemo je prema vašem crtežu ili uzorku.`,

    specs: [
      { label: 'Tipovi spojnica', value: 'Krute, kandžaste, lamelne, zupčaste, prirubničke' },
      { label: 'Maksimalni prečnik provrta', value: '300 mm' },
      { label: 'Maksimalni obrtni moment', value: 'Do 20 000 Nm' },
      { label: 'Tolerancije provrta', value: 'H7 standard, ostalo na zahtev' },
      { label: 'Standard žleba za klin', value: 'DIN 6885 / specifikacija kupca' },
      { label: 'Materijali', value: 'C45, 42CrMo4, GJL-250, nerđajući čelik' },
      { label: 'Balansiranje', value: 'Statičko i dinamičko balansiranje dostupno' },
      { label: 'Površina', value: 'Strugana, brušena ili zaštićena premazom' },
    ],

    gallery: [
      { image: null, caption: 'Kruta prirubnička spojnica, Ø 180 mm' },
      { image: null, caption: 'Polovine kandžaste spojnice, obrađene na H7' },
      { image: null, caption: 'Prilagođena adapter prirubnica između dva standarda vratila' },
      { image: null, caption: 'Lamelna spojnica za velike brzine obrtanja' },
    ],

    highlights: [
      'Precizne zamene izrađene prema istrošenim uzorcima',
      'Prilagođeni provrti, žlebovi i konfiguracije zavrtnjeva',
      'Uparene prirubnice isporučuju se u setu',
      'Sertifikat o balansiranju dostupan',
    ],
  },

  {
    slug: 'assemblies',
    tag: 'Montaža',
    name: 'Metalni sklopovi',
    shortDesc: 'Kompleksni višedelni sklopovi sa potpunom dimenzionalnom kontrolom.',
    heroImage: null,

    intro: `Pored pojedinačnih komponenti, Vartig nudi kompletne usluge montaže — od
    mašinski obrađenih delova, ležajeva, zaptivki i pričvrsnih elemenata do gotovog
    podsklopa spremnog za ugradnju. Svaki sklop se dimenzionalno proverava prema crtežu
    pre napuštanja radionice, čime se eliminišu problemi pri montaži kod kupca.`,

    specs: [
      { label: 'Maksimalna težina sklopa', value: '~2000 kg (mostna dizalica dostupna)' },
      { label: 'Kontrola', value: 'CMM i merenje mernim alatima' },
      { label: 'Pričvrsni elementi', value: 'DIN klasa 8.8 / 10.9 standard' },
      { label: 'Ležajevi', value: 'SKF, FAG ili po zahtevu kupca' },
      { label: 'Zaptivke', value: 'Nabavljene i ugrađene prema crtežu' },
      { label: 'Dokumentacija', value: 'Dimenzionalni izveštaj na zahtev' },
      { label: 'Pakovanje', value: 'Drveni sanduk, antikorozivna zaštita' },
      { label: 'Isporuka', value: 'Na adresu kupca ili EXW' },
    ],

    gallery: [
      { image: null, caption: 'Podsklop reduktora spreman za montažu' },
      { image: null, caption: 'Sklop vratila, ležaja i kućišta' },
      { image: null, caption: 'Dimenzionalna kontrola na CMM stolu' },
      { image: null, caption: 'Gotov sklop pripremljen za transport' },
    ],

    highlights: [
      'Jedan dobavljač za delove i montažu',
      'Smanjuje potrebu za ulaznom kontrolom',
      'Mostna dizalica za teške podsklopove',
      'Antikorozivna zaštita i profesionalno pakovanje',
    ],
  },

  {
    slug: 'constructions',
    tag: 'Čelične konstrukcije',
    name: 'Čelične konstrukcije',
    shortDesc: 'Metalne konstrukcije i ramovi izrađeni prema tehničkoj dokumentaciji.',
    heroImage: null,

    intro: `Vartig izrađuje zavarene i vijčane čelične konstrukcije, ramove, nosače,
    konzole i mašinske baze od konstrukcionih čeličnih profila i limova. Sve konstrukcije
    proizvode se prema sertifikovanim crtežima i prolaze dimenzionalnu i kontrolu kvaliteta zavara
    pre površinske zaštite i isporuke.`,

    specs: [
      { label: 'Postupci zavarivanja', value: 'MIG/MAG, TIG, MMA' },
      { label: 'Kvalitet zavara', value: 'EN ISO 5817 klasa B/C' },
      { label: 'Maksimalna veličina konstrukcije', value: 'Do 6000 × 2500 × 2000 mm' },
      { label: 'Maksimalna težina dizanja', value: '5000 kg' },
      { label: 'Materijali', value: 'S235, S355, S690, nerđajući čelik' },
      { label: 'Obrađene površine', value: 'Glodane montažne površine, bušeni otvori' },
      { label: 'Površinska zaštita', value: 'Peskiranje + prajmer + završni premaz, toplo cinkovanje' },
      { label: 'NDT', value: 'Vizuelna kontrola, MT, UT na zahtev' },
    ],

    gallery: [
      { image: null, caption: 'Mašinska baza od S355 čelika' },
      { image: null, caption: 'Zavareni nosač nakon peskiranja' },
      { image: null, caption: 'Konstrukcioni ram sa glodanim montažnim površinama' },
      { image: null, caption: 'Gotova konstrukcija nakon farbanja' },
    ],

    highlights: [
      'Zavarivanje i obrada na jednoj lokaciji',
      'Glodane površine za preciznu montažu mašina',
      'Kompletna površinska zaštita',
      'Izveštaji o kontroli zavara dostupni',
    ],
  },

  {
    slug: 'custom-machining',
    tag: 'CNC obrada',
    name: 'Prilagođena CNC obrada',
    shortDesc: 'Bilo koji metalni deo obrađen prema vašoj tehničkoj dokumentaciji.',
    heroImage: null,

    intro: `Ako imate crtež, 3D model ili čak istrošeni deo koji treba zameniti,
    Vartig ga može izraditi. Naši CNC strugovi i glodalice obrađuju širok spektar
    materijala i geometrija — od jednostavnih čaura do složenih prizmatičnih delova
    sa više stezanja. Prihvatamo pojedinačne prototipove kao i serijsku proizvodnju.`,

    specs: [
      { label: 'CNC struganje', value: 'Ø do 500 mm × 2000 mm dužine' },
      { label: 'CNC glodanje', value: 'Sto 1200 × 600 mm, 5 osa' },
      { label: 'Tolerancije', value: 'IT6 standard; preciznije na zahtev' },
      { label: 'Površinska obrada', value: 'Ra 0.4 µm moguće postići' },
      { label: 'Materijali', value: 'Svi čelici, liveno gvožđe, aluminijum, bronza, mesing' },
      { label: 'Ulazni formati', value: 'DWG, DXF, STEP, IGES, PDF crtež, uzorak' },
      { label: 'Veličina serije', value: 'Od 1 komada do serijske proizvodnje' },
      { label: 'Rok izrade', value: 'Prototip: od 3 dana; serije: po dogovoru' },
    ],

    gallery: [
      { image: null, caption: 'Kompleksan strugani deo sa više prečnika' },
      { image: null, caption: 'Prizmatično kućište nakon 5-osnog glodanja' },
      { image: null, caption: 'Serija čaura, 200 komada' },
      { image: null, caption: 'Prototip prirubnice iz STEP fajla, 1 komad' },
    ],

    highlights: [
      'Prihvata STEP, IGES, DWG, PDF ili fizički uzorak',
      'Od prototipa do serije u istoj radionici',
      'Sertifikati materijala dostupni na zahtev',
      'Kontrolni izveštaj uključen za kritične delove',
    ],
  },

  {
    slug: 'reverse-engineering',
    tag: 'Reverzni inženjering',
    name: 'Reverzni inženjering',
    shortDesc: 'Reprodukcija istrošenih ili zastarelih delova merenjem postojećih komponenti.',
    heroImage: null,

    intro: `Kada originalni crteži nisu dostupni i proizvođač više ne podržava određeni deo,
    Vartig može izmeriti postojeću komponentu — ili njene istrošene ostatke — rekonstruisati
    geometriju, odabrati odgovarajući materijal i proizvesti nove delove koji odgovaraju
    ili poboljšavaju original. Ova usluga je posebno korisna za starije mašine za koje
    rezervni delovi više nisu dostupni na tržištu.`,

    specs: [
      { label: 'Merni alati', value: 'CMM, centar za merenje zupčanika, 3D skener' },
      { label: 'Dokumentacija', value: 'Kompletan CAD crtež izrađen na osnovu merenja' },
      { label: 'Identifikacija materijala', value: 'Ispitivanje tvrdoće + spektrometrijska analiza' },
      { label: 'Izlazni crteži', value: 'DWG / PDF isporučeni uz delove' },
      { label: 'Složenost delova', value: 'Od jednostavnih struganih delova do kompletnih sklopova' },
      { label: 'Serija', value: 'Od 1 zamenskog dela do lager količina' },
      { label: 'Ulazno stanje', value: 'Prihvatamo istrošene, polomljene ili kompletne originale' },
      { label: 'Rok izrade', value: 'Zavisi od složenosti; obično 1–3 nedelje' },
    ],

    gallery: [
      { image: null, caption: 'Istrošeni zupčanik meren na CMM-u pre reprodukcije' },
      { image: null, caption: 'CAD crtež izrađen na osnovu podataka merenja' },
      { image: null, caption: 'Novi deo pored originala radi poređenja' },
      { image: null, caption: 'Set reprodukovanih delova spreman za isporuku' },
    ],

    highlights: [
      'Originalni crtež nije potreban',
      'Materijal identifikovan tvrdoćom i spektrometrijom',
      'CAD crtež se isporučuje uz delove',
      'Moguće unapređenje slabih tačaka tokom redizajna',
    ],
  },
]

// Pomoćna funkcija: pronalazi uslugu prema URL slug-u
export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug) || null
}