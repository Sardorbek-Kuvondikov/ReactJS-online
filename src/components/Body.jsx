import { useStudentContext } from "../context/Students";

const Body = () => {
  const [students, setStudents] = useStudentContext();

  const onDelete = (id) => {
    let res = students.filter((val) => val.id !== id);
    setStudents(res);
  };

  return (
    <div>
      <h1>Students Length {students.length}</h1>
      {students.length ? (
        students.map(({ id, name }) => {
          return (
            <h2 key={id}>
              {id} {name} <button onClick={() => onDelete(id)}>Delete</button>
            </h2>
          );
        })
      ) : (
        <h2>No Data</h2>
      )}
    </div>
  );
};

export default Body;
