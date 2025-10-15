// * El template string es una forma de incluir variables y expresiones dentro de cadenas de texto de manera más legible y conveniente.

// * Se utilizan las comillas invertidas (``) en lugar de las comillas simples ('') o dobles ("").
// * Las variables y expresiones se incluyen dentro de ${}.
const nombre = "Juan";
const edad = 30;
const ciudad = "Formosa";

// * Ejemplo de uso de template strings
const mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`;
console.log(mensaje); // ? Hola, mi nombre es Juan, tengo 30 años y vivo en Formosa.

// * Otro ejemplo para concatenar
const otroMensaje =
  "Hola, mi nombre es " +
  nombre +
  ", tengo " +
  edad +
  " años y vivo en " +
  ciudad +
  ".";
console.log(otroMensaje); // ? Hola, mi nombre es Juan, tengo 30 años y vivo en Formosa.

// * Ventajas de los template strings:
// * 1. Legibilidad: es más fácil de leer y escribir, especialmente cuando se incluyen múltiples variables o expresiones.
// * 2. Multilínea: los template strings permiten crear cadenas de texto que abarcan varias líneas sin necesidad de caracteres especiales.
const multilinea = `hola
tengo
multi
lineas`;
console.log(multilinea);
// * 3. Expresiones: se pueden incluir expresiones complejas dentro de ${}, no solo variables.

const numero1 = 5;
const numero2 = 10;
const suma = numero1 + numero2;
const resultado = `La suma de ${numero1} y ${numero2} es ${suma}`;

console.log(resultado); // ? La suma de 5 y 10 es 15.

// * En resumen, los template strings son una herramienta poderosa y flexible para trabajar con cadenas de texto en JavaScript, mejorando la legibilidad y facilitando la inclusión de variables y expresiones.
