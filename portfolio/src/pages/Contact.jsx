import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./../styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-header">Get in Touch</h2>
      <h1 className="contact-title">CONTACT</h1>

      <div className="contact-container">
        <div className="contact-info shadow-box">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>suthakaran.siva0601@gmail.com</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>Toronto, Canada</p>
          </div>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a href="mailto:suthakaran.siva0601@gmail.com">
          <FaEnvelope className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
