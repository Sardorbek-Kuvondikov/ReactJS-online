import { React, useState, useReducer } from "react";

export default function Reducer() {
  const [option, setOption] = useState(1);
  let [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "plus":
        return state + action.payload;
      case "minus":
        return state - action.payload;
      default:
        break;
    }
  }, 0);

  const onSelect = (evt) => {
    setOption(Number(evt.target.value));
  };

  return (
    <>
      <div className="text-center">
        <h1 className="mt-3 text-3xl">useReducer</h1>
        <p className="mt-3 p-1 px-5 rounded-md bg-green-300 inline-block text-xl text-green-700">
          {count}
        </p>
        <div className="mt-3 block">
          <select
            onChange={onSelect}
            className="p-1 px-3 border-zinc-400 rounded-md border outline-none cursor-pointer"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button
            onClick={() => dispatch({ type: "plus", payload: option })}
            className="ml-3 p-1 px-3 border border-zinc-400 rounded-md"
          >
            Click +{option}
          </button>
          <button
            onClick={() => dispatch({ type: "minus", payload: option })}
            className="ml-3 p-1 px-3 border border-zinc-400 rounded-md"
          >
            Click -{option}
          </button>
        </div>
      </div>
    </>
  );
}
