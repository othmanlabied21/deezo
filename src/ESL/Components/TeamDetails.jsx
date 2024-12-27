import React, { useState } from 'react';
import '../Styles/TeamDetails.css';
import AddMemberForm from './AddMemberForm';

const TeamDetails = ({ team, onBack }) => {
  const [members, setMembers] = useState(team.members); // Existing members
  const [showForm, setShowForm] = useState(false); // Toggle for form visibility

  const handleAddMember = (newMember) => {
    setMembers([...members, newMember]); // Add the new member to the list
    setShowForm(false); // Hide the form after adding the member
  };

  return (
    <div className="team-details">
      <button className="back-button" onClick={onBack}>
        Retour
      </button>
      <h2>{team.name}</h2>
      <ul className="member-list">
        {members.map((member, index) => (
          <li key={index} className="member-item">
            {member.nom} {member.prenom} - {member.personnalite}
          </li>
        ))}
      </ul>
      {!showForm ? (
        <button
          className="add-member-button"
          onClick={() => setShowForm(true)}
        >
          Ajouter Membre
        </button>
      ) : (
        <AddMemberForm onAddMember={handleAddMember} onClose={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default TeamDetails;
