
import React, { useState } from 'react';
import TeamDetails from './TeamDetails'; // Component to display team details
import '../Styles/Equipes.css';

const Equipes = () => {
  const [teams, setTeams] = useState([
    { name: 'Equipe 1', members: ['Alice', 'Bob', 'Charlie'] },
    { name: 'Equipe 2', members: ['David', 'Eve', 'Frank'] },
    { name: 'Equipe 3', members: ['Grace', 'Heidi', 'Ivan'] },
  ]);

  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleTeamClick = (team) => {
    setSelectedTeam(team); 
  };

  return (
    <div className="equipes-container">
      {!selectedTeam ? (
        <div className="team-list">
            <div className="equipes-header">
              <h2>Mes Equipes</h2>
              <button className="add-equipe-button">
                <span>+</span>
              </button>
            </div>
          {teams.map((team, index) => (
            <div
              key={index}
              className="team-item"
              onClick={() => handleTeamClick(team)}
            >
              {team.name}
            </div>
          ))}
        </div>
      ) : (
        <TeamDetails
          team={selectedTeam}
          onBack={() => setSelectedTeam(null)} // Go back to team list
        />
      )}
    </div>
  );
};

export default Equipes;

