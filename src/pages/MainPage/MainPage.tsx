import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import LinksSection from './sections/LinksSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import SummarySection from './sections/SummarySection';

const MainPage = () => {
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
