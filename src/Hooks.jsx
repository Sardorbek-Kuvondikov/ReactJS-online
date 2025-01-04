import { useState } from "react";

function Hooks() {
  const [counts, setCounts] = useState({ olma: 0, apelsin: 0 });

  const updateCounts = (fruit, value) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [fruit]: prevCounts[fruit] + value,
    }));
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* Olma */}
      <div>
        <h2>Olma {counts.olma}</h2>
        <button onClick={() => updateCounts("olma", -1)}>-</button>
        <button onClick={() => updateCounts("olma", 1)}>+</button>
      </div>

      <div>
        <h2>apelsin {counts.apelsin}</h2>
        <button onClick={() => updateCounts("apelsin", -1)}>-</button>
        <button onClick={() => updateCounts("apelsin", 1)}>+</button>
      </div>
    </div>
  );
}

export default Hooks;
