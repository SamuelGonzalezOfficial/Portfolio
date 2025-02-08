import React from 'react';
import './Team.css';

function Team() {
  return (
    <div className="team">
      <div className="team-container">
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="John Doe"
            className="profile-image"
          />
          <h2 className="name">Nicol&aacute;s</h2>
          <h3 className="position">Egresado de Ingeniería y con un magíster en Ingeniería Industrial de la Universidad Católica</h3>
          <p className="description">
          siempre ha creído en el poder del conocimiento y la tecnología para ampliar las capacidades humanas. Como líder de proyectos complejos, su misión ha sido utilizar IA para mejorar procesos, resolver problemas que antes parecían insuperables y anticiparse a las necesidades de las empresas. A través de AInstein, su objetivo es dar a las organizaciones las herramientas que necesitan para construir sobre los logros del pasado y enfrentar un futuro lleno de posibilidades.
          </p>
        </div>

        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Jane Smith"
            className="profile-image"
          />
          <h2 className="name">Ignacio</h2>
          <h3 className="position">Egresado de Ingeniería Industrial de la Universidad de Bio-Bío y con un magíster en Ingeniería Industrial</h3>
          <p className="description">
            El progreso no solo se trata de innovación, sino de mejorar la vida de las personas. En un mundo donde la IA será un catalizador de cambios radicales, su capacidad para analizar y resolver problemas estratégicos y operativos es clave. Su enfoque está en ofrecer soluciones personalizadas y efectivas que permitan a las empresas adaptarse a la nueva era tecnológica.
          </p>
        </div>
      </div>
    </div>
  );
}

export { Team };
