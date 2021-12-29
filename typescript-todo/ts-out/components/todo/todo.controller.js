"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_model_1 = require("./todo.model");
class TodoController {
    constructor(model) {
        this.model = model;
    }
    findTaskIndex(id) {
        return this.model.items.findIndex((task) => task.id == id);
    }
    createTask(type) {
        let defaultName = "New Task";
        switch (type) {
            case todo_model_1.TaskType.DEFAULT:
                return new todo_model_1.Task("1", defaultName);
            case todo_model_1.TaskType.DEADLINE:
                return new todo_model_1.DeadlineTask("1", defaultName);
            default:
                return new todo_model_1.Task("1", defaultName);
        }
    }
    addTask(type) {
        this.model.addTask(this.createTask(type));
    }
    removeTask(id) {
        let index = this.findTaskIndex(id);
        if (index === -1)
            return;
        this.model.removeTask(index);
    }
    updateTask(id, task) {
        let index = this.findTaskIndex(id);
        if (index === -1)
            return;
        this.model.updateTask(index, task);
    }
    changeTaskType(id, type) {
        let index = this.findTaskIndex(id);
        if (index === -1)
            return;
        let oTask = this.model.items[index];
        let newTask = this.createTask(type);
        newTask.id = oTask.id;
        newTask.name = oTask.name;
        newTask.detail = oTask.detail;
        newTask.completed = oTask.completed;
        this.model.updateTask(index, newTask);
    }
}
exports.TodoController = TodoController;
