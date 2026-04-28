<template>
  <footer class="bg-surface-800 border-t border-surface-600">
    <div class="stripe-divider"></div>

    <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-2 mb-4">
          <GearIcon :size="24" class="text-brand-green" />
          <span class="font-display text-xl tracking-widest text-white">VARTIG</span>
        </div>
        <p class="text-gray-500 text-sm leading-relaxed font-body">
          Kvalitet, Sigurnost, Konkurentnost.<br />
          Precision metal manufacturing tailored to your requirements.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="font-condensed text-sm tracking-widest uppercase text-brand-accent mb-4">Quick Links</h4>
        <ul class="space-y-2">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-gray-500 hover:text-brand-accent text-sm font-body transition-colors"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="font-condensed text-sm tracking-widest uppercase text-brand-accent mb-4">Contact</h4>
        <ul class="space-y-3 text-gray-500 text-sm font-body">
          <li class="flex items-start gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="text-brand-green flex-shrink-0 mt-0.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Industrijska zona bb, Srbija
          </li>
          <li class="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="text-brand-green flex-shrink-0">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            +381 xx xxx xxxx
          </li>
          <li class="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="text-brand-green flex-shrink-0">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            info@vartig.rs
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-surface-600 py-4 text-center text-gray-600 text-xs font-body">
      © {{ currentYear }} Vartig d.o.o. — All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import GearIcon from '@/components/GearIcon.vue'

const currentYear = new Date().getFullYear()

const navLinks = [
  { to: '/',               label: 'Home' },
  { to: '/services',      label: 'Our Services' },
  { to: '/machines-park', label: 'Machines Park' },
  { to: '/about',         label: 'About' },
  { to: '/contact',       label: 'Contact' },
]
</script>
