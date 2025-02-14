import React from 'react';
import './Hero.css';

// Components
import { Button } from '../../shared/components/Button';

function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector('#projects');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='hero-container' id="start">
      <div className="hero-content">
        <h3 className="hero-super">Desarrollo Web Full-Stack</h3>
        <h1 className="hero-title">
          <span className="key">{"{"}</span> Samuel Gonz&aacute;lez <span className="key">{"}"}</span>
        </h1>
        <h2 className="hero-subtitle">
          Porque el diseño de tu sitio web es una forma de aportar valor a tus clientes, por eso un sitio web no solo debe ser funcional, debe ser hermoso, y eso es lo que ofrecemos.
        </h2>
        {/* Envolvemos el Button en un div que maneja el clic */}
        <div onClick={handleScroll} style={{ display: 'inline-block' }}>
          <Button href="javascript:void(0)">Ver proyectos</Button>
        </div>
      </div>
    </header>
  );
}

export { Hero };