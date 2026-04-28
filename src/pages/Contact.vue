<template>
  <div class="pt-16">
    <PageHeader
      eyebrow="Get In Touch"
      title="CONTACT US"
      subtitle="Send us your technical requirements or request a quote. We'll get back to you promptly."
    />
    <div class="stripe-divider"></div>

    <section class="py-20 bg-surface-900">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        <!-- ─── FORM ─────────────────────────────────────────── -->
        <div>
          <div class="section-line"></div>
          <h2 class="font-display text-4xl text-white mb-8">SEND US A MESSAGE</h2>

          <!-- Success state -->
          <div
            v-if="sent"
            class="bg-brand-dark border border-brand-green p-8 rounded-sm text-center"
          >
            <div class="text-4xl mb-3">✅</div>
            <h3 class="font-condensed text-xl tracking-wide text-white uppercase mb-2">Message Sent!</h3>
            <p class="font-body text-gray-400 text-sm">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>
            <button @click="sent = false" class="btn-outline mt-6 text-sm">Send Another Message</button>
          </div>

          <!-- Form -->
          <form v-else @submit.prevent="submit" class="space-y-5">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="font-condensed text-xs tracking-widest uppercase text-gray-500 block mb-1.5">
                  Full Name *
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  class="form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label class="font-condensed text-xs tracking-widest uppercase text-gray-500 block mb-1.5">
                  Company
                </label>
                <input
                  v-model="form.company"
                  type="text"
                  class="form-input"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div>
              <label class="font-condensed text-xs tracking-widest uppercase text-gray-500 block mb-1.5">
                Email Address *
              </label>
              <input
                v-model="form.email"
                type="email"
                class="form-input"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label class="font-condensed text-xs tracking-widest uppercase text-gray-500 block mb-1.5">
                Phone Number
              </label>
              <input
                v-model="form.phone"
                type="tel"
                class="form-input"
                placeholder="+381 ..."
              />
            </div>

            <div>
              <label class="font-condensed text-xs tracking-widest uppercase text-gray-500 block mb-1.5">
                Your Message / Requirements *
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                class="form-input resize-none"
                placeholder="Describe your project, required parts, quantities, tolerances..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="sending"
              class="btn-primary w-full text-center"
            >
              {{ sending ? 'Sending...' : 'Send Message' }}
            </button>

            <p class="font-body text-gray-600 text-xs">
              You can also attach technical drawings via email to
              <a href="mailto:info@vartig.rs" class="text-brand-accent hover:underline">info@vartig.rs</a>
            </p>
          </form>
        </div>

        <!-- ─── INFO ─────────────────────────────────────────── -->
        <div>
          <div class="section-line"></div>
          <h2 class="font-display text-4xl text-white mb-8">CONTACT INFO</h2>

          <div class="space-y-6 mb-10">
            <div v-for="info in contactInfo" :key="info.label" class="flex items-start gap-4">
              <div class="text-brand-green flex-shrink-0 mt-1" v-html="info.svg"></div>
              <div>
                <div class="font-condensed text-xs tracking-widest uppercase text-gray-600 mb-0.5">{{ info.label }}</div>
                <div class="font-body text-white text-sm">{{ info.value }}</div>
              </div>
            </div>
          </div>

          <!-- Working hours -->
          <div class="bg-surface-700 border border-surface-500 p-6 rounded-sm mb-6">
            <h4 class="font-condensed text-sm tracking-widest uppercase text-brand-accent mb-4">Working Hours</h4>
            <div class="space-y-2">
              <div
                v-for="wh in workingHours"
                :key="wh.day"
                class="flex justify-between font-body text-sm"
              >
                <span class="text-gray-500">{{ wh.day }}</span>
                <span class="text-white">{{ wh.hours }}</span>
              </div>
            </div>
          </div>

          <!-- Map placeholder -->
          <div class="h-48 bg-surface-700 border border-surface-500 rounded-sm flex flex-col items-center justify-center">
            <span class="text-3xl mb-2 opacity-40">🗺️</span>
            <span class="font-condensed text-xs tracking-widest text-gray-600 uppercase">Map Embed Goes Here</span>
            <span class="font-body text-gray-600 text-xs mt-1">Replace with Google Maps iframe</span>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

const sent    = ref(false)
const sending = ref(false)

const form = reactive({
  name: '', company: '', email: '', phone: '', message: ''
})

function submit() {
  sending.value = true
  // TODO: Replace with real form submission (e.g. EmailJS, Formspree, your backend)
  setTimeout(() => {
    sent.value    = true
    sending.value = false
    Object.assign(form, { name: '', company: '', email: '', phone: '', message: '' })
  }, 1200)
}

const contactInfo = [
  {
    label: 'Address',
    value: 'Industrijska zona bb, Srbija',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>`,
  },
  {
    label: 'Phone',
    value: '+381 xx xxx xxxx',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>`,
  },
  {
    label: 'Email',
    value: 'info@vartig.rs',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>`,
  },
]

const workingHours = [
  { day: 'Monday – Friday', hours: '07:00 – 15:00' },
  { day: 'Saturday',        hours: '07:00 – 13:00' },
  { day: 'Sunday',          hours: 'Closed' },
]
</script>
