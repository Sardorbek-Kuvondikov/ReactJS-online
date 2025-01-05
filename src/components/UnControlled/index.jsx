import React, { useRef } from "react";

const Uncontrolled = () => {
  console.log("UnControlled");
  const title = useRef("");

  return (
    <div>
      <h1>UnControlled</h1>
      <input ref={title} type="text" placeholder="title" />
      <button onClick={() => console.log(title.current.value)}>click me</button>
      <p style={{ marginTop: "20px", opacity: "0.5" }}>
        Console ga etibor bering!!!
      </p>
    </div>
  );
};

export default Uncontrolled;
