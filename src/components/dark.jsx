import React from "react";
import { Theme } from "../context/Thememode";

const Dark = () => {
  const [mode, setMode] = Theme();

  let moded = localStorage.getItem("mode");

  if (moded === "true") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }

  const onDark = () => {
    setMode(true);
    localStorage.setItem("mode", true);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <button
        style={{
          border: "1px solid red",
          padding: "8px",
          borderRadius: "5px",
        }}
        onClick={onDark}
      >
        dark mode
      </button>
    </div>
  );
};

export default Dark;
