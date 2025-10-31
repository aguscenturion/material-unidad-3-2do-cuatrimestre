import { useCounter } from "../hooks/useCounter";

export const Profile = () => {
  const { count } = useCounter(50);

  return (
    <>
      <h1>Este es mi perfil</h1>
      <h3>Contador: {count}</h3>
      <button>+1</button>
      <button>-1</button>
      <button>Reset</button>
    </>
  );
};
