import { useReducer, useState } from "react";

function Reduser() {
  const reduser = (state, action) => {
    switch (action.type) {
      case "minus":
        return state - 1;
      case "plus":
        return state + 1;
      case "byamout":
        return state + action.payload;
      case "handle":
        return state + action.payload.counter;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reduser, 0);

  const [counter, setCounter] = useState(1);

  const onSelect = (evt) => {
    setCounter(parseInt(evt.target.value));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useReduser</h1>
      <h2>{count}</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={() => dispatch({ type: "minus" })}>-</button>
        <button onClick={() => dispatch({ type: "plus" })}>+</button>
        <button onClick={() => dispatch({ type: "byamout", payload: 5 })}>
          5+
        </button>
      </div>
      <br />
      <select onChange={onSelect}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button
        onClick={() => dispatch({ type: "handle", payload: { counter } })}
      >
        {counter}
      </button>
    </div>
  );
}
export default Reduser;
