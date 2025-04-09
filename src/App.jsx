import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
