import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <span className="footer-name">
                © 2025 Samuel Gonz&aacute;lez. Todos los derechos reservados | 
            </span>
            <span className="footer-url">
                <a href="#" className="footer-link">Web desarrollada por Samuel González</a>
            </span>
        </footer>
    )
}

export { Footer }