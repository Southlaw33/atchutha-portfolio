import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">Atchutha Rao T A</div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Profile</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>About</NavLink></li>
        <li><NavLink to="/work-experience" onClick={closeMenu} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Experience</NavLink></li>
        <li><NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Projects</NavLink></li>
        <li><NavLink to="/interests" onClick={closeMenu} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Interests</NavLink></li>
        <li><NavLink to="/education" onClick={closeMenu} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Education</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}
