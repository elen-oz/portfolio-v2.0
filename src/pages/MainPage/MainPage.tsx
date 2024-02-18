import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import WorkSection from './sections/WorkSection';
import ContactSection from './sections/ContactSection';

const MainPage = () => {
  return (
    <div id='top'>
      <HeroSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
};
export default MainPage;
