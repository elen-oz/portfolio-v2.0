const Footer = () => {
  return (
    <footer className='hidden md:block md:absolute md:bottom-0 md:right-0 md:left-0 md:px-8 md:flex md:flex-row md:justify-between md:text-xl text-stone-600'>
      <a
        className='hover:text-green underline uppercase'
        href='https://github.com/elen-oz/portfolio-v2.0'
        target='_blanc'
        rel='nofollow'
      >
        /source code/
      </a>

      <ul className='flex gap-1'>
        <li>Elena Ozerova /</li>
        <li>Frontend Developer /</li>
        <li>Stockholm, Sweden</li>
      </ul>
    </footer>
  );
};
export default Footer;
