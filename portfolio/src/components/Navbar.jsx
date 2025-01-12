import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" className="hover-link">
          Sutha.
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Full-Screen Overlay Menu */}
      <div className={`navbar-overlay ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li
            style={{
              transform: isMenuOpen ? "translateY(0)" : "translateY(120px)",
              transitionDelay: isMenuOpen ? "0.8s" : "0s",
            }}
          >
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li
            style={{
              transform: isMenuOpen ? "translateY(0)" : "translateY(120px)",
              transitionDelay: isMenuOpen ? "0.9s" : "0s",
            }}
          >
            <Link to="/portfolio" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li
            style={{
              transform: isMenuOpen ? "translateY(0)" : "translateY(120px)",
              transitionDelay: isMenuOpen ? "1s" : "0s",
            }}
          >
            <Link to="/experience" onClick={toggleMenu}>
              Experience
            </Link>
          </li>
          <li
            style={{
              transform: isMenuOpen ? "translateY(0)" : "translateY(120px)",
              transitionDelay: isMenuOpen ? "1.1s" : "0s",
            }}
          >
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
