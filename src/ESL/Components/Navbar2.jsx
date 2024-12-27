import { React, useState } from 'react';
import '../Styles/Navbar2.css';
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Profile from "../Images/Profile.png";
import Menu from './Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <img className="navbar-brand logo" src={ Logo } alt="Esl ai Logo" />
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Projets">Projets</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Equipes">Equipes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Testimonials">Testimonials</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/FAQ">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Guide">Guide</Link>
          </li>
        </ul>
        <div className="profileCont" onClick={toggleMenu}>
          <img src={ Profile } alt="Profile" className='profile'/>
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Navbar;