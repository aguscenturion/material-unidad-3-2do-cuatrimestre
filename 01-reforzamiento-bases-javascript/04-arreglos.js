// * Los arreglos se definen con corchetes []
const numeros = [1, 2, 3, 4];
// console.log(numeros); //? [1, 2, 3, 4]

// * Acceder a un elemento del arreglo por su índice
// console.log(numeros[2]);

// * Agregar un nuevo elemento al final del arreglo
numeros.push(5);
// console.log(numeros);

// * En react no vamos a mutar el arreglo original, sino crear uno nuevo con el operador spread ...
// TODO: si tengo que agregar un 6 sin mutar el arreglo "numeros" como tengo que hacerlo
const nuevoNumeros = [...numeros, 6];

// console.log(numeros);
// console.log(nuevoNumeros);

// * ejemplo con metodo map que no muta el arreglo original

const numerosMultiplicados = numeros.map((numero) => numero * 2);

console.log(numerosMultiplicados);
console.log(numeros);
