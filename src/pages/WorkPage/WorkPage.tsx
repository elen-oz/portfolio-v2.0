import rssApp from '../../assets/projects/RSS-App.webp';
import diffCalc from '../../assets/projects/diff-calc.webp';
import brainGames from '../../assets/projects/brain-games.webp';

const WorkPage = () => {
  return (
    <section className='h-full p-4  text-lg'>
      <div className='h-screen flex flex-col justify-center gap-x-4 md:items-center md:flex-row pt-[100px] '>
        <h2 className='mb-4 md:flex-1 text-6xl md:text-8xl uppercase'>
          Projects
        </h2>
        <p className='md:flex-1 text-2xl lg:text-3xl leading-none'>
          Below is a list of selected projects I have done. If you have any
          questions feel free to{' '}
          <a
            href='mailto: ozerova.lenka@gmail.com?subject=Mail from Portfolio Site'
            className='hover:text-yellow'
          >
            PING ME
          </a>
          .
        </p>
      </div>

      <div className='mb-10'>
        <ul className='uppercase '>
          <li className='w-full mb-4 md:mb-2 flex flex-col md:flex-row gap-x-2 hover:bg-gray'>
            <div className='flex-1'>
              <h3 className='pt-2 text-4xl'>RSS Aggregator</h3>
              <p className='py-4'>
                RSS Aggregator is a specialized tool designed to collate news
                feeds, article announcements, and other content from various
                websites. It provides an easy way for users to subscribe to
                updates and view them in a user-friendly manner. This project is
                built with pure JavaScript and uses the Bootstrap library for
                styling.
              </p>
              <div className='flex justify-between'>
                <a
                  className='text-3xl hover:text-yellow'
                  href='https://frontend-project-11-01.vercel.app/'
                >
                  LIVE
                </a>
                <a
                  className='text-3xl hover:text-green'
                  href='https://github.com/elen-oz/rss-aggregator'
                >
                  Github
                </a>
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center h-[320px] bg-black md:self-end overflow-hidden'>
              <img src={rssApp} alt='RSS Aggregator screenshot' />
            </div>
          </li>

          <li className='w-full mb-4 md:mb-2 flex flex-col md:flex-row gap-x-2 hover:bg-gray'>
            <div className='flex-1'>
              <h3 className='pt-2 text-4xl'>Difference Calculator: CLI App</h3>
              <p className='py-4'>
                Difference Calculator is a console application that designed to
                determine the difference between two data structures. It
                supports various file formats including .json and .yaml, and can
                handle both flat and nested structures.
              </p>
              <div className='flex justify-between'>
                <div className='w-12'>-</div>
                <a
                  className='text-3xl hover:text-green'
                  href='https://github.com/elen-oz/difference-calculator'
                >
                  Github
                </a>
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center h-[320px] bg-black md:self-end overflow-hidden'>
              <img src={diffCalc} alt='Difference calculator screenshot' />
            </div>
          </li>

          <li className='w-full mb-4 md:mb-2 flex flex-col md:flex-row gap-x-2 hover:bg-gray'>
            <div className='flex-1'>
              <h3 className='pt-2 text-4xl'>Brain Games: CLI App</h3>
              <p className='py-4'>
                Brain Games is a console app with collection of five mini-games
                designed to challenge the users mental agility. Each game begins
                with a greeting, personalized with the users name, and consists
                of three rounds.
              </p>
              <div className='flex justify-between'>
                <div className='w-12'>-</div>
                <a
                  className='text-3xl hover:text-green'
                  href='https://github.com/elen-oz/brain-games'
                >
                  Github
                </a>
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center h-[320px] bg-black md:self-end overflow-hidden'>
              <img src={brainGames} alt='Brain Games screenshot' />
            </div>
          </li>
        </ul>
      </div>
      {/* <p className='text-3xl'>
          In the meantime,
          <a
            className='underline text-red'
            href='https://elen-oz.notion.site/About-Me-bbfdf9a7e6c54669829923d14b6cd7f6?pvs=4'
            target='_blank'
            rel='noreferrer'
          >
            &nbsp;check this out
          </a>
          &nbsp;(my projects)
        </p> */}
    </section>
  );
};
export default WorkPage;
