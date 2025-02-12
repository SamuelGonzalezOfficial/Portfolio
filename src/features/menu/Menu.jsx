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

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`menu ${scrolled ? 'scrolled' : ''}`}>
            <div className="menu-left">
                <img src={logo} alt="Logo de la empresa" className="logo" />
                <span className="company-name">Ainstein</span>
            </div>
            <div className="menu-right">
                <a href="#testimonios" onClick={(e) => handleSmoothScroll(e, '#testimonios')}>Testimonios</a>
                <a href="#nosotros" onClick={(e) => handleSmoothScroll(e, '#nosotros')}>Nosotros</a>
                <a href="#servicios" onClick={(e) => handleSmoothScroll(e, '#servicios')}>Servicios</a>
                <a href="#equipo" onClick={(e) => handleSmoothScroll(e, '#equipo')}>Equipo</a>
                <a href="#contacto" onClick={(e) => handleSmoothScroll(e, '#contacto')}>Contacto</a>
            </div>
        </nav>
    );
}

export { Menu };
