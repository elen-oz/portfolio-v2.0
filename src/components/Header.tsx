import { PiCopyrightLight } from 'react-icons/pi';

const Header = () => {
  return (
    <header className='z-10 md:py-[30px]'>
      <div className='mx-auto px-4 flex place-content-between'>
        <a className='flex gap-2 bg-white'>
          <div className=''>
            <div>elena</div>
            <div>2024</div>
          </div>

          <div>
            <span>portfolio</span>
            <PiCopyrightLight />
          </div>
        </a>

        <nav className='bg-white'>
          <ul className='flex flex-col text-right md:flex-row md:gap-2'>
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
