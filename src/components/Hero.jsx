import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-8">The Generics</h1>
        <NavLink
          to="/store"
          className="inline-block bg-blue-500 text-white py-3 px-8 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-200"
        >
          Get our Latest Album ►
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
