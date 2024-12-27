import React from 'react';
import '../Styles/ProjectManagement.css'; 

const ProjectManagement = () => {
  return (
    <div id="project-management">


      {/* Main Content */}
      <main>
        <section className="projects-section">
          {/* History */}
          <aside className="history">
            <h3>Historique</h3>
            <div className="history-group">
              <h4>Aujourd'hui</h4>
              <ul>
                <li>Projet 3</li>
                <li>Projet 1</li>
                <li>Projet 4</li>
              </ul>
            </div>
            <div className="history-group">
              <h4>Semaine dernière</h4>
              <ul>
                <li>Projet 2</li>
              </ul>
            </div>
          </aside>

          <div className="projects">
  <div className="projects-header">
    <h2>Mes Projets</h2>
    <button className="add-project-button">
      <span>+</span>
    </button>
  </div>
  <div className="project-list">
    <div className="project-card">
      <span>Projet 1</span>
      <button>→</button>
    </div>
    <div className="project-card">
      <span>Projet 2</span>
      <button>→</button>
    </div>
    <div className="project-card">
      <span>Projet 3</span>
      <button>→</button>
    </div>
    <div className="project-card">
      <span>Projet 4</span>
      <button>→</button>
    </div>
  </div>
</div>
         
        </section>
      </main>

    </div>
  );
};

export default ProjectManagement;
