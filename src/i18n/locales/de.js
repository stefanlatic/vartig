export default {
  nav: {
    home:     'Startseite',
    services: 'Leistungen',
    machines: 'Maschinenpark',
    about:    'Über uns',
    contact:  'Kontakt',
  },

  footer: {
    tagline:    'Präzise Metallbearbeitung nach Ihren Anforderungen.',
    quickLinks: 'Schnelllinks',
    contact:    'Kontakt',
    rights:     'Alle Rechte vorbehalten.',
  },

  home: {
    hero: {
      tagline: 'Metallbearbeitungs-Exzellenz',
      motto:   'Qualität · Sicherheit · Wettbewerbsfähigkeit',
      desc:    'Individuelle Fertigung von Metallteilen, Baugruppen und Konstruktionen. Zahnräder, Kettenräder, Getriebe, Wellen, Kupplungen — präzisionsgefertigt nach Ihren genauen Vorgaben.',
      cta:     'Unsere Leistungen',
      quote:   'Angebot anfordern',
    },
    who: {
      eyebrow:  'Wer wir sind',
      heading:  'PRÄZISION IN JEDEM TEIL',
      p1:       'Vartig ist ein spezialisiertes Metallbearbeitungsunternehmen, das sich auf die Herstellung hochwertiger mechanischer Komponenten und Baugruppen nach Kundenvorgaben konzentriert. Mit einem Fokus auf Präzision und Langlebigkeit bedienen wir Industrien, die höchste Ansprüche stellen.',
      p2:       'Von einzelnen Sonderteilen bis hin zu komplexen Baugruppen und Konstruktionen — unsere Werkstatt liefert Lösungen, die unter realen industriellen Bedingungen funktionieren.',
      btn:      'Mehr über uns',
    },
    stats: [
      { value: '10+',  label: 'Jahre Erfahrung' },
      { value: '500+', label: 'Abgeschlossene Projekte' },
      { value: '100%', label: 'Individuelle Fertigung' },
      { value: 'ISO',  label: 'Qualitätsstandards' },
    ],
    capabilities: {
      eyebrow: 'Was wir fertigen',
      heading: 'UNSERE LEISTUNGEN',
      btn:     'Alle Leistungen ansehen',
    },
    services: [
      { tag: 'Antrieb',            name: 'Zahnräder & Kettenräder',  desc: 'Präzisionsgeschnittene Zahnräder und Kettenräder für anspruchsvolle Kraftübertragungsanwendungen.' },
      { tag: 'Kraftübertragung',   name: 'Wellen & Achsen',          desc: 'Kundenspezifische Wellen und Achsen für spezifische Drehmomentanforderungen.' },
      { tag: 'Antriebssysteme',    name: 'Getriebe',                  desc: 'Individuell gefertigte Drehzahlgetriebe für industrielle Anwendungen.' },
      { tag: 'Montage',            name: 'Mechanische Baugruppen',    desc: 'Komplexe Mehrkomponentenbaugruppen mit vollständiger Maßkontrolle.' },
      { tag: 'Stahlkonstruktionen', name: 'Stahlkonstruktionen',     desc: 'Stahlkonstruktionen und Rahmen nach technischer Dokumentation gefertigt.' },
      { tag: 'CNC-Bearbeitung',    name: 'CNC-Sonderbearbeitung',     desc: 'Jedes Metallteil nach Ihrer technischen Dokumentation gefertigt.' },
    ],
    learnMore: 'Mehr erfahren',
    viewAll:   'Alle Leistungen ansehen',
    cta: {
      heading: 'BEREIT, IHR PROJEKT ZU STARTEN?',
      desc:    'Senden Sie uns Ihre technischen Zeichnungen oder beschreiben Sie Ihre Anforderungen — wir erstellen Ihnen ein genaues Angebot.',
      btn:     'Kontaktieren Sie uns',
    },
  },

  services: {
    header: {
      eyebrow:  'Was wir anbieten',
      title:    'UNSERE LEISTUNGEN',
      subtitle: 'Umfassende Metallbearbeitungsleistungen — von einzelnen Komponenten bis zu vollständigen Baugruppen, alles nach Ihren genauen Vorgaben gefertigt.',
    },
    process: {
      eyebrow: 'So funktioniert es',
      title:   'UNSER PROZESS',
      steps: [
        { title: 'Anfrage',    desc: 'Senden Sie uns Ihre Zeichnungen, Muster oder Anforderungen.' },
        { title: 'Angebot',    desc: 'Wir prüfen und erstellen ein genaues Angebot.' },
        { title: 'Fertigung',  desc: 'Herstellung mit vollständiger Qualitätskontrolle.' },
        { title: 'Lieferung',  desc: 'Geprüft, verpackt und pünktlich geliefert.' },
      ],
    },
    cta: {
      heading: 'ANGEBOT BENÖTIGT?',
      desc:    'Senden Sie uns Ihre Zeichnungen oder beschreiben Sie Ihre Anforderungen — wir melden uns schnell.',
      btn:     'Angebot anfordern',
    },
  },

  serviceDetail: {
    notFound:      'LEISTUNG NICHT GEFUNDEN',
    notFoundDesc:  'Diese Leistungsseite existiert nicht.',
    backBtn:       'Zurück zu den Leistungen',
    breadcrumb: {
      home:     'Startseite',
      services: 'Leistungen',
    },
    overview:      'ÜBERBLICK',
    technical:     'TECHNISCHE DATEN',
    gallery:       'GALERIE',
    otherServices: 'WEITERE LEISTUNGEN',
    addPhoto:      'Foto hinzufügen',
    noImage:       'Noch kein Bild',
    cta: {
      header: 'INTERESSE AN',
      desc:   'Senden Sie uns Ihre Zeichnungen oder beschreiben Sie Ihre Anforderungen — wir erstellen Ihnen ein Angebot.',
      btn:    'Angebot anfordern',
    },
  },

  serviceData: [
  {
    slug: 'gears-sprockets',
    tag: 'Antrieb',
    name: 'Zahnräder & Kettenräder',
    shortDesc: 'Präzisionsgeschnittene Zahnräder und Kettenräder für anspruchsvolle Kraftübertragungsanwendungen.',
    heroImage: null,

    intro: `Vartig fertigt ein breites Sortiment an Zahnrädern und Kettenrädern für industrielle Kraftübertragungssysteme.
Jedes Zahnprofil wird nach DIN-Normen oder kundenspezifischen Vorgaben geschnitten, mit engen Toleranzen und Oberflächengüten, die einen leisen und zuverlässigen Betrieb über eine lange Lebensdauer gewährleisten.
Wir arbeiten nach Kundenzeichnungen, Mustern oder durch Reverse Engineering ermittelten Maßen.`,

    specs: [
      { label: 'Zahnradtypen',           value: 'Stirnrad, Kegelrad, Schnecke, Innenrad' },
      { label: 'Modulbereich',           value: '0,5 – 20' },
      { label: 'Maximaler Durchmesser',  value: '2.500 mm' },
      { label: 'Maximale Zahnbreite',    value: '1.000 mm' },
      { label: 'Qualitätsklasse',        value: 'DIN 3962 Klasse 5–8' },
      { label: 'Werkstoffe',             value: 'C45, 42CrMo4, 16MnCr5, Edelstahl, Bronze' },
      { label: 'Wärmebehandlung',        value: 'Aufkohlen, Induktionshärten, Nitrieren' },
      { label: 'Oberflächenrauhigkeit',  value: 'Ra 0,8 – 1,6 µm (Schleifen auf Anfrage)' },
    ],

    gallery: [
      { image: null, caption: 'Großes Stirnrad, Modul 12, Ø 650 mm' },
      { image: null, caption: 'Schrägverzahntes Zahnradpaar für ein Industriegetriebe' },
      { image: null, caption: 'Kettenräder verschiedener Kettenteilungen' },
      { image: null, caption: 'Kegelradpaar, Übersetzung 1:3' },
    ],

    highlights: [
      'Alle Zahnprofile werden mit speziellen Zahnradmessgeräten überprüft',
      'Zahnradfräsen, -formen und -schleifen im eigenen Haus',
      'Abgestimmte Zahnradpaare als komplette Sätze geliefert',
      'Produktionsserien von 1 bis 500+ Stück',
    ],
  },

  {
    slug: 'shafts-axles',
    tag: 'Kraftübertragung',
    name: 'Wellen & Achsen',
    shortDesc: 'Kundenspezifische Wellen und Achssysteme für spezifische Drehmomentanforderungen.',
    heroImage: null,

    intro: `Von einfachen Stufenwellen bis hin zu komplexen mehrstufigen Spindeln fertigt Vartig Wellen und Achsen in einem breiten Werkstoff- und Abmessungsspektrum.
Alle Merkmale — einschließlich Passnuten, Keilwellen, Gewinde, Nuten und Lagersitze — werden in möglichst wenigen Aufspannungen bearbeitet, um Konzentrizität und Maßgenauigkeit über die gesamte Länge zu gewährleisten.`,

    specs: [
      { label: 'Maximale Länge',        value: '2.000 mm' },
      { label: 'Maximaler Durchmesser', value: '500 mm' },
      { label: 'Geradheit',             value: '≤ 0,02 mm/m' },
      { label: 'Rundheit',              value: '≤ 0,005 mm' },
      { label: 'Oberflächenrauhigkeit', value: 'Ra 0,4 µm (geschliffen)' },
      { label: 'Toleranzen',            value: 'h5 / h6 Lagersitze' },
      { label: 'Werkstoffe',            value: 'C45, 42CrMo4, 34CrNiMo6, Edelstahl' },
      { label: 'Merkmale',              value: 'Passnuten, Keilwellen (DIN 5480), Gewinde, Abflachungen' },
    ],

    gallery: [
      { image: null, caption: 'Antriebswelle, Ø 120 mm × 1800 mm' },
      { image: null, caption: 'Keilwellen-Getriebeeingangswelle' },
      { image: null, caption: 'Hohlwelle mit Flanschende' },
      { image: null, caption: 'Kurze Achse mit Passnut und Gewindeende' },
    ],

    highlights: [
      'CNC-Drehen und Rundschleifen im eigenen Haus',
      'Geradheitsprüfung über die gesamte Länge nach dem Schleifen',
      'Passnuten nach DIN 6885',
      'Dynamisches Auswuchten auf Anfrage',
    ],
  },

  {
    slug: 'reducers',
    tag: 'Antriebssysteme',
    name: 'Getriebe',
    shortDesc: 'Individuell gefertigte Drehzahlgetriebe für industrielle Anwendungen.',
    heroImage: null,

    intro: `Vartig konstruiert und fertigt komplette Drehzahlgetriebe-Baugruppen für industrielle Anwendungen, bei denen Standard-Katalogeinheiten die Drehmoment-, Übersetzungs- oder Einbauanforderungen nicht erfüllen können.
Wir bearbeiten Gehäuse, fertigen alle internen Zahnräder und Wellen, beschaffen Lager und Dichtungen, montieren und testen jede Einheit vor der Auslieferung.`,

    specs: [
      { label: 'Übersetzungsverhältnisse', value: 'Einstufig: 1:2 – 1:8 / Mehrstufig: bis 1:200' },
      { label: 'Abtriebsdrehmoment',       value: 'Bis 50.000 Nm (auf Anfrage)' },
      { label: 'Eingangsdrehzahl',         value: 'Bis 3.000 U/min' },
      { label: 'Gehäusewerkstoff',         value: 'Grauguss GJL-250, geschweißte Stahlkonstruktionen' },
      { label: 'Wellenkonfiguration',      value: 'Koaxial, rechtwinklig, versetzt' },
      { label: 'Stufen',                   value: '1, 2 oder 3 Stufen' },
      { label: 'Schmierung',               value: 'Tauchschmierung oder Druckumlaufschmierung' },
      { label: 'Prüfung',                  value: 'Leer- und Lastprüfung vor Auslieferung' },
    ],

    gallery: [
      { image: null, caption: 'Zweistufiges Stirnradgetriebe, Übersetzung 1:28' },
      { image: null, caption: 'Rechtwinkliges Schneckengetriebe' },
      { image: null, caption: 'Bearbeitetes Getriebegehäuse' },
      { image: null, caption: 'Montierte Einheit auf dem Prüfstand' },
    ],

    highlights: [
      'Vollständig angepasste Übersetzung, Wellenanordnung und Montageschnittstellen',
      'Gehäuse konstruiert und im eigenen Haus bearbeitet',
      'Alle internen Komponenten von Vartig gefertigt',
      'Lastprüfbericht inklusive',
    ],
  },

  {
    slug: 'couplings-flanges',
    tag: 'Kraftverbindungen',
    name: 'Kupplungen & Flansche',
    shortDesc: 'Starre und flexible Kupplungen und Flanschverbindungen zur Drehmomentübertragung.',
    heroImage: null,

    intro: `Vartig fertigt starre und flexible Wellenkupplungen, Klauenkupplungen, Lamellenkupplungen und kundenspezifische Flanschadapter für rotierende Ausrüstung.
Ob Sie einen genauen Ersatz für eine verschlissene Kupplung oder einen vollständig angepassten Flansch zur Verbindung verschiedener Wellennormen benötigen — wir fertigen ihn nach Ihrer Zeichnung oder Ihrem Muster.`,

    specs: [
      { label: 'Kupplungstypen',             value: 'Starre, Klauen-, Lamellen-, Zahnrad- und Flanschkupplungen' },
      { label: 'Max. Bohrungsdurchmesser',   value: '300 mm' },
      { label: 'Maximales Drehmoment',       value: 'Bis 20.000 Nm' },
      { label: 'Bohrungstoleranzen',         value: 'H7 Standard, andere auf Anfrage' },
      { label: 'Passnutennorm',              value: 'DIN 6885 / Kundenspezifikation' },
      { label: 'Werkstoffe',                 value: 'C45, 42CrMo4, GJL-250, Edelstahl' },
      { label: 'Auswuchten',                 value: 'Statisches und dynamisches Auswuchten möglich' },
      { label: 'Oberflächenbearbeitung',     value: 'Gedreht, geschliffen oder Schutzschicht' },
    ],

    gallery: [
      { image: null, caption: 'Starre Flanschkupplung, Ø 180 mm' },
      { image: null, caption: 'Klauenkupplungshälften auf H7-Toleranz bearbeitet' },
      { image: null, caption: 'Kundenspezifischer Adapterflansch zwischen zwei Wellennormen' },
      { image: null, caption: 'Hochgeschwindigkeits-Lamellenkupplung' },
    ],

    highlights: [
      'Präzisionsersatzteile nach verschlissenen Mustern gefertigt',
      'Kundenspezifische Bohrungen, Passnuten und Lochbilder',
      'Zusammenpassende Flanschsätze gemeinsam geliefert',
      'Wuchtbescheinigung erhältlich',
    ],
  },

  {
    slug: 'assemblies',
    tag: 'Montage',
    name: 'Mechanische Baugruppen',
    shortDesc: 'Komplexe Mehrkomponentenbaugruppen mit vollständiger Maßkontrolle.',
    heroImage: null,

    intro: `Zusätzlich zu Einzelkomponenten bietet Vartig vollständige Montageleistungen — von bearbeiteten Teilen, Lagern, Dichtungen und Verbindungselementen bis hin zu vollständig montierten Unterbaugruppen, die einbaufertig sind.
Jede Baugruppe wird vor dem Verlassen unserer Werkstatt nach Zeichnung dimensionell geprüft.`,

    specs: [
      { label: 'Max. Montagegewicht',  value: '~2.000 kg (Brückenkran vorhanden)' },
      { label: 'Prüfung',              value: 'KMG und Präzisionsmesstechnik' },
      { label: 'Verbindungselemente',  value: 'DIN Klasse 8.8 / 10.9 Standard' },
      { label: 'Lager',                value: 'SKF, FAG oder kundenseitig festgelegt' },
      { label: 'Dichtungen',           value: 'Geliefert und eingebaut nach Zeichnung' },
      { label: 'Dokumentation',        value: 'Maßprotokoll auf Anfrage' },
      { label: 'Verpackung',           value: 'Holzkisten und Korrosionsschutz' },
      { label: 'Lieferung',            value: 'Zur Baustelle oder EXW' },
    ],

    gallery: [
      { image: null, caption: 'Getriebe-Unterbaugruppe einbaufertig' },
      { image: null, caption: 'Wellen-, Lager- und Gehäusebaugruppe' },
      { image: null, caption: 'Maßkontrolle auf einer KMG-Maschine' },
      { image: null, caption: 'Fertige Baugruppe versandbereit' },
    ],

    highlights: [
      'Ein Lieferant für Fertigung und Montage',
      'Reduziert den Wareneingangsprüfungsaufwand',
      'Brückenkran für schwere Unterbaugruppen',
      'Professionelle Verpackung und Korrosionsschutz',
    ],
  },

  {
    slug: 'constructions',
    tag: 'Stahlkonstruktionen',
    name: 'Stahlkonstruktionen',
    shortDesc: 'Stahlkonstruktionen und Rahmen nach technischer Dokumentation gefertigt.',
    heroImage: null,

    intro: `Vartig fertigt geschweißte und geschraubte Stahlkonstruktionen, Maschinenuntergestelle, Träger, Konsolen und Rahmen aus Konstruktionsstahlprofilen und -blechen.
Alle Konstruktionen werden nach genehmigten Zeichnungen hergestellt und durchlaufen vor der Oberflächenbehandlung und Auslieferung Maß- und Schweißnahtqualitätsprüfungen.`,

    specs: [
      { label: 'Schweißverfahren',           value: 'MIG/MAG, TIG, MMA' },
      { label: 'Schweißnahtqualität',        value: 'EN ISO 5817 Klasse B/C' },
      { label: 'Max. Konstruktionsgröße',    value: 'Bis 6000 × 2500 × 2000 mm' },
      { label: 'Maximales Hubgewicht',       value: '5.000 kg' },
      { label: 'Werkstoffe',                 value: 'S235, S355, S690, Edelstahl' },
      { label: 'Bearbeitete Flächen',        value: 'Gefräste Montageflächen und gebohrte Löcher' },
      { label: 'Oberflächenschutz',          value: 'Strahlen + Grundierung + Decklack, Feuerverzinken' },
      { label: 'ZfP',                        value: 'Sichtprüfung, MT, UT auf Anfrage' },
    ],

    gallery: [
      { image: null, caption: 'Maschinenunterbau aus S355-Stahl' },
      { image: null, caption: 'Geschweißter Träger nach dem Strahlen' },
      { image: null, caption: 'Konstruktionsrahmen mit gefrästen Montageflächen' },
      { image: null, caption: 'Fertige Konstruktion nach dem Lackieren' },
    ],

    highlights: [
      'Schweißen und Bearbeiten unter einem Dach',
      'Präzisionsgefräste Flächen für die Maschinenaufstellung',
      'Vollständige Oberflächenschutzleistungen',
      'Schweißnahtprüfberichte erhältlich',
    ],
  },

  {
    slug: 'custom-machining',
    tag: 'CNC-Bearbeitung',
    name: 'CNC-Sonderbearbeitung',
    shortDesc: 'Jedes Metallteil nach Ihrer technischen Dokumentation gefertigt.',
    heroImage: null,

    intro: `Wenn Sie eine Zeichnung, ein 3D-Modell oder ein verschlissenes Teil haben, das ersetzt werden muss, kann Vartig es fertigen.
Unsere CNC-Drehmaschinen und Bearbeitungszentren verarbeiten ein breites Werkstoff- und Geometriespektrum — von einfachen Buchsen bis hin zu komplexen Prismaticteilen mit mehreren Aufspannungen.
Wir akzeptieren sowohl Prototypen als auch Serienproduktionen.`,

    specs: [
      { label: 'CNC-Drehen',          value: 'Bis Ø 500 mm × 2000 mm Länge' },
      { label: 'CNC-Fräsen',          value: 'Tisch 1200 × 600 mm, 5-Achsen-Fähigkeit' },
      { label: 'Toleranzen',          value: 'IT6 Standard; enger auf Anfrage' },
      { label: 'Oberflächenrauhigkeit', value: 'Ra 0,4 µm erreichbar' },
      { label: 'Werkstoffe',          value: 'Alle Stähle, Gusseisen, Aluminium, Bronze, Messing' },
      { label: 'Eingabeformate',      value: 'DWG, DXF, STEP, IGES, PDF-Zeichnungen, Muster' },
      { label: 'Seriengröße',         value: 'Von Einzelteilen bis zur Serienproduktion' },
      { label: 'Lieferzeit',          value: 'Prototyp: ab 3 Tagen; Serienproduktion nach Vereinbarung' },
    ],

    gallery: [
      { image: null, caption: 'Komplexes Drehteil mit mehreren Durchmessern' },
      { image: null, caption: 'Prismatisches Gehäuse nach 5-Achs-Bearbeitung' },
      { image: null, caption: 'Serie von 200 Präzisionsbuchsen' },
      { image: null, caption: 'Einzelner Flanschprototyp aus STEP-Modell gefertigt' },
    ],

    highlights: [
      'Akzeptiert STEP, IGES, DWG, PDF oder physische Muster',
      'Vom Prototyp zur Serie in einem Betrieb',
      'Werkstoffzeugnisse auf Anfrage',
      'Prüfberichte für kritische Komponenten inklusive',
    ],
  },

  {
    slug: 'reverse-engineering',
    tag: 'Reverse Engineering',
    name: 'Reverse Engineering',
    shortDesc: 'Reproduktion verschlissener oder veralteter Teile durch Vermessung vorhandener Komponenten.',
    heroImage: null,

    intro: `Wenn Originalzeichnungen nicht verfügbar sind und der OEM-Support nicht mehr existiert, kann Vartig vorhandene Komponenten — oder sogar verschlissene Reste — vermessen, die Geometrie rekonstruieren, geeignete Werkstoffe identifizieren und Ersatzteile fertigen, die dem Originaldesign entsprechen oder es verbessern.
Dieser Service ist besonders wertvoll für ältere Maschinen, bei denen Ersatzteile nicht mehr verfügbar sind.`,

    specs: [
      { label: 'Messausrüstung',        value: 'KMG, Zahnradmesszentrum, 3D-Scanner' },
      { label: 'Dokumentation',         value: 'Vollständige CAD-Zeichnungen aus Messungen erstellt' },
      { label: 'Werkstoffidentifikation', value: 'Härteprüfung und spektrometrische Analyse' },
      { label: 'Ausgabezeichnungen',    value: 'DWG / PDF mit gefertigten Teilen geliefert' },
      { label: 'Teilekomplexität',      value: 'Von einfachen Drehteilen bis zu kompletten Baugruppen' },
      { label: 'Seriengröße',           value: 'Von einem Ersatzteil bis zu Lagermengen' },
      { label: 'Eingangszustand',       value: 'Verschlissene, gebrochene oder vollständige Originalteile akzeptiert' },
      { label: 'Lieferzeit',            value: 'Abhängig von der Komplexität; in der Regel 1–3 Wochen' },
    ],

    gallery: [
      { image: null, caption: 'Verschlissenes Zahnrad vor der Reproduktion auf KMG vermessen' },
      { image: null, caption: 'CAD-Zeichnung aus Messdaten erstellt' },
      { image: null, caption: 'Neu gefertigtes Teil im Vergleich mit dem Original' },
      { image: null, caption: 'Satz reproduzierter Komponenten versandbereit' },
    ],

    highlights: [
      'Keine Originalzeichnungen erforderlich',
      'Werkstoff durch Härteprüfung und Spektrometrie identifiziert',
      'CAD-Zeichnungen werden mit gefertigten Teilen geliefert',
      'Schwachstellen können bei der Neukonstruktion verbessert werden',
    ],
  },
],

  machines: {
    header: {
      eyebrow:  'Unsere Ausrüstung',
      title:    'MASCHINENPARK',
      subtitle: 'Eine moderne Werkstatt mit Präzisionsmaschinen und konventioneller Ausrüstung für ein breites Spektrum an Fertigungsoperationen.',
    },
    gallerySubtitle: 'Bilder und Beschreibungen unserer Maschinen',
    photoSoon:   'Foto kommt bald',
    viewDetails: 'Details ansehen',
    capabilities: {
      title: 'TECHNISCHE MÖGLICHKEITEN',
      items: [
        { value: '±0.02',    label: 'Standardtoleranz (mm)' },
        { value: '16.000mm', label: 'Max. Wellenlänge' },
        { value: '2.500mm',  label: 'Max. Zahnraddurchmesser' },
        { value: 'Ra 0.4',   label: 'Oberflächengüte' },
      ],
    },
  },

  about: {
    header: {
      eyebrow: 'Unsere Geschichte',
      title:   'ÜBER VARTIG',
    },
    story: {
      heading: 'AUFGEBAUT AUF PRÄZISION UND ERFAHRUNG',
      p1: 'Vartig wurde mit einer klaren Mission gegründet: dem Markt zuverlässige, hochpräzise Metallkomponenten zu liefern, die die anspruchsvollsten technischen Anforderungen erfüllen. Im Laufe der Jahre haben wir uns von einer kleinen Maschinenwerkstatt zu einem vollwertigen Fertigungspartner für Kunden aus mehreren Branchen entwickelt.',
      p2: 'Unser Team aus erfahrenen Zerspanern, Ingenieuren und Qualitätssicherungsspezialisten stellt sicher, dass jedes Teil, das unsere Werkstatt verlässt, die vereinbarten Spezifikationen erfüllt — jedes Mal.',
      p3: 'Wir glauben an langfristige Partnerschaften, die auf Vertrauen, Transparenz und konsequenter Qualitätslieferung aufgebaut sind. Diese Philosophie spiegelt sich in unserem Motto wider:',
    },
    founder: {
      quote: '"Bei Vartig sind wir dem Streben nach Exzellenz in allem, was wir tun, verpflichtet. Unsere Hingabe an Präzision und Qualität ist das Fundament unseres Erfolgs."',
      name:  '— Nenad Popovic, Gründer & Geschäftsführer',
    },
    values: {
      title: 'UNSERE WERTE',
      items: [
        { icon: '🎯', title: 'Qualität',           desc: 'Jedes Teil wird vor dem Verlassen der Werkstatt auf Einhaltung der Zeichnungstoleranzen geprüft. Wir machen keine Kompromisse bei der Maßgenauigkeit oder der Oberflächenqualität.' },
        { icon: '🛡️', title: 'Sicherheit',         desc: 'Wir befolgen strenge Arbeitsschutzstandards und stellen sicher, dass unsere Produkte in der vorgesehenen Anwendung zuverlässig und sicher funktionieren.' },
        { icon: '📈', title: 'Wettbewerbsfähigkeit', desc: 'Durch die Optimierung unserer Prozesse und die Pflege moderner Ausrüstung bieten wir wettbewerbsfähige Preise ohne Qualitäts- oder Lieferzeitkompromisse.' },
      ],
    },
    cta: {
      heading: 'LASSEN SIE UNS ZUSAMMENARBEITEN',
      desc:    'Erzählen Sie uns von Ihrem Projekt und wir finden die beste Lösung.',
      btn:     'Kontakt aufnehmen',
    },
  },

  contact: {
    header: {
      eyebrow:  'Kontakt aufnehmen',
      title:    'KONTAKT',
      subtitle: 'Senden Sie uns Ihre technischen Anforderungen oder fordern Sie ein Angebot an. Wir antworten Ihnen zeitnah.',
    },
    form: {
      title:        'NACHRICHT SENDEN',
      name:         'Vollständiger Name',
      company:      'Unternehmen',
      email:        'E-Mail-Adresse',
      phone:        'Telefonnummer',
      message:      'Ihre Nachricht / Anforderungen',
      namePh:       'Ihr Name',
      companyPh:    'Unternehmensname',
      emailPh:      "ihre{'@'}email.de",
      phonePh:      '+49 ...',
      messagePh:    'Beschreiben Sie Ihr Projekt, benötigte Teile, Mengen, Toleranzen...',
      send:         'Nachricht senden',
      sending:      'Wird gesendet...',
      emailNote:    'Sie können auch technische Zeichnungen per E-Mail an uns senden',
      successTitle: 'Nachricht gesendet!',
      successDesc:  'Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns so bald wie möglich.',
      sendAnother:  'Weitere Nachricht senden',
    },
    info: {
      title:   'KONTAKTINFORMATIONEN',
      address: 'Adresse',
      phone:   'Telefon',
      email:   'E-Mail',
    },
    hours: {
      title: 'Öffnungszeiten',
      rows: [
        { day: 'Montag – Freitag', hours: '07:00 – 15:00' },
        { day: 'Samstag',          hours: '07:00 – 13:00' },
        { day: 'Sonntag',          hours: 'Geschlossen' },
      ],
    },
  },
}
