import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../../../hooks/useMousePosition';
import styles from './SummarySection.module.scss';

const SummarySection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  const size = isHovered ? 340 : 40;

  return (
    <section
      className={`relative h-screen overflow-hidden bg-black pt-4 uppercase text-white`}
    >
      <h2 className='pt-4 text-center text-5xl lg:text-6xl'>/About/</h2>
      <motion.div
        className={`${styles.mask} flex h-full w-full items-center justify-center bg-red`}
        animate={{
          WebkitMaskPosition: `${x! - size / 2}px ${y! - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      >
        <p
          className='max-w-[700px] px-8 py-[3rem] text-center text-4xl sm:py-[6rem]'
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A frontend developer - with skills that haven't been replaced by A.I
          (yet) - making really good things.
        </p>
      </motion.div>

      <div
        className={`flex h-full w-full items-center justify-center text-white`}
      >
        <p className='w-[700px] p-[40px] text-3xl sm:text-4xl '>
          Mastering code to sculpt{' '}
          <span className='text-red'>excellent digital experiences</span>, I
          prioritize user satisfaction through{' '}
          <span className='text-red'>best practices</span>, ensuring an
          unrivaled user journey.
        </p>
      </div>
    </section>
  );
};
export default SummarySection;
