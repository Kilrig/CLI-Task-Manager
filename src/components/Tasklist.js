import React from "react";

function TaskList({ tasks, deleteTask, completeTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button onClick={() => completeTask(task.id)}>✅</button>
          <button onClick={() => deleteTask(task.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
