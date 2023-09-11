import { useState } from "react";
import "./counter.css";

export function Counter({ onCountChange }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className="counter">
      <button onClick={handleIncrement}>+</button>
      <p>{count}</p>
      <button className="minus" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}
