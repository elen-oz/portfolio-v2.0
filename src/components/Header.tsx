const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-10 md:py-[30px] text-xl'>
      <div className='mx-auto py-2 flex place-content-between'>
        <a className='pl-8 flex gap-2 bg-white h-[49px]'>
          <div className=''>
            <div>elena.</div>
            <div>2024</div>
          </div>

          <div className='relative'>
            <span>portfolio</span>

            <div className='absolute bottom-[-5px] right-0 self-end px-[11px] pb-[3px] border-solid border-black border-2 rounded-full'>
              c
            </div>
          </div>
        </a>

        <nav className='px-8 bg-white flex md:items-center'>
          <ul className='flex flex-col  text-right md:flex-row md:gap-2 '>
            <li>Home</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
