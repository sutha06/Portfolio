import React from "react";
import { motion } from "framer-motion";
import "./../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="main-heading">
          Designing with <span className="highlight">Purpose,</span>
          <br />
          Building with <span className="highlight">Care.</span>
        </h1>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="home-button"
      >
        <button className="cta-button">
          Hi, I'm Sutha <span>👋</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
