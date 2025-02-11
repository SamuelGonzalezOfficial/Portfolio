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
        <p>© {new Date().getFullYear()} Ainstein. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export { Footer };
