import { Link } from 'react-router-dom';

const LinksSection = () => {
  return (
    <section
      className='h-screen bg-black uppercase text-white md:px-8  '
      id='work'
    >
      <h2 className='pt-8 text-center text-5xl lg:text-6xl'>(FIND HERE)</h2>

      <div className='flex h-full flex-col items-center justify-center pb-4 md:h-[50vh]'>
        <ul className='flex flex-col text-6xl'>
          <li className='hover:text-red'>
            <Link to='/work'>
              work<span className='text-2xl'>&#9312;</span>
            </Link>
          </li>
          <li className='hover:text-purple'>
            <a
              href='https://rebrand.ly/elen-oz-cv'
              target='_blank'
              rel='noopener noreferrer'
            >
              resume<span className='text-2xl'>&#9313;</span>
            </a>
          </li>

          <li className='hover:text-green'>
            <Link to='/contact'>
              contact<span className='text-2xl'>&#9314;</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default LinksSection;
