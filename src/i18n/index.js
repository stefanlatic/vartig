import { createI18n } from 'vue-i18n'
import sr from './locales/sr.js'
import en from './locales/en.js'
import de from './locales/de.js'

const savedLang = localStorage.getItem('vartig-lang') || 'sr'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'sr',
  messages: { sr, en, de },
})
 
export default i18n
 