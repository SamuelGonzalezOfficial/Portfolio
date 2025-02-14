import { useState, useEffect, useRef } from 'react';
import './Projects.css';

import image from '../../assets/images/wire.png'
import ainstein from '../../assets/images/ainstein.jpeg'
import quicknotes from '../../assets/images/quicknotes.jpeg'
import { Button } from '../../shared/components/Button'

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesContainerRef = useRef(null);
  const totalSlides = 2; // Número total de slides

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (slidesContainerRef.current) {
      slidesContainerRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="projects-container" id="projects">
      <h2 className="title">
        <span className="key">{'{'}</span> Proyectos <span className="key">{'}'}</span>
      </h2>
      <div className="slider">
        <div className="slides" ref={slidesContainerRef}>
        <div className="slide">
            <div className="project-image">
              <img src={ainstein} alt="Proyecto 2" />
            </div>
            <div className="project-description">
              <h3 className="project-title">Ainstein</h3>
              <p>
                Tipo: <span className="tag">Landing Page</span>
              </p>
              <p>
                Lenguajes: <span className="tag tag-html">HTML5</span><span className="tag tag-css">CSS3</span><span className="tag tag-js">JavaScript</span><span className="tag tag-react">React</span><span className="tag tag-node">Node</span><span className="tag tag-express">Express</span>
              </p>
              <p>
                Landing Page para Start-Up de Inteligencia Artificial que ofrece servicio a negocios, empresas e instituciones.
              </p>
              <a href="#" className="visit-link">Visitar</a>
            </div>
          </div>
          <div className="slide">
            <div className="project-image">
              <img src={quicknotes} alt="Proyecto 2" />
            </div>
            <div className="project-description">
              <h3 className="project-title">QuickNotes</h3>
              <p>
                Tipo: <span className="tag">Plataforma</span>
              </p>
              <p>
                Lenguajes: <span className="tag tag-html">HTML5</span><span className="tag tag-css">CSS3</span><span className="tag tag-js">JavaScript</span><span className="tag tag-node">Node</span><span className="tag tag-express">Express</span><span className="tag tag-mongo">MongoDB</span>
              </p>
              <p>
                Plataforma para crear y gestionar notas r&aacute;pidas tipo POST-IT.
              </p>
              <a href="#" className="visit-link">Visitar</a>
            </div>
          </div>
        </div>
        <button className="prev" onClick={goToPrevious}>‹</button>
        <button className="next" onClick={goToNext}>›</button>
      </div>
    </section>
  );
}

export { Projects };