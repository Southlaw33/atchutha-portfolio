import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Atchutha Rao T A</div>
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Profile</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>About</NavLink></li>
        <li><NavLink to="/work-experience" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Experience</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Projects</NavLink></li>
        <li><NavLink to="/interests" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Interests</NavLink></li>
        <li><NavLink to="/education" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Education</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}
