import { Task } from "../types/Task";
import styles from "./TaskViewSimple.module.css";

interface TaskViewSimpleInterface {
  task: Task;
}

export function TaskViewSimple({ task }: TaskViewSimpleInterface) {
  const statusImagePath = `/images/icone_status_${task.status.toString()}.png`;

  return (
    <div className={styles.taskMain}>
      <div className={styles.taskTitle} >
        <h3> Task: <span className={styles.taskDescription}>{task.title}</span> </h3>
      </div>
      <div className={styles.taskStatus}>
        <p>
          <img
            src={statusImagePath}
            alt={"Status atual: " + task.status.toString()}
          />
        </p>
      </div>
    </div>
  );
}
