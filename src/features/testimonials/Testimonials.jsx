import React from 'react';
import '../../assets/styles/global.css'
import './Testimonials.css'

function Testimonials() {
    return (
        <div className="testimonials">
            <div className='testimonials-container'>
                <div className="testimonial-card">
                    <p className="testimonials-name">
                        <img src="/src/assets/images/robot.svg" alt="icon" width="40" />
                        John Doe
                    </p>
                    <p className="testimonals-job">CEO • Sunset Technologies</p>
                    <p className="testimonials-text">
                        La implementación de IA revolucionó nuestros procesos operativos, aumentando la eficiencia en un 200%. La solución propuesta superó todas nuestras expectativas.
                    </p>
                </div>
                <div className="testimonial-card">
                    <p className="testimonials-name">
                        <img src="/src/assets/images/tech.svg" alt="icon" width="40" />
                        Sarah Smith
                    </p>
                    <p className="testimonals-job">CTO • Future Innovations</p>
                    <p className="testimonials-text">
                        El enfoque innovador y la atención personalizada nos permitieron escalar nuestra infraestructura de inteligencia artificial de manera exponencial.
                    </p>
                </div>
            </div>
        </div>
    )
}

export { Testimonials }
