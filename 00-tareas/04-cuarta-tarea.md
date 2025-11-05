# Actividad de Práctica – Modularización, Rutas, Hooks y Estilos en React con Vite

## Objetivo

El objetivo de esta actividad es **refactorizar el código existente de la carpeta `05-rutas-estilos`**, aplicando **buenas prácticas de modularización, componentización, uso de hooks personalizados (`useFetch`, `useCounter`, `useForm`)**, configuración de **rutas públicas y privadas**, y la **implementación de un framework de estilos (Tailwind o Bootstrap)** para mejorar la presentación visual.

---

## Estructura esperada

A modo orientativo, la estructura final del proyecto debería ser similar a:

```bash
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Loading.jsx
 │    └── CharacterInfo.jsx
 │
 ├── hooks/
 │    ├── useCounter.js
 │    └── useFetch.js
 │
 ├── pages/
 │    ├── HomePage.jsx
 │    ├── LoginPage.jsx
 │    └── RegisterPage.jsx
 │
 ├── router/
 │    ├── AppRouter.jsx
 │    ├── PrivateRoute.jsx
 │    └── PublicRoute.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

## Instrucciones

### 1. Creación de páginas

Se deben crear las siguientes **páginas dentro de la carpeta `pages/`**:

#### `HomePage.jsx`

Como mínimo:

- Debe contener **la lógica y el contenido del componente `MultipleCustomHooks`** de la tarea 3.
- Mantener las funcionalidades de obtención de datos mediante `useFetch` y manejo del contador con `useCounter`.
- Mostrar los personajes utilizando los componentes `Loading` y `CharacterInfo`.

#### `LoginPage.jsx`

- Debe tener un formulario de logueo utizando el custom hook de useForm.
- Al presionar el botón de inicio de sesión:
  - Guardar en `localStorage` el valor `isLogged = true`.
  - Redireccionar automáticamente a la página principal (`HomePage`).

#### `RegisterPage.jsx`

- Debe tener un formulario de registro utizando el custom hook de useForm.
- Al presionar el botón de registro:
  - Redireccionar automáticamente a la página de `LoginPage`.

---

### 3. Navbar

- Crear un componente `Navbar.jsx` con:
  - Un enlace a **Home**.
  - Un botón o enlace de **Logout**.
- Al hacer clic en **Logout**:
  - Eliminar el valor `isLogged` del `localStorage`.
  - Redireccionar al `LoginPage`.

---

### 4. Rutas públicas y privadas

Implementar **enrutamiento protegido** mediante `react-router`.

#### Rutas privadas:

- Solo accesibles si `isLogged = true` en `localStorage`.
- En caso contrario, redirigir automáticamente al `LoginPage`.

#### Rutas públicas:

- Accesibles solo si (`isLogged`) es distinto a `true`.
- En caso contrario, redirigir automáticamente al `HomePage`.

---

### 5. Implementación de estilos (Tailwind o Bootstrap)

- Es **obligatorio** utilizar uno de los siguientes frameworks de estilos:
  - **Tailwind CSS**
  - **Bootstrap**

#### Si se elige **Tailwind CSS**:

- Configurarlo siguiendo la guía del ClassRoom.

#### Si se elige **Bootstrap**:

- Instalarlo mediante npm e importarlo en el `main.jsx`:
  ```bash
  npm install bootstrap
  ```
  ```js
  // main.jsx
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle.min";
  ```
- o mediante `CDN` en el `index.html` del proyecto.

---

## Puntos clave

- No se deben usar librerías externas distintas a las solicitadas.
- Reutilizar y modularizar correctamente los **custom hooks** creados.
- Separar correctamente las responsabilidades entre **componentes, páginas y router**.
- Implementar correctamente la **protección de rutas públicas y privadas**.
- Controlar la autenticación usando **localStorage**.
- Mantener una navegación coherente mediante la **Navbar**.
- Aplicar **Tailwind o Bootstrap** para mejorar la presentación del proyecto.
- Se recomienda intentar resolver la actividad leyendo la documentación y el código de práctica proporcionado, sin recurrir a herramientas de inteligencia artificial, con el objetivo de aprender a equivocarse, analizar y resolver problemas de forma autónoma.
