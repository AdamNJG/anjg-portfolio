import React from 'react';
import TechChip from './TechChip';
import './Project.css';

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  gitLink?: string;
  deployedLink?: {link: string, displayText: string};
}

const Project: React.FC<ProjectProps> = ({ title, description, techStack, gitLink, deployedLink }) => {
  return (
    <article 
      className='project' 
      aria-labelledby={`project-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
      <h3 id={`project-title-${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</h3>
      <p>{description}</p>
      <strong>Tech Stack:</strong>
        <ul 
          className="tech-stack" 
          role="list" 
          aria-label={`Technologies used in ${title}`}
        >
          {techStack.map((tech, index) => (
            <li  key={`chip-${index}`} >
              <TechChip tech={tech}/>
            </li>
          ))}
        </ul>
      <nav aria-label={`Links for ${title} project`} className='project-nav'>
        {gitLink && (
          <p>
            <a 
              href={gitLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='project-link'
              aria-label={`View source code for ${title} (opens in new tab)`}
            >
              View Source Code
            </a>
          </p>
        )}
        {deployedLink && (
          <p>
            <a 
              href={deployedLink.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='project-link'
              aria-label={`${deployedLink.displayText} for ${title} (opens in new tab)`}
            >
              {deployedLink.displayText}
            </a>
          </p>
        )}
      </nav>
    </article>
  );
};

export default Project;