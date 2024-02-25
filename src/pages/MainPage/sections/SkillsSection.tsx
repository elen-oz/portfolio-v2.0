const SkillsSection = () => {
  return (
    <section className='relative h-screen' id='skills'>
      <div className='absolute top-0 left-0 right-0 flex pf-container sm:px-0 justify-between sm:justify-evenly h-full'>
        <div className='w-[30px] h-full bg-sky'></div>
        <div className='w-[30px] h-full bg-sky'></div>
        <div className='w-[30px] h-full bg-sky'></div>
        <div className='w-[30px] h-full bg-sky'></div>
        <div className='w-[30px] h-full bg-sky hidden sm:block'></div>
        <div className='w-[30px] h-full bg-sky hidden sm:block'></div>
        <div className='w-[30px] h-full bg-sky hidden sm:block'></div>
        <div className='w-[30px] h-full bg-sky hidden sm:block'></div>
      </div>

      <div className='relative z-5 h-full w-[500px] mx-auto text-4xl uppercase flex flex-col justify-around'>
        <h2 className='mb-5 text-6xl text-center pt-8'>| Skills |</h2>
        <div className='grid grid-cols-2 text-center'>
          <ul>
            <li className='hover:bg-white hover:underline hover:underline-red'>
              ES6 JavaScript
            </li>
            <li className='hover:bg-white hover:underline hover:underline-blue'>
              TypeScript
            </li>
            <li className='hover:bg-white hover:underline hover:underline-green'>
              HTML5
            </li>
            <li className='hover:bg-white hover:underline hover:underline-purple'>
              CSS3
            </li>
            <li className='hover:bg-white hover:underline hover:underline-yellow'>
              SCSS
            </li>
          </ul>
          <ul>
            <li className='hover:bg-white hover:underline hover:underline-sky'>
              React.js
            </li>
            <li className='hover:bg-white hover:underline hover:underline-violet'>
              Redux
            </li>
            <li className='hover:bg-white hover:underline hover:underline-lightGreen'>
              Next.js
            </li>
            <li className='hover:bg-white hover:underline hover:underline-pink'>
              Tailwind
            </li>
          </ul>
        </div>

        <ul className='max-w-[700px] mx-auto flex justify-center gap-x-9 text-xl md:text-3xl flex-wrap list-disc'>
          <li className='hover:underline hover:underline-green'>Git</li>
          <li className='hover:underline hover:underline-purple'>Yup</li>
          <li className='hover:underline hover:underline-yellow'>Axios</li>
          <li className='hover:underline hover:underline-pink'>I18next</li>
          <li className='hover:underline hover:underline-lightGreen'>ESLint</li>
          <li className='hover:underline hover:underline-violet'>Chakra UI</li>
          <li className='hover:underline hover:underline-blue'>Bootstrap</li>
        </ul>
      </div>
    </section>
  );
};
export default SkillsSection;
