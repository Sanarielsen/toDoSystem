import { TaskStatus } from "../types/Task";
import styles from "./TaskView.module.css";

interface TaskViewStatusInterface {
  status: TaskStatus;
  viewType: string;
}

export function TaskViewStatus({ status, viewType }: TaskViewStatusInterface) {
  const statusImagePath = `/images/icone_status_${status.toString()}.png`;

  return (
    <div
      className={
        viewType === "details" ? styles.taskStatusDetails : styles.taskStatus
      }
    >
      <span>
        <img src={statusImagePath} alt={"Status atual: " + status.toString()} />
      </span>
    </div>
  );
}
