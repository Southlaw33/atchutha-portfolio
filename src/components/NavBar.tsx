import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Atchutha Rao T A</div>
      <ul className="nav-links">
        <li><NavLink to="/">Profile</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/work-experience">Experience</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/interests">Interests</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}
