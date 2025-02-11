import React from 'react';
import './Models.css';

function Models() {
  return (
    <section className="models">
      <div className="timeline-container">
        <h2 className="models-title">Asesoría por etapas</h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="content">
              <h3>Skynet90</h3>
              <p>
                Ofrecemos un agente de IA con un comportamiento personalizado, diseñado para responder
                a las particularidades de tu empresa.
              </p>
            </div>
            <div className="circle"></div>
          </div>
          <div className="timeline-item right">
            <div className="circle"></div>
            <div className="content">
              <h3>Skynet180</h3>
              <p>
                Integramos el contexto completo de tu empresa y documentos relevantes para dotar al
                agente de decisiones más informadas.
              </p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="content">
              <h3>Skynet360</h3>
              <p>
                El agente de IA desarrolla “superpoderes”: habilidades en programación, encadenar múltiples
                acciones e integración avanzada con tus herramientas.
              </p>
            </div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Models };
