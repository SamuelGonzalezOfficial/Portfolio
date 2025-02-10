import './Contact.css';
import { useState } from 'react';

function Contact() {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  });

  // Estados para manejar carga, error y éxito
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Manejo de cambios en los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsLoading(true);

    try {
      // Enviar petición POST a la API
      const response = await fetch('http://localhost:3800/mail/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setSuccess(true);
      // Reiniciar formulario tras envío exitoso
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contáctanos</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Ingresa tu apellido"
            value={formData.apellido}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            value={formData.mensaje}
            onChange={handleInputChange}
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="contact-button" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {error && <p className="error-message">Error: {error}</p>}
        {success && <p className="success-message">¡Mensaje enviado con éxito!</p>}
      </form>
    </div>
  );
}

export { Contact };
