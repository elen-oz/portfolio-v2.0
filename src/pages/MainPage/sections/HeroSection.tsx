import photoImg from '../../../assets/hero.webp';
import photoMdImg from '../../../assets/hero-md.webp';

const HeroSection = () => {
  return (
    <section className='min-h-screen flex flex-col justify-end px-4 pt-[100px] md:px-8 md:pt-0 md:pb-8'>
      <div className='flex flex-col md:flex-row justify-between md:gap-2'>
        <div className='flex-1 flex flex-col justify-end'>
          <p className='pb-2 lg:text-3xl'>HELLO, I'M</p>
          <h1 className='text-4xl max-w-64 pb-2 leading-normal md:text-3xl md:leading-normal lg:text-6xl lg:leading-normal'>
            ELENA OZEROVA
          </h1>
          <h2 className='text-3xl lg:text-6xl'>FRONTEND DEVELOPER</h2>
          <p className='lg:text-3xl'>FROM SWEDEN</p>
        </div>

        <div className='relative flex-1 pt-[50px] md:pt-0'>
          <div className='absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] top-[10px] left-[50px] md:top-[35%] md:left-[-7%] bg-red rounded-full' />

          <picture>
            <source srcSet={photoImg} media='(min-width: 768px)' />
            <img
              src={photoMdImg}
              alt="Elena's photo"
              style={{ width: '95%' }}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
