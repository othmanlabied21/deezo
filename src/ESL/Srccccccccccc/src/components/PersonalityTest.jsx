import React from "react";
import './PersonalityTest.css';

const PersonalityTest = () => {
  return (
    <div>
      <h1>Test de Personnalité</h1>
      <iframe
        src="https://www.16personalities.com/fr/test-de-personnalite"
        width="100%"
        height="800px"
        title="Test de personnalité"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default PersonalityTest;