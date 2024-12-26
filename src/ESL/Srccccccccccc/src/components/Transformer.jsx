import React from "react";
import "./Transformer.css";

const Transformer = ({ onBack }) => {
  return (
    <div className="container">
      {/* Titre principal */}
      <h2 className="title">Transformation des PFA en projets ESL</h2>

      {/* Section formulaire */}
      <div className="form-section">
        <button className="back-btn" onClick={onBack}><i className="fa-solid fa-arrow-left"></i></button>
        <form>
          <label htmlFor="titre">1. Titre de votre PFA</label>
          <input
            type="text"
            id="titre"
            placeholder="Écrivez le titre de votre PFA"
          />

          <label htmlFor="description">2. Description</label>
          <textarea
            id="description"
            placeholder="Décrivez votre PFA"
            rows="4"
          ></textarea>

          <div className="buttons">
            <button type="reset" className="reset-btn">
              Réinitialiser
            </button>
            <button type="submit" className="submit-btn">
              Transformer
            </button>
          </div>
        </form>
      </div>

      {/* Section des propositions générées */}
        <div className="generated-section">
          <h2>Propositions générées :</h2>
          <div className="generated-box">
            Les propositions apparaîtront ici après la transformation
          </div>
          <div className="footer">Powered by ChatGPT</div>
        </div>
    </div>
  );
};

export default Transformer;
