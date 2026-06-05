<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-surface-900/95 backdrop-blur-sm shadow-lg shadow-black/40'
        : 'bg-surface-900/80 backdrop-blur-sm'
    ]"
  >
    <div class="stripe-divider"></div>

    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-auto">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group">
        <img src="../../public/vartig-logo.png" class="w-36 my-5">
      </RouterLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link font-condensed font-semibold tracking-widest uppercase text-sm transition-colors text-gray-400 hover:text-white"
          active-class="text-brand-accent active"
          exact-active-class="text-brand-accent active"
        >
          {{ link.label }}
        </RouterLink>
        <div class="w-px h-5 bg-surface-500"></div>
        <LangSwitcher />
      </div>

      <!-- Mobile: lang switcher + hamburger -->
      <div class="md:hidden flex items-center gap-3">
        <LangSwitcher />
        <button
          @click="mobileOpen = !mobileOpen"
          class="text-gray-400 hover:text-white p-2"
          aria-label="Toggle menu"
        >
        <svg v-if="!mobileOpen" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-show="mobileOpen"
        class="md:hidden bg-surface-800 border-t border-surface-600 px-6 py-4 flex flex-col gap-1"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="font-condensed tracking-widest uppercase text-sm py-2 transition-colors text-gray-400"
          active-class="text-brand-accent"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LangSwitcher from '@/components/LangSwitcher.vue'

const { t } = useI18n()
const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = computed(() => [
  { to: '/',               label: t('nav.home') },
  { to: '/services',      label: t('nav.services') },
  { to: '/machines-park', label: t('nav.machines') },
  { to: '/about',         label: t('nav.about') },
  { to: '/contact',       label: t('nav.contact') },
])

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: 300px;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
