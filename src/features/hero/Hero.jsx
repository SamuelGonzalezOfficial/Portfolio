import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title--small">Transformamos tu Empresa implementando</span><br /><span className="brand-color">Inteligencia Artificial</span>
        </h1>
        <h2 className="hero-subtitle">
          Llevamos tu empresa al siguiente nivel adaptandola al nuevo panorama del siglo XXI
        </h2>
        <button className="hero-button">Descubre Más</button>
      </div>
      <div className="hero-bg">
      </div>
    </div>
  );
}

export { Hero };