import './Services.css'
import { Button } from '../../shared/components/Button'

function Services() {
    return (
        <section className="services-container">
            <div className="services-grid">
                {/* IA Central Card */}
                <div className="service-card">
                    <div className="service-icon">
                        <img src={require('../../assets/images/tech.svg')} alt="IA" />
                    </div>
                    <h3>IA Central</h3>
                    <p>Desarrollamos un núcleo cognitivo empresarial personalizado. Definimos comportamientos específicos e integramos conocimientos de su negocio, proyecto y/u organización.</p>
                    <Button text="Más detalles" />
                </div>

                {/* Productos Satélite Card */}
                <div className="service-card">
                    <div className="service-icon">
                        <img src={require('../../assets/images/robot.svg')} alt="Productos" />
                    </div>
                    <h3>Productos Satélite</h3>
                    <p>Identificamos soluciones posibles y factibles a problemas específicos que permitan liberar recursos humanos para abordar problemas cognitivos de mayor envergadura.</p>
                    <Button text="Explorar" />
                </div>

                {/* Outsourcing I+D Card */}
                <div className="service-card">
                    <div className="service-icon">
                        <img src={require('../../assets/images/rocket.json')} alt="Outsourcing" />
                    </div>
                    <h3>Outsourcing I+D</h3>
                    <p>Integración de un equipo de I+D en IA para tu organización. Buscamos socios estratégicos que compartan nuestra visión de futuro.</p>
                    <Button text="Contactar" />
                </div>
            </div>
        </section>
    )
}

export { Services }
