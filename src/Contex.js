import React, { useState, createContext } from "react";

export const studentContext = createContext();

export default function Contex({ children }) {
  const [studen, setStudent] = useState([
    { id: 1, name: "Sardorbek", status: "IT" },
    { id: 2, name: "Messi", status: "FCB" },
    { id: 3, name: "Ronaldo", status: "RM" },
    { id: 4, name: "Mbappe", status: "RM" },
    { id: 5, name: "Haland", status: "MC" },
  ]);
  return (
    <studentContext.Provider value={[studen, setStudent]}>
      {children}
    </studentContext.Provider>
  );
}
