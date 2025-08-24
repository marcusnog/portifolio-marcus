import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfólio</h3>
            <p>
              Desenvolvedor full-stack especializado em plataformas empresariais, 
              com foco em soluções de incentivo, e-commerce, sites institucionais e sistemas de saúde.
            </p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/marcus-nogueira-544b0117b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/marcusnog" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Portfólio</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Marcus Nogueira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
