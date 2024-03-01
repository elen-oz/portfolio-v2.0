import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../../../hooks/useMousePosition';
import styles from './SummarySection.module.scss';

const SummarySection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <section className='w-full bg-black h-screen pt-4 px-4'>
      <h2 className='text-6xl text-center pt-4 uppercase'>/About/</h2>

      <div className={styles.main}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        >
          <p
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

        <div className={styles.body}>
          <p>
            Mastering code to sculpt <span>excellent digital experiences</span>,
            I prioritize user satisfaction through <span>best practices</span>,
            ensuring an unrivaled user journey.
          </p>
        </div>
      </div>
    </section>
  );
};
export default SummarySection;
