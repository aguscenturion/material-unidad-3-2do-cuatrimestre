import { Link, useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    localStorage.setItem("isLogged", "true");

    navigate("/");
  };

  return (
    <main className="bg-linear-to-br from-blue-300 to-blue-200 h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Iniciar Sesión
          </h2>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Ingresa tu usuario"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>

            <span className="flex justify-center gap-1">
              <p>¿No tienes una cuenta?</p>
              <Link to="/register" className="text-blue-500">
                Registrate
              </Link>
            </span>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
