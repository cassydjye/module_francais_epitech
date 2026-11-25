import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

const savedLanguage = localStorage.getItem('comlab-language');
const language = savedLanguage === 'en' ? 'en' : 'fr';

void i18n
  .use(initReactI18next)
  .init({ resources, lng: language, fallbackLng: 'fr', interpolation: { escapeValue: false } });
document.documentElement.lang = language;
i18n.on('languageChanged', (next) => {
  document.documentElement.lang = next;
  localStorage.setItem('comlab-language', next);
});
export default i18n;
