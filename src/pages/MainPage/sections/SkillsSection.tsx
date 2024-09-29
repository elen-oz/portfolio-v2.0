import StripedBackground from '../../../components/StripedBackground';

const SkillsSection = () => {
  return (
    <section className='relative h-screen' id='skills'>
      <StripedBackground color='sky' />
      <div className='content-container h-screen'>
        <h2 className='z-5 relative py-20 text-center text-5xl lg:text-6xl'>| Skills |</h2>

        <div className='z-5 relative mx-auto mt-40 flex max-w-[700px] flex-col justify-center px-3 uppercase md:text-5xl'>
          <div className='grid grid-cols-2 text-center text-3xl sm:text-5xl'>
            <ul className='text-left'>
              <li className='hover:bg-white'>JavaScript</li>
              <li className='hover:bg-white'>TypeScript</li>
              <li className='hover:bg-white'>HTML/CSS</li>
            </ul>
            <ul className='text-right'>
              <li className='hover:bg-white'>React.js</li>
              <li className='hover:bg-white'>Next.js</li>
              <li className='hover:bg-white'>Tailwind</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
