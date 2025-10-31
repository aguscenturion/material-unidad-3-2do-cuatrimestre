# Actividad de Práctica - Modularización, Componentización y Customs Hooks en React con Vite

## Objetivo

El objetivo de esta actividad es **refactorizar el código proporcionado aplicando buenas prácticas de modularización, uso de múltiples hooks personalizados (useFetch, useCounter), y componentización.**

---

## Instrucciones

A partir del código entregado por el profesor, se deben realizar los siguientes cambios:

### 1. Crear un custom hook `useFetch`

- Todo el código relacionado con el **fetch** (incluyendo el **estado** y la **función** que realiza la petición) debe extraerse y colocarse en un **custom hook** llamado `useFetch.js`.
- Este hook debe:
  - Recibir por parámetro una **URL**.
  - Usar **useEffect** para ejecutar la petición cada vez que la URL cambie.
  - Retornar el estado de **carga**, los **datos obtenidos**, y cualquier **error** si lo hubiera (opcional).

Ejemplo de estructura:

```bash
src/
 ├── hooks/
 │    ├── useCounter.js
 │    └── useFetch.js
```

---

### 2. Componentizar el contenido

- Crear **un componente para el estado de carga** (por ejemplo: `Loading.jsx`) y que sea una vista mas desarrollada.
- Crear **un componente para mostrar la información del personaje** (por ejemplo: `CharacterInfo.jsx`).
- El componente del personaje debe mostrar **más de una propiedad** (no solo el nombre) e **incluir la imagen del personaje**.

Ejemplo de estructura:

```bash
src/
 ├── components/
 │    ├── Loading.jsx
 │    └── CharacterInfo.jsx
```

---

### 3. Agregar navegación entre personajes

- Incorporar un **botón adicional** que permita ver los **personajes anteriores**.
- Tener en cuenta que **no debe ser posible buscar un personaje con un `id` menor a 1**, si el personaje actual tiene `id = 1`, el botón “Anterior” debe estar **deshabilitado**.

---

### Puntos Clave

- No se deben usar librerías externas.
- No es necesario utilizar navegación.
- Si se utiliza `CSS`, debe implementarse mediante un archivo externo con extensión `.css`. No se permite el uso de frameworks de estilos ni la aplicación de estilos en línea.
- Se recomienda intentar resolver la actividad leyendo la documentación y el código de práctica proporcionado, sin recurrir a herramientas de inteligencia artificial, con el objetivo de aprender a equivocarse, analizar y resolver problemas de forma autónoma.
