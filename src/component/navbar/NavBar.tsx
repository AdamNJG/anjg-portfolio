import ThemeToggle from './theme/ThemeToggle.tsx';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar () {

  return (
    <nav className='navbar' role="navigation" aria-label="Main navigation">
      <ul className='paths' role='list'>
        <li>
          <NavLink 
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
          >
            About Me
          </NavLink>
        </li>
      </ul>
        <ThemeToggle/>
    </nav>
  );
};
