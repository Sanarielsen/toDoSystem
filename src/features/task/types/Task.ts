export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  until: string;
  recorrence: string;
}

export enum TaskStatus {
  COMPLETED = "completed",
  RUNNING = "running",
  UNCOMPLETED = "uncompleted",
  PENDING = "pending",
  SKIPPED = "skipped",
}