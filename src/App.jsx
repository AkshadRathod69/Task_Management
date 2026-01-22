import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  // CREATE
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  // DELETE
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // SELECT FOR EDIT
  const startEdit = (task) => {
    setEditTask(task);
  };

  // UPDATE
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      )
    );
    setEditTask(null);
  };

  return (
    <>
      <h2>Task CRUD App</h2>

      <TaskForm
        onAddTask={addTask}
        onUpdateTask={updateTask}
        editTask={editTask}
      />

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={startEdit}
      />
    </>
  );
}

export default App;
