<template>
  <div class="bg-surface-800 py-20 relative overflow-hidden">
    <div class="absolute left-0 top-0 bottom-0 w-1 bg-brand-green"></div>
    <div class="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-brand-dark/30 to-transparent"></div>
    <div class="max-w-7xl mx-auto px-6">
      <p class="font-condensed text-brand-accent tracking-[0.3em] uppercase text-xs mb-3">
        {{ eyebrow }}
      </p>
      <div class="section-line"></div>
      <h1 class="font-display text-6xl md:text-7xl text-white">{{ title }}</h1>
      <p v-if="subtitle" class="font-body text-gray-400 mt-4 max-w-xl">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title:   String,
  subtitle: String,
})
</script>
