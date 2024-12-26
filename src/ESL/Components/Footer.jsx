import React from "react";
import Logo from "../Images/Logo.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo-copyright">
        <img className="logo" src={ Logo } alt="Esl ai Logo"/>
        <p id="copyright">©2024 ESL Ai — Tous droits réservés</p>
      </div>
          <ul className="social-links">
            <a href="/"><i className="fa-brands fa-facebook"></i></a>
            <a href="/"><i className="fa-brands fa-instagram" ></i></a>
            <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="/"><i className="fa-brands fa-youtube"></i></a>
          </ul>
    </footer>
  );
};

export default Footer;