<template>
  <div class="pt-16">
    <PageHeader
      eyebrow="What We Offer"
      title="OUR SERVICES"
      subtitle="Comprehensive metal manufacturing services — from individual components to complete assemblies, all produced to your exact specifications."
    />
    <div class="stripe-divider"></div>

    <!-- ─── SERVICES GRID ─────────────────────────────────────── -->
    <section class="py-20 bg-surface-900 gear-bg">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <RouterLink
          v-for="service in services"
          :key="service.name"
          :to="`/services/${service.slug}`"
          class="service-card bg-surface-700 rounded-sm p-8 block"
        >
          <div class="flex items-start gap-5">
            <div class="text-brand-green flex-shrink-0 mt-1">
              <GearIcon :size="36" />
            </div>
            <div>
              <h3 class="font-condensed text-xl tracking-wide uppercase text-white mb-3">{{ service.name }}</h3>
              <p class="font-body text-gray-400 text-sm leading-relaxed mb-4">{{ service.desc }}</p>
              <ul class="space-y-1">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center gap-2 text-gray-500 text-xs font-body"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0"></span>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- ─── PROCESS ────────────────────────────────────────────── -->
    <section class="py-20 bg-surface-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-14">
          <p class="font-condensed text-brand-accent tracking-[0.3em] uppercase text-xs mb-3">How It Works</p>
          <div class="section-line mx-auto"></div>
          <h2 class="font-display text-5xl text-white">Naš  Proces</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-0">
          <div
            v-for="(step, i) in process"
            :key="i"
            class="relative"
          >
            <div class="bg-surface-700 border border-surface-500 p-6 text-center h-full">
              <div class="font-display text-5xl text-brand-dark mb-3">{{ String(i + 1).padStart(2, '0') }}</div>
              <h4 class="font-condensed tracking-widest uppercase text-white text-sm mb-2">{{ step.title }}</h4>
              <p class="font-body text-gray-500 text-xs leading-relaxed">{{ step.desc }}</p>
            </div>
            <!-- Arrow connector -->
            <div
              v-if="i < 3"
              class="hidden md:block absolute top-1/2 -right-3 z-10 w-6 h-0.5 bg-brand-green"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA ───────────────────────────────────────────────── -->
    <section class="py-14 bg-brand-dark text-center">
      <h2 class="font-display text-4xl text-white mb-4">TREBATE PONUDU?</h2>
      <p class="font-body text-gray-400 mb-8">Pošaljite nam crteže ili opišite zahteve i javićemo vam se brzo.</p>
      <RouterLink to="/contact" class="btn-primary">Zatražite ponudu</RouterLink>
    </section>
  </div>
</template>

<script setup>
import GearIcon from '@/components/GearIcon.vue'
import PageHeader from '@/components/PageHeader.vue'
import { services } from '@/data/services.js'

const process = [
  { title: 'Upit',    desc: 'Pošaljite nam crteže, uzorke ili zahteve.' },
  { title: 'Ponuda',      desc: 'Procenjujemo i pripremamo preciznu ponudu.' },
  { title: 'Proizvodnja', desc: 'Izrada uz potpunu kontrolu kvaliteta.' },
  { title: 'Isporuka',   desc: 'Pregledano, upakovano i isporučeno na vreme.' },
]
</script>
