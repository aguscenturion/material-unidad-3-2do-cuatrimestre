const activo = true;

// * forma tradicional de hacer condicionales
if (activo) {
  console.log("Esta activo");
} else {
  console.log("No esta activo");
}

// * forma simplificada con operador ternario
// activo ? console.log("Activo") : console.log("Inactivo");
const respuesta = activo ? "correcto" : "incorrecto";
console.log(respuesta);

// * otra forma de usar el operador ternario solo para ejecutar si es verdadera la condicion
activo && console.log("Ya esta activo");
