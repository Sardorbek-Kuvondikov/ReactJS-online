import React from "react";
import { Theme } from "../context/Thememode";

const Light = () => {
  const [mode, setMode] = Theme();

  let moded = localStorage.getItem("mode");

  if (moded === "false") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  const onLight = () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    setMode(false);
    localStorage.setItem("mode", false);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <button
        onClick={onLight}
        style={{
          border: "1px solid red",
          padding: "8px",
          borderRadius: "5px",
        }}
      >
        Light mode
      </button>
    </div>
  );
};

export default Light;
