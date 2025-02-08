import React from 'react';
import './Team.css';

function Team() {
  return (
    <section className="team">
      <div className="team-header">
        <h2 className="team-title">Equipo Directivo</h2>
        <p className="team-subtitle">Liderando la revolución de IA contextual</p>
      </div>
      
      <div className="team-grid">
        <article className="team-card">
          <div className="card-content">
            <div className="image-container">
              <img
                src="https://via.placeholder.com/300x400.png?text=Nicol%C3%A1s"
                alt="Nicolás"
                className="profile-image"
              />
              <div className="social-links">
                <a href="#" className="social-icon">↗</a>
                <a href="#" className="social-icon">↗</a>
              </div>
            </div>
            <div className="card-details">
              <h3 className="name">Nicolás</h3>
              <p className="position">CEO & Co-Fundador</p>
              <div className="divider"></div>
              <p className="description">
                Líder en transformación digital con experiencia en implementación de IA empresarial.
                Magíster en Ingeniería Industrial UC.
              </p>
            </div>
          </div>
        </article>

        <article className="team-card">
          <div className="card-content">
            <div className="image-container">
              <img
                src="https://via.placeholder.com/300x400.png?text=Ignacio"
                alt="Ignacio"
                className="profile-image"
              />
              <div className="social-links">
                <a href="#" className="social-icon">↗</a>
                <a href="#" className="social-icon">↗</a>
              </div>
            </div>
            <div className="card-details">
              <h3 className="name">Ignacio</h3>
              <p className="position">CTO & Co-Fundador</p>
              <div className="divider"></div>
              <p className="description">
                Experto en arquitecturas de IA escalables. Magíster en Ingeniería Industrial 
                con especialización en sistemas inteligentes.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export { Team };
