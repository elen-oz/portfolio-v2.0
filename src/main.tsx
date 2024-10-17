import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import i18next from 'i18next';
import global_en from './locales/en/global.json';
import header_se from './locales/se/header.json';
import header_en from './locales/en/header.json';
import summarySection_en from './locales/en/summary-sectioin.json';
import summarySection_se from './locales/se/summary-sectioin.json';
import aboutSection_en from './locales/en/about-section.json';
import aboutSection_se from './locales/se/about-section.json';
import skillsSection_en from './locales/en/skills-section.json';
import skillsSection_se from './locales/se/skills-section.json';
import linksSection_en from './locales/en/links-section.json';
import linksSection_se from './locales/se/links-section.json';
import contactSection_en from './locales/en/contact-section.json';
import contactSection_se from './locales/se/contact-section.json';


import global_se from './locales/se/global.json';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: global_en,
      header: header_en,
      summarySection: summarySection_en,
      aboutSection: aboutSection_en,
      skillsSection: skillsSection_en,
      linksSection: linksSection_en,
      contactSection: contactSection_en,
    },
    se: {
      global: global_se,
      header: header_se,
      summarySection: summarySection_se,
      aboutSection: aboutSection_se,
      skillsSection: skillsSection_se,
      linksSection: linksSection_se,
      contactSection: contactSection_se,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
