<template>
  <div class="flex items-center gap-1">
    <button
      v-for="lang in langs"
      :key="lang.code"
      @click="setLang(lang.code)"
      :title="lang.label"
      :class="[
        'flex items-center justify-center w-8 h-8 rounded-sm transition-all duration-200 overflow-hidden border-2',
        locale === lang.code
          ? 'border-brand-green scale-110 shadow-lg shadow-brand-green/30'
          : 'border-transparent opacity-50 hover:opacity-80 hover:border-surface-500'
      ]"
    >
      <!-- Serbia flag SVG -->
      <svg v-if="lang.code === 'sr'" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <rect width="20" height="5" y="0" fill="#C6363C"/>
        <rect width="20" height="5" y="5" fill="#0C4076"/>
        <rect width="20" height="5" y="10" fill="#FFFFFF"/>
        <!-- Gold crown/crest simplified -->
        <g transform="translate(2.5, 2)">
          <rect x="0" y="4" width="6" height="6" fill="#C6A227" rx="0.5"/>
          <rect x="1" y="2" width="1.5" height="3" fill="#C6A227"/>
          <rect x="2.25" y="1" width="1.5" height="3" fill="#C6A227"/>
          <rect x="3.5" y="2" width="1.5" height="3" fill="#C6A227"/>
          <rect x="0" y="4" width="6" height="1" fill="#C6363C"/>
          <rect x="1.5" y="5" width="3" height="4" fill="#C6363C"/>
          <rect x="0.5" y="7" width="5" height="0.5" fill="#C6A227"/>
        </g>
      </svg>

      <!-- UK flag SVG -->
      <svg v-if="lang.code === 'en'" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <rect width="20" height="15" fill="#012169"/>
        <!-- White diagonals -->
        <line x1="0" y1="0" x2="20" y2="15" stroke="white" stroke-width="3"/>
        <line x1="20" y1="0" x2="0" y2="15" stroke="white" stroke-width="3"/>
        <!-- Red diagonals -->
        <line x1="0" y1="0" x2="20" y2="15" stroke="#C8102E" stroke-width="1.5"/>
        <line x1="20" y1="0" x2="0" y2="15" stroke="#C8102E" stroke-width="1.5"/>
        <!-- White cross -->
        <rect x="8" y="0" width="4" height="15" fill="white"/>
        <rect x="0" y="5.5" width="20" height="4" fill="white"/>
        <!-- Red cross -->
        <rect x="9" y="0" width="2" height="15" fill="#C8102E"/>
        <rect x="0" y="6.5" width="20" height="2" fill="#C8102E"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const langs = [
  { code: 'sr', label: 'Srpski' },
  { code: 'en', label: 'English' },
]

function setLang(code) {
  locale.value = code
  localStorage.setItem('vartig-lang', code)
}
</script>