import { useEffect } from "react";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });
  const { data, isLoading } = state;

  const { count, handleIncrement } = useCounter(1);

  const url = `https://thesimpsonsapi.com/api/characters/${count}`;

  const getFetch = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });

      const resp = await fetch(url);
      const data = await resp.json();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setState({
        data: data,
        isLoading: false,
      });
    } catch (error) {
      console.log("Error al obtener los personajes", error);
    }
  };

  useEffect(() => {
    getFetch();

    return () => {
      console.log("desmonta");
    };
  }, [url]);

  return (
    <>
      <h1>Los simpsons API</h1>
      <h2>Personajes</h2>

      {/* <h3>
        #{data?.id}-{data?.name}
      </h3> */}

      {isLoading ? <h1>Cargando...</h1> : <h3>{data?.name}</h3>}

      <button onClick={() => handleIncrement(1)} disabled={isLoading}>
        Siguiente
      </button>
    </>
  );
};
