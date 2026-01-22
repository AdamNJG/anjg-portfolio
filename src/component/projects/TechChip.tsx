import './TechChip.css';
import { lightLogoMap, darkLogoMap } from '../common/logoMap';
import { useState, useEffect } from 'react';

export default function TechChip ({ tech, logo = true }: {tech: string, logo?: boolean}) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const handleThemeChange = () => {
      const storedTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
      setTheme(storedTheme);
    };
    window.addEventListener('theme-change', handleThemeChange);

    return () => window.removeEventListener('theme-change', handleThemeChange);
  }, []);

  const currentMap = theme === 'dark' ? darkLogoMap : lightLogoMap;

  const hasLogo = logo && currentMap[tech];

  return (    
    <div className="chip">
      {hasLogo ? <img 
        src={currentMap[tech]}
        alt={`${tech} logo`} 
        className="chip-icon" /> : 
        null
        }
      <span>{tech}</span>
    </div>
  );
}