import React from 'react';
import '../Styles/Navbar2.css';
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Profile from "../Images/Profile.png";

const Navbar = () => {
  return (
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
        <Link className="nav-link" to="/Equipes">Equipes</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Projets">Projets</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Testimonials">Testimonials</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
    <div className="profileCont">
      <img src={ Profile } alt="Profile" className='profile'/>
    </div>
  </nav>
  );
};

export default Navbar;