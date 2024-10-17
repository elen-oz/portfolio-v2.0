import {useTranslation} from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation('aboutSection');
  const interests = t('interests', { returnObjects: true }) as string[];

  return (
    <section className='h-screen w-full bg-gray-200 px-4 pt-4'>
      <div className='content-container h-screen'>
        <h2 className='py-20 text-center text-5xl uppercase lg:text-6xl'>
          &#47;{t('title')}&#47;
        </h2>
        <div className=' mt-40 flex flex-col items-center justify-center text-center'>
          <ul className='mx-auto flex max-w-[700px] flex-wrap justify-center gap-1 text-2xl uppercase md:text-3xl'>
            {interests.map((interest, index) => (
                <li className='whitespace-nowrap' key={index}>&#9737;{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
