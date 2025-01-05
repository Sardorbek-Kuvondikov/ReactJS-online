// ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

// Context yaratamiz
const ThemeContext = createContext();

// useTheme - bu custom hook, u Componentlarga Contextdan qiymatni olish imkonini beradi
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect - komponent birinchi marta render bo'lganda tema holatini localStorage'dan olish
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "true") {
      setIsDarkMode(true);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setIsDarkMode(false);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, []);

  // Tema holatini teskari qilish va localStorage'ga saqlash
  const toggleTheme = () => {
    setIsDarkMode((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("theme", newTheme.toString());
      document.body.style.backgroundColor = newTheme ? "black" : "white";
      document.body.style.color = newTheme ? "white" : "black";
      return newTheme;
    });
  };

  // ThemeContext.Provider orqali theme holatini va toggleTheme funksiyasini bolalarga taqdim etamiz
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
