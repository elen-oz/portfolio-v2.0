import StripedBackground from '../../../components/StripedBackground';
import {useTranslation} from "react-i18next";

const SkillsSection = () => {
  const { t } = useTranslation('skillsSection');
  const skills = t('skills', { returnObjects: true }) as string[];

  return (
    <section className='relative h-screen' id='skills'>
      <StripedBackground color='sky' />
      <div className='content-container h-screen'>
        <h2 className='z-5 relative py-20 text-center text-5xl lg:text-6xl uppercase'>| {t('title')} |</h2>

        <div className='z-5 relative mx-auto mt-40 flex max-w-[700px] flex-col justify-center px-3 uppercase md:text-5xl'>
          <div className='text-center text-3xl sm:text-5xl'>
            <ul className='grid grid-cols-2 grid-rows-3 '>
              {skills.map((skill, index) => (
                  <li className='whitespace-nowrap hover:bg-white' key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
