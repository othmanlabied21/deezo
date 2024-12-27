import React, { useState } from 'react';
import '../Styles/AddMemberForm.css';

const AddMemberForm = ({ onAddMember, onClose }) => {
  const [newMember, setNewMember] = useState({
    nom: '',
    prenom: '',
    personnalite: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value }); // Update the specific field in newMember
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nom, prenom, personnalite } = newMember;

    // Validate all fields are filled
    if (!nom.trim() || !prenom.trim() || !personnalite.trim()) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    onAddMember(newMember); // Pass the new member to the parent component
    setNewMember({ nom: '', prenom: '', personnalite: '' }); // Reset form fields
  };

  return (
    <form className="add-member-form" onSubmit={handleSubmit}>
      <h2>Ajouter un Membre</h2>
      <input
        type="text"
        name="nom"
        placeholder="Nom"
        value={newMember.nom}
        onChange={handleInputChange}
        className="form-input"
      />
      <input
        type="text"
        name="prenom"
        placeholder="Prénom"
        value={newMember.prenom}
        onChange={handleInputChange}
        className="form-input"
      />
      <input
        type="text"
        name="personnalite"
        placeholder="Personnalité"
        value={newMember.personnalite}
        onChange={handleInputChange}
        className="form-input"
      />
      <div className="form-actions">
        <button type="submit" className="submit-button">
          Ajouter
        </button>
        <button type="button" className="close-button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </form>
  );
};

export default AddMemberForm;
