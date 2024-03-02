import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const ContainerPage = () => {
  const [isNotContactPage, setIsNotContactPage] = useState(false);
  const currentLocation = useLocation();

  useEffect(() => {
    setIsNotContactPage(currentLocation.pathname !== '/contact');
  }, [currentLocation.pathname]);

  return (
    <div className='relative flex min-h-screen w-screen flex-col'>
      <Header />
      <main className='flex-1' id='top'>
        <Outlet />
      </main>
      {isNotContactPage && <Footer />}
    </div>
  );
};
export default ContainerPage;
