import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useMenuStore from '../../stores/menuStore.ts';
import { useTranslation } from 'react-i18next';
// import bgColors from '../../utils/colors';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const closeMenu = useMenuStore((state) => state.closeMenu);
  const { t } = useTranslation('contactPage');

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    closeMenu();
  }, [closeMenu]);

  return (
    <div className='z-90 scrollbar-hide-y relative h-screen overflow-y-auto bg-yellow uppercase'>
      <div className='sticky left-8 top-[100px] px-4 md:px-8 min-[1600px]:translate-x-[10rem] min-[2000px]:translate-x-[15rem] min-[2300px]:translate-x-[25rem]'>
        <ul className='text-4xl sm:text-6xl'>
          <li className='hover:text-white'>
            <Link to='/work'>{t('work')}</Link>
          </li>
          <li className='hover:text-white'>
            <a
              href='https://rebrand.ly/elen-oz-cv'
              target='_blank'
              rel='noreferrer'
            >
              {t('resume')}
            </a>
          </li>

          <li className='text-lg'>&rsaquo; {t('description')} &rsaquo;</li>

          <li className='hover:text-white'>
            <a href='mailto: ozerova.lenka@gmail.com?subject=Mail from Portfolio Site'>
              {t('email')}
            </a>
          </li>

          <li className='hover:text-white'>
            <a
              href='https://www.linkedin.com/in/elen-oz/'
              target='_blank'
              rel='noreferrer'
            >
              {t('linkedin')}
            </a>
          </li>

          <li className='hover:text-white'>
            <a
              href='https://github.com/elen-oz'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('github')}
            </a>
          </li>
          <li className='hover:text-white'>
            <CopyToClipboard text='@elenoz'>
              <div
                className='max-w-[200px] text-left sm:max-w-[250px]'
                onClick={onCopy}
              >
                {copied ? t('copy-text') : t('telegram')}
              </div>
            </CopyToClipboard>
          </li>
        </ul>
      </div>

      <motion.div
        className='absolute hidden bg-red sm:bottom-[-90%] sm:right-[-30%] sm:block sm:h-[500px] sm:w-[500px] md:h-[1000px] md:w-[1000px]'
        animate={{ rotate: 360 }}
        whileTap={{
          scale: 0.8,
          rotate: -360,
        }}
        whileHover={{
          scale: 0.8,
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/*<div*/}
      {/*    className='fixed text-md text-end text-gray-500 min-[600px]:text-start min-[600px]:text-2xl  bottom-16 right-10  min-[600px]:bottom-36  min-[600px]:translate-x-[1rem]   min-[600px]:rotate-90 min-[600px]:transform    min-[2500px]:translate-x-[-26rem]'>*/}
      {/*  scroll for fun*/}
      {/*</div>*/}

      {/*{bgColors.map((color, index) => (*/}
      {/*    <div key={index} className={`h-full ${color}`}/>*/}
      {/*))}*/}
    </div>
  );
};
export default ContactPage;
