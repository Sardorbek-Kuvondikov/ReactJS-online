import { React, useState } from "react";

export default function State() {
    
  const [count, setCount] = useState(0);
  const puls = () => setCount(count + 1);

  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="text-[30px]">
          useState:
          <span className="px-4 text-xl rounded-md bg-gray-300">{count}</span>
        </h1>
        <div className="mt-3 flex items-center justify-center gap-5">
          <button
            onClick={puls}
            className="px-2 rounded-md bg-green-500 text-white text-xl"
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-2 rounded-md bg-green-500 text-white text-xl"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}
