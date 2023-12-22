export type Task = {
  title: string;
  status: TaskStatus;
}

export enum TaskStatus {
  COMPLETED = "completed",
  RUNNING = "running",
  UNCOMPLETED = "uncompleted",
  PENDING = "pending",
  SKIPPED = "skipped",
}