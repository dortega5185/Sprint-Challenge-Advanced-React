import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const DarkMode = (props) => {
  const [darkMode, setDarkMode] = useDarkMode("isDark");
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="centerThis">
      <div onClick={toggleMode}>DarkMode</div>
    </div>
  );
};
export default DarkMode;
