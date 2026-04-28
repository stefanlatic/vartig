<template>
  <div>
    <!-- ─── HERO ─────────────────────────────────────────────── -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden hero-diagonal bg-surface-900 gear-bg noise"
    >
      <!-- Decorative spinning gears -->
      <div class="absolute top-28 right-16 text-brand-dark/30 gear-spin hidden lg:block pointer-events-none">
        <GearIcon :size="160" />
      </div>
      <div class="absolute bottom-32 left-10 text-brand-dark/20 gear-spin-reverse hidden lg:block pointer-events-none">
        <GearIcon :size="100" />
      </div>

      <!-- Left accent line -->
      <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-green to-transparent"></div>

      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p class="font-condensed text-brand-accent tracking-[0.4em] uppercase text-sm mb-6 mt-16">
          Metal Manufacturing Excellence
        </p> 
        <h1 class="font-display text-7xl md:text-9xl text-white leading-none mb-4 tracking-wider">
          VARTIG
        </h1>
        <div class="section-line mx-auto mb-6"></div>
        <p class="font-condensed text-lg md:text-xl tracking-[0.2em] text-gray-400 uppercase mb-3">
          Kvalitet · Sigurnost · Konkurentnost
        </p>
        <p class="font-body text-gray-400 max-w-2xl mx-auto text-base leading-relaxed mb-10">
          Custom manufacturing of metal parts, assemblies and constructions.
          Gears, sprockets, reducers, shafts, couplings — precision-engineered to your exact specifications.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/services" class="btn-primary">Our Services</RouterLink>
          <RouterLink to="/contact" class="btn-outline">Get a Quote</RouterLink>
        </div>
      </div>

    </section>

    <!-- ─── WHO WE ARE ─────────────────────────────────────────── -->
    <section class="py-24 bg-surface-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p class="font-condensed text-brand-accent tracking-[0.3em] uppercase text-xs mb-3">Who We Are</p>
            <div class="section-line"></div>
            <h2 class="font-display text-5xl md:text-6xl text-white leading-tight mb-6">
              PRECISION<br />BUILT INTO<br />EVERY PART
            </h2>
            <p class="font-body text-gray-400 leading-relaxed mb-4">
              Vartig is a specialized metal manufacturing company focused on producing high-quality
              mechanical components and assemblies tailored to customer requirements. With a commitment
              to precision and durability, we serve industries that demand nothing less than excellence.
            </p>
            <p class="font-body text-gray-400 leading-relaxed mb-8">
              From individual custom parts to complex assemblies and structures — our workshop delivers
              solutions that perform under real industrial conditions.
            </p>
            <RouterLink to="/about" class="btn-outline">Learn More About Us</RouterLink>
          </div>

          <!-- Stats grid -->
          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in stats" :key="stat.label" class="stat-box p-6 rounded-sm">
              <div class="font-display text-4xl text-brand-accent mb-1">{{ stat.value }}</div>
              <div class="font-condensed text-xs tracking-widest uppercase text-gray-500">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── SERVICES PREVIEW ───────────────────────────────────────────────── -->
<section class="py-24 bg-surface-900 gear-bg">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-14">
      <p class="font-condensed text-brand-accent tracking-[0.3em] uppercase text-xs mb-3">What We Make</p>
      <div class="section-line mx-auto"></div>
      <h2 class="font-display text-5xl md:text-6xl text-white">OUR SERVICES</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <RouterLink
        v-for="service in servicesPreview"
        :key="service.name"
        :to="`/services/${service.slug}`"
        class="service-card bg-surface-700 rounded-sm overflow-hidden group cursor-pointer block"
      >
        <!-- Image area -->
        <div class="relative h-44 bg-surface-600 overflow-hidden">
          <img
            v-if="service.image"
            :src="service.image"
            :alt="service.name"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <!-- Green overlay on hover -->
          <div class="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <!-- Category tag -->
          <div class="absolute top-3 left-3">
            <span class="bg-surface-900/80 backdrop-blur-sm text-brand-accent font-condensed text-xs tracking-widest uppercase px-2.5 py-1">
              {{ service.tag }}
            </span>
          </div>
        </div>

        <!-- Text area -->
        <div class="p-6">
          <h3 class="font-condensed text-lg tracking-wide uppercase text-white mb-2 group-hover:text-brand-accent transition-colors duration-200">
            {{ service.name }}
          </h3>
          <p class="font-body text-gray-500 text-sm leading-relaxed">
            {{ service.desc }}
          </p>
          <!-- Animated arrow -->
          <div class="mt-4 flex items-center gap-2 text-brand-green opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
            <span class="font-condensed text-xs tracking-widest uppercase">Learn More</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </div>
        </div>
      </RouterLink>
    </div>

    <div class="text-center mt-10">
      <RouterLink to="/services" class="btn-primary">View All Services</RouterLink>
    </div>
  </div>
</section>

    <!-- ─── CTA BANNER ─────────────────────────────────────────── -->
    <section class="py-16 bg-brand-dark relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-brand-green to-transparent"></div>
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 class="font-display text-4xl md:text-5xl text-white mb-4">READY TO START YOUR PROJECT?</h2>
        <p class="font-body text-gray-400 mb-8">
          Send us your technical drawings or describe your requirements — we'll provide a precise quote.
        </p>
        <RouterLink to="/contact" class="btn-primary">Contact Us Today</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import GearIcon from '@/components/GearIcon.vue'
import imgGears    from '@/assets/services/gears.jpg'
import imgShafts   from '@/assets/services/shafts.webp'
import imgReducers from '@/assets/services/reducers.png'
import imgAssemblies from '@/assets/services/assemblies.jpg'
import imgConstructions from '@/assets/services/constructions.jpg'
import imgCustom   from '@/assets/services/customs.jpg'
import { services } from '@/data/services.js'


const stats = [
  { value: '10+',  label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Custom Manufacturing' },
  { value: 'ISO',  label: 'Quality Standards' },
]


const servicesPreview = [
  {
    tag:   'Transmission',
    name:  'Gears & Sprockets',
    desc:  'Precision-cut gears and sprockets for demanding transmission applications.',
    image: imgGears, 
  },
  {
    tag:   'Power Transfer',
    name:  'Shafts & Couplings',
    desc:  'Custom shafts and coupling systems designed for your torque requirements.',
    image: imgShafts, 
  },
  {
    tag:   'Drive Systems',
    name:  'Reducers',
    desc:  'Speed reducers and gearboxes built to specification for industrial use.',
    image: imgReducers, 
  },
  {
    tag:   'Assembly',
    name:  'Metal Assemblies',
    desc:  'Complex multi-part assemblies with full dimensional control.',
    image: imgAssemblies,
  },
  {
    tag:   'Fabrication',
    name:  'Constructions',
    desc:  'Metal structures and frames fabricated to engineering drawings.',
    image: imgConstructions, 
  },
  {
    tag:   'CNC Machining',
    name:  'Custom Parts',
    desc:  'Any metal part machined to your technical documentation.',
    image: imgCustom, 
  },
]

</script>
