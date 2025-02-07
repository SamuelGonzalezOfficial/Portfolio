import './About.css'

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h2 className="about-title">Sobre Nosotros</h2>
                    <p className="about-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit illum sunt inventore accusantium, voluptas doloremque recusandae culpa dolorum, adipisci, asperiores laborum neque magnam distinctio dolorem sequi ipsam? Minima incidunt dolore sed ad aliquid saepe dolorem enim quaerat quod aperiam a repudiandae eos, ipsa ea amet illo nulla consequuntur at error.
                    </p>
                    <button className="about-button">Contactanos!</button>
                </div>
                <div className="about-image">
                    <img src="/src/assets/images/artificial-intelligence.svg" alt="Inteligencia Artificial" />
                </div>
            </div>
        </div>
    )
}

export { About }
