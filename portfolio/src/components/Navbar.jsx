import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link className="nav-link" to="/">
          Sutha
        </Link>
      </div>
      <div className="nav-link">
        <div className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/portfolio">
            Portfolio
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/experience">
            Experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
