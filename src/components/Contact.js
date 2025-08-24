import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Vamos Conversar!</h3>
            <p>
              Especializado em desenvolvimento de plataformas empresariais, estou sempre 
              aberto a novos desafios e projetos inovadores. Se você busca soluções digitais 
              de alta qualidade, vamos conversar!
            </p>
                          <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:marcusnogueira2105@gmail.com" className="contact-link">
                      marcusnogueira2105@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/marcus-nogueira-544b0117b/" target="_blank" rel="noopener noreferrer" className="contact-link">
                      Marcus Nogueira
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🐙</span>
                  <div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/marcusnog" target="_blank" rel="noopener noreferrer" className="contact-link">
                      marcusnog
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Localização</h4>
                    <p>Fortaleza, Ceará</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
