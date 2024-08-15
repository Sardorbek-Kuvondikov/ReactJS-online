import { React, useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  const puls = () => {
    setCount(count + 1);
  };

  // Har qanday holatda ishlaydi
  useEffect(() => {
    console.log("effect case 1");
  });

  // Faqat bir marotaba ishlaydi
  useEffect(() => {
    console.log("effect case 2");
  }, []);

  // count o'zgarganda ishlaydi.
  useEffect(() => {
    console.log("effect case 3");
  }, [count]);

  return (
    <>
      <div className="mt-5 text-center">
        <h1 className="text-[30px]">Hooks useEffect</h1>
        <div className="flex items-center justify-center gap-5">
          <button onClick={puls} className="p-2 border rounded-md">
            click me! {count}
          </button>
          <p>{count > 0 ? "count clicked" : ""}</p>
        </div>
      </div>
    </>
  );
};

export default Effect;
