import projects from './../../data.ts';

const WorkPage = () => {
  return (
    <section className='h-full text-lg'>
      <div className='relative'>
        <div className='z-0 absolute top-0 left-0 right-0 flex pf-container sm:px-0 justify-between sm:justify-evenly h-full'>
          <div className='w-[30px] h-full bg-yellow'></div>
          <div className='w-[30px] h-full bg-yellow'></div>
          <div className='w-[30px] h-full bg-yellow'></div>
          <div className='w-[30px] h-full bg-yellow'></div>
          <div className='w-[30px] h-full bg-yellow hidden sm:block'></div>
          <div className='w-[30px] h-full bg-yellow hidden sm:block'></div>
          <div className='w-[30px] h-full bg-yellow hidden sm:block'></div>
          <div className='w-[30px] h-full bg-yellow hidden sm:block'></div>
        </div>

        <div className='relative z-100 h-screen px-4 flex flex-col justify-center gap-x-4 md:items-center md:flex-row pt-[100px]'>
          <h2 className='mb-4 md:flex-1 text-6xl md:text-8xl uppercase'>
            Projects
          </h2>
          <p className='md:flex-1 text-2xl lg:text-3xl leading-none'>
            Below is a list of selected projects I have done. If you have any
            questions feel free to&nbsp;
            <a
              href='mailto: ozerova.lenka@gmail.com'
              className='hover:text-yellow'
            >
              PING ME
            </a>
            .
          </p>
        </div>
      </div>

      <div className='mb-10'>
        <ul className='uppercase '>
          {projects.map((project) => (
            <li
              key={project.id}
              className='h-screen w-full mb-4 md:mb-2 grid grid-cols-1 md:grid-cols-2 md:items-center'
            >
              <div className='h-[320px] mt-auto p-2 md:mt-0 md:px-4 hover:bg-gray-200'>
                <div className='h-full flex flex-col justify-end md:justify-between'>
                  <h3 className='pt-2 text-4xl'>{project.name}</h3>
                  <p className='py-4 leading-none'>{project.description}</p>
                  <div className='flex justify-between'>
                    {project.live.length === 0 ? (
                      <div className='w-12'>-</div>
                    ) : (
                      <a
                        className='text-3xl hover:text-yellow'
                        href={project.live}
                        target='_blank'
                        rel='noreferrer'
                      >
                        LIVE
                      </a>
                    )}
                    <a
                      className='text-3xl hover:text-green'
                      href={project.github}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center h-full md:h-[320px] bg-black overflow-hidden'>
                <img
                  className='w-full object-cover'
                  src={project.image}
                  alt={`${project.name} screenshot`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className='text-center text-3xl uppercase mb-10'>
        see more apps&nbsp;
        <a
          className='underline hover:text-red'
          href='https://elen-oz.notion.site/About-Me-bbfdf9a7e6c54669829923d14b6cd7f6?pvs=4'
          target='_blank'
          rel='noreferrer'
        >
          here
        </a>
        &nbsp;or&nbsp;
        <a
          href='mailto: ozerova.lenka@gmail.com'
          className=' underline hover:text-yellow'
        >
          ping me
        </a>
      </p>
    </section>
  );
};
export default WorkPage;
