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
    tag: 'Transmission',
    name: 'Gears & Sprockets',
    shortDesc: 'Precision-cut gears and sprockets for demanding transmission applications.',
    heroImage: null, // e.g. import gearsHero from '@/assets/services/gears/hero.jpg'

    intro: `Vartig manufactures a wide range of gears and sprockets for industrial transmission systems.
    Every tooth profile is cut to DIN standards or custom specifications, with tight tolerances
    and surface finishes that ensure quiet, reliable operation over long service life.
    We work from customer drawings, samples, or reverse-engineered measurements.`,

    specs: [
      { label: 'Gear types',       value: 'Spur, helical, bevel, worm, internal' },
      { label: 'Module range',     value: '0.5 – 20' },
      { label: 'Max diameter',     value: '800 mm' },
      { label: 'Max face width',   value: '300 mm' },
      { label: 'Quality grade',    value: 'DIN 3962 grade 5–8' },
      { label: 'Materials',        value: 'C45, 42CrMo4, 16MnCr5, stainless, bronze' },
      { label: 'Heat treatment',   value: 'Case hardening, induction, nitriding' },
      { label: 'Surface finish',   value: 'Ra 0.8 – 1.6 µm (ground on request)' },
    ],

    gallery: [
      { image: null, caption: 'Large spur gear, module 12, Ø 650 mm' },
      { image: null, caption: 'Helical gear pair for industrial reducer' },
      { image: null, caption: 'Chain sprockets, various pitch sizes' },
      { image: null, caption: 'Bevel gear set, 1:3 ratio' },
    ],

    highlights: [
      'All profiles verified with gear measurement centre',
      'Hobbing, shaping and grinding in-house',
      'Matched pairs supplied as sets',
      'Batch sizes from 1 to 500+ pieces',
    ],
  },

  {
    slug: 'shafts-axles',
    tag: 'Power Transfer',
    name: 'Shafts & Axles',
    shortDesc: 'Custom shafts and coupling systems designed for your torque requirements.',
    heroImage: null,

    intro: `From simple stepped shafts to complex multi-feature spindles, Vartig produces shafts
    and axles in a wide range of materials and dimensions. All features — keyways, splines,
    threads, grooves, bearing seats — are machined in as few setups as possible to maintain
    concentricity and dimensional accuracy throughout the entire length.`,

    specs: [
      { label: 'Max turning length', value: '2000 mm' },
      { label: 'Max diameter',       value: '500 mm' },
      { label: 'Straightness',        value: '≤ 0.02 mm/m' },
      { label: 'Roundness',           value: '≤ 0.005 mm' },
      { label: 'Surface finish',      value: 'Ra 0.4 µm (ground)' },
      { label: 'Tolerances',          value: 'h5 / h6 for bearing seats' },
      { label: 'Materials',           value: 'C45, 42CrMo4, 34CrNiMo6, stainless' },
      { label: 'Features',            value: 'Keyways, splines (DIN 5480), threads, flats' },
    ],

    gallery: [
      { image: null, caption: 'Transmission shaft, Ø 120 mm × 1800 mm' },
      { image: null, caption: 'Splined shaft for gearbox input' },
      { image: null, caption: 'Hollow shaft with flanged end' },
      { image: null, caption: 'Short stub axle with keyway and thread' },
    ],

    highlights: [
      'CNC turning and cylindrical grinding in-house',
      'Full-length straightness checking after grinding',
      'Keyway milling to DIN 6885',
      'Dynamic balancing available on request',
    ],
  },

  {
    slug: 'reducers',
    tag: 'Drive Systems',
    name: 'Reducers',
    shortDesc: 'Speed reducers built to specification for industrial use.',
    heroImage: null,

    intro: `Vartig designs and manufactures complete speed reducer assemblies for industrial
    applications where standard catalogue units do not meet the torque, ratio, or envelope
    requirements. We machine the housings, produce all internal gears and shafts, source
    bearings and seals, assemble and test every unit before delivery.`,

    specs: [
      { label: 'Reduction ratios',  value: 'Single stage: 1:2 – 1:8 / Multi-stage: up to 1:200' },
      { label: 'Output torque',     value: 'Up to 50 000 Nm (custom)' },
      { label: 'Input speed',       value: 'Up to 3000 rpm' },
      { label: 'Housing material',  value: 'Cast iron GJL-250, steel fabrication' },
      { label: 'Shaft configuration', value: 'Inline, right-angle, offset' },
      { label: 'Stages',            value: '1, 2 or 3 stage' },
      { label: 'Lubrication',       value: 'Oil bath or forced lubrication' },
      { label: 'Testing',           value: 'No-load and load test before delivery' },
    ],

    gallery: [
      { image: null, caption: 'Two-stage helical reducer, ratio 1:28' },
      { image: null, caption: 'Right-angle worm gearbox' },
      { image: null, caption: 'Reducer housing after machining' },
      { image: null, caption: 'Assembled unit on test bench' },
    ],

    highlights: [
      'Fully custom — ratio, shaft layout, mounting interface',
      'Housing designed and machined in-house',
      'All internal components manufactured by Vartig',
      'Load testing with report included',
    ],
  },

  {
    slug: 'couplings-flanges',
    tag: 'Connection',
    name: 'Couplings & Flanges',
    shortDesc: 'Rigid and flexible couplings and flanged connections for torque transmission.',
    heroImage: null,

    intro: `Vartig manufactures rigid and flexible shaft couplings, jaw couplings, disc couplings,
    and custom flanged adapters for connecting rotating equipment. Whether you need an exact
    replacement for a worn coupling or a completely custom flange to mate two different shaft
    standards, we machine it to your drawing or sample.`,

    specs: [
      { label: 'Coupling types',   value: 'Rigid, jaw, disc, gear, flange' },
      { label: 'Max bore diameter', value: '300 mm' },
      { label: 'Max torque',        value: 'Up to 20 000 Nm' },
      { label: 'Bore tolerances',   value: 'H7 standard, others on request' },
      { label: 'Keyway standard',   value: 'DIN 6885 / customer spec' },
      { label: 'Materials',         value: 'C45, 42CrMo4, GJL-250, stainless' },
      { label: 'Balancing',         value: 'Static and dynamic balancing available' },
      { label: 'Surface',           value: 'Turned, ground, or coated' },
    ],

    gallery: [
      { image: null, caption: 'Rigid flange coupling, Ø 180 mm' },
      { image: null, caption: 'Jaw coupling halves, bored to H7' },
      { image: null, caption: 'Custom adapter flange between two shaft standards' },
      { image: null, caption: 'Disc coupling for high-speed application' },
    ],

    highlights: [
      'Exact replacement parts from worn samples',
      'Custom bore, keyway and set-screw configurations',
      'Matching flanges supplied as pairs',
      'Balancing certificate available',
    ],
  },

  {
    slug: 'assemblies',
    tag: 'Assembly',
    name: 'Metal Assemblies',
    shortDesc: 'Complex multi-part assemblies with full dimensional control.',
    heroImage: null,

    intro: `Beyond individual components, Vartig offers complete assembly services — taking
    a set of machined parts, bearings, seals and fasteners and delivering a ready-to-install
    sub-assembly. Every assembly is dimensionally checked against the drawing before leaving
    the workshop, eliminating fitting problems on the customer's site.`,

    specs: [
      { label: 'Max assembly weight', value: '~2000 kg (overhead crane available)' },
      { label: 'Inspection',          value: 'CMM and gauge measurement' },
      { label: 'Fasteners',           value: 'DIN class 8.8 / 10.9 standard' },
      { label: 'Bearings',            value: 'SKF, FAG, or customer-specified' },
      { label: 'Seals',               value: 'Sourced and fitted to drawing' },
      { label: 'Documentation',       value: 'Dimensional report on request' },
      { label: 'Packaging',           value: 'Wooden crate, anti-corrosion wrapped' },
      { label: 'Delivery',            value: 'To customer address or EXW' },
    ],

    gallery: [
      { image: null, caption: 'Gearbox sub-assembly ready for installation' },
      { image: null, caption: 'Shaft + bearing + housing assembly' },
      { image: null, caption: 'Dimensional check on CMM table' },
      { image: null, caption: 'Finished assembly packed for transport' },
    ],

    highlights: [
      'Single-source for parts and assembly',
      'Reduces your incoming inspection effort',
      'Overhead crane for heavy sub-assemblies',
      'Corrosion protection and professional packaging',
    ],
  },

  {
    slug: 'constructions',
    tag: 'Fabrication',
    name: 'Steel Constructions',
    shortDesc: 'Metal structures and frames fabricated to engineering drawings.',
    heroImage: null,

    intro: `Vartig fabricates welded and bolted steel structures, frames, supports, brackets and
    machine bases from structural steel profiles and plates. All constructions are produced
    from certified drawings and undergo dimensional and weld-quality inspection before
    surface treatment and delivery.`,

    specs: [
      { label: 'Welding processes', value: 'MIG/MAG, TIG, MMA' },
      { label: 'Weld quality',      value: 'EN ISO 5817 class B/C' },
      { label: 'Max structure size', value: 'Up to 6000 × 2500 × 2000 mm' },
      { label: 'Max lifting weight', value: '5000 kg' },
      { label: 'Materials',         value: 'S235, S355, S690, stainless' },
      { label: 'Machined interfaces', value: 'Milled mounting faces, bored holes' },
      { label: 'Surface treatment', value: 'Blast + primer + topcoat, hot-dip galvanising' },
      { label: 'NDT',               value: 'Visual, MT, UT on request' },
    ],

    gallery: [
      { image: null, caption: 'Machine base frame, S355 steel' },
      { image: null, caption: 'Welded support bracket after blasting' },
      { image: null, caption: 'Structural frame with milled mounting pads' },
      { image: null, caption: 'Finished construction after painting' },
    ],

    highlights: [
      'In-house welding and machining in one location',
      'Milled interfaces for accurate machine assembly',
      'Full surface treatment capability',
      'Weld inspection reports available',
    ],
  },

  {
    slug: 'custom-machining',
    tag: 'CNC Machining',
    name: 'Custom CNC Machining',
    shortDesc: 'Any metal part machined to your technical documentation.',
    heroImage: null,

    intro: `If you have a drawing, a 3D model, or even a worn part that needs replacing,
    Vartig can machine it. Our CNC turning and milling centres handle a wide range of
    materials and geometries — from simple turned bushings to complex prismatic parts
    with multiple setups. We accept one-off prototypes as well as repeat production runs.`,

    specs: [
      { label: 'CNC turning',    value: 'Ø up to 500 mm × 2000 mm length' },
      { label: 'CNC milling',    value: 'Table 1200 × 600 mm, 5-axis' },
      { label: 'Tolerances',     value: 'IT6 standard; tighter on request' },
      { label: 'Surface finish', value: 'Ra 0.4 µm achievable' },
      { label: 'Materials',      value: 'All steels, cast iron, aluminium, bronze, brass' },
      { label: 'Input formats',  value: 'DWG, DXF, STEP, IGES, PDF drawing, sample' },
      { label: 'Batch size',     value: '1 piece to series production' },
      { label: 'Lead time',      value: 'Prototype: from 3 days; series: on agreement' },
    ],

    gallery: [
      { image: null, caption: 'Complex turned part with multiple diameters' },
      { image: null, caption: 'Prismatic housing after 5-axis milling' },
      { image: null, caption: 'Batch of bushings, batch size 200 pcs' },
      { image: null, caption: 'Prototype flange from STEP file, 1 pc' },
    ],

    highlights: [
      'Accepts STEP, IGES, DWG, PDF or physical sample',
      'Prototype to series in the same workshop',
      'Material certificates available on request',
      'Inspection report included for critical parts',
    ],
  },

  {
    slug: 'reverse-engineering',
    tag: 'Reverse Engineering',
    name: 'Reverse Engineering',
    shortDesc: 'Reproduce worn or obsolete parts by measuring existing components.',
    heroImage: null,

    intro: `When original drawings are unavailable and the manufacturer no longer supports a
    part, Vartig can measure the existing component — or its worn remains — recreate the
    geometry, select an equivalent material, and produce new parts that match or improve
    upon the original. This service is especially valuable for older machinery where spare
    parts are no longer available on the market.`,

    specs: [
      { label: 'Measurement tools', value: 'CMM, gear measurement centre, 3D scanner' },
      { label: 'Documentation',     value: 'Full CAD drawing created from measurement' },
      { label: 'Material matching', value: 'Hardness test + spectrometry analysis' },
      { label: 'Drawing output',    value: 'DWG / PDF supplied with parts' },
      { label: 'Part complexity',   value: 'Simple turned parts to complete assemblies' },
      { label: 'Batch',             value: 'From 1 replacement to stock quantity' },
      { label: 'Condition input',   value: 'Worn, broken or complete original accepted' },
      { label: 'Lead time',         value: 'Depends on complexity; typically 1–3 weeks' },
    ],

    gallery: [
      { image: null, caption: 'Worn gear measured on CMM before reproduction' },
      { image: null, caption: 'CAD drawing created from measurement data' },
      { image: null, caption: 'New part alongside original for comparison' },
      { image: null, caption: 'Set of reproduced parts ready for delivery' },
    ],

    highlights: [
      'No original drawing required',
      'Material identified by hardness + spectrometry',
      'CAD drawing delivered with the parts',
      'Improvement of weak points possible during redesign',
    ],
  },
]

// Helper: find a service by its URL slug
export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug) || null
}