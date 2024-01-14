import { useState } from "react";

import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Task, TaskStatus } from "./features/task/types/Task";
import { TaskAreaAdd } from "./features/task/components/TaskAreaAdd";
import { TaskView } from "./features/task/components/TaskView";
import imgClipboard from "./assets/Clipboard.svg";

function App() {
  const [numberTask, setNumberTask] = useState(1);
  const [focusTask, setFocusTask] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleChangeFocus(currentTaskId: number) {
    setFocusTask(currentTaskId);
  }

  function handleClickAddNewTask(title: string) {
    let currentTaskComplete: Task = {
      id: numberTask,
      title: title,
      status: TaskStatus.PENDING,
      until: "15/01/2024 21:00",
      recorrence: "Daily",
    };

    setNumberTask(numberTask + 1);

    setTasks([...tasks, currentTaskComplete]);
  }

  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <div className={styles.panelAddTask}>
        <TaskAreaAdd onClickAddTask={handleClickAddNewTask} />
      </div>
      <div className={styles.panelTasks}>
        {tasks.length > 0 ? (
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
        ) : (
          <div className={styles.panelWarning}>
            <img src={imgClipboard} alt="Uma imagem autoilustrativa de uma lista"/>
            <p>
              <b> Você ainda não tem tarefas cadastradas </b>
            </p>
            <p> Crie tarefas e organize seus itens a fazer </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
