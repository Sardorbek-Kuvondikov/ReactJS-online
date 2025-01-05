// App.js
import React from "react";
// ThemeContext'dan ThemeProvider va useTheme'ni import qilamiz
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css"; // CSS faylini import qilish

// Tema o'zgartirish tugmasi uchun komponent
const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // useTheme orqali theme holatini olish va toggle qilish

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

// Asosiy App komponenti
const App = () => {
  return (
    // ThemeProvider atrofida boshqa komponentlarni joylashtiramiz
    <ThemeProvider>
      <div>
        <h1>React Dark/Light Mode with Context API</h1>
        <ThemeToggleButton /> {/* Tema o'zgartirish tugmasi */}
      </div>
    </ThemeProvider>
  );
};

export default App;
