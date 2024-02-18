const Footer = () => {
  return (
    <footer className='absolute bottom-0 right-0 left-0 px-8 flex justify-between text-xl text-stone-600'>
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
