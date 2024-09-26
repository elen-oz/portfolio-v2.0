import {useEffect} from "react";
import useMenuStore from '../../stores/menuStore.ts';
import StripedBackground from '../../components/StripedBackground.tsx';
import WorkList from './WorkList.tsx';

const WorkPage = () => {
  const closeMenu = useMenuStore((state) => state.closeMenu);

  useEffect(() => {
    closeMenu();
  }, [closeMenu]);

  return (
    <section className='min-h-screen text-lg'>
      <div className='relative'>
        <StripedBackground color={'yellow'} />

        <div className='z-100 content-container relative flex h-screen flex-col justify-center px-4 pt-[100px] md:flex-row md:items-center'>
          <h2 className='py-4 pr-2 text-6xl uppercase md:flex-1 md:text-8xl '>
            Projects
          </h2>
          <p className='bg-white py-4 pl-2 text-2xl leading-none md:flex-1 lg:text-3xl'>
            Below is a list of selected projects I have done. If you have any
            questions feel free to&nbsp;
            <a
              href='mailto: ozerova.lenka@gmail.com'
              className='hover:text-red'
            >
              PING ME
            </a>
            .
          </p>
        </div>
      </div>

      <WorkList />
    </section>
  );
};
export default WorkPage;
