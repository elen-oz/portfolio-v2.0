import { Link } from 'react-router-dom';

const Header = () => {
  const handleClickToHome = () => {
    const element = document.getElementById('top');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='content-container fixed left-0 right-0 top-0 z-10 text-xl md:text-[1.7rem]'>
      <div className='mx-auto flex place-content-between py-2'>
        <Link
          to='/'
          className='relative grid h-full grid-cols-[auto,1fr] grid-rows-[29px] gap-x-2 bg-white pl-8 hover:text-yellow'
          onClick={handleClickToHome}
        >
          <div>elena.</div>
          <div>portfolio</div>
          <div>2024</div>
          <div className='absolute bottom-0.5 right-0 rounded-full border-2 border-solid border-black px-[11px] pb-[3px] text-xl text-black md:bottom-0 md:border-[2.5px]'>
            c
          </div>
        </Link>

        <nav className='flex bg-white px-8 md:items-center'>
          <ul className='flex flex-col  text-right md:flex-row md:gap-2 '>
            <li className='hover:text-sky'>
              <Link to='/' onClick={handleClickToHome}>
                Home
              </Link>
            </li>
            <li className='hover:text-purple'>
              <Link to='/work'>Work</Link>
            </li>
            <li className='hover:text-green'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
