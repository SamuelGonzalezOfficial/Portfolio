import React from 'react';
import '../../assets/styles/global.css'
import './Testimonials.css'

function Testimonials() {
    return (
        <div className="testimonials">
            <div className='testimonials-container'>
                <div className="testimonial-card card-1">
                    <p className="testimonials-name">John Doe</p>
                    <p className="testimonals-job">CEO de Sunset technologies</p>
                    <p className="testimonials-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam omnis assumenda dolorum sequi laudantium ducimus. Velit unde praesentium reiciendis tempore veritatis aliquid, provident nostrum, iste, ex vero distinctio assumenda!
                    </p>
                </div>
                <div className="testimonial-card card-2">
                    <p className="testimonials-name">John Doe</p>
                    <p className="testimonals-job">CEO de Sunset technologies</p>
                    <p className="testimonials-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam omnis assumenda dolorum sequi laudantium ducimus. Velit unde praesentium reiciendis tempore veritatis aliquid, provident nostrum, iste, ex vero distinctio assumenda!
                    </p>
                </div>
            </div>
        </div>
    )
}

export { Testimonials }