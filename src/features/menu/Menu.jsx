import { useState, useEffect } from 'react';
import './Menu.css';
import logo from '../../assets/images/logo.png'; // Ajusta la ruta según tu estructura

function Menu() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Limpieza del evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`menu ${scrolled ? 'scrolled' : ''}`}>
            <div className="menu-left">
                <img src={logo} alt="Logo de la empresa" className="logo" />
                <span className="company-name">Ainstein</span>
            </div>
            <div className="menu-right">
                <a href="#testimonios">Testimonios</a>
                <a href="#caracteristicas">Características</a>
                <a href="#precios">Precios</a>
                <a href="#contacto">Contacto</a>
            </div>
        </nav>
    );
}

export { Menu };
