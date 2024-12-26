import React, { useState } from 'react';
import AddMemberForm from './AddMemberForm';
import './Equipes.css';

const Equipes = () => {
  const [teams, setTeams] = useState([
    { name: "Equipe 1", members: ["Alice", "Bob", "Charlie"] },
    { name: "Equipe 2", members: ["David", "Eve", "Frank"] },
    { name: "Equipe 3", members: ["Grace", "Heidi", "Ivan"] },
  ]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddTeam = () => {
    const newTeamName = `Equipe ${teams.length + 1}`;
    const newTeam = { name: newTeamName, members: [] };
    setTeams([...teams, newTeam]);
  };

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleAddMember = (newMember) => {
    const updatedTeams = teams.map((team) => {
      if (team.name === selectedTeam.name) {
        return { ...team, members: [...team.members, newMember] };
      }
      return team;
    });
    setTeams(updatedTeams);
    setSelectedTeam({
      ...selectedTeam,
      members: [...selectedTeam.members, newMember],
    });
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="equipes-container">
      {!showForm ? (
        <>
          <main className="equipes-main">
            <div className="equipes-header">
              <h1 className="equipes-title">Mes Equipes</h1>
              <button className="add-team-btn" onClick={handleAddTeam}>
                +
              </button>
            </div>

            <div className="team-list">
              {teams.map((team, index) => (
                <div
                  className="team-item"
                  key={index}
                  onClick={() => handleTeamClick(team)}
                >
                  <span>{team.name}</span>
                  <span className="arrow">→</span>
                </div>
              ))}
            </div>

            {selectedTeam && (
              <div className="team-members">
                <h2>{selectedTeam.name}</h2>
                <div className="member-cards">
                  {selectedTeam.members.map((member, index) => (
                    <div className="member-card" key={index}>
                      <span>{member}</span>
                    </div>
                  ))}
                </div>
                <button className="add-member-btn" onClick={handleShowForm}>
                   Ajouter un membre
                </button>
              </div>
            )}
          </main>
        </>
      ) : (
        <AddMemberForm onAddMember={handleAddMember} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default Equipes;
