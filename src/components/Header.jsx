import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const { getCartItemCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const handleStoreClick = (e) => {
    if (!currentUser) {
      e.preventDefault();
      navigate("/login");
    }
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-3xl font-bold">
            The Generics
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              HOME
            </Link>
            <Link
              to="/store"
              className="hover:text-gray-300 transition-colors"
              onClick={handleStoreClick}
            >
              STORE
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300 transition-colors"
            >
              CONTACT
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
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
              <button
                onClick={handleLogout}
                className="hover:text-gray-300 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-gray-300 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}

export default Header;
