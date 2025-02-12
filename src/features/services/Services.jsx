import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [activeService, setActiveService] = useState(null);

  const serviceDetails = {
    iaCentral: {
      title: "IA Central",
      content:
        "A la IA Central la llamamos el núcleo cognitivo de la organización. Su función consiste en apoyar cualquier tipo de procesamiento de datos que requiera la empresa. Reconocemos 2 formas de operar: 1) Procesamiento de datos rápido para tareas que requieren menos capacidades cognitivas, como generar un resumen, corregir la redacción de un correo electrónico, ayudar en una lluvia de ideas, analizar datos, etc. 2) Procesamiento de datos lento para tareas que requieren más capacidades cognitivas, como el desarrollo de una propuesta comercial, la generación de contenido de alto valor, la creación de un plan estratégico, etc. La implementación de este tipo de IA para empresas pequeñas se realiza en 3 fases, en un periodo de 3 meses, con un costo de 6.000 USD."
    },
    productosSatelite: {
      title: "Productos Satélite",
      content:
        "A diferencia de la IA Central, los productos satélite son desarrollados para resolver problemas específicos y concretos. Por ejemplo, un producto satélite podría ser capaz de transcribir una reunión y generar un resumen de la misma, o bien, analizar un conjunto de datos y generar un informe con los resultados. El costo de este servicio varía según la complejidad de los productos satélite que se deseen desarrollar. Por ejemplo, el sistema que genera resúmenes de reuniones a partir de un audio cuesta aproximadamente 2.000 USD."
    },
    outsourcing: {
      title: "Outsourcing I+D",
      content:
        "Observamos que muchas empresas enfrentan dificultades para integrar de forma interna la tecnología emergente, esto porque la tasa de desarrollo de esta supera con creces la tasa de asimilación. Por ello, se hace necesario contar con un equipo externo que pueda asumir este rol. Nuestro outsourcing I+D se centra en 3 pilares fundamentales para lograr este objetivo: 1) Alianzas estratégicas que nos permiten tener un rol activo en la dirección de proyectos y en la gestión de riesgos. 2) Nuestro modelo de trabajo nos permite tener una alta tasa de asimilación de conocimiento y desarrollo de productos satélite. 3) Nuestro costo fijo mensual por unidad de tiempo trabajada nos permite tener un modelo de trabajo predecible y, por ende, facilita la planificación de proyectos y recursos."
    }
  };

  return (
    <>
      <section className="services-container">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {/* Tarjeta de IA Central */}
          <div className="service-card">
            <h3>IA Central</h3>
            <p>
              Desarrollamos un núcleo cognitivo empresarial personalizado. Definimos comportamientos
              específicos e integramos conocimientos de su negocio, proyecto y/u organización.
            </p>
            <button 
              className="services-button" 
              onClick={() => setActiveService('iaCentral')}
            >
              M&aacute;s detalles
            </button>
          </div>

          {/* Tarjeta de Productos Satélite */}
          <div className="service-card">
            <h3>Productos Satélite</h3>
            <p>
              Identificamos soluciones posibles y factibles a problemas específicos que permitan liberar
              recursos humanos para abordar problemas cognitivos de mayor envergadura.
            </p>
            <button 
              className="services-button" 
              onClick={() => setActiveService('productosSatelite')}
            >
              M&aacute;s detalles
            </button>
          </div>

          {/* Tarjeta de Outsourcing I+D */}
          <div className="service-card">
            <h3>Outsourcing I+D</h3>
            <p>
              Integración de un equipo de I+D en IA para tu organización. Buscamos socios estratégicos que
              compartan nuestra visión de futuro.
            </p>
            <button 
              className="services-button" 
              onClick={() => setActiveService('outsourcing')}
            >
              M&aacute;s detalles
            </button>
          </div>
        </div>
      </section>

      {activeService && (
        <section className="service-detail-section">
          <div className="detail-container">
            <button className="detail-close" onClick={() => setActiveService(null)}>×</button>
            <h3>{serviceDetails[activeService].title}</h3>
            <p>{serviceDetails[activeService].content}</p>
          </div>
        </section>
      )}
    </>
  );
}

export { Services };