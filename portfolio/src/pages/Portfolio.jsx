import React from "react";
import "./../styles/Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Piggment",
    description: "The Gradients and colors for the next smart creator.",
    tags: ["React", "Sass & CSS", "JavaScript", "Context"],
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "Usable Query",
    description:
      "Simplifies the use of React Query by offering a streamlined and centralized approach.",
    tags: ["React", "API", "Data Fetching"],
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Scoutbar",
    description:
      "Navigation made easy with a simple tool to jump between apps.",
    tags: ["JavaScript", "Node.js", "Tooling"],
    image: "https://via.placeholder.com/600x400",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-heading">Projects.</h1>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />
            <div className="portfolio-overlay">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="portfolio-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="portfolio-tag">
                    {tag}
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
