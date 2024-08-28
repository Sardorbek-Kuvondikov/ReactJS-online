import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  const [students] = useState([
    { id: 1, name: "Oisha", age: 19 },
    { id: 2, name: "Sadorbek", age: 18 },
    { id: 3, name: "Messi", age: 39 },
    { id: 4, name: "Ronaldo", age: 41 },
    { id: 5, name: "Mbappe", age: 18 },
  ]);

  const history = useHistory();

  return (
    <>
      <h1 className="mt-2 text-center text-xl font-semibold">
        react router dom <strong>Home</strong>
      </h1>
      <div className="flex">
        <div className="flex-1">
          {students.map((value) => {
            return (
              <p key={value.id} className="text-xl">
                {value.id} {value.name}{" "}
                <button
                  onClick={() => history.push(`/home/:${value.id}`)}
                  className="p-2 border bg-green-600 rounded-md text-md text-white"
                >
                  history
                </button>
              </p>
            );
          })}
        </div>
        <div className="flex-1">
          <h2 className="mt-4 text-xl font-semibold">History</h2>
          <p>{history.location.pathname}</p>
        </div>
      </div>
    </>
  );
};
export default Home;
