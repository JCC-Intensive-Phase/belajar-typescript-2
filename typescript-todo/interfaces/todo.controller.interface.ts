import { Task, TaskType, Todo } from "../components/todo/todo.model";

export interface TodoControllerInterface {
  model: Todo
  addTask: (type: TaskType) => void
  removeTask: (id: string) => void
  updateTask: (id: string, task: Task) => void
}