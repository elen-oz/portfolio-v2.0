import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation('global');

    return (
    <footer className='w-full bg-white content-container absolute bottom-0 left-0 right-0 flex justify-center gap-1 px-4 text-xl md:px-8'>
      <ul className='flex gap-1 '>
        <li>
          Elena<span className='hidden min-[400px]:inline'> Ozerova</span>/
        </li>
        <li className='capitalize'>{t('profession')}/</li>
        <li className='hidden md:block'>{t('location')}</li>
      </ul>
    </footer>
  );
};
export default Footer;
