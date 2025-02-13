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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro enim expedita harum, molestias impedit nihil minus aliquam, quisquam mollitia aut consequuntur adipisci eos consectetur perspiciatis corporis optio, voluptatibus voluptatem at. Atque quasi maxime, magnam alias aperiam eos accusantium corrupti minus soluta odit culpa doloribus? Tempore quisquam dolores labore velit cumque.
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
