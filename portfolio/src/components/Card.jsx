import React from "react";
import "./../styles/Card.css"; // Import the CSS file

const Card = ({ title, description, tools, image }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-tools">
          {tools.map((tool, index) => (
            <span key={index} className="tool-badge">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
