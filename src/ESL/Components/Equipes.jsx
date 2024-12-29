import React, { useState } from 'react';
import TeamDetails from './TeamDetails'; // Component to display team details
import '../Styles/Equipes.css';

const Equipes = () => {
  const [teams, setTeams] = useState([
    {
      name: 'Equipe 1',
      members: [
        { nom: 'Alice', prenom: 'Doe', personnalite: 'Leader' },
        { nom: 'Bob', prenom: 'Smith', personnalite: 'Creative' },
        { nom: 'Charlie', prenom: 'Brown', personnalite: 'Analytical' },
      ],
    },
    {
      name: 'Equipe 2',
      members: [
        { nom: 'David', prenom: 'Johnson', personnalite: 'Innovative' },
        { nom: 'Eve', prenom: 'Williams', personnalite: 'Organized' },
        { nom: 'Frank', prenom: 'Miller', personnalite: 'Dynamic' },
      ],
    },
    {
      name: 'Equipe 3',
      members: [
        { nom: 'Grace', prenom: 'Lee', personnalite: 'Visionary' },
        { nom: 'Heidi', prenom: 'Taylor', personnalite: 'Empathetic' },
        { nom: 'Ivan', prenom: 'Anderson', personnalite: 'Pragmatic' },
      ],
    },
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