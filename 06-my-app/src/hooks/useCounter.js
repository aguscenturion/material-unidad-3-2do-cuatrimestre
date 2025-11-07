import { useState } from "react";

export const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = (number) => {
    setCount(count + number);
  };

  const handleDecrement = (number) => {
    const resta = count - number;

    if (resta < 0) return;

    setCount(count - number);
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
