
import Project from './Project.tsx';
import projects from '../../assets/projects.json';
import './Projects.css';

export default function Projects () {

  return (
    <section>
		<h1>Projects</h1>
		<section 
			className="projectsContainer" 
			aria-label="Portfolio projects"
		>
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
		</section>
    </section>);
}