import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Detaillesprojet.css";

function Detaillesprojet() {
  const navigate = useNavigate();

  const handleTeamClick = (teamId) => {
    navigate("/team/${teamId}"); // Navigate to the TeamDetails page with the team ID
  };

  const onBack = () => {
    navigate('/ProjectManagement');
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
          <button onClick={() => handleTeamClick(1)}>Equipe 1</button>
          <button onClick={() => handleTeamClick(2)}>Equipe 2</button>
        </div>
        <div className="generated">
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