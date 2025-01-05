import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";
const Parent = () => {
  console.log("Parent");
  const [count, setCount] = useState(0);

  const data = useMemo(() => {
    return { title: "useMemo" };
  }, []);

  const dataCall = useCallback((prop) => {
    return prop;
  }, []);

  return (
    <div>
      <Child data={data} dataCall={dataCall} />
      <h1>Parent Hooks {count} </h1>
      <button onClick={() => setCount(count + 1)}>click +</button>
    </div>
  );
};

export default Parent;
