import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const LanguageSwitchBtn = () => {
  const { i18n } = useTranslation('global');

  const changeLang = async (lang: string) => {
    await i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <ul className='text-sm hidden gap-0 md:grid'>
      <li>
        <input
          type='radio'
          id='se'
          name='language'
          value='se'
          className='peer hidden'
          checked={i18n.language === 'se'}
          onChange={() => changeLang('se')}
        />
        <label
          htmlFor='se'
          className='inline-flex w-full px-2 cursor-pointer items-center justify-center h-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 bg-white peer-checked:text-gray-800 uppercase'
        >
          sve
        </label>
      </li>
      <li>
        <input
          type='radio'
          id='en'
          name='language'
          value='en'
          className='peer hidden'
          checked={i18n.language === 'en'}
          onChange={() => changeLang('en')}
        />
        <label
          htmlFor='en'
          className='inline-flex w-full cursor-pointer items-center  justify-center h-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 bg-white peer-checked:text-gray-800 uppercase'
        >
          eng
        </label>
      </li>
    </ul>
  );
};

export default LanguageSwitchBtn;
