<template>
  <div class="pt-16">
    <PageHeader
      eyebrow="Naša oprema"
      title="MAŠINSKI PARK"
      subtitle="Moderna radionica opremljena preciznim mašinama i konvencionalnom opremom za širok spektar operacija obrade."
    />
    <div class="stripe-divider"></div>

    <!-- ─── MACHINES GALLERY ───────────────────────────────────── -->
    <section class="py-20 bg-surface-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <p class="font-condensed text-brand-accent tracking-[0.3em] uppercase text-xs mb-1">
             Slike i opisi naših mašina
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="machine in machines"
            :key="machine.name"
            class="machine-card bg-surface-700 rounded-sm"
          >
            <!-- Image or placeholder -->
            <div class="h-52 bg-surface-600 relative overflow-hidden">
              <img
                v-if="machine.image"
                :src="machine.image"
                :alt="machine.name"
                class="w-full h-full object-cover"
              />
              <div
                v-else
                class="w-full h-full flex flex-col items-center justify-center"
              >
                <GearIcon :size="48" class="text-surface-500 mb-2" />
                <span class="font-condensed text-xs tracking-widest text-gray-600 uppercase">Uskoro stiže fotografija</span>
              </div>
              <div class="machine-overlay absolute inset-0 bg-brand-green/10 flex items-center justify-center">
                <span class="font-condensed text-brand-accent text-xs tracking-widest uppercase">Pogledaj detalje</span>
              </div>
            </div>

            <!-- Info -->
            <div class="p-5">
              <h3 class="font-condensed text-base tracking-wide uppercase text-white mb-1">{{ machine.name }}</h3>
              <p class="font-body text-gray-500 text-xs mb-3">{{ machine.type }}</p>
              <ul class="space-y-1">
                <li
                  v-for="spec in machine.specs"
                  :key="spec"
                  class="flex items-center gap-2 text-gray-600 text-xs font-body"
                >
                  <span class="w-1 h-1 rounded-full bg-brand-green flex-shrink-0"></span>
                  {{ spec }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CAPABILITIES ───────────────────────────────────────── -->
    <section class="py-16 bg-surface-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="section-line"></div>
        <h2 class="font-display text-4xl text-white mb-10">TEHNIČKE MOGUĆNOSTI</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="cap in capabilities"
            :key="cap.label"
            class="stat-box p-5 rounded-sm"
          >
            <div class="font-display text-3xl text-brand-accent mb-1">{{ cap.value }}</div>
            <div class="font-condensed text-xs tracking-widest uppercase text-gray-500">{{ cap.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import GearIcon from '@/components/GearIcon.vue'
import PageHeader from '@/components/PageHeader.vue'
//images of machines
import borverk90 from '@/assets/machines/borverk-90.jpeg'
import borverk110 from '@/assets/machines/borverk-110.jpeg'
import cncGlodalica from '@/assets/machines/cnc-glodalica.jpeg'
import morandoStrug from '@/assets/machines/morando-strug.jpeg'
import potisjePA501M from '@/assets/machines/potisje-PA501M.jpeg'
import potisjePA501M2 from '@/assets/machines/potisje-PA501M-2.jpeg'
import lorenzOzubljenje from '@/assets/machines/lorenz-za-ozubljenje.jpeg'
import malaGlodalica from '@/assets/machines/mala-glodalica.jpeg'
import brusilicaStrug from '@/assets/machines/brusilica-strug.jpeg'
import dubilicaVeca from '@/assets/machines/dubilica-veca.jpeg'
import potisjePA831P from '@/assets/machines/potisje-PA831P.jpeg'
import strugF from '@/assets/machines/strug-frenky.jpeg'
// do zoom on click to machine

const machines = [
  {
    name: 'Borverk-90',
    type: 'Horizontalna Glodalica',
    image: borverk90, 
    specs: ['Sto: 1200 x 1000mm', 'Obrtaji: 1000 rpm', '3-osna mogućnost izrade', 'Preciznost ±0.02mm'],
  },
  {
    name: 'Borverk-110',
    type: 'Horizontalna Glodalica',
    image: borverk110,
    specs: ['Sto: 1200 x 1000mm', 'Obrtaji: 1000 rpm', '3-osna mogućnost izrade', 'Preciznost ±0.02mm'],
  },
  {
    name: 'Deckel FP4AT CNC ',
    type: 'CNC Glodalica',
    image: cncGlodalica,
    specs: ['Sto: 550 x 500mm', 'Obrtaji: 4000 rpm', '3-osna mogućnost izrade', 'Preciznost ±0.02mm'],
  },
  {
    name: 'Strug Morando',
    type: 'Manuelni Strug',
    image: morandoStrug,
    specs: ['Max. duzina komada: 10.000mm', 'Max. precnik komada: 2.500mm', 'Preciznost ±0.02mm'],
  },
  {
    name: 'Potisje PA501M Strug',
    type: 'Manuelni Strug',
    image: potisjePA501M,
    specs: ['Max. duzina komada: 1.000mm', 'Max. precnik komada: 500mm', 'Preciznost ±0.02mm'],
  },
  {
    name: 'Potisje PA501M Strug',
    type: 'Manuelni Strug',
    image: potisjePA501M2,
    specs: ['Max. duzina komada: 1.000mm', 'Max. precnik komada: 500mm', 'Preciznost ±0.02mm'],
  },
   {
    name: 'Lorenz - Mašina za ozubljivanje',
    type: 'Gears & Sprockets Cutting',
    image: lorenzOzubljenje,
    specs: ['Max. precnik zupcanika: 2.500mm', 'Max. visina zubcanika: 3.500mm'],
  },
   {
    name: 'Manualna Glodalica',
    type: 'Manualna Glodalica',
    image: malaGlodalica,
    specs: ['Sto: 900 x 400mm', 'Obrtaji: 700 rpm', '3-osna mogućnost izrade', 'Preciznost ±0.05mm'],
  },
   {
    name: 'Univerzalna cilindrična brusilica',
    type: 'Cilindrična brusilica',
    image: brusilicaStrug,
    specs: ['Max. duzina komada: 5.000mm', 'Max. precnik komada: 500mm', 'Preciznost ±0.01mm'],
  },
  {
    name: 'Dubilica',
    type: 'Dubilica',
    image: dubilicaVeca,
    specs: ['Max. precnik komada sa kanalom: 1.500mm', 'Max. kanal dubine: 150mm'],
  },
  {
    name: 'Potisje PA831P Strug',
    type: 'Manuelni Strug',
    image: potisjePA831P,
    specs: ['Max. duzina komada: 16.000mm', 'Max. precnik komada: 3.000mm', 'Preciznost ±0.05mm'],
  },
  {
    name: 'Manuelni Strug',
    type: 'Manuelni Strug',
    image: strugF,
    specs: ['Max. duzina komada: 3.000mm', 'Max. precnik komada: 1.800mm', 'Preciznost ±0.1mm'],
  },
]

const capabilities = [
  { value: '±0.02', label: 'Uobicajena tolerancija (mm)' },
  { value: '16.000mm',    label: 'Maksimalna dužina vratila' },
  { value: '2.500mm', label: 'Maksimalni prečnik zupčanika'},
  { value: 'Ra 0.4', label: 'Površinska završna obrada' },
]
</script>
