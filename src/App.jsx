import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";
import ProductDetails from "./components/ProductDetail";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
        <div><Footer/></div>
    </Router>
  );
}

export default App;
