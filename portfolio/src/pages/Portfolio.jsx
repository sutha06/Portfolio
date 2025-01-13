import React from "react";
import projects from "./../data/projects"; // Import the projects data
import "./../styles/Portfolio.css"; // Import the CSS file

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Projects.</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
