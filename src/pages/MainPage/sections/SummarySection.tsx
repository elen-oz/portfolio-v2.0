import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../../../hooks/useMousePosition';
import styles from './SummarySection.module.scss';
import {useTranslation} from "react-i18next";

const SummarySection = () => {
  const { t } = useTranslation('summarySection');

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  const size = isHovered ? 340 : 40;

  return (
    <section
      className={`relative h-screen overflow-hidden bg-black pt-4 uppercase text-white`}
    >
      <div className='content-container mx-auto h-screen'>
        <h2 className='pt-20 text-center text-5xl lg:text-6xl'>
          &#47;{t('title')}&#47;
        </h2>
        <motion.div
          className={`${styles.mask} content-container mx-auto flex h-full items-center justify-center bg-red`}
          animate={{
            WebkitMaskPosition: `${x! - size / 2}px ${y! - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
        >
          <div
            className='mx-auto w-[1200px] py-[6rem] text-justify text-4xl'
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <div className='mx-auto flex max-w-[640px] items-center justify-center p-10'>
              {t('hiddenContent')}
            </div>
          </div>
        </motion.div>

        <div className='md flex h-full w-full items-center justify-center text-white'>
          <p className='max-w-[640px] px-8 text-justify text-3xl sm:text-4xl md:px-0' dangerouslySetInnerHTML={{ __html: t('content') }} >
          </p>
        </div>
      </div>
    </section>
  );
};
export default SummarySection;
