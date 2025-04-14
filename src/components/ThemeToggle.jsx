const ThemeToggle = ({ darkMode, setDarkMode }) => {
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full shadow bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>
    );
  };
  
  export default ThemeToggle;
  