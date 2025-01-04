import React, { useState } from "react";

export default function Hooks() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sardorbek");

  return (
    <div style={{ flex: 1 }}>
      <h1>Hooks</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>{name}</h2>
      <input
        onChange={({ target }) => setName(target.value)}
        type="text"
        value={name}
      />
    </div>
  );
}
