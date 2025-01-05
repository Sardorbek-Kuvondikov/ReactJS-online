import React, { useState, createContext, useContext } from "react";

export const StudentContext = createContext();
export const useStudentContext = () => useContext(StudentContext);

const Students = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "Sardor" },
    { id: 2, name: "Messi" },
    { id: 3, name: "Ronaldo" },
    { id: 4, name: "Mbappe" },
    { id: 5, name: "Haland" },
  ]);

  return (
    <StudentContext.Provider value={[students, setStudents]}>
      {children}
    </StudentContext.Provider>
  );
};

export default Students;
