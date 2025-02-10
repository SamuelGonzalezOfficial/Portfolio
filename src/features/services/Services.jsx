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
                                <h3>El guard&iacute;an de tu empresa</h3>
                                <p>A la IA Central la llamamos el núcleo cognitivo de la organización. Su función consiste en apoyar cualquier tipo de procesamiento de datos que requiera la empresa. Reconocemos 2 formas de operar: 1) Procesamiento de datos rápido para tareas que requieren menos capacidades cognitivas, como generar un resumen, corregir la redacción de un correo electrónico, ayudar en una lluvia de ideas, analizar datos, etc. 2) Procesamiento de datos lento para tareas que requieren más capacidades cognitivas, como el desarrollo de una propuesta comercial, la generación de contenido de alto valor, la creación de un plan estratégico, etc. La implementación de este tipo de IA para empresas pequeñas se realiza en 3 fases, en un periodo de 3 meses, con un costo de 6.000 USD.</p>
                                <button onClick={closeModal}>Cerrar</button>
                            </div>
                            <div className="modal-image">
                                <img src="src/assets/images/tech.svg" alt="pop up image" />
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    );
}

export { Services };
