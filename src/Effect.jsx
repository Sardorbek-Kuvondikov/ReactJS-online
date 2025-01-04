import { useEffect, useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);

  // case 1 har state da ishlaydi
  useEffect(() => {
    console.log("case 1");
  });

  //   case 2 faqat bir marotaba ishlaydi
  useEffect(() => {
    console.log("case 2");
  }, []);

  //   case 3 har count o'zgarganida ishlaydi
  useEffect(() => {
    console.log("case 3");
  }, [count]);

  return (
    <div>
      <h1>useEffect</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
