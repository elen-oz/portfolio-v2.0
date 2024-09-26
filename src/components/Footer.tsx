const Footer = () => {
  return (
    <footer className='content-container absolute bottom-0 left-0 right-0 flex justify-center gap-1 px-4 text-xl md:px-8'>
      <ul className='flex gap-1 bg-white'>
        <li>
          Elena<span className='hidden min-[400px]:inline'> Ozerova</span>/
        </li>
        <li>Frontend Developer/</li>
        <li className='hidden md:block'>Stockholm, Sweden</li>
      </ul>
    </footer>
  );
};
export default Footer;
