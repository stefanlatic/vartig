<template>
  <div class="pt-16">
    <PageHeader
      eyebrow="Our Equipment"
      title="MACHINES PARK"
      subtitle="A modern workshop equipped with precision machinery and conventional equipment for a wide range of manufacturing operations."
    />
    <div class="stripe-divider"></div>

    <!-- ─── MACHINES GALLERY ───────────────────────────────────── -->
    <section class="py-20 bg-surface-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <p class="font-condensed text-brand-accent tracking-[0.3em] uppercase text-xs mb-1">
             Our machines photos and descriptions 
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
                <span class="font-condensed text-xs tracking-widest text-gray-600 uppercase">Photo Coming Soon</span>
              </div>
              <div class="machine-overlay absolute inset-0 bg-brand-green/10 flex items-center justify-center">
                <span class="font-condensed text-brand-accent text-xs tracking-widest uppercase">View Details</span>
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
        <h2 class="font-display text-4xl text-white mb-10">TECHNICAL CAPABILITIES</h2>
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
    type: 'Milling machine',
    image: borverk90, 
    specs: ['Table: 1200 x 1000mm', 'Spindle speed: 1000 rpm', '3-axis capability'],
  },
  {
    name: 'Borverk-110',
    type: 'Milling machine',
    image: borverk110,
    specs: ['Table: 1200 x 1000mm', 'Spindle speed: 1000 rpm', '3-axis capability'],
  },
  {
    name: 'Deckel FP4AT CNC ',
    type: 'CNC Milling machine',
    image: cncGlodalica,
    specs: ['Table: 550 x 500mm', 'Spindle speed: 4000 rpm', '3-axis capability'],
  },
  {
    name: 'Turning Machine Morando',
    type: 'Turning machine',
    image: morandoStrug,
    specs: ['Grinding length: 1500mm', 'Diameter: up to 400mm', 'Surface finish Ra 0.4'],
  },
  {
    name: 'Potisje PA501M Lathe',
    type: 'Turning machine',
    image: potisjePA501M,
    specs: ['Table: 800 x 400mm', 'Precision ±0.002mm', 'Magnetic chuck'],
  },
  {
    name: 'Potisje PA501M Lathe',
    type: 'Turning machine',
    image: potisjePA501M2,
    specs: ['Drilling capacity: up to 80mm', 'Radial arm: 1600mm', 'Tapping capability'],
  },
   {
    name: 'Lorenz - Gear Cutting machine',
    type: 'Gears & Sprockets Cutting',
    image: lorenzOzubljenje,
    specs: ['Drilling capacity: up to 80mm', 'Radial arm: 1600mm', 'Tapping capability'],
  },
   {
    name: 'Manual Milling machine',
    type: 'Milling machine',
    image: malaGlodalica,
    specs: ['Drilling capacity: up to 80mm', 'Radial arm: 1600mm', 'Tapping capability'],
  },
   {
    name: 'Grinder Machine',
    type: 'Turning & grinding machine',
    image: brusilicaStrug,
    specs: ['Drilling capacity: up to 80mm', 'Radial arm: 1600mm', 'Tapping capability'],
  },
  {
    name: 'Dubilica',
    type: 'Canal digging',
    image: dubilicaVeca,
    specs: ['Drilling capacity: up to 80mm', 'Radial arm: 1600mm', 'Tapping capability'],
  },
  {
    name: 'Potisje PA831P Lathe',
    type: 'Turning machine',
    image: potisjePA831P,
    specs: ['Drilling capacity: up to 80mm', 'Radial arm: 1600mm', 'Tapping capability'],
  },
  {
    name: 'Turning Machine',
    type: 'Turning machine',
    image: strugF,
    specs: ['Drilling capacity: up to 80mm', 'Radial arm: 1600mm', 'Tapping capability'],
  },
]

const capabilities = [
  { value: '±0.01', label: 'Turning tolerance (mm)' },
  { value: '2m',    label: 'Max shaft length' },
  { value: '800mm', label: 'Max gear diameter' },
  { value: 'Ra 0.4', label: 'Surface finish' },
]
</script>
