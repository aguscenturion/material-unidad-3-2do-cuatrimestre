import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  const { formState, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  useForm;
  const { username, password } = formState;

  const handleSubmit = (event, onLogin) => {
    // prevenir que se reincie el formulario
    event.preventDefault();

    // logica o ejecutar la funcion que resetea el formulario
    handleReset();

    // onLogin(username);
    console.log(formState);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event, onLogin)}>
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

      <button>Iniciar Sesion</button>
    </form>
  );
};
