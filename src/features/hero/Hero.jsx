import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="title-wrapper">
          <h1 className="hero-title">
            <span className="hero-title--small">Transformamos tu Empresa implementando</span><br />
            <span className="brand-color">Inteligencia Artificial</span>
          </h1>
          <div className="gradient-bar"></div>
        </div>
        <h2 className="hero-subtitle">
          Llevamos tu empresa al siguiente nivel adaptándola al nuevo panorama del siglo XXI
        </h2>
        <button className="hero-button">
          <span>Descubre Más</span>
          <svg className="rocket-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </button>
      </div>
      <div className="hero-bg">
      </div>
    </div>
  );
}

export { Hero };
