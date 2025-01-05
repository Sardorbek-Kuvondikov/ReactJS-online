import { useStudentContext } from "../context/Students";
import { useState } from "react";

const Header = () => {
  const [students, setStudents] = useStudentContext();
  const [initialStudent] = useState(students);

  const onSearch = (evt) => {
    let value = evt.target.value.trim();
    let regEx = new RegExp(value, "gi");
    if (value === "") {
      setStudents(initialStudent);
    } else {
      let res = initialStudent.filter((item) => item.name.match(regEx));
      setStudents(res);
    }
  };

  return (
    <div
      style={{ backgroundColor: "darkcyan", padding: "10px", color: "white" }}
    >
      <h1>Header Students {students.length}</h1>
      <input
        onChange={onSearch}
        style={{
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          outline: "none",
        }}
        type="search"
        placeholder="search"
      />
    </div>
  );
};

export default Header;
