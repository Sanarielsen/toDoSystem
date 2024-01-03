import { useEffect, useState } from "react";

import { Task } from "../types/Task";
import { TaskViewActions } from "./TaskViewActions";
import { TaskViewDescription } from "./TaskViewDescription";
import { TaskViewStatus } from "./TaskViewStatus";
import styles from "./TaskView.module.css";

interface TaskViewInterface {
  task: Task;
  isFocus: boolean;
  onChangeFocus: (currentTaskId: number) => void;
}

export function TaskView({ task, isFocus, onChangeFocus }: TaskViewInterface) {
  const [taskFirstLoad, setTaskFirstLoad] = useState<boolean>(true);
  const [taskViewType, setTaskViewType] = useState<string>(
    isFocus ? "details" : ""
  );

  useEffect(() => {
    if (isFocus) {
      return setTaskViewType("details");
    }

    if (taskFirstLoad) {
      setTaskFirstLoad(false);
      return setTaskViewType("");
    }

    return setTaskViewType("simple");
  }, [isFocus]);

  function handleClickChangeViewType(type: string, numberId: number) {

    if (taskViewType === "simple" || taskViewType === "") {
      setTaskViewType("details");
      onChangeFocus(task.id);
    }

    if (taskViewType === "details") {
      setTaskViewType("simple");
      onChangeFocus(0);
    }
  }

  return (
    <div
      className={
        taskViewType === "details"
          ? styles.taskMainDetails
          : taskViewType === "simple"
          ? styles.taskMainSimple
          : styles.taskMain
      }
      onClick={() =>
        taskViewType === "simple" || taskViewType === ""
          ? handleClickChangeViewType("details", task.id)
          : null
      }
    >
      <div>
        <TaskViewDescription
          title={task.title}
          until={task.until}
          recorrence={task.recorrence}
          viewType={taskViewType}
        />
      </div>
      <div className={styles.taskPanelRight}>
        <TaskViewStatus status={task.status} viewType={taskViewType} />
        <TaskViewActions
          id={task.id}
          title={task.title}
          viewType={taskViewType}
          onChangeViewType={(type, numberId) =>
            handleClickChangeViewType(type, numberId)
          }
        />
      </div>
    </div>
  );
}
