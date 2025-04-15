// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center text-sm py-6 mt-12 border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} FakeStore App. Built with ❤️ using React & Tailwind CSS.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-blue-500">
          <a href="https://github.com/arunp112" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/arunpal9" target="_blank" rel="noopener noreferrer">Linkedin</a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
