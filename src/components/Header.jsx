import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartItemCount } = useCart();

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <NavLink to="/" className="text-3xl font-bold">
            The Generics
          </NavLink>
          <nav className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/store"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              STORE
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              CONTACT
            </NavLink>
          </nav>
        </div>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 hover:bg-gray-700 rounded-full transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {getCartItemCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getCartItemCount()}
            </span>
          )}
        </button>
      </div>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
