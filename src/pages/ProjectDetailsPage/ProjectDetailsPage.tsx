import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useMenuStore from '../../stores/menuStore.ts';
import data from '../../utils/data';
import ProjectNotFoundPage from './ProjectNotFoundPage';
import StripedBackground from '../../components/StripedBackground';

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : undefined;
  const closeMenu = useMenuStore((state) => state.closeMenu);

  useEffect(() => {
    closeMenu();
  }, [closeMenu]);

  const project = data.find((item) => item.id === projectId);

  if (!project) return <ProjectNotFoundPage />;

  const { name, description, image, github, live, features, stack } = project;



  return (
    <>
      <section className='relative h-screen'>
        <StripedBackground color='rose' />

        <div className='content-container z-100 relative flex h-screen flex-col justify-center gap-x-4 px-4 pt-[100px] md:flex-row md:items-center'>
          <h2 className='mb-4 text-6xl uppercase sm:text-7xl md:flex-1 md:text-8xl'>
            {name}
          </h2>
          <div className='text-xl leading-none md:flex-1 lg:text-2xl'></div>

          <div className='z-50 fixed px-2 bg-rose bottom-7 right-6 flex flex-col text-right text-3xl md:text-5xl uppercase sm:text-6xl min-[1940px]:right-40 min-[2370px]:right-80'>
            {live.length === 0 ? (
              <div className='w-12'></div>
            ) : (
              <a
                className='underline hover:bg-white hover:text-red'
                href={live}
                target='_blank'
                rel='noreferrer'
              >
                see live
              </a>
            )}
            <a
              className='underline hover:bg-white hover:text-sky'
              href={github}
              target='_blank'
              rel='noreferrer'
            >
              github
            </a>
          </div>
        </div>
      </section>
      <section className='flex flex-col'>
        <div className='bg-black text-white'>
          <div className='content-container'>
            <h2 className='py-10 text-center text-5xl'>(Details)</h2>
            <div className='mx-auto w-full md:max-w-[70%]'>
              <img
                className='w-full object-cover'
                src={image}
                alt={`${name} screenshot`}
              />
            </div>
          </div>
        </div>

        <div className='flex min-h-screen flex-col bg-maskRose'>
          <div className='content-container mx-auto my-[3rem] mt-[6rem] px-4 text-3xl sm:text-5xl md:w-[70%] '>
            <ul className='flex flex-wrap justify-center gap-3'>
              {stack.map((item, index) => (
                <li key={index} className='whitespace-nowrap hover:bg-white'>
                  &#9737;{item}
                </li>
              ))}
            </ul>
          </div>

          <div className='content-container mb-[4rem] flex flex-1 flex-col justify-between px-8'>
            <div className='mb-10 grid grid-cols-1 sm:grid-cols-2'>
              <ul className='list-disc bg-white p-4 pl-8 text-2xl'>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className='bg-white p-4 text-justify text-2xl md:text-4xl'>
                {description}
              </div>
            </div>

            <div className='w-[200px] sm:w-[270px] mr-auto px-2 hover:bg-white text-right'>
              <a href='/work' className='text-2xl sm:text-3xl uppercase underline '>
                &lt; Back to the list of works
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProjectDetailsPage;
