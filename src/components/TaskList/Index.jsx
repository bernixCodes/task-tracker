/* eslint-disable react/prop-types */
import TaskItem from "../TaskItem/Index";
import styles from "./index.module.css";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      <ul className={styles.tasks}>
        {tasks
          .sort((a, b) => b.id - a.id)
          .map((task) => (
            <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
