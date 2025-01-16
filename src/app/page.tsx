"use client";

import { useState } from "react";
import Todo from "./components/Todo";
import styles from "./styles/Home.module.css";

const Home = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
      <h1>To-Do List</h1>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask} className={styles.button}>
          Add Task
        </button>
      </div>
      <Todo tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Home;
