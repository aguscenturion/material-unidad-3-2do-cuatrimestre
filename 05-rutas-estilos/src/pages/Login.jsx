import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  const navigate = useNavigate();

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
    // handleReset();

    // fetch

    // onLogin(username);
    console.log(formState);

    localStorage.setItem("isLogged", "true");

    navigate("/home");
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
