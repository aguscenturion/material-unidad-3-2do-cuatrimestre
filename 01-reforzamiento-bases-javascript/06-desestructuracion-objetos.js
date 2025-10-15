const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  dni: 123456,
};

// * Acceder a las propiedades del objeto
// console.log(persona["nombre"]);
// console.log(persona.nombre);

// * Desestructuración de objetos
// const { edad } = persona;
// console.log(edad);

// * Renombrar variable desestructurada
// const nombre = "Carlos";

// const { nombre: nuevaClave } = persona;

// console.log(nuevaClave);

// * Desestructuración en funciones (tambien agregando valores por defecto)

// const retornarPersona = ({ nombre }) => {
//   console.log(nombre);
// };

// retornarPersona("marcos");

// * utilizacion de funcion como useContext
const useContext = ({ nombre, apellido, edad }) => {
  return {
    nombreEstudiante: nombre,
    apellidoEstudiante: apellido,
    edadEstudiante: edad,
    role: "estudiante",
    domicilioEstudiante: {
      calle: "Av italia",
      numero: "1234",
    },
  };
};

// TODO: hacer desestructuracion de estudiante
// const {
//   nombreEstudiante,
//   domicilioEstudiante: { calle, numero },
// } = useContext(persona);

// * Desestructuracion de propiedades de objetos anidados

// * forma 1
// const {
//   nombreEstudiante,
//   domicilioEstudiante: { calle, numero },
// } = useContext(persona);

// * forma 2
const { nombreEstudiante, domicilioEstudiante } = useContext(persona);
const { calle, numero } = domicilioEstudiante;

console.log(numero);
