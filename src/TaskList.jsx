export default function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}

          <button onClick={() => onEdit(task)}>
            ✏️
          </button>

          <button onClick={() => onDelete(task.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}
