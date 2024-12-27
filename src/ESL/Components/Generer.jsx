import React, { useState } from "react";
import "../Styles/Generer.css";

function ESLGenerate({ onBack }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const questions = [
    "Titre de votre PFA",
    "Description",
    "Objectifs",
    "Public cible",
    "Technologies utilisées",
    "Contraintes",
    "Résultats attendus",
    "Conclusion",
  ];

  const handleInputChange = (e, index) => {
    const updatedAnswers = { ...answers };
    updatedAnswers[questions[index]] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (step < questions.length / 2) {
      setStep(step + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleGenerate = () => {
    console.log("Generated answers:", answers);
  };

  // Calculate the progress as a percentage
  const progress = (step - 1) * 25;

  return (
    <div>
      <main className="main">
        <h2>Transformation des PFA en projets ESL</h2>
<<<<<<< HEAD
        <p className="p1">Répond aux questions suivantes pour générer des études de cas convenables.</p>
=======
        <p>Répond aux questions suivantes pour générer des études de cas convenables.</p>
>>>>>>> master

        <button className="back-btn" onClick={onBack}><i className="fa-solid fa-arrow-left"></i></button>

        <div className="form-container">
          {!showSummary ? (
            <div>
              {[0, 1].map((offset) => {
                const index = (step - 1) * 2 + offset;
                return (
                  index < questions.length && (
                    <div className="form-group" key={index}>
                      <label>{questions[index]}</label>
                      <input
                        type="text"
                        placeholder={questions[index]}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>
                  )
                );
              })}

              {/* Progress bar */}
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Buttons */}
              <div className="button-group">
                <button
                  className="previous-button"
                  onClick={handlePrevious}
                  disabled={step === 1}
                >
<<<<<<< HEAD
                  Précédent
                </button>
                <button className="next-button" onClick={handleNext}>
                  {step < questions.length / 2 ? "Suivant" : "Suivant"}
=======
                  Previous
                </button>
                <button className="next-button" onClick={handleNext}>
                  {step < questions.length / 2 ? "Next" : "Summary"}
>>>>>>> master
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2>Résumé des réponses</h2>
              <ul>
                {questions.map((q, index) => (
                  <li key={index}>
                    <strong>{q}: </strong> {answers[q] || "Non répondu"}
                  </li>
                ))}
              </ul>
              <button className="generate-button" onClick={handleGenerate}>
<<<<<<< HEAD
                Générer
=======
                Generate
>>>>>>> master
              </button>
            </div>
          )}

        </div>
        <div className="generated-section">
          <h2>Propositions générées :</h2>
          <div className="generated-box">
            Les propositions apparaîtront ici après la transformation
          </div>
          <div className="footer">Powered by ChatGPT</div>
        </div>
      </main>
    </div>
  );
}

export default ESLGenerate;

// import React, { useState } from "react";
// import "./Generer.css";

// function ESLGenerate({ onBack }) {
//   const [showForm, setShowForm] = useState(false); // State to control the form visibility
//   const [step, setStep] = useState(1);
//   const [answers, setAnswers] = useState({});
//   const [showSummary, setShowSummary] = useState(false);

//   const questions = [
//     "Titre de votre PFA",
//     "Description",
//     "Objectifs",
//     "Public cible",
//     "Technologies utilisées",
//     "Contraintes",
//     "Résultats attendus",
//     "Conclusion",
//   ];

//   const handleInputChange = (e, index) => {
//     const updatedAnswers = { ...answers };
//     updatedAnswers[questions[index]] = e.target.value;
//     setAnswers(updatedAnswers);
//   };

//   const handleNext = () => {
//     if (!showForm) {
//       setShowForm(true); // Show the form after "Suivant" click
//     } else if (step < questions.length / 2) {
//       setStep(step + 1);
//     } else {
//       setShowSummary(true);
//     }
//   };

//   const handlePrevious = () => {
//     if (showForm && step === 1) {
//       setShowForm(false); // Go back to the welcome screen
//     } else if (step > 1) {
//       setStep(step - 1); // Go back to the previous form step
//     }
//   };

//   const handleGenerate = () => {
//     console.log("Generated answers:", answers);
//   };

//   const progress = (step - 1) * 25;

//   return (
//     <div>
//       <main className="main">
//         <h1>Générer des études de cas ESL personnalisées</h1>

//         {/* Écran d'accueil */}
//         {!showForm && (
//           <div className="welcome-container">
//             <p>Répond aux questions suivantes pour générer des études de cas convenables.</p>
//             <div className="button-group">
//               <button className="previous-button" onClick={onBack}>
//                 Retour
//               </button>
//               <button className="next-button" onClick={handleNext}>
//                 Suivant
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Formulaire */}
//         {showForm && (
//           <div className="form-container">
//             {!showSummary ? (
//               <div>
//                 {[0, 1].map((offset) => {
//                   const index = (step - 1) * 2 + offset;
//                   return (
//                     index < questions.length && (
//                       <div className="form-group" key={index}>
//                         <label>{questions[index]}</label>
//                         <input
//                           type="text"
//                           placeholder={questions[index]}
//                           onChange={(e) => handleInputChange(e, index)}
//                         />
//                       </div>
//                     )
//                   );
//                 })}

//                 <div className="progress-bar-container">
//                   <div
//                     className="progress-bar"
//                     style={{ width: `${progress}%` }}
//                   ></div>
//                 </div>

//                 <div className="button-group">
//                   <button className="previous-button" onClick={handlePrevious}>
//                     Retour
//                   </button>
//                   <button className="next-button" onClick={handleNext}>
//                     {step < questions.length / 2 ? "Suivant" : "Résumé"}
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <h2>Résumé des réponses</h2>
//                 <ul>
//                   {questions.map((q, index) => (
//                     <li key={index}>
//                       <strong>{q}: </strong> {answers[q] || "Non répondu"}
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="previous-button" onClick={() => setShowSummary(false)}>
//                   Retour
//                 </button>
//                 <button className="generate-button" onClick={handleGenerate}>
//                   Générer
//                 </button>

//               </div>
//             )}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default ESLGenerate;
