export default {
  nav: {
    home:         'Home',
    services:     'Our Services',
    machines:     'Machines Park',
    about:        'About', 
    contact:      'Contact',
  },

  home: {
    hero: {
      tagline:  'Metal Manufacturing Excellence',
      motto:    'Quality · Safety · Competitiveness',
      desc:     'Custom manufacturing of metal parts, assemblies and constructions. Gears, sprockets, reducers, shafts, couplings — precision-engineered to your exact specifications.',
      cta:      'Our Services',
      quote:    'Get a Quote',
    },
    who: {
      eyebrow:  'Who We Are',
      heading:  'PRECISION BUILT INTO EVERY PART',
      p1:       'Vartig is a specialized metal manufacturing company focused on producing high-quality mechanical components and assemblies tailored to customer requirements. With a commitment to precision and durability, we serve industries that demand nothing less than excellence.',
      p2:       'From individual custom parts to complex assemblies and structures — our workshop delivers solutions that perform under real industrial conditions.',
      btn:      'Learn More About Us',
    },
    stats: [
      { value: '10+',  label: 'Years of Experience' },
      { value: '500+', label: 'Projects Completed' },
      { value: '100%', label: 'Custom Manufacturing' },
      { value: 'ISO',  label: 'Quality Standards' },
    ],
    capabilities: {
      eyebrow: 'What We Make',
      heading: 'OUR CAPABILITIES',
      btn:     'View All Services',
    },
    cta: {
      heading: 'READY TO START YOUR PROJECT?',
      desc:    "Send us your technical drawings or describe your requirements — we'll provide a precise quote.",
      btn:     'Contact Us Today',
    },
    services: [
      { tag: 'Transmission',      name: 'Gears & Sprockets',    desc: 'Precision-cut gears and sprockets for demanding power transmission applications.' },
      { tag: 'Power Transmission', name: 'Shafts & Axles',      desc: 'Custom shafts and axles engineered to meet specific torque requirements.' },
      { tag: 'Drive Systems',     name: 'Gear Reducers',         desc: 'Custom-built speed reducers engineered for industrial applications.' },
      { tag: 'Assembly',          name: 'Mechanical Assemblies', desc: 'Complex multi-component assemblies with complete dimensional verification.' },
      { tag: 'Steel Structures',  name: 'Steel Structures',      desc: 'Steel constructions and frames manufactured according to technical documentation.' },
      { tag: 'CNC Machining',     name: 'Custom CNC Machining',  desc: 'Any metal component manufactured according to your technical documentation.' },
    ],
    learnMore: 'Learn More',
    viewAll:   'View All Services',
  },

  services: {
    header: {
      eyebrow:  'What We Offer',
      title:    'OUR SERVICES',
      subtitle: 'Comprehensive metal manufacturing services — from individual components to complete assemblies, all produced to your exact specifications.',
    },
    process: {
      eyebrow: 'How It Works',
      title:   'OUR PROCESS',
      steps: [
        { title: 'Inquiry',    desc: 'Send us your drawings, samples or requirements.' },
        { title: 'Quote',      desc: 'We evaluate and prepare a precise offer.' },
        { title: 'Production', desc: 'Manufacturing with full quality control.' },
        { title: 'Delivery',   desc: 'Inspected, packaged and delivered on time.' },
      ],
    },
    cta: {
      heading: 'NEED A QUOTE?',
      desc:    "Send us your drawings or describe your requirements and we'll get back to you quickly.",
      btn:     'Request a Quote',
    },
  },

  serviceDetail: {
    notFound:      'SERVICE NOT FOUND',
    notFoundDesc:  "This service page doesn't exist.",
    backBtn:       'Back to Services',
    breadcrumb: {
      home:     'Home',
      services: 'Services',
    },
    overview:      'OVERVIEW',
    technical:     'TECHNICAL DATA',
    gallery:       'GALLERY',
    otherServices: 'OTHER SERVICES',
    addPhoto: 'Add Photo',
    noImage: 'No Image Yet',
    cta: {
      header: 'INTERESTED IN',
      desc: "Send us your drawings or describe your requirements and we'll prepare a quote.",
      btn:  'Request a Quote',
    },
  },
   serviceData : [
  {
    slug: 'gears-sprockets',
    tag: 'Transmission',
    name: 'Gears & Sprockets',
    shortDesc: 'Precision-cut gears and sprockets for demanding power transmission applications.',
    heroImage: null,

    intro: `Vartig manufactures a wide range of gears and sprockets for industrial power transmission systems.
Each tooth profile is cut according to DIN standards or custom specifications, with tight tolerances and surface finishes that ensure quiet and reliable operation throughout a long service life.
We work from customer drawings, samples, or measurements obtained through reverse engineering.`,

    specs: [
      { label: 'Gear Types', value: 'Helical, bevel, worm, internal gears' },
      { label: 'Module Range', value: '0.5 – 20' },
      { label: 'Maximum Diameter', value: '2,500 mm' },
      { label: 'Maximum Face Width', value: '1,000 mm' },
      { label: 'Quality Grade', value: 'DIN 3962 Class 5–8' },
      { label: 'Materials', value: 'C45, 42CrMo4, 16MnCr5, stainless steel, bronze' },
      { label: 'Heat Treatment', value: 'Carburizing, induction hardening, nitriding' },
      { label: 'Surface Finish', value: 'Ra 0.8 – 1.6 µm (grinding available upon request)' },
    ],

    gallery: [
      { image: null, caption: 'Large spur gear, module 12, Ø 650 mm' },
      { image: null, caption: 'Helical gear pair for an industrial gearbox' },
      { image: null, caption: 'Sprockets of various chain pitches' },
      { image: null, caption: 'Bevel gear pair, ratio 1:3' },
    ],

    highlights: [
      'All tooth profiles verified using dedicated gear measuring equipment',
      'Gear cutting, shaping, and grinding performed in-house',
      'Matched gear pairs supplied as complete sets',
      'Production batches from 1 to 500+ pieces',
    ],
  },

  {
    slug: 'shafts-axles',
    tag: 'Power Transmission',
    name: 'Shafts & Axles',
    shortDesc: 'Custom shafts and axle systems engineered to meet specific torque requirements.',
    heroImage: null,

    intro: `From simple stepped shafts to complex multi-stage spindles, Vartig manufactures shafts and axles in a wide range of materials and dimensions.
All features—including keyways, splines, threads, grooves, and bearing seats—are machined with minimal setups to maintain concentricity and dimensional accuracy along the entire length.`,

    specs: [
      { label: 'Maximum Length', value: '2,000 mm' },
      { label: 'Maximum Diameter', value: '500 mm' },
      { label: 'Straightness', value: '≤ 0.02 mm/m' },
      { label: 'Roundness', value: '≤ 0.005 mm' },
      { label: 'Surface Finish', value: 'Ra 0.4 µm (ground)' },
      { label: 'Tolerances', value: 'h5 / h6 bearing fits' },
      { label: 'Materials', value: 'C45, 42CrMo4, 34CrNiMo6, stainless steel' },
      { label: 'Features', value: 'Keyways, splines (DIN 5480), threads, flats' },
    ],

    gallery: [
      { image: null, caption: 'Drive shaft, Ø 120 mm × 1800 mm' },
      { image: null, caption: 'Splined gearbox input shaft' },
      { image: null, caption: 'Hollow shaft with flange end' },
      { image: null, caption: 'Short axle with keyway and threaded end' },
    ],

    highlights: [
      'In-house CNC turning and cylindrical grinding',
      'Full-length straightness inspection after grinding',
      'Keyway machining according to DIN 6885',
      'Dynamic balancing available upon request',
    ],
  },

  {
    slug: 'reducers',
    tag: 'Drive Systems',
    name: 'Gear Reducers',
    shortDesc: 'Custom-built speed reducers engineered for industrial applications.',
    heroImage: null,

    intro: `Vartig designs and manufactures complete speed reducer assemblies for industrial applications where standard catalog units cannot satisfy torque, ratio, or installation requirements.
We machine housings, manufacture all internal gears and shafts, source bearings and seals, assemble and test every unit before delivery.`,

    specs: [
      { label: 'Gear Ratios', value: 'Single-stage: 1:2 – 1:8 / Multi-stage: up to 1:200' },
      { label: 'Output Torque', value: 'Up to 50,000 Nm (upon request)' },
      { label: 'Input Speed', value: 'Up to 3,000 rpm' },
      { label: 'Housing Material', value: 'GJL-250 cast iron, welded steel constructions' },
      { label: 'Shaft Configuration', value: 'Coaxial, right-angle, offset' },
      { label: 'Stages', value: '1, 2 or 3 stages' },
      { label: 'Lubrication', value: 'Oil bath or forced lubrication' },
      { label: 'Testing', value: 'No-load and load testing before shipment' },
    ],

    gallery: [
      { image: null, caption: 'Two-stage helical gearbox, ratio 1:28' },
      { image: null, caption: 'Right-angle worm gearbox' },
      { image: null, caption: 'Machined gearbox housing' },
      { image: null, caption: 'Assembled unit on the test bench' },
    ],

    highlights: [
      'Fully customized ratio, shaft arrangement and mounting interfaces',
      'Housings designed and machined in-house',
      'All internal components manufactured by Vartig',
      'Load testing report included',
    ],
  },

  {
    slug: 'couplings-flanges',
    tag: 'Power Connections',
    name: 'Couplings & Flanges',
    shortDesc: 'Rigid and flexible couplings and flange connections for torque transmission.',
    heroImage: null,

    intro: `Vartig manufactures rigid and flexible shaft couplings, jaw couplings, disc couplings and custom flange adapters for rotating equipment.
Whether you need an exact replacement for a worn coupling or a fully customized flange connecting different shaft standards, we manufacture it according to your drawing or sample.`,

    specs: [
      { label: 'Coupling Types', value: 'Rigid, jaw, disc, gear and flange couplings' },
      { label: 'Maximum Bore Diameter', value: '300 mm' },
      { label: 'Maximum Torque', value: 'Up to 20,000 Nm' },
      { label: 'Bore Tolerances', value: 'H7 standard, others upon request' },
      { label: 'Keyway Standard', value: 'DIN 6885 / customer specification' },
      { label: 'Materials', value: 'C45, 42CrMo4, GJL-250, stainless steel' },
      { label: 'Balancing', value: 'Static and dynamic balancing available' },
      { label: 'Surface Finish', value: 'Turned, ground or protective coating' },
    ],

    gallery: [
      { image: null, caption: 'Rigid flange coupling, Ø 180 mm' },
      { image: null, caption: 'Jaw coupling halves machined to H7 tolerance' },
      { image: null, caption: 'Custom adapter flange between two shaft standards' },
      { image: null, caption: 'High-speed disc coupling' },
    ],

    highlights: [
      'Precision replacements manufactured from worn samples',
      'Custom bores, keyways and bolt patterns',
      'Matched flange sets supplied together',
      'Balancing certificate available',
    ],
  },

  {
    slug: 'assemblies',
    tag: 'Assembly',
    name: 'Mechanical Assemblies',
    shortDesc: 'Complex multi-component assemblies with complete dimensional verification.',
    heroImage: null,

    intro: `In addition to individual components, Vartig provides complete assembly services—from machined parts, bearings, seals and fasteners to fully assembled subassemblies ready for installation.
Every assembly is dimensionally inspected against drawings before leaving our workshop.`,

    specs: [
      { label: 'Maximum Assembly Weight', value: '~2,000 kg (overhead crane available)' },
      { label: 'Inspection', value: 'CMM and precision measuring tools' },
      { label: 'Fasteners', value: 'DIN Class 8.8 / 10.9 standard' },
      { label: 'Bearings', value: 'SKF, FAG or customer specified' },
      { label: 'Seals', value: 'Supplied and installed according to drawings' },
      { label: 'Documentation', value: 'Dimensional report available upon request' },
      { label: 'Packaging', value: 'Wooden crates and corrosion protection' },
      { label: 'Delivery', value: 'Customer site or EXW' },
    ],

    gallery: [
      { image: null, caption: 'Gearbox subassembly ready for installation' },
      { image: null, caption: 'Shaft, bearing and housing assembly' },
      { image: null, caption: 'Dimensional inspection on a CMM machine' },
      { image: null, caption: 'Completed assembly prepared for shipment' },
    ],

    highlights: [
      'Single supplier for both manufacturing and assembly',
      'Reduces incoming inspection requirements',
      'Overhead crane for heavy subassemblies',
      'Professional packaging and corrosion protection',
    ],
  },

  {
    slug: 'constructions',
    tag: 'Steel Structures',
    name: 'Steel Structures',
    shortDesc: 'Steel constructions and frames manufactured according to technical documentation.',
    heroImage: null,

    intro: `Vartig manufactures welded and bolted steel structures, machine bases, supports, brackets and frames from structural steel profiles and plates.
All structures are produced according to approved drawings and undergo dimensional and weld quality inspections before coating and shipment.`,

    specs: [
      { label: 'Welding Processes', value: 'MIG/MAG, TIG, MMA' },
      { label: 'Weld Quality', value: 'EN ISO 5817 Class B/C' },
      { label: 'Maximum Structure Size', value: 'Up to 6000 × 2500 × 2000 mm' },
      { label: 'Maximum Lifting Weight', value: '5,000 kg' },
      { label: 'Materials', value: 'S235, S355, S690, stainless steel' },
      { label: 'Machined Surfaces', value: 'Milled mounting surfaces and drilled holes' },
      { label: 'Surface Protection', value: 'Blasting + primer + topcoat, hot-dip galvanizing' },
      { label: 'NDT', value: 'Visual inspection, MT, UT upon request' },
    ],

    gallery: [
      { image: null, caption: 'Machine base fabricated from S355 steel' },
      { image: null, caption: 'Welded support after blasting' },
      { image: null, caption: 'Structural frame with machined mounting surfaces' },
      { image: null, caption: 'Finished structure after painting' },
    ],

    highlights: [
      'Welding and machining under one roof',
      'Precision-machined surfaces for machine installation',
      'Complete surface protection services',
      'Weld inspection reports available',
    ],
  },

  {
    slug: 'custom-machining',
    tag: 'CNC Machining',
    name: 'Custom CNC Machining',
    shortDesc: 'Any metal component manufactured according to your technical documentation.',
    heroImage: null,

    intro: `If you have a drawing, 3D model, or even a worn component that needs replacement, Vartig can manufacture it.
Our CNC lathes and machining centers process a wide range of materials and geometries—from simple bushings to complex multi-setup precision parts.
We accept both prototypes and production batches.`,

    specs: [
      { label: 'CNC Turning', value: 'Up to Ø 500 mm × 2000 mm length' },
      { label: 'CNC Milling', value: '1200 × 600 mm table, 5-axis capability' },
      { label: 'Tolerances', value: 'IT6 standard; tighter upon request' },
      { label: 'Surface Finish', value: 'Ra 0.4 µm achievable' },
      { label: 'Materials', value: 'All steels, cast iron, aluminum, bronze, brass' },
      { label: 'Input Formats', value: 'DWG, DXF, STEP, IGES, PDF drawings, samples' },
      { label: 'Batch Size', value: 'From single parts to serial production' },
      { label: 'Lead Time', value: 'Prototype: from 3 days; production runs by agreement' },
    ],

    gallery: [
      { image: null, caption: 'Complex turned component with multiple diameters' },
      { image: null, caption: 'Prismatic housing after 5-axis machining' },
      { image: null, caption: 'Batch of 200 precision bushings' },
      { image: null, caption: 'Single flange prototype manufactured from STEP model' },
    ],

    highlights: [
      'Accepts STEP, IGES, DWG, PDF or physical samples',
      'From prototype to production in one facility',
      'Material certificates available upon request',
      'Inspection reports included for critical components',
    ],
  },

  {
    slug: 'reverse-engineering',
    tag: 'Reverse Engineering',
    name: 'Reverse Engineering',
    shortDesc: 'Reproduction of worn or obsolete parts by measuring existing components.',
    heroImage: null,

    intro: `When original drawings are unavailable and OEM support no longer exists, Vartig can measure existing components—or even worn remnants—reconstruct the geometry, identify suitable materials and manufacture replacement parts that match or improve the original design.
This service is especially valuable for older machinery where spare parts are no longer available.`,

    specs: [
      { label: 'Measurement Equipment', value: 'CMM, gear measuring center, 3D scanner' },
      { label: 'Documentation', value: 'Complete CAD drawings generated from measurements' },
      { label: 'Material Identification', value: 'Hardness testing and spectrometric analysis' },
      { label: 'Output Drawings', value: 'DWG / PDF supplied with manufactured parts' },
      { label: 'Part Complexity', value: 'From simple turned parts to complete assemblies' },
      { label: 'Batch Size', value: 'From a single replacement part to stock quantities' },
      { label: 'Input Condition', value: 'Worn, broken or complete original components accepted' },
      { label: 'Lead Time', value: 'Depends on complexity; typically 1–3 weeks' },
    ],

    gallery: [
      { image: null, caption: 'Worn gear measured on a CMM before reproduction' },
      { image: null, caption: 'CAD drawing generated from measurement data' },
      { image: null, caption: 'Newly manufactured part compared with the original' },
      { image: null, caption: 'Set of reproduced components ready for shipment' },
    ],

    highlights: [
      'No original drawings required',
      'Material identified through hardness and spectrometric analysis',
      'CAD drawings supplied with manufactured parts',
      'Weak points can be improved during redesign',
    ],
  },
],
  machines: {
    header: {
      eyebrow:  'Our Equipment',
      title:    'MACHINES PARK',
      subtitle: 'A modern workshop equipped with precision machinery and conventional equipment for a wide range of manufacturing operations.',
    },
    gallerySubtitle: 'Images and descriptions of our machines',
    photoSoon:   'Photo coming soon',
    viewDetails: 'View Details',
    capabilities: {
      title: 'TECHNICAL CAPABILITIES',
      items: [
        { value: '±0.02',    label: 'Standard tolerance (mm)' },
        { value: '16,000mm', label: 'Max shaft length' },
        { value: '2,500mm',  label: 'Max gear diameter' },
        { value: 'Ra 0.4',   label: 'Surface finish' },
      ],
    },
  },

  about: {
    header: {
      eyebrow: 'Our Story',
      title:   'ABOUT VARTIG',
    },
    story: {
      heading: 'BUILT ON PRECISION AND EXPERIENCE',
      p1: 'Vartig was founded with a clear mission: to provide the market with reliable, high-precision metal components that meet the most demanding technical requirements. Over the years, we have grown from a small machining shop into a full-service manufacturing partner for clients across multiple industries.',
      p2: 'Our team of experienced machinists, engineers and quality control specialists ensures that every part leaving our workshop meets the agreed specifications — every time.',
      p3: 'We believe in long-term partnerships built on trust, transparency and the consistent delivery of quality. That philosophy is captured in our motto:',
    },
    founder: {
      quote: '"At Vartig, we are committed to excellence in everything we do. Our dedication to precision and quality is the foundation of our success."',
      name:  '— Nenad Popovic, Founder & Managing Director',
    },
    values: {
      title: 'OUR VALUES',
      items: [
        { icon: '🎯', title: 'Quality',          desc: "Every part is inspected against drawing tolerances before leaving the workshop. We don't compromise on dimensional accuracy or surface finish." },
        { icon: '🛡️', title: 'Safety',           desc: 'We follow strict workplace safety standards and ensure our products perform reliably and safely in their intended application.' },
        { icon: '📈', title: 'Competitiveness',  desc: 'By optimizing our processes and maintaining modern equipment, we offer competitive pricing without sacrificing quality or delivery time.' },
      ],
    },
    cta: {
      heading: "LET'S WORK TOGETHER",
      desc:    "Tell us about your project and we'll find the best solution.",
      btn:     'Get In Touch',
    },
  },

  contact: {
    header: {
      eyebrow:  'Get In Touch',
      title:    'CONTACT US',
      subtitle: "Send us your technical requirements or request a quote. We'll get back to you promptly.",
    },
    form: {
      title:        'SEND US A MESSAGE',
      name:         'Full Name',
      company:      'Company',
      email:        'Email Address',
      phone:        'Phone Number',
      message:      'Your Message / Requirements',
      namePh:       'Your name',
      companyPh:    'Company name',
      emailPh:      "your{'@'}email.com",
      phonePh:      '+381 ...',
      messagePh:    'Describe your project, required parts, quantities, tolerances...',
      send:         'Send Message',
      sending:      'Sending...',
      emailNote:    'You can also attach technical drawings via email to',
      successTitle: 'Message Sent!',
      successDesc:  "Thank you for reaching out. We'll get back to you as soon as possible.",
      sendAnother:  'Send Another Message',
    },
    info: {
      title:   'CONTACT INFO',
      address: 'Address',
      phone:   'Phone',
      email:   'Email',
    },
    hours: {
      title: 'Working Hours',
      rows: [
        { day: 'Monday – Friday', hours: '07:00 – 15:00' },
        { day: 'Saturday',        hours: '07:00 – 13:00' },
        { day: 'Sunday',          hours: 'Closed' },
      ],
    },
  },

  footer: {
    tagline:    'Precision metal manufacturing tailored to your requirements.',
    quickLinks: 'Quick Links',
    contact:    'Contact',
    rights:     'All rights reserved.',
  },
}