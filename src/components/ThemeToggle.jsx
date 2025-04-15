import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { LightMode, DarkMode } from "@mui/icons-material";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Tooltip title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
      <IconButton onClick={toggleTheme} color="inherit">
        {theme === "dark" ? <LightMode sx={{ color: "#facc15" }} /> : <DarkMode sx={{ color: "#1e40af" }} />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
