import { Link } from 'react-router-dom';
import { type Project } from '../../utils/data';

const WorkItem = ({ id, name, description, image, github, live }: Project) => {
  return (
    <li key={id} className='w-full mb-4 md:mb-[7rem] uppercase'>
      <Link
        to={`/project/${id}`}
        className='h-[320px] grid grid-cols-1 md:grid-cols-2 md:items-center hover:bg-gray-100'
      >
        <div className='h-[320px] mt-auto p-2 md:mt-0 md:px-4'>
          <div className='h-full flex flex-col justify-end md:justify-between'>
            <h3 className='pt-2 text-4xl'>{name}</h3>
            <p className='py-4 leading-none'>{description}</p>
            <div className='flex justify-between'>
              {live.length === 0 ? (
                <div className='w-12'>-</div>
              ) : (
                <a
                  className='text-3xl hover:text-yellow'
                  href={live}
                  target='_blank'
                  rel='noreferrer'
                >
                  LIVE
                </a>
              )}
              <a
                className='text-3xl hover:text-sky'
                href={github}
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center h-full md:h-[320px] bg-black overflow-hidden'>
          <img
            className='w-full object-cover'
            src={image}
            alt={`${name} screenshot`}
          />
        </div>
      </Link>
    </li>
  );
};
export default WorkItem;
