
import Project from './Project.tsx';
import projects from '../../assets/projects.json';

export default function Projects () {

  return (<>
    <h1>Projects</h1>
    {projects.map((proj) => (
        <Project
        key={proj.title}
        title={proj.title}
        description={proj.description}
        techStack={proj.techStack}
        link={proj.link}
        />
    ))}
  </>);
}