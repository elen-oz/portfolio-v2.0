import { Link } from 'react-router-dom';

const ProjectNotFoundPage = () => {
  return (
    <section className='relative h-screen flex flex-col justify-center items-center'>
      <h2 className='text-5xl'>Project not found</h2>
      <p className='text-2xl'>
        Check other projects&nbsp;
        <Link to='/work' className='underline hover:text-sky'>
          here
        </Link>
      </p>
    </section>
  );
};
export default ProjectNotFoundPage;
