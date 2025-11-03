import { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Navbar } from "../components/Navbar";

export const Home = () => {
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
      <h1 className="text-3xl font-bold underline">Los simpsons API</h1>
      <h2>Personajes</h2>

      {/* <h3>
        #{data?.id}-{data?.name}
      </h3> */}

      {isLoading ? <h1>Cargando...</h1> : <h3>{data?.name}</h3>}

      {/* <button
        onClick={() => handleIncrement(1)}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Siguiente
      </button> */}

      <button
        onClick={() => handleIncrement(1)}
        disabled={isLoading}
        className="bg-blue-500 p-2 rounded-2xl border"
      >
        Siguiente
      </button>
    </>
  );
};
