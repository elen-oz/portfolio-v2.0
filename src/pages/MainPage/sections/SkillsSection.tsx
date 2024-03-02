import StripedBackground from '../../../components/StripedBackground';

const SkillsSection = () => {
  return (
    <section className='relative h-screen' id='skills'>
      <StripedBackground color='sky' />

      <div className='z-5 relative mx-auto flex h-full max-w-[700px] flex-col justify-around px-3 uppercase md:text-5xl'>
        <h2 className='mb-5 text-center text-5xl lg:text-6xl'>| Skills |</h2>
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

        <ul className='mx-auto flex max-w-[700px] list-disc flex-wrap justify-center gap-x-9 text-2xl md:text-4xl'>
          <li className='hover:underline-green hover:underline'>Git</li>
          <li className='hover:underline-purple hover:underline'>Yup</li>
          <li className='hover:underline-yellow hover:underline'>Axios</li>
          <li className='hover:underline-pink hover:underline'>I18next</li>
          <li className='hover:underline-lightGreen hover:underline'>ESLint</li>
          <li className='hover:underline-red hover:underline'>Chakra UI</li>
          <li className='hover:underline-sky hover:underline'>Bootstrap</li>
        </ul>
      </div>
    </section>
  );
};
export default SkillsSection;
