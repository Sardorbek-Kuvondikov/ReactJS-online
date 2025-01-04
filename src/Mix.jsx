import React, { useState, useEffect } from "react";

export default function Mix(prop) {
  const [count, setCount] = useState(prop.count);
  useEffect(() => {
    setCount(prop.count);
  }, [prop.count]);
  return (
    <div>
      <h1>Mix</h1>
      <h2>{count}</h2>
    </div>
  );
}
