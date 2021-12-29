"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = require("./components/todo/todo.model");
const todo_controller_1 = require("./components/todo/todo.controller");
let dtask = new todo_model_1.DeadlineTask("2", "Task 2");
let todo = new todo_model_1.Todo();
let controller = new todo_controller_1.TodoController(todo);
controller.addTask(todo_model_1.TaskType.DEFAULT);
controller.updateTask("1", dtask);
controller.addTask(todo_model_1.TaskType.DEFAULT);
controller.changeTaskType("1", todo_model_1.TaskType.DEADLINE);
console.log(controller.model);