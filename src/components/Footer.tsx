const Footer = () => {
  return (
    <footer className='absolute bottom-0 left-0 right-0 flex  justify-between gap-1 px-4 text-xl md:px-8'>
      <a
        className='underline hover:text-blue'
        href='https://github.com/elen-oz/portfolio-v2.0'
        target='_blanc'
        rel='nofollow'
      >
        /source code/
      </a>

      <ul className='flex gap-1'>
        <li>
          Elena<span className='hidden sm:inline'> Ozerova</span>/
        </li>
        <li className='hidden sm:block'>Frontend Developer/</li>
        <li className='hidden md:block'>Stockholm, Sweden</li>
      </ul>
    </footer>
  );
};
export default Footer;
