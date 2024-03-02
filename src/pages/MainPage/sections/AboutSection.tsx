const AboutSection = () => {
  return (
    <section className='h-screen w-full bg-gray-200 px-4 pt-4'>
      <h2 className='pt-4 text-center text-5xl uppercase lg:text-6xl'>
        \beyond\
      </h2>
      <div className='flex h-full flex-col items-center justify-center text-center'>
        <ul className='mx-auto flex max-w-[700px] flex-wrap justify-center gap-1 text-2xl uppercase md:text-3xl'>
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
