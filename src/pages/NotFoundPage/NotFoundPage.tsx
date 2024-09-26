import {useEffect} from "react";
import useMenuStore from '../../stores/menuStore.ts';

const NotFoundPage = () => {
    const closeMenu = useMenuStore((state) => state.closeMenu);

    useEffect(() => {
        closeMenu();
    }, [closeMenu]);

  return (
    <section className='flex h-screen flex-col items-center justify-center text-center'>
      <h1 className='inline-block align-middle text-4xl'>Error</h1>
      <p className='text-3xl'>404: Page Not Found</p>
    </section>
  );
};
export default NotFoundPage;
