import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/src/assets/images/logo.png" alt="Logo de Ainstein" className="logo" />
          <h2 className="company-name">Ainstein</h2>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Ainstein. Todos los derechos reservados. 
          <span className="footer-credit">
            {' '}
            |{' '}
            <a href="https://www.linkedin.com/in/samuel-gonz%C3%A1lez-b910a034b/" target="_blank" rel="noopener noreferrer">
              Web desarrollada por: Samuel González
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export { Footer };
