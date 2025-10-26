import { Profile } from "./Profile";

export const Description = ({ nombre }) => {
  return (
    <>
      <h1>Descripción del perfil de {nombre}</h1>
      <p>
        Este perfil pertenece a un desarrollador apasionado por la tecnología.
      </p>

      <Profile nombre={nombre} />
    </>
  );
};
