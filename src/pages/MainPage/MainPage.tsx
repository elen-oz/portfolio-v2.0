import { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import LinksSection from './sections/LinksSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import SummarySection from './sections/SummarySection';
import useMenuStore from '../../stores/menuStore.ts';


const MainPage = () => {
  const closeMenu = useMenuStore((state) => state.closeMenu);

  useEffect(() => {
    closeMenu();
  }, [closeMenu]);

  return (
    <>
      <HeroSection />
      <SummarySection />
      <AboutSection />
      <SkillsSection />
      <LinksSection />
      <ContactSection />
    </>
  );
};
export default MainPage;
