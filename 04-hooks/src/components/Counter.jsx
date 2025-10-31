import { useState } from "react";

export const Counter = () => {
  // const user = {
  //   nombre: "Marcos",
  //   apellido: "Montellano",
  // };

  // const getMessage = () => {
  //   return `Este es el mensaje de ${nombre}`;
  // };

  // const [count, setCount] = useState(2);

  const initialValue = {
    counter1: 10,
    counter2: 20,
    counter3: 30,
  };

  const [counters, setCounters] = useState(initialValue);
  const { counter1, counter2, counter3 } = counters;

  const handleIncrement = () => {
    // setCount((valorActual) => valorActual + 1);
    // setCount(count + 1);
    // console.log(initialValue);
    // console.log("se esta sumando");

    setCounters({
      ...counters,
      counter1: counter1 + 1,
    });
  };

  const handleDecrement = () => {
    // setCounters(counters - 1);

    if (counter1 === 0) return;

    setCounters({
      ...counters,
      counter1: counter1 - 1,
    });
  };

  const handleReset = () => {
    setCounters();
  };

  return (
    <>
      {/* <code> {getMessage()}</code> */}
      <h1>Contador1: {counter1}</h1>
      <h1>Contador2: {counter2}</h1>
      <h1>Contador3: {counter3}</h1>
      {/* <button onClick={(event) => handleIncrement(event, "Hola")}>+1</button> */}
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleReset}>Reset</button>
      {/* <button onClick={handleIncrement}>+1</button> */}
    </>
  );
};
