import React, { useState, useEffect } from 'react';
import './Menu.css';

function Menu() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (e, targetId) => {
    e.preventDefault();
    // Cierra el menú en vista móvil al hacer clic
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a 
          href="#start" 
          className="menu-init" 
          onClick={(e) => handleMenuClick(e, 'start')}
        >
          <span className="key-menu">{"{"}</span><span className="menu-icon">S</span><span className="key-menu">{"}"}</span>
        </a>
      </div>

      {/* Botón hamburguesa para dispositivos móviles */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <a 
          href="#about" 
          className="menu-option" 
          onClick={(e) => handleMenuClick(e, 'about')}
        >
          Sobre mí
        </a>
        <a 
          href="#skills" 
          className="menu-option" 
          onClick={(e) => handleMenuClick(e, 'skills')}
        >
          Habilidades
        </a>
        <a 
          href="#projects" 
          className="menu-option" 
          onClick={(e) => handleMenuClick(e, 'projects')}
        >
          Proyectos
        </a>
        <a 
          href="#contact" 
          className="menu-option" 
          onClick={(e) => handleMenuClick(e, 'contact')}
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}

export { Menu };