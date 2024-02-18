import photoImg from '../../../assets/hero.jpeg';

const HeroSection = () => {
  return (
    <section className='h-screen flex flex-col justify-end p-8'>
      <div className=' flex justify-between'>
        <div className='flex flex-col justify-end'>
          <p className='pb-2'>HELLO, I'M</p>
          <h1 className='text-4xl max-w-64 pb-2 leading-normal'>
            ELENA OZEROVA
          </h1>
          <h2 className='text-3xl'>FRONTEND DEVELOPER</h2>
          <p>FROM SWEDEN</p>
        </div>

        <div className='relative'>
          <div className='hidden md:block absolute top-[120px] left-[-70px] w-[150px] h-[150px] bg-red-500 rounded-full' />

          <img
            src={photoImg}
            alt="Elena's photo"
            style={{ maxWidth: '500px' }}
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
