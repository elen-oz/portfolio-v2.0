import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { type Project } from '../../utils/data';

const WorkItem = ({ id, name, image, github, live }: Project) => {
  const goToLink = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <li key={id} className='w-full mb-[5rem] md:mb-[10rem] uppercase bg-white'>
      <Link
        to={`/work/${id}`}
        className='md:h-[320px] grid grid-cols-1  md:grid-cols-2 md:items-center transition duration-180 ease-in-out transform hover:bg-yellow'
      >
        <div className='md:h-[320px] mt-auto md:mt-0'>
          <div className='h-full flex flex-col justify-end md:justify-between'>
            <h3 className='p-2 text-4xl md:text-5xl'>{name}</h3>
            <div className='flex justify-between'>
              {live.length === 0 ? (
                <div className='w-12'>-</div>
              ) : (
                <a
                  className='px-2 text-4xl bg-white hover:text-red'
                  href={live}
                  target='_blank'
                  rel='noreferrer'
                  onClick={(e) => goToLink(e)}
                >
                  LIVE
                </a>
              )}
              <a
                className='z-100 px-2 text-4xl bg-white hover:text-sky'
                href={github}
                target='_blank'
                rel='noreferrer'
                onClick={(e) => goToLink(e)}
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className='h-30px bg-black sm:flex sm:flex-col sm:justify-center sm:items-center md:h-[320px] overflow-hidden'>
          <img
            className='md:w-full md:object-cover'
            src={image}
            alt={`${name} screenshot`}
            loading='lazy'
          />
        </div>
      </Link>
    </li>
  );
};
export default WorkItem;
