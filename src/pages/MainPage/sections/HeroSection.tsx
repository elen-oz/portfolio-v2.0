import photoImg from '../../../assets/hero.webp';
import photoMdImg from '../../../assets/hero-md.webp';

const HeroSection = () => {
  return (
    <section className='flex min-h-screen flex-col justify-end pt-[100px] md:pb-4 md:pt-0'>
      <div className='content-container flex flex-col justify-between md:flex-row md:justify-between md:gap-2'>
        <div className='px-4 flex flex-1 flex-col justify-end md:pb-4'>
          <p className='pb-2 lg:text-3xl'>HELLO, I'M</p>
          <h1 className='max-w-64 pb-2 text-4xl leading-normal md:text-3xl md:leading-normal lg:text-6xl lg:leading-normal'>
            ELENA OZEROVA
          </h1>
          <h2 className='text-3xl lg:text-6xl'>FRONTEND DEVELOPER</h2>
          <p className='lg:text-3xl'>FROM SWEDEN</p>
        </div>

        <div className='relative flex-1 pt-[50px] md:pt-0'>
          <div className='absolute left-[50px] sm:left-[90px] top-[10px] h-[100px] w-[100px] rounded-full bg-red md:left-[-7%] md:top-[35%] md:h-[150px] md:w-[150px]' />

          <picture className='md:flex md:justify-end'>
            <source srcSet={photoImg} media='(min-width: 768px)' />
            <img
              src={photoMdImg}
              alt="Elena's photo"
              // style={{ width: '95%' }}
              // className='w-full object-cover'
                className='sm:w-[80%] ml-auto'
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
