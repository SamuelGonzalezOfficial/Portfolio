import './About.css'

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h2 className="about-title">¿Qué hacemos?</h2>
                    <p className="about-description">
                        Los <b>modelos de IA</b> de última generación (OpenAI, Anthropic, Google) 
                        tienen el poder de transformar negocios, pero <b>su verdadero valor surge 
                        cuando entienden el contexto único de tu organización</b>. Sin este contexto, 
                        incluso la IA más avanzada es como un empleado recién llegado: 
                        extremadamente capacitado pero con un impacto limitado.
                    </p>
                    <p className="about-description">
                        En <strong>AInstein</strong>, conectamos el poder de la IA con el conocimiento específico 
                        de tu empresa, creando soluciones personalizadas que se adaptan a tus 
                        procesos y necesidades. Esto es lo que nos diferencia: <b>entendemos que 
                        la verdadera inteligencia artificial debe ser contextual y adaptativa</b>.
                    </p>
                    <button className="about-button">Contactanos</button>
                </div>
                <div className="about-image">
                    <img src="/src/assets/images/robot.svg" alt="Inteligencia Artificial" />
                </div>
            </div>
        </div>
    )
}

export { About }
