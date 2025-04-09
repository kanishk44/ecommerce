import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
