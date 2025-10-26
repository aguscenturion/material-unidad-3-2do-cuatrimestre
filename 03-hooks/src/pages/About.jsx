import { useCounter } from "../hooks/useCounter";

export const About = () => {
  const { count } = useCounter(20);

  return (
    <>
      <>
        <h1>Este es el about</h1>
        <h3>Contador: {count}</h3>
        <button>+1</button>
        <button>-1</button>
        <button>Reset</button>
      </>
    </>
  );
};
