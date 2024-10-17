import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import i18next from 'i18next';
import global_en from './locales/en/global.json';
import header_se from './locales/se/header.json';
import header_en from './locales/en/header.json';
import heroSection_en from './locales/en/hero-section.json';
import heroSection_se from './locales/se/hero-section.json';
import summarySection_en from './locales/en/summary-sectioin.json';
import summarySection_se from './locales/se/summary-sectioin.json';
import aboutSection_en from './locales/en/about-section.json';
import aboutSection_se from './locales/se/about-section.json';


import global_se from './locales/se/global.json';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: global_en,
      heroSection: heroSection_en,
      header: header_en,
      summarySection: summarySection_en,
      aboutSection: aboutSection_en,
    },
    se: {
      global: global_se,
      heroSection: heroSection_se,
      header: header_se,
      summarySection: summarySection_se,
      aboutSection: aboutSection_se
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
