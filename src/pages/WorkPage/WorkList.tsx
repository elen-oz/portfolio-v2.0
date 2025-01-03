import projects from '../../utils/data.ts';
import WorkItem from './WorkItem.tsx';
import {useTranslation} from "react-i18next";

const WorkList = () => {
    const { t } = useTranslation('projectsPage');

    return (
    <div className='bg-gray-200'>
      <div className='content-container mb-10'>
        <ul className='pt-[7rem]'>
            {projects.map((project) => (
                <WorkItem
                    key={project.id}
                    {...project}
                    description={t(`projects.${project.id}.description`, '')}
                    features={t(`projects.${project.id}.features`, { returnObjects: true }) as string[]}
                />
            ))}
        </ul>
      </div>
      <p className='mb-10 text-center text-3xl uppercase'>
          {t('contact')}&nbsp;
        <a
          href='mailto: ozerova.lenka@gmail.com'
          className=' underline hover:text-red'
        >
          <span className='whitespace-nowrap'>{t('link')}</span>
        </a>
      </p>
    </div>
  );
};
export default WorkList;
