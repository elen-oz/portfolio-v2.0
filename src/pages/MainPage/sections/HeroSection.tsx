import photoImg from '../../../assets/hero.webp';
import photoMdImg from '../../../assets/hero-md.webp';
import { useTranslation } from 'react-i18next';


const HeroSection = () => {
  const { t } = useTranslation('heroSection');
  
  return (
    <section className='flex min-h-screen flex-col justify-end pt-[100px] md:pb-[-1px] md:pt-0'>
      <div className='content-container flex flex-col justify-between md:flex-row md:justify-between md:gap-2'>
        <div className='flex flex-1 flex-col justify-end px-4 md:pb-4'>
          <p className='pb-2 lg:text-3xl uppercase'>{t('hello')}</p>
          <h1 className='max-w-64 pb-2 text-4xl leading-normal md:text-3xl md:leading-normal lg:text-6xl lg:leading-normal uppercase'>
            ELENA OZEROVA
          </h1>
          <h2 className='text-3xl lg:text-6xl uppercase'>{t('profession')}</h2>
          <p className='lg:text-3xl uppercase'>{t('location')}</p>
        </div>

        <div className='relative flex-1 pt-[50px] md:pt-0'>
          <div className='absolute left-[50px] top-[10px] h-[100px] w-[100px] rounded-full bg-red sm:left-[90px] md:left-[-5%] md:top-[35%] md:h-[150px] md:w-[150px] lg:left-[10%]' />

          <picture className='md:flex md:justify-end'>
            <source srcSet={photoImg} media='(min-width: 768px)' />
            <img
              src={photoMdImg}
              alt="Elena's photo"
              // style={{ width: '95%' }}
              // className='w-full object-cover'
              className='ml-auto sm:w-[80%]'
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
