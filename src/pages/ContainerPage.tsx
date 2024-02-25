import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContainerPage = () => {
  return (
    <div className='relative flex flex-col min-h-screen w-screen'>
      <Header />
      <main className='flex-1' id='top'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default ContainerPage;
