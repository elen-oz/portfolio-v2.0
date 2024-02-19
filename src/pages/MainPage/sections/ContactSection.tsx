const ContactSection = () => {
  return (
    <section
      className='h-full pt-9 bg-white uppercase px-4 md:px-8 pb-[50px]'
      id='work'
    >
      <div className='h-[80vh] flex flex-col justify-end items-start'>
        <h2 className='text-6xl lowercase text-white'>contacts</h2>
        <ul className='flex flex-col text-6xl'>
          <li className='hover:text-yellow'>
            <a href='mailto: ozerova.lenka@gmail.com?subject=Mail from Portfolio Site'>
              Email me
            </a>
          </li>
          <li className='text-lg'>&rsaquo; or contact me on &rsaquo;</li>
          <li className='hover:text-blue'>
            <a
              href='https://www.linkedin.com/in/elen-oz/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </li>

          <li className='hover:text-purple'>
            <a
              href='https://github.com/elen-oz'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
          <li className='hover:text-sky'>
            <a>Telegram</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default ContactSection;
