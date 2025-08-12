import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, techStack, link }) => {
  console.log('hi');

  return (
    <article style={{ border: '1px solid var(--button-border-hover)', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech Stack:</strong> {techStack.join(', ')}</p>
      {link && (
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--button-text)' }}>
            View Project
          </a>
        </p>
      )}
    </article>
  );
};

export default Project;