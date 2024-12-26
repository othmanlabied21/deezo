import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Section.css"; // Import your CSS

const Section = () => {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1>Engagez-vous et apprenez avec notre plateforme ESL :</h1>
        <h2>Études de cas et projets transformés à portée de main</h2>
        <p>
          Découvrez une nouvelle façon d'apprendre et développez vos compétences grâce à nos outils en ligne innovants.
        </p>
        {/* Button to navigate to the Services section */}
        <Link to="/services" className="hero-button">
          Découvrez nos services
        </Link>
      </div>
    </header>
  );
};

export default Section;
