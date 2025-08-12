
import Project from './Project.tsx';
import projects from '../../assets/projects.json';
import './Projects.css';

export default function Projects () {

  return (<div className="projectsContainer">
    <h1>Projects</h1>
    {projects.map((proj) => (
        <Project
        key={proj.title}
        title={proj.title}
        description={proj.description}
        techStack={proj.techStack}
        gitLink={proj.gitLink}
				deployedLink={proj.deployedLink}
        />
    ))}
  </div>);
}