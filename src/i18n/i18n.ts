import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en';
import es from './translations/es';
import fr from './translations/fr';
import de from './translations/de';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
    de: { translation: de },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;