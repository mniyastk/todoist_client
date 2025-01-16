import styles from "../styles/Home.module.css";

type TodoProps = {
  tasks: string[];
  onDelete: (index: number) => void;
};

const Todo = ({ tasks, onDelete }: TodoProps) => {
  return (
    <ul className={styles.todoList}>
      {tasks.map((task, index) => (
        <li key={index} className={styles.todoItem}>
          <span>{task}</span>
          <button onClick={() => onDelete(index)} className={styles.deleteButton}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
