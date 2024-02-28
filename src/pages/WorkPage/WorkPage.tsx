import StripedBackground from '../../components/StripedBackground.tsx';
import WorkList from './WorkList.tsx';

const WorkPage = () => {
  return (
    <section className='min-h-screen text-lg'>
      <div className='relative'>
        <StripedBackground color={'yellow'} />

        <div className='relative z-100 h-screen px-4 flex flex-col justify-center gap-x-4 md:items-center md:flex-row pt-[100px]'>
          <h2 className='mb-4 md:flex-1 text-6xl md:text-8xl uppercase'>
            Projects
          </h2>
          <p className='md:flex-1 text-2xl lg:text-3xl leading-none'>
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
