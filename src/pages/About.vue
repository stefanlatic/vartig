<template>
  <div class="pt-16">
    <PageHeader
      eyebrow="Our Story"
      title="ABOUT VARTIG"
    />
    <div class="stripe-divider"></div>

    <!-- ─── STORY ──────────────────────────────────────────────── -->
    <section class="py-24 bg-surface-900 gear-bg">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Text -->
        <div>
          <div class="section-line"></div>
          <h2 class="font-display text-4xl md:text-5xl text-white mb-6">
            BUILT ON PRECISION<br />AND EXPERIENCE
          </h2>
          <p class="font-body text-gray-400 leading-relaxed mb-4">
            Vartig was founded with a clear mission: to provide the market with reliable,
            high-precision metal components that meet the most demanding technical requirements.
            Over the years, we have grown from a small machining shop into a full-service
            manufacturing partner for clients across multiple industries.
          </p>
          <p class="font-body text-gray-400 leading-relaxed mb-4">
            Our team of experienced machinists, engineers and quality control specialists
            ensures that every part leaving our workshop meets the agreed specifications — every time.
          </p>
          <p class="font-body text-gray-400 leading-relaxed">
            We believe in long-term partnerships built on trust, transparency and the consistent
            delivery of quality. That philosophy is captured in our motto:
            <span class="text-brand-accent font-condensed tracking-wider">
              Kvalitet. Sigurnost. Konkurentnost.
            </span>
          </p>
        </div>

        <!-- Project photo gallery -->
        <div class="space-y-4">
          <!-- Main photo -->
          <div class="h-56 bg-surface-700 border border-surface-500 flex flex-col items-center justify-center rounded-sm overflow-hidden">
            <img
              v-if="projectPhotos[0]"
              :src="projectPhotos[0]"
              alt="Vartig project"
              class="w-full h-full object-cover"
            />
            <template v-else>
              <span class="text-4xl mb-2 opacity-30">📷</span>
              <span class="font-condensed text-xs tracking-widest text-gray-600 uppercase">Project Photo 1</span>
            </template>
          </div>

          <!-- Two smaller photos -->
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(photo, i) in projectPhotos.slice(1, 3)"
              :key="i"
              class="h-36 bg-surface-700 border border-surface-500 flex flex-col items-center justify-center rounded-sm overflow-hidden"
            >
              <img
                v-if="photo"
                :src="photo"
                :alt="'Vartig project ' + (i + 2)"
                class="w-full h-full object-cover"
              />
              <template v-else>
                <span class="text-3xl mb-1 opacity-30">📷</span>
                <span class="font-condensed text-xs tracking-widest text-gray-600 uppercase">Project {{ i + 2 }}</span>
              </template>
            </div>
          </div>

          <p class="font-body text-gray-600 text-xs text-center">
            Place photos in <code class="text-brand-green">src/assets/projects/</code> and import them in About.vue
          </p>
        </div>
      </div>
    </section>

    <!-- ─── VALUES ─────────────────────────────────────────────── -->
    <section class="py-20 bg-surface-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-14">
          <div class="section-line mx-auto"></div>
          <h2 class="font-display text-5xl text-white">OUR VALUES</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="value in values"
            :key="value.title"
            class="service-card bg-surface-700 p-8 rounded-sm text-center"
          >
            <div class="text-4xl mb-4">{{ value.icon }}</div>
            <h3 class="font-condensed text-lg tracking-widest uppercase text-white mb-3">{{ value.title }}</h3>
            <p class="font-body text-gray-500 text-sm leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA ───────────────────────────────────────────────── -->
    <section class="py-16 bg-brand-dark text-center">
      <h2 class="font-display text-4xl text-white mb-4">LET'S WORK TOGETHER</h2>
      <p class="font-body text-gray-400 mb-8">Tell us about your project and we'll find the best solution.</p>
      <RouterLink to="/contact" class="btn-primary">Get In Touch</RouterLink>
    </section>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'

// To add project photos, import them here:
// import photo1 from '@/assets/projects/project1.jpg'
// import photo2 from '@/assets/projects/project2.jpg'
// import photo3 from '@/assets/projects/project3.jpg'
// then set: const projectPhotos = [photo1, photo2, photo3]

const projectPhotos = [null, null, null]

const values = [
  {
    icon: '🎯',
    title: 'Quality',
    desc: "Every part is inspected against drawing tolerances before leaving the workshop. We don't compromise on dimensional accuracy or surface finish.",
  },
  {
    icon: '🛡️',
    title: 'Safety',
    desc: 'We follow strict workplace safety standards and ensure our products perform reliably and safely in their intended application.',
  },
  {
    icon: '📈',
    title: 'Competitiveness',
    desc: 'By optimizing our processes and maintaining modern equipment, we offer competitive pricing without sacrificing quality or delivery time.',
  },
]
</script>
