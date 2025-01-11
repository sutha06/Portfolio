// Home.jsx
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-32 sm:mt-48"
      >
        <h1 className="text-4xl sm:text-6xl font-light text-gray-400 leading-tight">
          Designing with <span className="text-white font-bold">Purpose,</span>
          <br />
          Building with <span className="text-white font-bold">Care.</span>
        </h1>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-10 sm:mt-20"
      >
        <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium flex items-center gap-2 hover:bg-gray-200">
          Hi, I'm Sutha <span>👋</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
