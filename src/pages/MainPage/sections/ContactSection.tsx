import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import {useTranslation} from "react-i18next";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation('contactSection');

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className='h-full bg-white px-4 pb-[50px] pt-9 uppercase md:px-8'
      id='work'
    >
      <div className='content-container h-full'>
        <div className='flex h-[80vh] flex-col items-start justify-end'>
          <h2 className='text-6xl lowercase text-white'>{t('title')}</h2>
          <ul className='flex flex-col text-6xl'>
            <li className='hover:text-yellow'>
              <a href='mailto: ozerova.lenka@gmail.com?subject=Mail from Portfolio Site'>
                {t('email')}
              </a>
            </li>
            <li className='text-lg'>&rsaquo; {t('description')} &rsaquo;</li>
            <li className='hover:text-green'>
              <a
                href='https://www.linkedin.com/in/elen-oz/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {t('linkedin')}
              </a>
            </li>

            <li className='hover:text-purple'>
              <a
                href='https://github.com/elen-oz'
                target='_blank'
                rel='noopener noreferrer'
              >
                {t('github')}
              </a>
            </li>
            <li className='hover:text-sky'>
              <CopyToClipboard text='@elenoz'>
                <div className='text-left' onClick={onCopy}>
                  {copied ? t('copy-text') : t('telegram')}
                </div>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
