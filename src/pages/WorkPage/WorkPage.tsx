import WorkList from './WorkList.tsx';

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
              className='hover:text-red'
            >
              PING ME
            </a>
            .
          </p>
        </div>
      </div>

      <WorkList />
    </section>
  );
};
export default WorkPage;
