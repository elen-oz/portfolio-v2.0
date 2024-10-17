import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import useMenuStore from '../stores/menuStore.ts';
import LanguageSwitchBtn from "./LanguageSwitchBtn.tsx";
// import {useTranslation} from "react-i18next";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenuStore();
  // const { t } = useTranslation('global');


  const handleClickToHome = () => {
    const element = document.getElementById('top');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='content-container fixed left-0 right-0 top-0 z-10 text-xl md:text-[1.7rem]'>
      <div className='mx-auto flex place-content-between pb-2'>

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

        <LanguageSwitchBtn />

        {/* -------- desktop menu -------- */}
        <nav className='hidden bg-white px-8 md:flex md:items-center'>
          <ul className='flex flex-row gap-2 text-right '>
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

        {/* -------- mobile menu -------- */}
        <nav className='flex  md:hidden'>
          {isMenuOpen ? (
            <ul className='flex flex-col bg-white text-right'>
              <li className='p-4 md:hidden'>
                <button onClick={toggleMenu}>
                  <MdClose size='30'  />
                </button>
              </li>
              <li className='p-4 hover:text-sky'>
                <Link to='/' onClick={handleClickToHome}>
                  Home
                </Link>
              </li>
              <li className='p-4 hover:text-purple'>
                <Link to='/work'>Work</Link>
              </li>
              <li className='p-4 hover:text-green'>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          ) : (
            <button onClick={toggleMenu} className='rounded-full bg-white w-[57px] flex items-center justify-center'>
              <MdMenu size='30' />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Header;
