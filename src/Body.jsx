import { useContext } from "react";
import { studentContext } from "./Contex";

function Body() {
  const [studen, setStudent] = useContext(studentContext);

  const onDelete = (id) => {
    let res = studen.filter((st) => st.id !== id);
    setStudent(res);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1>Student List {studen.length} </h1>
      {studen.map(({ id, name, status }) => {
        return (
          <h2 key={id}>
            {id} {name} {status}{" "}
            <button onClick={() => onDelete(id)}>Delete</button>
          </h2>
        );
      })}
    </div>
  );
}

export default Body;
