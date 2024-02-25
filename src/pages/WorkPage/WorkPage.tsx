const WorkPage = () => {
  return (
    <section className='h-full p-4 text-2xl'>
      <div className='h-screen flex flex-col justify-center gap-x-4 md:items-center md:flex-row pt-[100px] '>
        <h2 className='mb-4 md:flex-1 text-6xl md:text-8xl uppercase text-left'>
          Projects
        </h2>
        <p className='md:flex-1 text-2xl lg:text-3xl leading-none'>
          Below is a list of selected projects I have done. If you have any
          questions feel free to{' '}
          <a
            href='mailto: ozerova.lenka@gmail.com?subject=Mail from Portfolio Site'
            className='hover:text-yellow'
          >
            PING ME
          </a>
          .
        </p>
      </div>

      <div className='mb-10'>
        <ul className=''>
          <li className='w-full flex flex-col md:flex-row gap-x-2 hover:bg-gray'>
            <div className='flex-1'>
              <h3 className='pt-2 uppercase'>Title</h3>
              <p className='py-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                beatae, iure distinctio perspiciatis temporibus! Nisi illo
                architecto sit!
              </p>
              <div className='flex justify-between uppercase'>
                <a>LIVE</a>
                <a>Github</a>
              </div>
            </div>
            <div className='flex-1 h-[200px] bg-black self-end'>
              <img />
            </div>
          </li>
          <li className='w-full flex flex-col md:flex-row gap-x-2 hover:bg-gray'>
            <div className='flex-1'>
              <h3 className='pt-2 uppercase'>Title</h3>
              <p className='py-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                beatae, iure distinctio perspiciatis temporibus! Nisi illo
                architecto sit!
              </p>
              <div className='flex justify-between uppercase'>
                <a>LIVE</a>
                <a>Github</a>
              </div>
            </div>
            <div className='flex-1 h-[200px] bg-black self-end'>
              <img />
            </div>
          </li>
          <li className='w-full flex flex-col md:flex-row gap-x-2 hover:bg-gray'>
            <div className='flex-1'>
              <h3 className='pt-2 uppercase'>Title</h3>
              <p className='py-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                beatae, iure distinctio perspiciatis temporibus! Nisi illo
                architecto sit!
              </p>
              <div className='flex justify-between uppercase'>
                <a>LIVE</a>
                <a>Github</a>
              </div>
            </div>
            <div className='flex-1 h-[200px] bg-black self-end'>
              <img />
            </div>
          </li>
        </ul>
      </div>
      {/* <p className='text-3xl'>
          In the meantime,
          <a
            className='underline text-red'
            href='https://elen-oz.notion.site/About-Me-bbfdf9a7e6c54669829923d14b6cd7f6?pvs=4'
            target='_blank'
            rel='noreferrer'
          >
            &nbsp;check this out
          </a>
          &nbsp;(my projects)
        </p> */}
    </section>
  );
};
export default WorkPage;
