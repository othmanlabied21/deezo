import React from "react";
import "./Footer.css"; // Assume the CSS is in a separate file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">YOUR LOGO</h2>
          {/* <p>©2024 Your Company — Tous droits réservés</p> */}
        </div>

        <div className="footer-section">
          {/* <h3>Nous suivre :</h3> */}
          <ul className="social-links">
            <li><a href="/"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-instagram" ></i></a></li>
            <li><a href="/"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;