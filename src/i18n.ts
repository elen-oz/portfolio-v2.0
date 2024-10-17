import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enGlobal from './locales/en/global.json';
import enHeader from './locales/en/header.json';
import enSummarySection from './locales/en/summary-section.json'
import enAboutSection from './locales/en/about-section.json';
import enSkillsSection from './locales/en/skills-section.json';
import enLinksSection from './locales/en/links-section.json';
import enContactSection from './locales/en/contact-section.json';
import enProjectsPage from './locales/en/projects-page.json';
import enProjects from './locales/en/projects.json';
import enContactPage from './locales/en/contact-page.json';

import seGlobal from './locales/se/global.json';
import seHeader from './locales/se/header.json';
import seSummarySection from './locales/se/summary-section.json';
import seAboutSection from './locales/se/about-section.json';
import seSkillsSection from './locales/se/skills-section.json';
import seLinksSection from './locales/se/links-section.json';
import seContactSection from './locales/se/contact-section.json';
import seProjectsPage from './locales/se/projects-page.json';
import seProjects from './locales/se/projects.json';
import seContactPage from './locales/se/contact-page.json';



const resources = {
    en: {
        global: enGlobal,
        header: enHeader,
        summarySection: enSummarySection,
        aboutSection: enAboutSection,
        skillsSection: enSkillsSection,
        linksSection: enLinksSection,
        contactSection: enContactSection,
        projectsPage: enProjectsPage,
        projects: enProjects,
        contactPage: enContactPage,
    },
    se: {
        global: seGlobal,
        header: seHeader,
        summarySection: seSummarySection,
        aboutSection: seAboutSection,
        skillsSection: seSkillsSection,
        linksSection: seLinksSection,
        contactSection: seContactSection,
        projectsPage: seProjectsPage,
        projects: seProjects,
        contactPage: seContactPage,
    },
};

const savedLanguage = localStorage.getItem('language');

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage || 'se',
        fallbackLng: 'en',
        supportedLngs: ['en', 'se'],
        ns: [
            'global',
            'header',
            'summarySection',
            'aboutSection',
            'skillsSection',
            'linksSection',
            'contactSection',
            'projectsPage',
        ],
        defaultNS: 'global',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;