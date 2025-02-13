import React from 'react'
import './Hero.css'

//Components
import { Button } from '../../shared/components/Button'

function Hero(){
    return (
        <header className='hero-container'>
            <div className="hero-content">
                <h3 className="hero-super">Desarrollo Web Full-Stack</h3>
                <h1 className="hero-title"><span className="key">{"{"}</span> Samuel Gonz&aacute;lez <span className="key">{"}"}</span></h1>
                <h2 className="hero-subtitle">Porque el diseño de tu sitio web es una forma de aportar valor a tus clientes, por eso un sitio web no solo debe ser funcional, debe ser hermoso, y eso es lo que ofrecemos.</h2>
                <Button>Ver proyectos</Button>
            </div>
        </header>
    )
}

export { Hero }