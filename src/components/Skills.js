import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 92 },
        { name: "TypeScript", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "PHP", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 82 }
      ]
    },
    {
      title: "Especialidades",
      skills: [
        { name: "Dashboards", level: 90 },
        { name: "CRM Systems", level: 85 },
        { name: "API REST", level: 88 },
        { name: "PWA", level: 80 }
      ]
    }
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Minhas Habilidades</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
