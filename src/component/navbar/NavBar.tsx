
import { useState, useEffect } from 'react';
import ThemeToggle from './theme/ThemeToggle.tsx';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar () {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenu = () => {
    setIsMenuActive(prev => !prev);
  };

  const handleNav = () => {
    setIsMenuActive(false);
  };

  const NavItems: React.FC<{className: string}> = ({ className }: {className: string}) => {
    return (      
    <ul className={className} role='list'>
        <li>
          <NavLink 
            to="/"
            onClick={handleNav}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            onClick={handleNav}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/skills" 
            onClick={handleNav}
          >
            Technical Skills
          </NavLink>
        </li>
      </ul>);
  };

  return (
    <>
    <nav className='navbar' role="navigation" aria-label="Main navigation">
      {isMobile ? 
        <button 
          className={`ham-menu ${isMenuActive ? 'active' : ''}`} 
          onClick={handleMenu}
          aria-expanded={isMenuActive}
          aria-controls="mobile-navigation"
          >
          <span></span>
          <span></span>
          <span></span>
        </button> :
        <NavItems className='paths'/>
    }
      <ThemeToggle/>
    </nav>

    <div className={`off-screen-menu ${isMenuActive ? 'active' : ''}`}>
      <NavItems className="off-screen-paths"/>
    </div>
    </>
  );
};
