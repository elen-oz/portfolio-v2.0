import { Link } from 'react-router-dom';

const Header = () => {
  const handleClickToHome = () => {
    const element = document.getElementById('top');
    element!.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickToSkills = () => {
    const element = document.getElementById('skills');
    element!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-10 text-xl md:py-[30px] md:text-[1.7rem]'>
      <div className='mx-auto py-2 flex place-content-between'>
        <Link
          to='/'
          className='pl-8 flex gap-2 bg-white h-[49px] hover:text-yellow'
          onClick={handleClickToHome}
        >
          <div className=''>
            <div>elena.</div>
            <div>2024</div>
          </div>

          <div className='relative'>
            <span>portfolio</span>

            <div className='absolute text-xl bottom-[-7px] md:bottom-[-8px] right-0 self-end px-[11px] pb-[3px] border-solid border-black border-2 md:border-[2.5px] rounded-full text-black'>
              c
            </div>
          </div>
        </Link>

        <nav className='px-8 bg-white flex md:items-center'>
          <ul className='flex flex-col  text-right md:flex-row md:gap-2 '>
            <li className='hover:text-sky'>
              <Link to='/' onClick={handleClickToHome}>
                Home
              </Link>
            </li>
            <li className='hover:text-red'>
              <Link to='/' onClick={handleClickToSkills}>
                Skills
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
