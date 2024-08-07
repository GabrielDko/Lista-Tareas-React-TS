import { useState } from "react";
import { ListaDeTareas } from "./ListaDeTareas";

export const ToDoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTaskList(tareasAnteriores => [...tareasAnteriores, newTask]); // Agrega la nueva tarea
    setNewTask("");
  };

  const handleBorrarTarea = (index: number) => {
    setTaskList(tareas => tareas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListaDeTareas listaTareas={taskList} borrarTarea={handleBorrarTarea} />
    </div>
  );
};
