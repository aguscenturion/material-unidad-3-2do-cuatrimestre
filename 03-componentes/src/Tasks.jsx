import { TaskItem } from "./TaskItem";

export const Tasks = () => {
  const tasks = [
    { id: 1, title: "Tarea 1", completed: false },
    { id: 2, title: "Tarea 2", completed: true },
    { id: 3, title: "Tarea 3", completed: false },
  ];

  return (
    <>
      <h2>Lista de Tareas</h2>

      <h2>Tareas</h2>

      <ul>
        {tasks.map((task) => (
          <TaskItem title={task.title} />
        ))}
      </ul>
    </>
  );
};
