const AboutSection = () => {
  return (
    <section className='w-full bg-gray-200 h-screen pt-4 px-4'>
      <h2 className='text-6xl text-center pt-4'>/About/</h2>
      <div className='h-full flex flex-col justify-center items-center text-center'>
        <ul className='max-w-[700px] mx-auto flex justify-center gap-1 text-xl md:text-3xl flex-wrap'>
          <li className='whitespace-nowrap'>&#9737;AVID TRAVELER</li>
          <li className='whitespace-nowrap'>&#9737;ACRYLIC ARTIST</li>
          <li className='whitespace-nowrap'>&#9737;CROSSFIT ENTHUSIAST</li>
          <li className='whitespace-nowrap'>&#9737;HIKING EXPLORER</li>
          <li className='whitespace-nowrap'>&#9737;RETRO POP FAN</li>
          <li className='whitespace-nowrap'>&#9737;PLANT LOVER</li>
          <li className='whitespace-nowrap'>&#9737;DOG PERSON</li>
        </ul>
      </div>
    </section>
  );
};
export default AboutSection;
