import './Contact.css';
import { useState } from 'react'; // Import useState hook for form state management

function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  });

  // State to manage loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setError(null);
    setSuccess(false);
    setIsLoading(true);

    try {
      // Send POST request to API
      const response = await fetch('http://localhost:3800/mail/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is ok
      if (!response.ok) {
        throw new Error('Error sending message');
      }

      // Handle successful response
      setSuccess(true);
      // Reset form after successful submission
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: ''
      });
    } catch (err) {
      // Handle errors
      setError(err.message);
    } finally {
      // Reset loading state
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
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            value={formData.mensaje}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="contact-button"
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {/* Show success or error messages */}
        {error && (
          <p className="error-message">Error: {error}</p>
        )}
        {success && (
          <p className="success-message">¡Mensaje enviado con éxito!</p>
        )}
      </form>
    </div>
  );
}

export { Contact };
