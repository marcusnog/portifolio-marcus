
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Olá, eu sou <span className="highlight">Marcus Nogueira</span>
            </h1>
            <p className="hero-subtitle">
              Desenvolvedor Full Stack Especializado em Plataformas
            </p>
            <p className="hero-description">
              Transformo ideias em soluções digitais extraordinárias. 
              Especializado em plataformas de incentivo, e-commerce, sites institucionais e sistemas de saúde.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                Ver Projetos
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Entre em Contato
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <img 
                src="/marcus-photo.jpg" 
                alt="Marcus Nogueira - Desenvolvedor Full Stack"
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;