import { useState } from "react";

export const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);
  const { username, password } = formState;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      //voy a dejar tal cual el formulario exeptuando lo que modifique luego.
      ...formState,
      //puede venir usuario o password, independientemente de que input se ejecute
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormState(initialState);
  };

  const handleSubmit = (event, onLogin) => {
    // prevenir que se reincie el formulario
    event.preventDefault();

    // logica o ejecutar la funcion que resetea el formulario
    handleReset();

    console.log(formState);
  };

  return {
    formState,
    ...formState,
    handleChange,
    handleSubmit,
  };
};
