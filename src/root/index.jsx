import React from "react";
import Dark from "../components/dark";
import Light from "../components/light";
import Count from "../components/count";

const index = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Dark />
          <Light />
        </div>
        <Count />
      </div>
    </>
  );
};

export default index;
