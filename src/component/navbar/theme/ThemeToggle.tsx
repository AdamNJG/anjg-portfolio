import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

export default function ThemeToggle () {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new Event('theme-change'));
  }, [theme]);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (!localStorage.getItem('theme')) { 
        setTheme(mediaQuery.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleThemeChange = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
        onClick={handleThemeChange}
        className={`toggle-switch ${theme}`}
        role="switch"
        aria-label="Dark mode"
        aria-checked={theme === 'dark'}
        type="button"
      >
      <div className="slider">
        {theme === 'dark' ? (
            <FaMoon className="icon" aria-hidden="true" />
          ) : (
            <FaSun className="icon" aria-hidden="true" />
          )}
      </div>
      <span className="sr-only">
        {theme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled'}
      </span>
    </button>
  );
} 