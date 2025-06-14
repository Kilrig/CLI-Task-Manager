import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./components/Tasklist";
import TaskForm from "./components/Taskform";

console.log("TaskList:", TaskList);
console.log("TaskForm:", TaskForm);

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await axios.get("http://localhost:8080/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (title) => {
    await axios.post("http://localhost:8080/tasks", {
      title: title,
      completed: false,
    });
    loadTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8080/tasks/${id}`);
    loadTasks();
  };

  const completeTask = async (id) => {
    await axios.post(`http://localhost:8080/tasks/${id}/complete`);
    loadTasks();
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
