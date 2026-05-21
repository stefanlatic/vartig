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
          Izrada metalnih delova
        </p> 
        <h1 class="font-display text-7xl md:text-9xl text-white leading-none mb-4 tracking-wider">
          VARTIG
        </h1>
        <div class="section-line mx-auto mb-6"></div>
        <p class="font-condensed text-lg md:text-xl tracking-[0.2em] text-gray-400 uppercase mb-3">
          Kvalitet · Sigurnost · Konkurentnost
        </p>
        <p class="font-body text-gray-400 max-w-2xl mx-auto text-base leading-relaxed mb-10">
          Izrada metalnih delova, sklopova i konstrukcija po narudžbini. Zupčanici, lančanici, reduktori, osovine, spojnice — precizno izrađeni prema vašim specifikacijama.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/services" class="btn-primary">Naše Usluge</RouterLink>
          <RouterLink to="/contact" class="btn-outline">Zatražite ponudu</RouterLink>
        </div>
      </div>

    </section>

    <!-- ─── WHO WE ARE ─────────────────────────────────────────── -->
    <section class="py-24 bg-surface-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p class="font-condensed text-brand-accent tracking-[0.3em] uppercase text-xs mb-3">Ko smo mi</p>
            <div class="section-line"></div>
            <h2 class="font-display text-5xl md:text-6xl text-white leading-tight mb-6">
              PRECIZNOST <br />UGRAĐENA<br />U SVAKI DEO
            </h2>
            <p class="font-body text-gray-400 leading-relaxed mb-4">
              Vartig je specijalizovana kompanija za obradu metala, usmerena na proizvodnju visokokvalitetnih mehaničkih komponenti i sklopova prema zahtevima kupaca. Sa posvećenošću preciznosti i trajnosti, opslužujemo industrije koje zahtevaju samo najbolje.
            </p>
            <p class="font-body text-gray-400 leading-relaxed mb-8">
              Od pojedinačnih delova po meri do složenih sklopova i konstrukcija — naša radionica isporučuje rešenja koja funkcionišu u realnim industrijskim uslovima.
            </p>
            <RouterLink to="/about" class="btn-outline">Saznajte više o nama</RouterLink>
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
      <p class="font-condensed text-brand-accent tracking-[0.3em] uppercase text-xs mb-3">Šta izrađujemo</p>
      <div class="section-line mx-auto"></div>
      <h2 class="font-display text-5xl md:text-6xl text-white">NAŠE USLUGE</h2>
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
            <span class="font-condensed text-xs tracking-widest uppercase">Saznajte više</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </div>
        </div>
      </RouterLink>
    </div>

    <div class="text-center mt-10">
      <RouterLink to="/services" class="btn-primary">Pogledajte Sve Usluge</RouterLink>
    </div>
  </div>
</section>

    <!-- ─── CTA BANNER ─────────────────────────────────────────── -->
    <section class="py-16 bg-brand-dark relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-brand-green to-transparent"></div>
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 class="font-display text-4xl md:text-5xl text-white mb-4">SPREMNI DA POKRENETE VAŠ PROJEKAT?</h2>
        <p class="font-body text-gray-400 mb-8">
          Pošaljite nam tehničke crteže ili opišite vaše zahteve — izradiće mo preciznu ponudu.
        </p>
        <RouterLink to="/contact" class="btn-primary">Kontaktirajte Nas Danas</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import GearIcon from '@/components/GearIcon.vue'
import imgGears         from '@/assets/services/gears-spockets.jpg'
import imgShafts        from '@/assets/services/shafts-axles.webp'
import imgReducers      from '@/assets/services/reducers.png'
import imgAssemblies    from '@/assets/services/assemblies.jpg'
import imgConstructions from '@/assets/services/constructions.jpg'
import imgCustom        from '@/assets/services/custom-machining.jpg'

const stats = [
  { value: '10+',  label: 'Godina iskustva' },
  { value: '500+', label: 'Završenih projekata' },
  { value: '100%', label: 'Izrada po narudžbini' },
  { value: 'ISO',  label: 'Standardi kvaliteta' },
]

const servicesPreview = [
  {
    slug:  'gears-sprockets',
    tag:   'Transmisija',
    name:  'Zupčanici i lančanici',
    desc:  'Precizno izrađeni zupčanici i lančanici za zahtevne transmisione primene.',
    image: imgGears,
  },
  {
    slug:  'shafts-axles',
    tag:   'Prenos snage',
    name:  'Osovine i vratila',
    desc:  'Osovine i rukavci po meri, projektovani prema vašim zahtevima.',
    image: imgShafts,
  },
  {
    slug:  'reducers',
    tag:   'Pogonski sistemi',
    name:  'Reduktori',
    desc:  'Reduktori i menjačke kutije izrađeni prema specifikaciji za industrijsku upotrebu.',
    image: imgReducers,
  },
  {
    slug:  'assemblies',
    tag:   'Sklapanje',
    name:  'Metalni sklopovi',
    desc:  'Složeni višedelni sklopovi sa potpunom dimenzionalnom kontrolom.',
    image: imgAssemblies,
  },
  {
    slug:  'constructions',
    tag:   'Fabricikacija',
    name:  'Metalne konstrukcije',
    desc:  'Metalne konstrukcije i okviri izrađeni prema tehničkoj dokumentaciji.',
    image: imgConstructions,
  },
  {
    slug:  'custom-machining',
    tag:   'CNC obrada',
    name:  'CNC obrada po meri',
    desc:  'Svaki metalni deo obrađen prema vašoj tehničkoj dokumentaciji.',
    image: imgCustom,
  },
]
</script>