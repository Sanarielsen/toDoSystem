import styles from "./ModalAddTaskSpecific.module.css";
import closeButtom from "/src/assets/closeIcon.svg";
import "../../../global.css";

interface ModalAddTaskSpecificInterface {
  isOpen: boolean;
  onClose: () => void;
}
export function ModalAddTaskSpecific({
  isOpen,
  onClose,
}: ModalAddTaskSpecificInterface) {
  function handleClickModalClose() {
    console.log("handleClickModalClose()");
    onClose();
  }

  function handleClickDeleteTask() {
    console.log("handleClickDeleteTask();");
  }

  function handleSubmitCreateTask() {
    console.log("handleClickDeleteTask();");
  }

  function handleSubmitUpdateTask() {
    console.log("handleClickDeleteTask();");
  }

  return (
    <div
      className={isOpen ? styles.modalMain : styles.modalMainDisabled}
      onClick={() => handleClickModalClose()}
    >
      <form
        className={styles.modalPanel}
        onClick={(event) => event.stopPropagation()}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={styles.modalHeader}>
          <div className={styles.headerTitle}>Add task</div>
          <div className={styles.headerClose}>
            <button
              className={styles.buttonClose}
              onClick={handleClickModalClose}
            >
              <img src={closeButtom} alt="Botão para fechar o model" />
            </button>
          </div>
        </div>
        <div className={styles.modalBody}>
          <label htmlFor="nameTask">Name:</label>
          <input type="text" name="nameTask" placeholder="name" />

          <label htmlFor="descriptionTask">Description:</label>
          <input type="text" name="descriptionTask" placeholder="description" />

          <label htmlFor="typeTask">Type:</label>
          <input type="text" name="typeTask" placeholder="type" />

          <label htmlFor="frequencyTask">Frequency</label>
          <input type="text" name="frequencyTask" placeholder="frequency" />

          <label htmlFor="untilTask">Until:</label>
          <input type="text" name="untilTask" placeholder="until" />
        </div>
        <div className={styles.modalFooter}>
          {/* <button
            type="button"
            className={styles.fotterButtonNegative}
            onClick={handleClickDeleteTask}
          >
            Delete task
          </button> */}
          <button
            type="submit"
            className={styles.fotterButtonPositive}
            onSubmit={handleSubmitCreateTask}
          >
            Add task
          </button>
        </div>
      </form>
    </div>
  );
}
