import React from 'react';
import '../../assets/styles/global.css'
import './Testimonials.css'

function Testimonials() {
    return (
        <div className="testimonials">
            <h2 className="testimonials-title">
                ¿Qué dicen de nosotros?
            </h2>
            <div className='testimonials-container'>
                <div className="testimonial-card">
                    <p className="testimonials-name">
                        Carlos Garrido
                    </p>
                    <p className="testimonals-job">CEO • SMI</p>
                    <p className="testimonials-text">
                        AInstein me ha abierto los ojos. En pocos meses estamos incorporando super poderes que creíamos imposibles.
                    </p>
                </div>
                <div className="testimonial-card">
                    <p className="testimonials-name">
                        Carlos Rodr&iacute;guez
                    </p>
                    <p className="testimonals-job">CTO • DataDrive</p>
                    <p className="testimonials-text">
                        Gracias a AInstein, implementamos soluciones de IA que redujeron nuestros costos operativos en un 25%.
                    </p>
                </div>
            </div>
        </div>
    )
}

export { Testimonials }
