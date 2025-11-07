import { Link } from "react-router";

export const TaskPage = () => {
  return (
    <div
      className="h-[95vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/public/background.jpg')" }}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Lista de Tareas</h1>
          <Link
            to="/tasks/new"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
          >
            Crear Nueva Tarea
          </Link>
        </div>
        <ul className="space-y-3">
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200 border border-gray-200">
            Tarea ejemplo 1
          </li>
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200 border border-gray-200">
            Tarea ejemplo 2
          </li>
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200 border border-gray-200">
            Tarea ejemplo 3
          </li>
        </ul>
      </div>
    </div>
  );
};
