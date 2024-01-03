import { ChangeEvent, FormEvent, useState } from "react";

import "./global.css";
import { Search } from "./components/Search";
import { Task, TaskStatus } from "./features/task/types/Task";
import { TaskView } from "./features/task/components/TaskView";
import { Header } from "./components/Header";
import imgClipboard from "./assets/Clipboard.svg";
import styles from "./App.module.css";

function App() {
  const [numberTask, setNumberTask] = useState<number>(1);
  const [currentTask, setCurrentTask] = useState("");
  const [focusTask, setFocusTask] = useState<number>(0);
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleChangeFocus(currentTaskId: number) {
    setFocusTask(currentTaskId);
  }

  //Function response to the add the task to list of tasks
  function onIncludeTask(event: FormEvent) {
    event.preventDefault();

    let currentTaskComplete: Task = {
      id: numberTask,
      title: currentTask,
      status: TaskStatus.PENDING,
      until: "15/01/2024 21:00",
      recorrence: "Daily",
    };

    setNumberTask(numberTask + 1);

    setTasks([...tasks, currentTaskComplete]);
    setCurrentTask("");
  }

  //Function response to save the input value in execution time
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setCurrentTask(event.target.value);
  }

  //Responsible to change the image when we clicked the component
  // function handleTaskStatusChange(indexTask : number) {

  //   tasks[indexTask].status = !tasks[indexTask].status
  //   setTasks([...tasks])
  // }

  //Responsible to delete the current task
  function onDeleteTask(taskIndex: number) {
    tasks.splice(taskIndex, 1);
    setTasks([...tasks]);
  }

  //Responsible to return number of tasks checked
  function verifyTasksChecked() {
    return tasks.filter((task) => task.status).length;
  }

  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <div className={styles.searchArea}>
        <Search
          onSubmit={onIncludeTask}
          onChange={handleNewTaskChange}
          value={currentTask}
        />
      </div>
      <div className={styles.propsTasks}>
        <div className={styles.propsTasksCreated}>
          <a>
            {" "}
            Tasks created <span> {tasks.length} </span>{" "}
          </a>
        </div>
        <div className={styles.propsTasksChecked}>
          <a>
            {" "}
            Finished{" "}
            <span>
              {" "}
              <>
                {verifyTasksChecked()} de {tasks.length}
              </>{" "}
            </span>{" "}
          </a>
        </div>
      </div>
      <div className={styles.panelTasks}>
        {tasks.length > 0 && (
          <div className={styles.panelList}>
            {tasks.map((task, index) => {
              return (

                <TaskView
                  key={index}
                  task={task}
                  isFocus={focusTask === task.id}
                  onChangeFocus={handleChangeFocus}
                />
              );
            })}
          </div>
        )}
        {tasks.length === 0 && (
          <div className={styles.panelWarning}>
            <img src={imgClipboard} />
            <p>
              {" "}
              <b> Você ainda não tem tarefas cadastradas </b>{" "}
            </p>
            <p> Crie tarefas e organize seus itens a fazer </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
