// * Constantes que nunca van a cambiar
const nombre = "Juan";
const apellido = "Perezzzzzzzzzzzzzz";

// * Variables que pueden cambiar o voy a querer modificar
let isLogged = false;
isLogged = true;

// isLogged ? "redirecciona al dashboard" : "redirecciona al login"

// ! No se recomienda usar var
var ciudad = "Formosa";
ciudad = "Corrientes";

// * ventajas de const y let sobre var:
// * 1. Alcance de bloque: let y const tienen alcance de bloque, mientras que var tiene alcance global.
if (true) {
  let nombre = "Pedro";
  const apellido = "Gomez";
  var ciudad = "Chaco"; // ! var se redeclara en el mismo ámbito
  // console.log(nombre); // ? Pedro
  // console.log(apellido); // ? Gomez
  // console.log(ciudad); // ? Chaco
}

// * 2. No se pueden redeclarar: let y const no permiten redeclarar la misma variable en el mismo ámbito, mientras que var sí lo permite.
// let edad = 25; // ! Error: Identifier 'edad' has already been declared
// const apellido = "Lopez"; // ! Error: Identifier 'apellido' has already been declared
var ciudad = "Jujuy"; // ? No hay error, pero puede causar confusión
console.log(ciudad);

// * 3. Hoisting: las variables declaradas con var son "hoisted" (elevadas) al inicio de su contexto, pero su valor es undefined hasta que se asigna.

console.log(variableVar); // ! undefined
var variableVar = "Hola Var";
console.log(variableLet); // ! Error: Cannot access 'variableLet' before initialization
let variableLet = "Hola Let";
