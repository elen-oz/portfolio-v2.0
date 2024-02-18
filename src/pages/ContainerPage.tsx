import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContainerPage = () => {
  return (
    <div className='h-full flex flex-col justify-between'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default ContainerPage;
