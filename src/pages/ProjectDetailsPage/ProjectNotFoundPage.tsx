import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useMenuStore from '../../stores/menuStore.ts';

const ProjectNotFoundPage = () => {
  const closeMenu = useMenuStore((state) => state.closeMenu);

  useEffect(() => {
    closeMenu();
  }, [closeMenu]);

  return (
    <section className='relative flex h-screen flex-col items-center justify-center'>
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
