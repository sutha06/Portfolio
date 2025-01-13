import React from "react";
import "./../styles/Badge.css"; // Import the CSS file

const Badge = ({ children }) => {
  return <div className="badge">{children}</div>;
};

export default Badge;
