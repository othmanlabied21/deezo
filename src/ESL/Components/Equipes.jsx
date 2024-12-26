import React, { useState } from 'react';
import AddMemberForm from './AddMemberForm';
import '../Styles/Equipes.css';

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
                <button className='add-team-btn' onClick={handleAddTeam}>
                  <i className="fas fa-plus"></i>
                </button>
            </div>

            <div className="team-list">
              {teams.map((team, index) => (
                <div
                  className="team-item"
                  key={index}
                  onClick={() => handleTeamClick(team)}
                >
                  <span className='team-name'>{team.name}</span>
                  <div className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                      <path d="M2058 4727 c-31 -13 -74 -38 -95 -55 -77 -62 -1882 -1878 -1907 -1920 -38 -61 -60 -154 -52 -225 14 -132 -40 -73 1014 -1129 795 -796 975 -971 1020 -994 78 -39 202 -46 285 -14 89 34 153 90 191 169 28 60 31 75 31 161 0 165 16 144 -562 729 -274 278 -534 536 -579 575 -45 40 -118 91 -167 116 l-86 45 1837 5 1837 5 57 23 c81 33 160 108 200 190 30 60 33 75 33 152 -1 70 -5 95 -27 142 -35 76 -99 143 -173 181 l-60 32 -1855 5 -1855 5 95 50 95 49 576 576 c665 664 634 624 634 795 0 89 -3 106 -28 156 -15 31 -50 78 -77 103 -72 68 -126 89 -235 93 -77 3 -98 0 -147 -20z"/>
                      </g>
                    </svg>
                  </div>
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
