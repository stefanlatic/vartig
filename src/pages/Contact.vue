<template>
  <div class="pt-16">
    <PageHeader
      eyebrow="Stupite u kontakt"
      title="KONTAKT"
      subtitle="Pošaljite nam tehničke zahteve ili zatražite ponudu. Odgovorićemo vam brzo."
    />
    <div class="stripe-divider"></div>

    <section class="py-20 bg-surface-900">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        <!-- ─── FORM ─────────────────────────────────────────── -->
        <div>
          <div class="section-line"></div>
          <h2 class="font-display text-4xl text-white mb-8">POŠALJITE NAM PORUKU</h2>

          <!-- Success state -->
          <div
            v-if="sent"
            class="bg-brand-dark border border-brand-green p-8 rounded-sm text-center"
          >
            <div class="text-4xl mb-3">✅</div>
            <h3 class="font-condensed text-xl tracking-wide text-white uppercase mb-2">Poruka poslata!</h3>
            <p class="font-body text-gray-400 text-sm">
              Hvala što ste nas kontaktirali. Javićemo vam se što pre.
            </p>
            <button @click="sent = false" class="btn-outline mt-6 text-sm">Pošaljite još jednu poruku</button>
          </div>

          <!-- Form -->
          <form v-else @submit.prevent="submit" class="space-y-5">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="font-condensed text-xs tracking-widest uppercase text-gray-500 block mb-1.5">
                  Ime i prezime *
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  class="form-input"
                  placeholder="Vaše ime"
                  required
                />
              </div>
              <div>
                <label class="font-condensed text-xs tracking-widest uppercase text-gray-500 block mb-1.5">
                  Kompanija
                </label>
                <input
                  v-model="form.company"
                  type="text"
                  class="form-input"
                  placeholder="Naziv kompanije"
                />
              </div>
            </div>

            <div>
              <label class="font-condensed text-xs tracking-widest uppercase text-gray-500 block mb-1.5">
                E-mail adresa *
              </label>
              <input
                v-model="form.email"
                type="email"
                class="form-input"
                placeholder="vaš@email.com"
                required
              />
            </div>

            <div>
              <label class="font-condensed text-xs tracking-widest uppercase text-gray-500 block mb-1.5">
               Broj telefona
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
                Vaša poruka / Zahtev *
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                class="form-input resize-none"
                placeholder="Opišite projekat, tražene delove, količine, tolerancije..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="sending"
              class="btn-primary w-full text-center"
            >
              {{ sending ? 'Slanje...' : 'Pošalji poruku!' }}
            </button>

            <p class="font-body text-gray-600 text-xs">
              Tehničke crteže možete priložiti i putem e-maila na
              <a href="mailto:info@vartig.rs" class="text-brand-accent hover:underline">vartig_nis@yahoo.com</a>
            </p>
          </form>
        </div>

        <!-- ─── INFO ─────────────────────────────────────────── -->
        <div>
          <div class="section-line"></div>
          <h2 class="font-display text-4xl text-white mb-8">KONTAKT INFORMACIJE</h2>

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
            <h4 class="font-condensed text-sm tracking-widest uppercase text-brand-accent mb-4">Radno Vreme</h4>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2081.9926145891986!2d21.872105474641696!3d43.33639187286573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b717f7c4b9cb%3A0x5bff28925c27efd4!2sVartig!5e1!3m2!1ssr!2srs!4v1779465274842!5m2!1ssr!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

async function submit() {
  try {
    sending.value = true

    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const data = await response.json()

    if (data.success) {
      sent.value = true

      Object.assign(form, {
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      })
    } else {
      alert('Greška prilikom slanja poruke.')
    }
  } catch (err) {
    console.error(err)
    alert('Greška na serveru.')
  } finally {
    sending.value = false
  }
}

const contactInfo = [
  {
    label: 'Adresa',
    value: 'Bulevar 12. Februara, Niš 18000',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>`,
  },
  {
    label: 'Telefon',
    value: '+381 60 4406496',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>`,
  },
  {
    label: 'Email',
    value: 'vartig_nis@yahoo.com',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>`,
  },
]

const workingHours = [
  { day: 'Ponedeljak – Petak', hours: '07:00 – 15:00' },
  { day: 'Subota',        hours: '07:00 – 13:00' },
  { day: 'Nedelja',          hours: 'Ne radimo' },
]
</script>
