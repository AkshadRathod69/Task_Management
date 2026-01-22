import { useEffect, useState } from "react";

export default function TaskForm({ onAddTask, onUpdateTask, editTask }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
    }
  }, [editTask]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title) return;

    if (editTask) {
      onUpdateTask({ ...editTask, title });
    } else {
      onAddTask({ title });
    }

    setTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">
        {editTask ? "Update" : "Add"}
      </button>
    </form>
  );
}
