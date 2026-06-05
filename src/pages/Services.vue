<template>
  <div class="pt-16">
    <PageHeader
      :eyebrow="t('services.header.eyebrow')"
      :title="t('services.header.title')"
      :subtitle="t('services.header.subtitle')"
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
              <p class="font-body text-gray-400 text-sm leading-relaxed mb-4">{{ service.shortDesc }}</p>
              <ul class="space-y-1">
                <li
                  v-for="highlight in service.highlights"
                  :key="highlight"
                  class="flex items-center gap-2 text-gray-500 text-xs font-body"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0"></span>
                  {{ highlight }}
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
          <p class="font-condensed text-brand-accent tracking-[0.3em] uppercase text-xs mb-3">{{ t('services.process.eyebrow') }}</p>
          <div class="section-line mx-auto"></div>
          <h2 class="font-display text-5xl text-white">{{ t('services.process.title') }}</h2>
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
      <h2 class="font-display text-4xl text-white mb-4">{{ t('services.cta.heading') }}</h2>
      <p class="font-body text-gray-400 mb-8">{{ t('services.cta.desc') }}</p>
      <RouterLink to="/contact" class="btn-primary">{{ t('services.cta.btn') }}</RouterLink>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import GearIcon from '@/components/GearIcon.vue'
import PageHeader from '@/components/PageHeader.vue'

const { t, tm } = useI18n()

const services = computed(() => tm('serviceData'))

const process = computed(() => tm('services.process.steps'))
</script>
