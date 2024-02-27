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

  const { name, description, image, github, live } = project;

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
          <h2 className='mb-4 md:flex-1 text-6xl md:text-6xl uppercase'>
            {name}
          </h2>
          <p className='md:flex-1 text-2xl lg:text-3xl leading-none'>
            {description}
          </p>
        </div>
      </section>
      <div>ProjectDetailsPage</div>
      <ul>
        <li>{description}</li>
        <li>{image}</li>
        <li>{github}</li>
        <li>{live}</li>
      </ul>
    </>
  );
};
export default ProjectDetailsPage;
