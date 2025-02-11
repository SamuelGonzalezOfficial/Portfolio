import React from 'react';
import './Models.css';

function Models() {
  return (
    <section className="models">
      <div className="models-container">
        <div className="title-wrapper">
          <h2 className="models-title">Asesoría por etapas</h2>
          <div className="gradient-bar"></div>
        </div>
        <p className="models-subtitle">
          Potencia tu empresa con modelos de IA personalizados que se adaptan a tus necesidades.
        </p>
        <div className="models-grid">
          <div className="model-card">
            <h3 className="model-name">Skynet90</h3>
            <p className="model-description">
              Ofrecemos un agente de IA con un comportamiento personalizado, diseñado para responder
              a las particularidades de tu empresa.
            </p>
          </div>
          <div className="model-card">
            <h3 className="model-name">Skynet180</h3>
            <p className="model-description">
              Integramos el contexto completo de tu empresa y documentos relevantes para dotar al
              agente de decisiones más informadas.
            </p>
          </div>
          <div className="model-card">
            <h3 className="model-name">Skynet360</h3>
            <p className="model-description">
              El agente de IA desarrolla “superpoderes”: habilidades en programación, encadenar
              múltiples acciones e integración avanzada con tus herramientas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Models };
