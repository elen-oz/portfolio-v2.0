import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const { t } = useTranslation('aboutSection');
  const interests = t('interests', { returnObjects: true }) as string[];

  const gridItems = Array.from({ length: 300 }, (_, i) => (
    // <motion.div
    //     key={i}
    //     className='bg-blue opacity-30'
    //     whileHover={{
    //         scale: 0.8,
    //         rotate: -90,
    //         borderRadius: '100%',
    //     }}
    //     transition={{ duration: 0.2 }}
    // />
    <motion.div
      key={i}
      className='cursor-pointer bg-blue opacity-30'
      whileHover={{
        scale: 0.8,
        rotate: -90,
        borderRadius: '100%',
      }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
        rotate: {
          type: 'spring',
          damping: 10,
          stiffness: 100,
        },
        borderRadius: {
          duration: 0.2,
          ease: 'easeOut',
        },
      }}
    />
  ));

  return (
    <section className='relative h-screen w-full overflow-hidden bg-gray-200 px-4 pt-4'>
      <div className='absolute inset-0 grid auto-rows-[70px] grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-2 p-4'>
        {gridItems}
      </div>

      <div className='pointer-events-none relative z-10 h-full'>
        <h2 className='py-20 text-center text-5xl uppercase lg:text-6xl'>
          &#47;{t('title')}&#47;
        </h2>
        <div className='mt-40 flex flex-col items-center justify-center text-center'>
          <ul className='mx-auto flex max-w-[700px] flex-wrap justify-center gap-1 text-2xl uppercase md:text-3xl'>
            {interests.map((interest, index) => (
              <li className='whitespace-nowrap' key={index}>
                &#9737;{interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
