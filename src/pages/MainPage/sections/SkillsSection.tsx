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

      <div className='relative z-5 w-[400px] mx-auto text-4xl uppercase'>
        <h2 className='mb-10 text-6xl text-center pt-8'>| Skills |</h2>
        <div className='mb-8 grid grid-cols-2 text-center'>
          <ul>
            <li>ES6 JavaScript</li>
            <li>TypeScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
          </ul>
          <ul>
            <li>React.js</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>Tailwind</li>
          </ul>
        </div>
        {/* <ul className='flex gap-8 flex-wrap justify-center text-2xl list-disc'> */}
        <ul className='max-w-[700px] mx-auto flex justify-center gap-x-9 text-xl md:text-3xl flex-wrap list-disc'>
          <li>Git</li>
          <li>Yup</li>
          <li>Axios</li>
          <li>I18next</li>
          <li>ESLint</li>
          <li>Chakra UI</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </section>
  );
};
export default SkillsSection;
