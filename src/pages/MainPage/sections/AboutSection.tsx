const AboutSection = () => {
  return (
    <section className='w-full bg-gray-200 h-screen pt-4 px-4'>
      <h2 className='text-5xl lg:text-6xl text-center pt-4 uppercase'>
        /beyond/
      </h2>
      <div className='h-full flex flex-col justify-center items-center text-center'>
        <ul className='max-w-[700px] mx-auto flex justify-center gap-1 text-xl md:text-3xl flex-wrap uppercase'>
          <li className='whitespace-nowrap'>&#9737;Acrylic artist</li>
          <li className='whitespace-nowrap'>&#9737;Crossfit enthusiast</li>
          <li className='whitespace-nowrap'>&#9737;Hiking explorer</li>
          <li className='whitespace-nowrap'>&#9737;war hater</li>
          <li className='whitespace-nowrap'>&#9737;Retro pop fan</li>
          <li className='whitespace-nowrap'>&#9737;Plant lover</li>
          <li className='whitespace-nowrap'>&#9737;Dog person</li>
        </ul>
      </div>
    </section>
  );
};
export default AboutSection;
