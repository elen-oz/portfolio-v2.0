import StripedBackground from '../../../components/StripedBackground';

const SkillsSection = () => {
  return (
    <section className='relative h-screen' id='skills'>
      <StripedBackground color='sky' />

      <div className='relative z-5 h-full px-3 max-w-[700px] mx-auto md:text-5xl uppercase flex flex-col justify-around'>
        <h2 className='mb-5 text-5xl lg:text-6xl text-center'>| Skills |</h2>
        <div className='grid grid-cols-2 text-center text-3xl sm:text-5xl'>
          <ul className='text-left'>
            <li className='hover:bg-white'>
              <span className='hidden sm:inline'>ES6 </span>JavaScript
            </li>
            <li className='hover:bg-white'>TypeScript</li>
            <li className='hover:bg-white'>HTML5</li>
            <li className='hover:bg-white'>CSS3</li>
            <li className='hover:bg-white'>SCSS</li>
          </ul>
          <ul className='text-right'>
            <li className='hover:bg-white'>React.js</li>
            <li className='hover:bg-white'>Redux</li>
            <li className='hover:bg-white'>Next.js</li>
            <li className='hover:bg-white'>Tailwind</li>
          </ul>
        </div>

        <ul className='max-w-[700px] mx-auto flex justify-center gap-x-9 text-2xl md:text-4xl flex-wrap list-disc'>
          <li className='hover:underline hover:underline-green'>Git</li>
          <li className='hover:underline hover:underline-purple'>Yup</li>
          <li className='hover:underline hover:underline-yellow'>Axios</li>
          <li className='hover:underline hover:underline-pink'>I18next</li>
          <li className='hover:underline hover:underline-lightGreen'>ESLint</li>
          <li className='hover:underline hover:underline-red'>Chakra UI</li>
          <li className='hover:underline hover:underline-sky'>Bootstrap</li>
        </ul>
      </div>
    </section>
  );
};
export default SkillsSection;
