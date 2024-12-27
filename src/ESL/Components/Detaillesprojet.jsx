import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importer le hook useNavigate
import "../Styles/Detaillesprojet.css";
function Detaillesprojet() {
  const navigate = useNavigate(); // Initialiser useNavigate pour la navigation
  const onBack = () => {
    navigate('/ProjectManagement'); // Remplacer '/projet' par le chemin de votre composant Projet
  };
  return (
    <div className="project-container">
      <main className="content">
                {/* Bouton Retour avec icône */}
        <button className="back-btn" onClick={onBack}>
          <i className="fa-solid fa-arrow-left"></i> 
        </button>
        <h1>Projet 2</h1>
        <div className="tags">
          <button>Equipe 1</button>
          <button>Equipe 2</button>
        </div>
        {/* <div className="chat-box">
          <p>Que pensez-vous ?</p>
          <div className="message-input">
            <input type="text" placeholder="Message" />
            <button>&#x27A4;</button>
          </div>
        </div> */}
      <div className="generated">
          {/* <h2>Propositions générées :</h2> */}
          <div className="box">
          Les propositions apparaîtront ici après la transformation
            <input type="text" placeholder='Message' />
          </div>
          <div className="footer">Powered by ChatGPT</div>
        </div>

      </main>
    </div>
  );
}
export default Detaillesprojet;
