// * funcion declarativa
// console.log(saludar("maria"));

// function saludar(nombre) {
//   return "Hola, " + nombre;
// }

// saludar = "hola mundo desde el string";

// console.log(saludar());

// * algunas desventajas:
// * se puede llamar antes de ser declarada
// * se puede sobreescribir

// * funciones flecha (arrow functions)
// const saludar = (nombre) => {
//   return "Hola, " + nombre;
// };

// * ventajas de las funciones flecha
// * 1. Sintaxis más corta y concisa.
// * 2. Son ideales para funciones pequeñas y anónimas, como callbacks en métodos de arreglos (map, filter, etc.).
// * 3. Se puede simplificar aún más si solo tienen una línea de código y esa línea es un return (return implícito).

// * funcion que retorna un objeto
const getUser1 = (nombre) => {
  return { id: 1, nombre: "Pablo", edad: 30 };
};

// * se puede utilizar return implícito si la función solo tiene una línea de código
const saludar = (nombre) => "Hola, " + nombre;

// * si la función solo tiene una línea de código y esa línea es un return, se puede simplificar más con un return implícito
const getUser2 = () => ({
  id: 1,
  nombre: "Pablo",
  edad: 30,
});

// TODO: transformar la función getUser3 a una función flecha con return implícito
// function getUser3() {
//   return {
//     id: 1,
//     username: "Carlos",
//   };
// }

// const user = getUser3();
// console.log(user);

const getUser3 = () => ({
  id: 1,
  username: "Marcos",
});

const user = getUser3();
console.log(user);
