import { useState } from "react";

export const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) return;

    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};
