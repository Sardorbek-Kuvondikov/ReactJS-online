import { React, useState } from "react";

const Hooks = () => {
  const [data, setData] = useState({
    countone: 0,
    counttwo: 0,
  });

  const puls = (prop) => {
    switch (prop) {
      case "incone":
        setData({ ...data, countone: data.countone + 1 });
        break;

      case "inctwo":
        setData({ ...data, counttwo: data.counttwo + 1 });
        break;
      default:
        break;
    }
  };
  const minus = (prop) => {
    switch (prop) {
      case "incone":
        setData({ ...data, countone: data.countone - 1 });
        break;

      case "inctwo":
        setData({ ...data, counttwo: data.counttwo - 1 });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="container max-w-[1280px] m-auto">
        <h1 className="mb-3 text-center text-[30px]">Hooks useState</h1>
        <ul className="w-[500px] p-6 m-auto border rounded-md">
          <li className="mb-4 p-2 border flex items-center justify-between">
            <p>BMD moshinasi olish</p>
            <span>BMW</span>
            <div>
              <button
                onClick={() => puls("incone")}
                className="px-2 rounded-md bg-green-500 text-white text-xl"
              >
                +
              </button>
              <span className="px-3">{data.countone}</span>
              <button
                onClick={() => minus("incone")}
                className="px-2 rounded-md bg-green-500 text-white text-xl"
              >
                -
              </button>
            </div>
          </li>
          <li className=" mb-4 p-2 border flex items-center justify-between">
            <p>MERS moshinasi olish</p>
            <span>MERS</span>
            <div>
              <button
                onClick={() => puls("inctwo")}
                className="px-2 rounded-md bg-green-500 text-white text-xl"
              >
                +
              </button>
              <span className="px-2">{data.counttwo}</span>
              <button
                onClick={() => minus("inctwo")}
                className="px-2 rounded-md bg-green-500 text-white text-xl ml-2"
              >
                -
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hooks;
