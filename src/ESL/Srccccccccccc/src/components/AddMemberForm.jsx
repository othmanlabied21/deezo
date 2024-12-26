// import React, { useState } from 'react';
// import './AddMemberForm.css';

// const AddMemberForm = ({ onAddMember, onCancel }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     personality: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.firstName && formData.lastName) {
//       onAddMember(`${formData.firstName} ${formData.lastName}`);
//     }
//   };

//   return (
//     <div className="add-member-form">
//       <h2>Ajouter un membre</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           1. Nom
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             placeholder="Entrez votre nom"
//           />
//         </label>
//         <label>
//           2. Prénom
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             placeholder="Entrez votre prénom"
//           />
//         </label>
//         <label>
//           3. Choisissez votre personnalité
//      <select
//         name="personality"
//         value={formData.personality}
//         onChange={handleChange}
//         >
//         <option value="">-- Sélectionnez --</option>
//         <option value="ISTJ">ISTJ (Logisticien)</option>
//         <option value="ISFJ">ISFJ (Protecteur)</option>
//         <option value="INFJ">INFJ (Conseiller)</option>
//         <option value="INTJ">INTJ (Architecte)</option>
//         <option value="ISTP">ISTP (Virtuose)</option>
//         <option value="ISFP">ISFP (Artiste)</option>
//         <option value="INFP">INFP (Médiateur)</option>
//         <option value="INTP">INTP (Logicien)</option>
//         <option value="ESTP">ESTP (Entrepreneur)</option>
//         <option value="ESFP">ESFP (Artiste de la scène)</option>
//         <option value="ENFP">ENFP (Inspirateur)</option>
//         <option value="ENTP">ENTP (Innovateur)</option>
//         <option value="ESTJ">ESTJ (Directeur)</option>
//         <option value="ESFJ">ESFJ (Soutien)</option>
//         <option value="ENFJ">ENFJ (Protagoniste)</option>
//         <option value="ENTJ">ENTJ (Commandant)</option>
//         </select>
//         </label>
//         <p>
//           Vous ne savez pas ? <a href="#">Passez le test ici</a>
//         </p>
//         <div className="form-buttons">
//         <button type="button" className="cancel-button" onClick={onCancel}>Annuler</button>
//           <button type="submit" className="add-button">Ajouter</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddMemberForm;
import React, { useState } from 'react';
import './AddMemberForm.css';
import PersonalityTest from './PersonalityTest'; // Import the PersonalityTest component

const AddMemberForm = ({ onAddMember, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    personality: '',
  });
  const [showTest, setShowTest] = useState(false); // New state to toggle the personality test

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName) {
      onAddMember(`${formData.firstName} ${formData.lastName}`);
    }
  };

  const handleTestClick = () => {
    setShowTest(true); // Show the personality test when the link is clicked
  };

  return (
    <div className="add-member-form">
      {showTest ? (
        // Show the personality test if the state is true
        <PersonalityTest />
      ) : (
        <>
          <h2>Ajouter un membre</h2>
          <form onSubmit={handleSubmit}>
            <label>
              1. Nom
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Entrez votre nom"
              />
            </label>
            <label>
              2. Prénom
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Entrez votre prénom"
              />
            </label>
            <label>
              3. Choisissez votre personnalité
              <select
                name="personality"
                value={formData.personality}
                onChange={handleChange}
              >
                <option value="">-- Sélectionnez --</option>
                <option value="ISTJ">ISTJ (Logisticien)</option>
                <option value="ISFJ">ISFJ (Protecteur)</option>
                <option value="INFJ">INFJ (Conseiller)</option>
                <option value="INTJ">INTJ (Architecte)</option>
                <option value="ISTP">ISTP (Virtuose)</option>
                <option value="ISFP">ISFP (Artiste)</option>
                <option value="INFP">INFP (Médiateur)</option>
                <option value="INTP">INTP (Logicien)</option>
                <option value="ESTP">ESTP (Entrepreneur)</option>
                <option value="ESFP">ESFP (Artiste de la scène)</option>
                <option value="ENFP">ENFP (Inspirateur)</option>
                <option value="ENTP">ENTP (Innovateur)</option>
                <option value="ESTJ">ESTJ (Directeur)</option>
                <option value="ESFJ">ESFJ (Soutien)</option>
                <option value="ENFJ">ENFJ (Protagoniste)</option>
                <option value="ENTJ">ENTJ (Commandant)</option>
              </select>
            </label>
            <p>
              Vous ne savez pas ?{' '}
              <a href="#" onClick={handleTestClick}>
                Passez le test ici
              </a>
            </p>
            <div className="form-buttons">
              <button type="button" className="cancel-button" onClick={onCancel}>
                Annuler
              </button>
              <button type="submit" className="add-button">
                Ajouter
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AddMemberForm;

