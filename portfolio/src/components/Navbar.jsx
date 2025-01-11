import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute top-6 left-6 flex justify-between w-full px-8">
      <div className="text-gray-400 text-lg font-bold">
        <Link to="/" className="hover:text-white transition-colors">
          Sutha.
        </Link>
      </div>
      <div className="flex space-x-8 text-gray-400">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <Link to="/portfolio" className="hover:text-white transition-colors">
          Portfolio
        </Link>
        <Link to="/contact" className="hover:text-white transition-colors">
          Contact
        </Link>
        <Link to="/experience" className="hover:text-white transition-colors">
          Experience
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
