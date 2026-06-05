import { createI18n } from 'vue-i18n'
import sr from './locales/sr.js'
import en from './locales/en.js'
 
const savedLang = localStorage.getItem('vartig-lang') || 'sr'
 
const i18n = createI18n({
  legacy: false,        // use Composition API mode
  locale: savedLang,
  fallbackLocale: 'sr',
  messages: { sr, en },
})
 
export default i18n
 