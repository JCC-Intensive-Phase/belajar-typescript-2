import { TodoControllerInterface } from "../../interfaces/todo.controller.interface";
import { Task, DeadlineTask, Todo, TaskType } from "./todo.model"

class TodoController implements TodoControllerInterface {
  model: Todo;

  constructor(model: Todo){
    this.model = model
  }

  findTaskIndex(id: string) {
    return this.model.items.findIndex((task) => task.id == id)
  }

  createTask(type: TaskType) {
    let defaultName = "New Task"

    switch (type) {
      case TaskType.DEFAULT:
        return new Task("1", defaultName)
      case TaskType.DEADLINE:
        return new DeadlineTask("1", defaultName)
      default:
        return new Task("1", defaultName)
    }
  } 

  addTask(type: TaskType) {
    this.model.addTask(this.createTask(type))
  }

  removeTask(id: string) {
    let index = this.findTaskIndex(id)

    if (index === -1) return;

    this.model.removeTask(index)
  }

  updateTask(id: string, task: Task) {
    let index = this.findTaskIndex(id)
    
    if (index === -1) return;

    this.model.updateTask(index, task)
  }

  changeTaskType(id: string, type: TaskType) {
    let index = this.findTaskIndex(id)

    if (index === -1) return;

    let oTask = this.model.items[index]
    let newTask = this.createTask(type)
  
    newTask.id = oTask.id
    newTask.name = oTask.name
    newTask.detail = oTask.detail
    newTask.completed = oTask.completed

    this.model.updateTask(index, newTask)
  }

}

export { TodoController }