import React, { useState } from "react";
import "./ServicesSection.css";
import Transformer from "./Transformer"; // Composant Transformer
import Generer from "./Generer"; // Composant Générer

const ServicesSection = ({ setActiveComponent }) => {
  const [activeComponentState, setActiveComponentState] = useState(null); // Gestion de l'état actif

  return (
    <div>
      {activeComponentState === null && (
        <>
          <h2 className="services-title">Nos Services</h2>
          <section className="services-section">
            <div className="service-card">
              <div className="service-icon"><i className="fi fi-rr-master-plan"></i></div>
              <h3>Transformation des PFA en projets ESL</h3>
              <p>Utilisez l'IA pour adapter vos projets actuels à l'approche ESL.</p>
              <button onClick={() => setActiveComponentState("Transformer")}>
                Transformer un PFA
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fa-solid fa-file"></i></div>
              <h3>Générer des études de cas ESL personnalisées</h3>
              <p>Créez de nouveaux projets adaptés à vos besoins pédagogiques.</p>
              <button onClick={() => setActiveComponentState("Generer")}>
                Générer un cas ESL
              </button>
            </div>
          </section>
        </>
      )}

      {/* Affichage conditionnel des composants */}
      {activeComponentState === "Transformer" && (
        <Transformer onBack={() => setActiveComponentState(null)} />
      )}
      {activeComponentState === "Generer" && (
        <Generer onBack={() => setActiveComponentState(null)} />
      )}
    </div>
  );
};

export default ServicesSection;
