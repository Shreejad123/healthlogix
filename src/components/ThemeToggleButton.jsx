import React from "react";
import { useTheme } from "../context/ThemeContext";
// You can use icons from a library like react-icons (npm i react-icons)
import { IoSunny, IoMoon } from "react-icons/io5";
import styles from "./themeSwitch.module.css";
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  console.log("theme", theme);
  console.log("toggleTheme", toggleTheme);
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={toggleTheme} />
      {theme === "dark" ? <IoSunny /> : <IoMoon />}
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      <span className={styles.slider}></span>
    </label>
  );
};

export default ThemeToggleButton;
