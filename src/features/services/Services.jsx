import { useState } from 'react';
import './Services.css';
import { Button } from '../../shared/components/Button';

function Services() {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }
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
                    <button className='services-button' onClick={openModal}>Más detalles</button>
                </div>

                {/* Tarjeta de Productos Satélite */}
                <div className="service-card">
                    <h3>Productos Satélite</h3>
                    <p>
                        Identificamos soluciones posibles y factibles a problemas específicos que permitan liberar recursos humanos para abordar problemas cognitivos de mayor envergadura.
                    </p>
                    <button className='services-button' onClick={openModal}>Explorar</button>
                </div>

                {/* Tarjeta de Outsourcing I+D */}
                <div className="service-card">
                    <h3>Outsourcing I+D</h3>
                    <p>
                        Integración de un equipo de I+D en IA para tu organización. Buscamos socios estratégicos que compartan nuestra visión de futuro.
                    </p>
                    <button className='services-button' onClick={openModal}>Contactar</button>
                </div>
            </div>
            {
                isOpen && (
                    <>
                        <div className="modal-overlay" onClick={closeModal}></div>

                        <div className="modal">
                            <div className="modal-content">
                                <h2>IA Central</h2>
                                <h3>El guardíán de tu empresa</h3>
                                <p>
                                    <strong>El núcleo cognitivo de tu organización</strong>
                                    <br><br>
                                    La IA Central actúa como el cerebro central de tu empresa, procesando datos de manera eficiente en dos modalidades principales:
                                </p>
                                <p>
                                    <strong>1. Procesamiento Rápido:</strong> Para tareas que requieren menos complejidad cognitiva, como:
                                </p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>Generación de resúmenes</li>
                                    <li>Corrección de textos</li>
                                    <li>Asistencia en lluvias de ideas</li>
                                    <li>Análisis básico de datos</li>
                                </ul>
                                <p>
                                    <strong>2. Procesamiento Profundo:</strong> Para tareas que requieren mayor complejidad, como:
                                </p>
                                <ul style={{marginBottom: '30px'}}>
                                    <li>Desarrollo de propuestas comerciales</li>
                                    <li>Generación de contenido premium</li>
                                    <li>Creación de planes estratégicos</li>
                                </ul>
                                <p>
                                    <strong>Implementación en 3 fases:</strong><br>
                                    - Fase 1: Análisis y planificación<br>
                                    - Fase 2: Desarrollo e integración<br>
                                    - Fase 3: Optimización y entrega<br>
                                    <br>
                                    Duración total: 3 meses<br>
                                    Inversión: $6,000 USD
                                </p>
                                <button onClick={closeModal}>Cerrar</button>
                            </div>
                            <div className="modal-image">
                                <img src="/src/assets/images/tech.svg" alt="IA Central" />
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    );
}

export { Services };
