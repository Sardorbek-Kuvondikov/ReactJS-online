import { studentContext } from "./Contex";
import { useContext, useState } from "react";

function Navbar() {
  const [student, setStudent] = useContext(studentContext);
  const [originalStudent] = useState(student); // Asl ma'lumotlarni saqlash

  const onSearch = (evt) => {
    let value = evt.target.value.trim();
    if (value === "") {
      // Agar input bo'sh bo'lsa, asl ma'lumotlarni tiklash
      setStudent(originalStudent);
    } else {
      let regEx = new RegExp(value, "gi");
      const res = originalStudent.filter((val) => val.name.match(regEx));
      setStudent(res);
    }
  };

  return (
    <div style={{ backgroundColor: "coral", color: "white", padding: "10px" }}>
      <h1>Navbar</h1>
      <h2 style={{ display: "inline-block", marginRight: "20px" }}>
        Students {student.length}
      </h2>
      <input
        onChange={onSearch}
        style={{ padding: "10px", borderRadius: "10px", border: "none" }}
        type="search"
        placeholder="Search"
      />
    </div>
  );
}

export default Navbar;
