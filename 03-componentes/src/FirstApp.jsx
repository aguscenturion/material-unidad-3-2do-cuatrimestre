import { Description } from "./Description.jsx";
import { Navbar } from "./Navbar.jsx";

export const FirstApp = () => {
  const nombre = "Marcos";

  return (
    <div>
      <Navbar />

      <h1>Hola de nuevo, bienvenido {nombre}</h1>

      <Description nombre={nombre} edad="12" />

      <h3>Footer</h3>
    </div>
  );
};
