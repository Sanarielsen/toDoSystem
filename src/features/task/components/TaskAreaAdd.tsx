import {ChangeEvent, FormEvent, MouseEvent, useEffect, useRef, useState} from "react";
import styles from "./TaskAreaAdd.module.css";
import iconAddTask from "/src/assets/iconAddTask.svg";
import iconAddTaskSpecific from "/src/assets/iconAddTaskSpecific.svg";

interface TaskAreaAddInterface {
  onClickAddTask: (taskTitle: string) => void;
}
export function TaskAreaAdd({ onClickAddTask }: TaskAreaAddInterface) {

  const taskTitleRef = useRef<HTMLInputElement>(null);

  function handleInvalidTaskTitle() {
    if (!taskTitleRef.current) return;
    taskTitleRef.current!.setCustomValidity("The title of task needs to be added.")
  }

  function handleChangeTaskTitle() {
    if (!taskTitleRef.current) return;
    taskTitleRef.current.setCustomValidity("");
  }

  function handleClickAddNewTask(event: FormEvent) {
    event.preventDefault()
    if (!taskTitleRef.current) return;
    onClickAddTask(taskTitleRef.current.value);
  }

  return (
    <>
      <form className={styles.formAddNewTask} onSubmit={handleClickAddNewTask}>
        <div className={styles.panelTaskAddInput}>
          <input
            className={styles.taskTitle}
            onInvalid={handleInvalidTaskTitle}
            onChange={handleChangeTaskTitle}
            pattern=".*\S+.*"
            ref={taskTitleRef}
            type="text"
            name="taskTitle"
            required
          />
        </div>
        <div className={styles.panelTaskAddButton}>
          <button type="submit" className={styles.btnAddTask}>
            <img className={styles.iconButton} src={iconAddTask}></img>
          </button>
        </div>
        <div className={styles.panelTaskAddButton}>
          <button className={styles.btnAddTask}>
            <img className={styles.iconButton} src={iconAddTaskSpecific}></img>{" "}
          </button>
        </div>
      </form>
    </>
  );
}
