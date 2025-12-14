import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations manually
import en from './locales/en/common.json';
import fr from './locales/fr/common.json';
import es from './locales/es/common.json';
import ar from './locales/ar/common.json';
import ja from './locales/ja/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      fr: { common: fr },
      es: { common: es },
      ar: { common: ar },
      ja: { common: ja }
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
