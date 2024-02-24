import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import LinksSection from './sections/LinksSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LinksSection />
      <ContactSection />
    </main>
  );
};
export default MainPage;
