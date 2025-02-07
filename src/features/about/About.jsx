import './About.css'

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h2 className="about-title">Sobre Nosotros</h2>
                    <p className="about-description">
                        En el amanecer de esta nueva era, el futuro se teje con hilos de silicio, 
                        como parte de la evolución natural de la vida. Creemos en acompañarnos 
                        mutuamente en este proceso de transformación, apostando por un futuro 
                        en el que juntos sigamos siendo protagonistas.
                    </p>
                    <p className="about-description">
                        Los modelos de IA de última generación (OpenAI, Anthropic, Google) 
                        tienen el poder de transformar negocios, pero su verdadero valor surge 
                        cuando entienden el contexto único de tu organización. Sin este contexto, 
                        incluso la IA más avanzada es como un empleado recién llegado: 
                        extremadamente capacitado pero con un impacto limitado.
                    </p>
                    <p className="about-description">
                        En AInstein, conectamos el poder de la IA con el conocimiento específico 
                        de tu empresa, creando soluciones personalizadas que se adaptan a tus 
                        procesos y necesidades. Esto es lo que nos diferencia: entendemos que 
                        la verdadera inteligencia artificial debe ser contextual y adaptativa.
                    </p>
                    <button className="about-button">Descubre el Futuro de la IA</button>
                </div>
                <div className="about-image">
                    <img src="/src/assets/images/robot.svg" alt="Inteligencia Artificial" />
                </div>
            </div>
        </div>
    )
}

export { About }
