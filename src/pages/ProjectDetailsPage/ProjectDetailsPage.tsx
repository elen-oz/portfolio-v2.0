import { useParams } from 'react-router-dom';
import data from '../../utils/data';

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : undefined;

  const project = data.find((item) => {
    if (item.id) {
      return item.id === projectId;
    }
  });

  if (!project) return <div>Project not found</div>;

  const { name, description, image, github, live } = project;

  return (
    <>
      <div>ProjectDetailsPage</div>
      <ul>
        <li>{name}</li>
        <li>{description}</li>
        <li>{image}</li>
        <li>{github}</li>
        <li>{live}</li>
      </ul>
    </>
  );
};
export default ProjectDetailsPage;
