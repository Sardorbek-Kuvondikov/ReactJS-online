import React, { memo } from "react";

const Child = ({ data, dataCall }) => {
  console.log(data);

  console.log("child");

  return (
    <div>
      <h1 style={{ display: "inline-block", marginRight: "10px" }}>
        Child Hooks
      </h1>
      <span style={{ marginRight: "10px" }}>{data.title}</span>
      <span>{dataCall("useCallback")}</span>
    </div>
  );
};

export default memo(Child);
