import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const Theme = () => useContext(ThemeContext);

const Thememode = ({ children }) => {
  const [mode, setMode] = useState(false);
  return (
    <ThemeContext.Provider value={[mode, setMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Thememode;
