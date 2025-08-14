import ThemeToggle from './theme/ThemeToggle.tsx';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar () {

  return (
    <nav>
        <div className="paths">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About Me</NavLink>
        </div>

        <ThemeToggle/>
    </nav>
  );
};
