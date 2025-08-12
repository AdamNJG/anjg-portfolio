import React from 'react';
import TechChip from './TechChip';

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  gitLink?: string;
  deployedLink?: {link: string, displayText: string};
}

const Project: React.FC<ProjectProps> = ({ title, description, techStack, gitLink, deployedLink }) => {
  return (
    <article style={{ border: '1px solid var(--button-border-hover)', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>Tech Stack:</strong> <div className="tech-stack">
        {techStack.map((tech, index) => (
          <TechChip key={`chip-${index}`} tech={tech}/>
        ))}
      </div>
      {gitLink && (
        <p>
          <a href={gitLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--button-text)' }}>
            View Source Code
          </a>
        </p>
      )}
      {deployedLink && (
        <p>
          <a href={deployedLink.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--button-text)' }}>
            {deployedLink.displayText}
          </a>
        </p>
      )}
    </article>
  );
};

export default Project;