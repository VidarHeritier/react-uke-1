import { useState } from "react";
import "./counter.css";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="counter">
        <button onClick={() => setCount((count) => count + 1)}> + </button>
        <p>{count}</p>
        <button
          className="minus"
          onClick={() => setCount((count) => (count <= 0 ? 0 : count - 1))}
        >
          -
        </button>
      </div>
    </>
  );
}
