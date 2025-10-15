// * Los objetos se definen con llaves {}

const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
};

// * Acceder a las propiedades de un objeto
// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.edad);

// * Agregar una nueva propiedad
// console.log(persona);

// persona.dni = "123456";

// console.log(persona);

// * Modificar una propiedad existente
// persona.nombre = "Agustin";

// console.log(persona);

// * Eliminar una propiedad
// delete persona.edad;
// console.log(persona);

// * Crear un objeto con una propiedad y pasarle un valor (en este caso un objeto)
// const persona2 = {
//   data: {
//     nombre: "Juan",
//     apellido: "Pérez",
//     edad: 30,
//   },
// };

// * Crear un objeto con el mismo nombre de la variable que contiene el valor de una persona
// const persona3 = {
//   persona
// };

// ! no hacer mutaciones de un objeto ya existente mandando su referencia en un nuevo objeto
let persona4 = persona;

// persona4.nombre = "Diego";

// console.log({ persona });
// console.log({ persona4 });

// * Para evitar mutaciones, crear una copia del objeto original con el operador spread ...
// let persona5 = { ...persona };

// persona5.nombre = "Carlitos";

// console.log({ persona });
// console.log({ persona5 });

// * Tambien podemos combinar el operador spread y agregando nuevas propiedades
let persona6 = { ...persona, email: "correo@email.com" };

// console.log(persona6);

const req = {
  user: {},
};

const payload = {
  id: 123,
  username: "agustin",
};

// AuthMiddleware
req.userLogged = payload;

// AdminMiddleware
req.userLogged.username;

// para acceder al valor de una propiedad de un objeto
// console.log(persona["nombre"]);

// * Tambien tomar el valor de una variable y pasarle como nueva propiedad
const nuevaPropiedad = "tiene un valor";
const persona7 = { ...persona, nuevaPropiedad };

// console.log(persona7);

// * o tambien tomar solamente el valor de una variable como propiedad
const clave = "domicilio";
const persona8 = { ...persona, [clave]: "123456" };

console.log(persona8);
