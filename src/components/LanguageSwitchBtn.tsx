import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const LanguageSwitchBtn = () => {
  const { i18n } = useTranslation('global');

  const changeLang = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  useEffect(() => {}, [i18n.language]);

  return (
    <ul className='text-md hidden w-[100px] gap-0 md:grid md:grid-cols-2'>
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
          className='inline-flex w-full cursor-pointer items-center justify-center rounded-full p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-gray-800 peer-checked:bg-white peer-checked:text-gray-800'
        >
          se
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
          className='inline-flex w-full cursor-pointer items-center  justify-center rounded-full p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-gray-800 peer-checked:bg-white peer-checked:text-gray-800'
        >
          en
        </label>
      </li>
    </ul>
  );
};

export default LanguageSwitchBtn;
