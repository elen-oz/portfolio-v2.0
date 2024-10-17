import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const LinksSection = () => {
  const { t } = useTranslation('linksSection');

  return (
    <section
      className='h-screen bg-black uppercase text-white md:px-8  '
      id='work'
    >
      <div className='content-container'>
        <h2 className='py-20 text-center text-5xl lg:text-6xl'>({t('title')})</h2>

        <div className='flex flex-col items-center justify-center md:h-[50vh]'>
          <ul className='flex flex-col text-6xl'>
            <li className='hover:text-red'>
              <Link to='/work'>
                {t('work')}<span className='text-2xl'>&#9312;</span>
              </Link>
            </li>
            <li className='hover:text-purple'>
              <a
                href='https://rebrand.ly/elen-oz-cv'
                target='_blank'
                rel='noopener noreferrer'
              >
                {t('resume')}<span className='text-2xl'>&#9313;</span>
              </a>
            </li>

            <li className='hover:text-green'>
              <Link to='/contact'>
                {t('contact')}<span className='text-2xl'>&#9314;</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default LinksSection;
