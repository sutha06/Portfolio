// src/pages/Contact.jsx
import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "./../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <h2 className="contact-header">Get in Touch</h2>
      <h1 className="contact-title">CONTACT</h1>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>sivasu@sheridancollege.ca</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Toronto, Canada</span>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="social-icons">
        <a
          href="https://github.com/sutha06"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-wrapper"
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/suthasiv/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-wrapper"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a
          href="mailto:sivasu@sheridancollege.ca"
          className="social-icon-wrapper"
        >
          <FaEnvelope className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
