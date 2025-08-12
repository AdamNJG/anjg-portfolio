import { useState, useEffect } from 'react'
import './App.css'
import Project from './component/Project'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if(!localStorage.getItem("theme")) { 
        setTheme(mediaQuery.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [])

  const handleThemeChange = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
    <>
      <button onClick={handleThemeChange}>Theme</button>
      <div>
        <Project title="project title"/>
      </div>
    </>
  )
}

export default App
