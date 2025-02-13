import React from 'react'
import './Contact.css'

function Contact(){
    return (
        <section className="contact-container" id="contact">
            <h2 className="title">
                <span className="key">{"{"} </span>Contactame<span className="key"> {"}"}</span>
            </h2>

            <div className="contact-content">
                <p className="email">
                    gonzalez.samuelalejandro@outlook.com
                </p>
            </div>
        </section>
    )
}

export { Contact }