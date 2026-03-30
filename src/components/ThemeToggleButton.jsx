import React from "react";
import { useTheme } from "../context/ThemeContext";
// You can use icons from a library like react-icons (npm i react-icons)
import { IoSunny, IoMoon } from "react-icons/io5";
import styles from "./themeSwitch.module.css";
import Switch from "@mui/material/Switch";
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  console.log("theme", theme);
  console.log("toggleTheme", toggleTheme);
  return (
    <div className={styles.theme}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          role="switch"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className={styles.slider}></span> &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Switch to{" "}
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </label>
    </div>
  );
};

export default ThemeToggleButton;
