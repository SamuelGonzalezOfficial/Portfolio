import React from 'react';
import './About.css';

function About(){
    return (
        <section className="about-container">
            <div className="about-content">
                <div className="about-text">
                    "Lorem ipsum dolor sit amet, consetetur sadipscing
                </div>
                <div className="about-image">
                    <img src="https://picsum.photos/500" alt="About" />
                </div>
            </div>
        </section>
    )
}

export { About }
