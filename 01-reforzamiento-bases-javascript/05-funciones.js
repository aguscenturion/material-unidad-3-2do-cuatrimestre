// * funcion declarativa
function saludar(nombre) {
  return "Hola, " + nombre;
}

// * algunas desventajas:
// * se puede llamar antes de ser declarada
// * se puede sobreescribir

// * funciones flecha (arrow functions)
const saludar = (nombre) => {
  return "Hola, " + nombre;
};

// * ventajas de las funciones flecha
// * 1. Sintaxis más corta y concisa.
// * 2. Son ideales para funciones pequeñas y anónimas, como callbacks en métodos de arreglos (map, filter, etc.).
// * 3. Se puede simplificar aún más si solo tienen una línea de código y esa línea es un return (return implícito).

// * funcion que retorna un objeto
const getUser = () => {
  return {
    id: 1,
    nombre: "Juan",
    edad: 30,
  };
};

// * se puede utilizar return implícito si la función solo tiene una línea de código

// * si la función solo tiene una línea de código y esa línea es un return, se puede simplificar más con un return implícito

// TODO: transformar la función getUser3 a una función flecha con return implícito
function getUser3(nombre) {
  return {
    id: 1,
    username: nombre,
  };
}

const user = getUser3("Carlos");
console.log(user);
