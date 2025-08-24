import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Sou um desenvolvedor full-stack especializado em criar soluções digitais 
              inovadoras para empresas como Digi.ag, Samsung e Pathus Lab. Com foco 
              em plataformas de incentivo, e-commerce e sistemas de saúde.
            </p>
            <p>
              Desenvolvo aplicações web responsivas e performáticas usando React, Node.js, 
              WordPress e outras tecnologias modernas. Especializado em dashboards em tempo real, 
              sistemas de CRM, sites institucionais e plataformas de gestão de campanhas.
            </p>
                          <div className="about-stats">
                <div className="stat">
                  <h3>5+</h3>
                  <p>Anos de Experiência</p>
                </div>
                <div className="stat">
                  <h3>25+</h3>
                  <p>Projetos Concluídos</p>
                </div>
                <div className="stat">
                  <h3>8+</h3>
                  <p>Empresas Atendidas</p>
                </div>
              </div>
          </div>
          <div className="about-image">
            <div className="about-avatar">
              <img 
                src="/marcus-photo.jpg" 
                alt="Marcus Nogueira - Desenvolvedor Full Stack"
                className="about-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
