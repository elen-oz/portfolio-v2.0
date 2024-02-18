import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContainerPage = () => {
  return (
    <div className='relative flex flex-col min-h-screen'>
      <Header />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default ContainerPage;
