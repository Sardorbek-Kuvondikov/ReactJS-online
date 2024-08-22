import React, { useReducer } from "react";

const Count = () => {
  let counts = localStorage.getItem("count");
  console.log(counts);

  const [count, dispatch] = useReducer((state, action) => {
    if (action.type === "plus") {
      localStorage.setItem("count", state + 1);
      return state + 1;
    }
    if (action.type === "minus") {
      localStorage.setItem("count", state - 1);
      return state - 1;
    }
  }, 0);
  return (
    <div style={{ marginTop: "50px" }}>
      <h1>useReducer: {localStorage.getItem("count")}</h1>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => dispatch({ type: "plus" })}
          style={{
            padding: "8px",
            borderRadius: "10px",
            border: "1px solid red",
          }}
        >
          count +
        </button>
        <button
          onClick={() => dispatch({ type: "minus" })}
          style={{
            padding: "8px",
            borderRadius: "10px",
            border: "1px solid red",
            marginLeft: "10px",
          }}
        >
          count -
        </button>
      </div>
    </div>
  );
};

export default Count;
