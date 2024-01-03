import changeButton from "/images/changeTaskViewButton.svg";
import hideButton from "/images/hideTaskViewButton.svg";
import styles from "./TaskView.module.css";

interface TaskViewActionsInterface {
  id: number;
  title: string;
  viewType: string;
  onChangeViewType: (type: string, numberId: number) => void
}

export function TaskViewActions({ id, title, viewType, onChangeViewType }: TaskViewActionsInterface) {

  return (
    <>
      {viewType === "details" ? (
        <div className={styles.taskActions}>
          <div className={styles.taskActionsSection}>
            <button
              className={styles.removeStyleDefaultButton}
              onClick={() => console.log("Abre o modal de edição")}
            >
              <img src={changeButton} alt={`Change task ${title}`} />
            </button>
          </div>
          <div className={styles.taskActionsSection}>
            <button
              className={styles.removeStyleDefaultButton}
              onClick={() => onChangeViewType("simple", 0)}
            >
              <img src={hideButton} alt={`Hide task ${title}`} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
