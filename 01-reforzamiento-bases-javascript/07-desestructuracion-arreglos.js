const personas = ["Juan", "Ana", "Pedro"];

// * Acceder a los elementos de un arreglo
// console.log(personas[1]);

// * Desestructuración de arreglos
const [primerElemento, segundoElemento, tercerElemento] = personas;

// * Desestructuración en funciones
const funcionArreglo = () => {
  const funcionDentro = () => {
    console.log("Desde la funcion");
  };

  return ["Hola mundo", funcionDentro];
};

const [saludo, funcion] = funcionArreglo();

// * Simulacion de una funcion useState

// TODO: utilizar el useState con desestructuración de arreglos
// TODO: el primer valor se va a llamar nombre
// TODO: el segundo valor se va a llamar setNombre
// TODO: por ultimo llamar al setNombre()

const useState = () => {
  return ["Maxi", () => console.log("Hola mundo")];
};

const [nombre, setNombre] = useState();

console.log(nombre);
setNombre();
