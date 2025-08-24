import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Digi.ag - Plataforma de Incentivos",
      description: "Desenvolvimento da plataforma principal da Digi.ag, especializada em campanhas de incentivo, relacionamento e promo. Sistema completo com dashboards em tempo real, gestão de campanhas e análise de dados comportamentais.",
      image: "🚀",
      technologies: ["Wordpress", "PHP", "HTML", "CSS", "JavaScript"],
      link: "https://www.digi.ag/",
      github: "#"
    },
    {
      id: 2,
      title: "Samsung Odyssey - Landing Page",
      description: "Landing page responsiva para o notebook Samsung Odyssey, destacando recursos de gaming como sistema de resfriamento Jet Blade, processadores Intel e placa gráfica NVIDIA. Design otimizado para conversão.",
      image: "🎮",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive", "Performance"],
      link: "https://samsung.digihosting.com.br//45/",
      github: "#"
    },
    {
      id: 3,
      title: "Pathus Lab - Site Institucional",
      description: "Site institucional completo para laboratório de análises clínicas, desenvolvido com WordPress. Inclui sistema de agendamento online, gestão de convênios, resultados online e painel administrativo personalizado.",
      image: "🏥",
      technologies: ["WordPress", "PHP", "MySQL", "CSS3", "JavaScript"],
      link: "https://pathus.com.br/",
      github: "#"
    },
    {
      id: 4,
      title: "Sistema de Gestão de Campanhas",
      description: "Plataforma interna para criação e administração de campanhas de incentivo, com integração de APIs, sistema de premiações e relatórios analíticos avançados.",
      image: "📊",
      technologies: ["Wordpress", "PHP", "HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Ver Demo
                  </a>
                  <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
