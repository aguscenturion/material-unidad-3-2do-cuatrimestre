import { useState } from "react";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const getFetch = async (url) => {
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

  return {
    state,
    ...state,
    getFetch,
  };
};
