import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import LinksSection from './sections/LinksSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

const MainPage = () => {
  return (
    <div id='top'>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LinksSection />
      <ContactSection />
    </div>
  );
};
export default MainPage;
