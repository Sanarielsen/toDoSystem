import {useState} from "react";

import {Task, TaskStatus} from "../types/Task";
import {Header} from "../../../components/Header";
import styles from "./TaskPage.module.css"
import {TaskAreaAdd} from "../components/TaskAreaAdd";
import {TaskView} from "../components/TaskView";
import imgClipboard from "../../../assets/Clipboard.svg";
import {ModalAddTaskSpecific} from "../components/ModalAddTaskSpecific";

export function TaskPage() {
  const [modalType, setModalType] = useState("");
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

  function handleClickAddNewTaskSpecific() {
    setModalType("newTask");
  }

  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <div className={styles.panelAddTask}>
        <TaskAreaAdd onClickAddTask={handleClickAddNewTask} onClickAddTaskSpecific={handleClickAddNewTaskSpecific} />
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

      <ModalAddTaskSpecific isOpen={modalType === "newTask"} onClose={() => setModalType("")} />
    </div>
  );
}