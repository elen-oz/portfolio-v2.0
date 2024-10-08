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
      <div className='content-container mx-auto h-screen'>
        <h2 className='pt-20 text-center text-5xl lg:text-6xl'>/About/</h2>
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
            <div className='mx-auto flex items-center justify-center p-10 max-w-[640px]'>
              A frontend developer - with skills that haven't been replaced by
              A.I (yet) - making really good things.
            </div>
          </div>
        </motion.div>

        <div
          className='flex h-full w-full items-center justify-center text-white md'
        >
          <p className='max-w-[640px] px-8 md:px-0 text-justify text-3xl sm:text-4xl'>
            Mastering code to sculpt{' '}
            <span className='text-red'>excellent digital experiences</span>, I
            prioritize user satisfaction through{' '}
            <span className='text-red'>best practices</span>, ensuring an
            unrivaled user journey.
          </p>
        </div>
      </div>
    </section>
  );
};
export default SummarySection;
