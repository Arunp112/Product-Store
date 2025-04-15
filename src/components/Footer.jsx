import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => (
  <footer className="p-4 bg-white dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400 mt-4 border-t dark:border-gray-700">
    <div className="flex flex-col  justify-center items-center gap-2">
      <p>© {new Date().getFullYear()} Store App. Built with ❤️ using React.</p>
      <div className="flex  gap-4">
        <a
          href="https://github.com/arunp112"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          {/* <i className="fab fa-github"></i> GitHub */}
          <FaGithub className="text-xl"/>
        </a>
        <a
          href="https://linkedin.com/in/arunpal9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          {/* <i className="fab fa-linkedin"></i> LinkedIn */}
          <FaLinkedin className="text-xl"/>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
