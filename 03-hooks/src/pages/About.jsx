import { useCounter } from "../hooks/useCounter";

export const About = () => {
  const { count, handleIncrement, handleDecrement, handleReset } = useCounter(20);

  return (
    <>
      <>
        <h1>Este es el about</h1>
        <h3>Contador: {count}</h3>
        <button onClick={()=>handleIncrement(5)}>+1</button>
        <button onClick={()=>handleDecrement(10)}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </>
    </>
  );
};
