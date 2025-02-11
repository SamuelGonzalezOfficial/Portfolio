import React from 'react';
import './Models.css';

function Models() {
  return (
    <section className="models">
      <div className="models-container">
        <h2 className="models-title">Asesoría por etapas</h2>
        <p className="models-subtitle">
          Descubre cómo nuestros modelos de IA se adaptan a las necesidades de tu empresa.
        </p>
        <div className="models-cards">
          <div className="model-card">
            <h3 className="model-name">Skynet90</h3>
            <p className="model-description">
              En <strong>Skynet90</strong> ofrecemos un agente de IA con un comportamiento
              personalizado, diseñado para adaptarse a las necesidades específicas de tu empresa.
            </p>
          </div>
          <div className="model-card">
            <h3 className="model-name">Skynet180</h3>
            <p className="model-description">
              Con <strong>Skynet180</strong> alimentamos al agente de IA con todo el contexto de
              tu empresa y documentos relevantes, permitiéndole tomar decisiones más informadas.
            </p>
          </div>
          <div className="model-card">
            <h3 className="model-name">Skynet360</h3>
            <p className="model-description">
              En <strong>Skynet360</strong> tu agente de IA desarrolla “superpoderes”: habilidades en
              programación, encadenar múltiples acciones e integración con diversas herramientas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Models };
