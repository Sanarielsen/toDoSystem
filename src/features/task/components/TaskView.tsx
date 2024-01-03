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
  const [taskFirstLoad, setTaskFirstLoad] = useState(true);
  const [taskViewType, setTaskViewType] = useState(isFocus ? "details" : "");

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
    if (type === "simple" || type === "") {
      setTaskViewType("details");
      onChangeFocus(numberId);
    }

    if (type === "details") {
      setTaskViewType("simple");
      onChangeFocus(0);
    }
  }

  function handleClickOpenView() {
    if (taskViewType === "simple" || taskViewType === "") {      
      handleClickChangeViewType("simple", task.id)
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
      onClick={handleClickOpenView}
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
          onChangeViewType={handleClickChangeViewType}
        />
      </div>
    </div>
  );
}
