import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { type Project } from '../../utils/data';

const WorkItem = ({ id, name, image, github, live }: Project) => {
  const goToLink = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <li key={id} className='mb-[5rem] w-full bg-white uppercase md:mb-[10rem]'>
      <Link
        to={`/work/${id}`}
        className='duration-180 grid transform  grid-cols-1 transition ease-in-out hover:bg-yellow md:h-[320px] md:grid-cols-2 md:items-center'
      >
        <div className='mt-auto md:mt-0 md:h-[320px]'>
          <div className='flex h-full flex-col justify-end md:justify-between'>
            <h3 className='p-2 text-4xl md:text-5xl'>{name}</h3>
            <div className='flex justify-between'>
              {live.length === 0 ? (
                <div className='w-12'>-</div>
              ) : (
                <a
                  className='bg-white px-2 text-4xl hover:text-red'
                  href={live}
                  target='_blank'
                  rel='noreferrer'
                  onClick={(e) => goToLink(e)}
                >
                  LIVE
                </a>
              )}
              <a
                className='z-100 bg-white px-2 text-4xl hover:text-sky'
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

        <div className='h-30px overflow-hidden bg-black  md:h-[320px]'>
          <img
            className='object-center md:w-full md:object-cover lg:object-top'
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
