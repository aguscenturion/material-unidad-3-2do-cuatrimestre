import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  const { formState, handleChange, handleSubmit } = useForm({
    username: "",
    password: "",
  });

  useForm;
  const { username, password } = formState;

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
