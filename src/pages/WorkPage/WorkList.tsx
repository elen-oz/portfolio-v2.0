import projects from '../../utils/data.ts';
import WorkItem from './WorkItem.tsx';

const WorkList = () => {
  return (
    <>
      <div className='mb-10'>
        <ul className='pt-[7rem]'>
          {projects.map((project) => (
            <WorkItem
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              image={project.image}
              github={project.github}
              live={project.live}
              features={project.features}
              stack={project.stack}
            />
          ))}
        </ul>
      </div>
      <p className='text-center text-3xl uppercase mb-10'>
        see more apps&nbsp;
        <a
          className='underline hover:text-yellow'
          href='https://elen-oz.notion.site/About-Me-bbfdf9a7e6c54669829923d14b6cd7f6?pvs=4'
          target='_blank'
          rel='noreferrer'
        >
          here
        </a>
        &nbsp;or&nbsp;
        <a
          href='mailto: ozerova.lenka@gmail.com'
          className=' underline hover:text-red'
        >
          ping me
        </a>
      </p>
    </>
  );
};
export default WorkList;
