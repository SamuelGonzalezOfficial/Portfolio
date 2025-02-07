import './About.css'
import { Button } from '../../shared/components/Button'

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h2 className="about-title">Sobre Nosotros</h2>
                    <p className="about-description">
                        Somos una empresa innovadora que utiliza la inteligencia artificial para transformar negocios y potenciar su crecimiento en el siglo XXI.
                    </p>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Años de Experiencia</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Proyectos Realizados</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Países en los que Operamos</span>
                        </div>
                    </div>
                    <Button className="cta-button">Conoce Más Sobre Nuestros Servicios</Button>
                </div>
                <div className="about-image">
                    <img src="/src/assets/images/AI.gif" alt="Inteligencia Artificial" />
                </div>
            </div>
        </div>
    )
}

export { About }
