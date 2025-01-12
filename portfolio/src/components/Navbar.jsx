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

      {/* Hamburger Menu for Mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Links */}
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="hover-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/portfolio" className="hover-link" onClick={toggleMenu}>
          Portfolio
        </Link>
        <Link to="/experience" className="hover-link" onClick={toggleMenu}>
          Experience
        </Link>
        <Link to="/contact" className="hover-link" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
