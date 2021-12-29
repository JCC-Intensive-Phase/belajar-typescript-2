import { DeadlineTask, Todo, TaskType } from "./components/todo/todo.model";
import { TodoController } from "./components/todo/todo.controller"

let dtask = new DeadlineTask("2", "Task 2")
let todo = new Todo()
let controller = new TodoController(todo)

controller.addTask(TaskType.DEFAULT)
controller.updateTask("1", dtask)
controller.addTask(TaskType.DEFAULT)
controller.changeTaskType("1", TaskType.DEADLINE)
console.log(controller.model)