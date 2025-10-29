# Actividad de Práctica – React con Vite

## Objetivo

El objetivo de esta práctica es reforzar los conceptos de componentización, manejo de estado con useState, y la creación de custom hooks en React, utilizando Vite como entorno de desarrollo.

## Requisitos de la Actividad

### 1. Crear un proyecto con Vite

Inicializar un proyecto con React y Vite:

```bash
npm create vite@latest nombre-proyecto
cd nombre-proyecto
npm install
npm run dev
```

### 2. Crear un Custom Hook

Se debe crear un custom hook llamado `useForm` que:

- Reciba un `initialValue`.
- Utilice `useState` para manejar los valores del formulario.
- Devuelva:
  - Los valores actuales del formulario.
  - Una función `handleChange` para actualizar los valores del formulario.
  - Una función `handleReset` para resetear el formulario.

Ubicación sugerida:

- `src/hooks/useForm.js`

### 3. Crear los Componentes

Se deben crear dos componentes:

**Login.jsx**

- Contendrá un formulario con los campos:
  - email
  - password
- Utilizará el custom hook `useForm` para manejar los datos.
- Al hacer submit:
  - Ejecutará una función que:
    - Resetea el formulario.
    - Envía el username al componente padre (App.jsx) mediante una función pasada por props.

**Register.jsx**

- Contendrá un formulario con los campos:
  - username
  - email
  - password
  - firstname
  - lastname
- También usará el custom hook useForm.
- Al hacer submit:
  - Mostrará los datos del formulario en consola.
  - Reseteará el formulario.

**Ubicación sugerida:**

- `src/components/Login.jsx`
- `src/components/Registro.jsx`

### 4. Componente Principal – App.jsx

El archivo App.jsx deberá contener:

- Un estado `user` inicializado como cadena vacía " ".
- Una función `handleLogin` que reciba el username como parámetro y setee el estado de user.
- Una función `handleLogout` que limpiará el estado de user.
- Los componentes `<Login />` y `<Registro />` deben renderizarse dentro del App.
- El componente `<Login />` recibirá por props la función handleLogin.
- Un título y un botton con sus funcionalidades para desloguearse:

  ```jsx
  <h1>¡Hola de nuevo {user}!</h1>
  <button>Logout</button>
  ```

### Puntos Clave

- No se deben usar librerías externas de formularios.
- Cada formulario debe manejar su propio estado mediante el custom hook.
- No es necesario conectar con ninguna API o utilizar navegación, solo mostrar datos por consola y manejar estados.
- Si se utiliza `CSS`, debe implementarse mediante un archivo externo con extensión `.css`. No se permite el uso de frameworks de estilos ni la aplicación de estilos en línea.
- Se recomienda intentar resolver la actividad leyendo la documentación y el código de práctica proporcionado, sin recurrir a herramientas de inteligencia artificial, con el objetivo de aprender a equivocarse, analizar y resolver problemas de forma autónoma.

### Resultado Esperado

Al ejecutar el proyecto:

- El usuario verá ambos formularios `(Login y Registro)`.
- Al registrarse:
  - Los datos se mostrarán por consola.
  - El formulario se reseteará.
- Al loguearse:

  - El formulario se reseteará.
  - Se actualizará el estado `user` en `App` y se mostrará en el mensaje de bienvenida:

  ```html
  ¡Hola de nuevo nombreDeUsuario!
  ```
