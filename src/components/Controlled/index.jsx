import React, { useState } from "react";

const Controlled = () => {
  const [title, setTitle] = useState("");
  console.log("Controlled");
  
  return (
    <div>
      <h1>Controlled: {title}</h1>
      <input
        onChange={({ target }) => setTitle(target.value)}
        type="text"
        placeholder="title"
      />
      <hr />
    </div>
  );
};

export default Controlled;
