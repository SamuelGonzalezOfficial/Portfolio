import React from 'react';
import './About.css';

import coding from '../../assets/images/coding.svg';

function About(){
    return (
        <section className="about-container" id="about">
            <div className="about-content">
                <div className="about-text">
                    <h2 className="about-title title"><span className="key">{"{"}</span> Sobre m&iacute; <span className="key">{"}"}</span></h2>
                    <p className="about-p">
                        Di mis primeros pasos en el mundo de la programaci&oacute;n a los 12 años, escribiendo mi primera l&iacute;nea 
                        de c&oacute;digo. Y ahora, 6 años despu&eacute;s, 
                        soy un programador 100% autodidacta especializado en desarrollo web, ofreciendo soluciones web a negocios y 
                        particulares como freelancer y actualmente trabajando como desarrollador
                        Front-End en Ainstein {"("}<a href="https://ainstein.cl" className="about-link">https://ainstein.cl</a>{")"}, una Start-Up chilena 
                        de Inteligencia Artificial que ofrece soluciones a empresas e instituciones.
                    </p>
                </div>
                <div className="about-image">
                    <img src={coding} alt="About" />
                </div>
            </div>
        </section>
    )
}

export { About }
