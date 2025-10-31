import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const SimpleForm = () => {
  const { username, password, handleChange } = useForm({
    username: "",
    password: "",
  });

  const getFetchTareas = () => {
    console.log("Hacer una llamada a la Api");
    console.log("tiempo de espera");
    console.log("Guardar la respuesta en un estado");
  };

  useEffect(() => {
    getFetchTareas();
  }, []);

  useEffect(() => {
    console.log("modificando el username");
  }, [username]);

  return (
    <>
      <h1>¡¡¡Listar Mis Tareas!!!</h1>

      <h2>Tareas</h2>

      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
      </form>
    </>
  );
};
