import styles from "./TaskView.module.css";

interface TaskViewDescriptionInterface {
  title: string;
  until: string;
  recorrence: string;
  viewType: string;
}

export function TaskViewDescription({
  title,
  until,
  recorrence,
  viewType,
}: TaskViewDescriptionInterface) {
  return (
    <>
      <div className={viewType === "details" ? styles.taskTitleDetails : styles.taskTitle}>
          <h3>
            Task: <span className={styles.taskDescription}>{title}</span>
          </h3>
        </div>
        {viewType === "details" ? (
          <>
            <div className={styles.taskTitle}>
              <h3>
                Until:{" "}
                <span className={styles.taskDescription}>{until}</span>
              </h3>
            </div>
            <div>
              <h3>
                Recorrence:{" "}
                <span className={styles.taskDescription}>
                  {recorrence}
                </span>
              </h3>
            </div>
          </>
        ) : null}
    </>
  );
}
