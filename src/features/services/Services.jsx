import React from 'react';
import './Services.css';
import { Button } from '../../shared/components/Button';

function Services() {
    return (
        <section className="services-container">
            <h2 className="services-title">Nuestros Servicios</h2>
            <div className="services-grid">
                {/* Tarjeta de IA Central */}
                <div className="service-card">
                    <h3>IA Central</h3>
                    <p>
                        Desarrollamos un núcleo cognitivo empresarial personalizado. Definimos comportamientos específicos e integramos conocimientos de su negocio, proyecto y/u organización.
                    </p>
                    <button className='services-button'>Más detalles</button>
                </div>

                {/* Tarjeta de Productos Satélite */}
                <div className="service-card">
                    <h3>Productos Satélite</h3>
                    <p>
                        Identificamos soluciones posibles y factibles a problemas específicos que permitan liberar recursos humanos para abordar problemas cognitivos de mayor envergadura.
                    </p>
                    <button className='services-button'>Explorar</button>
                </div>

                {/* Tarjeta de Outsourcing I+D */}
                <div className="service-card">
                    <h3>Outsourcing I+D</h3>
                    <p>
                        Integración de un equipo de I+D en IA para tu organización. Buscamos socios estratégicos que compartan nuestra visión de futuro.
                    </p>
                    <button className='services-button'>Contactar</button>
                </div>
            </div>
        </section>
    );
}

export { Services };
