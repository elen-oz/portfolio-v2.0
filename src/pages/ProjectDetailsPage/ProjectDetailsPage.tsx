import { useParams } from 'react-router-dom';
import data from '../../utils/data';

import ProjectNotFoundPage from './ProjectNotFoundPage';

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : undefined;

  const project = data.find((item) => {
    if (item.id) {
      return item.id === projectId;
    }
  });

  if (!project) return <ProjectNotFoundPage />;

  const { name, description, image, github, live, features, stack } = project;

  return (
    <>
      <section className='relative h-screen'>
        <div className='z-0 absolute top-0 left-0 right-0 flex pf-container sm:px-0 justify-between sm:justify-evenly h-full'>
          <div className='w-[30px] h-full bg-rose'></div>
          <div className='w-[30px] h-full bg-rose'></div>
          <div className='w-[30px] h-full bg-rose'></div>
          <div className='w-[30px] h-full bg-rose'></div>
          <div className='w-[30px] h-full bg-rose hidden sm:block'></div>
          <div className='w-[30px] h-full bg-rose hidden sm:block'></div>
          <div className='w-[30px] h-full bg-rose hidden sm:block'></div>
          <div className='w-[30px] h-full bg-rose hidden sm:block'></div>
        </div>

        <div className='relative z-100 h-screen px-4 flex flex-col justify-center gap-x-4 md:items-center md:flex-row pt-[100px]'>
          <h2 className='mb-4 md:flex-1 text-5xl sm:text-6xl md:text-6xl uppercase'>
            {name}
          </h2>
          <div className='md:flex-1 text-xl lg:text-2xl leading-none'></div>

          <div className='absolute bottom-0 right-4 flex flex-col justify-between text-4xl sm:text-5xl uppercase text-right'>
            {live.length === 0 ? (
              <div className='w-12'></div>
            ) : (
              <a
                className='hover:text-red hover:underline'
                href={live}
                target='_blank'
                rel='noreferrer'
              >
                see live
              </a>
            )}
            <a
              className='hover:text-sky hover:underline'
              href={github}
              target='_blank'
              rel='noreferrer'
            >
              explore code
            </a>
          </div>
        </div>
      </section>
      <section className='flex flex-col'>
        <div className='bg-black text-white'>
          <h2 className='text-5xl text-center py-10'>(Details)</h2>
          <div className='mx-auto w-full md:max-w-[70%]'>
            <img
              className='w-full object-cover'
              src={image}
              alt={`${name} screenshot`}
            />
          </div>
        </div>

        <div className='min-h-screen flex flex-col'>
          <div className='mx-auto w-[70%] mt-[6rem] my-[3rem] text-4xl sm:text-5xl'>
            <ul className='flex justify-center gap-3 flex-wrap'>
              {stack.map((item, index) => (
                <li key={index} className='whitespace-nowrap'>
                  &#9737;{item}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex-1 flex flex-col justify-between mb-[4rem] px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10'>
              <ul className='list-disc text-2xl'>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className='text-3xl md:text-4xl'>{description}</div>
            </div>

            <a
              href='/work'
              className='text-3xl text-center uppercase hover:underline hover:text-rose'
            >
              To the list of works
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProjectDetailsPage;
