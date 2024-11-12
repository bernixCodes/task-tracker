/* eslint-disable react/prop-types */
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

import styles from "./index.module.css";

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <div className="data flex flex-col text-left gap-y-2">
          <h3 className="font-semibold">{task.name}</h3>
          <p>{task.description}</p>
        </div>
        <div className="actions flex gap-x-6 justify-end ">
          <button className=" w-3">
            <PencilSquareIcon width={24} height={24} />
          </button>

          <button
            className={` ${styles.delete}`}
            onClick={() => deleteTask(task.id)}
          >
            <TrashIcon width={24} height={24} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
