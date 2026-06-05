<template>
  <div class="pt-16">
    <!-- ─── NOT FOUND ─────────────────────────────────────────── -->
    <div v-if="!service" class="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <GearIcon :size="64" class="text-surface-600 mb-6" />
      <h1 class="font-display text-5xl text-white mb-4">{{ t('serviceDetail.notFound') }}</h1>
      <p class="font-body text-gray-500 mb-8">{{ t('serviceDetail.notFoundDesc') }}</p>
      <RouterLink to="/services" class="btn-primary">{{ t('serviceDetail.backBtn') }}</RouterLink>
    </div>

    <template v-else>
      <!-- ─── HERO ─────────────────────────────────────────────── -->
      <div class="relative min-h-[420px] flex items-end bg-surface-800 overflow-hidden">
        <!-- Hero image or gradient background -->
        <img
          v-if="service.heroImage"
          :src="service.heroImage"
          :alt="service.name"
          class="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/70 to-transparent"></div>
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-brand-green"></div>

        <!-- Decorative gear -->
        <div class="absolute top-10 right-16 text-brand-dark/30 gear-spin hidden lg:block pointer-events-none">
          <GearIcon :size="140" />
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 mb-6 font-condensed text-xs tracking-widest uppercase">
            <RouterLink to="/" class="text-gray-600 hover:text-brand-accent transition-colors">{{ t('serviceDetail.breadcrumb.home') }}</RouterLink>
            <span class="text-gray-700">/</span>
            <RouterLink to="/services" class="text-gray-600 hover:text-brand-accent transition-colors">{{ t('serviceDetail.breadcrumb.services') }}</RouterLink>
            <span class="text-gray-700">/</span>
            <span class="text-brand-accent">{{ service.name }}</span>
          </nav>

          <span class="inline-block bg-brand-green/20 border border-brand-green/40 text-brand-accent font-condensed text-xs tracking-widest uppercase px-3 py-1 mb-4">
            {{ service.tag }}
          </span>
          <h1 class="font-display text-5xl md:text-7xl text-white leading-none mb-4">
            {{ service.name.toUpperCase() }}
          </h1>
          <p class="font-body text-gray-400 text-lg max-w-2xl">{{ service.shortDesc }}</p>
        </div>
      </div>

      <div class="stripe-divider"></div>

      <!-- ─── INTRO + SPECS ──────────────────────────────────────── -->
      <section class="py-20 bg-surface-900 gear-bg">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          <!-- Intro text -->
          <div>
            <div class="section-line"></div>
            <h2 class="font-display text-4xl text-white mb-6">{{ t('serviceDetail.overview') }}</h2>
            <p class="font-body text-gray-400 leading-relaxed whitespace-pre-line text-base">
              {{ service.intro }}
            </p>

            <!-- Highlights -->
            <div class="mt-8 space-y-3">
              <div
                v-for="highlight in service.highlights"
                :key="highlight"
                class="flex items-start gap-3"
              >
                <span class="mt-1.5 w-2 h-2 rounded-full bg-brand-green flex-shrink-0"></span>
                <span class="font-body text-gray-300 text-sm">{{ highlight }}</span>
              </div>
            </div>
          </div>

          <!-- Specs table -->
          <div>
            <div class="section-line"></div>
            <h2 class="font-display text-4xl text-white mb-6">{{ t('serviceDetail.technical') }}</h2>
            <div class="border border-surface-600 rounded-sm overflow-hidden">
              <div
                v-for="(spec, i) in service.specs"
                :key="spec.label"
                :class="[
                  'grid grid-cols-2 border-b border-surface-600 last:border-b-0',
                  i % 2 === 0 ? 'bg-surface-800' : 'bg-surface-700'
                ]"
              >
                <div class="px-5 py-3.5 font-condensed text-xs tracking-widest uppercase text-gray-500 border-r border-surface-600">
                  {{ spec.label }}
                </div>
                <div class="px-5 py-3.5 font-body text-sm text-white">
                  {{ spec.value }}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ─── PHOTO GALLERY ──────────────────────────────────────── -->
      <section class="py-20 bg-surface-800">
        <div class="max-w-7xl mx-auto px-6">
          <div class="section-line"></div>
          <h2 class="font-display text-4xl text-white mb-10">{{ t('serviceDetail.gallery') }}</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="(item, i) in service.gallery"
              :key="i"
              class="group relative rounded-sm overflow-hidden bg-surface-600 cursor-pointer"
              @click="openLightbox(i)"
            >
              <!-- Image or placeholder -->
              <div class="h-52">
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.caption"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2">
                  <GearIcon :size="36" class="text-surface-500" />
                  <span class="font-condensed text-xs tracking-widest text-gray-600 uppercase text-center px-3">
                    {{ t('serviceDetail.addPhoto') }}
                  </span>
                </div>
              </div>

              <!-- Caption overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-surface-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p class="font-body text-white text-xs leading-snug">{{ item.caption }}</p>
              </div>

              <!-- Click to enlarge hint -->
              <div v-if="item.image" class="absolute top-2 right-2 bg-surface-900/60 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="text-brand-accent">
                  <path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zM9 21l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zM21 15l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"/>
                </svg>
              </div>
            </div>
          </div>

          <p class="font-body text-gray-600 text-xs text-center mt-6">
            Place photos in
            <code class="text-brand-green">src/assets/services/{{ service.slug }}/</code>
            and set the <code class="text-brand-green">image</code> field in <code class="text-brand-green">services.js</code>
          </p>
        </div>
      </section>

      <!-- ─── LIGHTBOX ───────────────────────────────────────────── -->
      <Transition name="lightbox">
        <div
          v-if="lightboxIndex !== null"
          class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          @click.self="closeLightbox"
        >
          <button
            @click="closeLightbox"
            class="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Prev -->
          <button
            @click="lightboxIndex = (lightboxIndex - 1 + service.gallery.length) % service.gallery.length"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-2"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div class="max-w-4xl w-full text-center">
            <img
              v-if="service.gallery[lightboxIndex].image"
              :src="service.gallery[lightboxIndex].image"
              :alt="service.gallery[lightboxIndex].caption"
              class="max-h-[75vh] mx-auto object-contain rounded"
            />
            <div v-else class="h-64 flex items-center justify-center">
              <p class="font-condensed text-gray-600 tracking-widest uppercase text-sm">{{ t('serviceDetail.noImage') }}</p>
            </div>
            <p class="font-body text-gray-400 text-sm mt-4">{{ service.gallery[lightboxIndex].caption }}</p>
          </div>

          <!-- Next -->
          <button
            @click="lightboxIndex = (lightboxIndex + 1) % service.gallery.length"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-2"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </Transition>

      <!-- ─── OTHER SERVICES ──────────────────────────────────────── -->
      <section class="py-20 bg-surface-900">
        <div class="max-w-7xl mx-auto px-6">
          <div class="section-line"></div>
          <h2 class="font-display text-4xl text-white mb-10">{{ t('serviceDetail.otherServices') }}</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <RouterLink
              v-for="other in otherServices"
              :key="other.slug"
              :to="`/services/${other.slug}`"
              class="service-card bg-surface-700 p-5 rounded-sm block group"
            >
              <span class="font-condensed text-xs tracking-widest uppercase text-brand-green mb-2 block">{{ other.tag }}</span>
              <span class="font-condensed text-base uppercase text-white group-hover:text-brand-accent transition-colors">
                {{ other.name }}
              </span>
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- ─── CTA ──────────────────────────────────────────────────   vidi dal moze ovo da radi {{ t('serviceDetail.cta.header') }} {{ service.name.toUpperCase() }}-->
      <section class="py-16 bg-brand-dark text-center">
        <h2 class="font-display text-4xl text-white mb-4">{{ t('serviceDetail.cta.header') }} {{ service.name.toUpperCase() }}?</h2>
        <p class="font-body text-gray-400 mb-8">{{ t('serviceDetail.cta.desc') }}</p>
        <RouterLink to="/contact" class="btn-primary">{{ t('serviceDetail.cta.btn') }}</RouterLink>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import GearIcon from '@/components/GearIcon.vue'

import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const route = useRoute()

const service = computed(() => {
  const list = tm('serviceData')
  return list.find(s => s.slug === route.params.slug) ?? null
})

const otherServices = computed(() => {
  const list = tm('serviceData')
  return list.filter(s => s.slug !== route.params.slug).slice(0, 4)
})

// Lightbox
const lightboxIndex = ref(null)
function openLightbox(i) {
  if (service.value.gallery[i].image) lightboxIndex.value = i
}
function closeLightbox() {
  lightboxIndex.value = null
}

// Close lightbox on Escape key
function onKey(e) {
  if (e.key === 'Escape') closeLightbox()
}
import { onMounted, onUnmounted } from 'vue'
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

// Update page title when service or locale changes
watch(service, (s) => {
  document.title = s ? `Vartig – ${s.name}` : `Vartig – ${t('nav.services')}`
}, { immediate: true })
</script>

<style scoped>
.lightbox-enter-active, .lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from, .lightbox-leave-to {
  opacity: 0;
}
</style>