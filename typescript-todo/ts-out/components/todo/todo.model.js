"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskType = exports.Todo = exports.DeadlineTask = exports.Task = void 0;
var TaskType;
(function (TaskType) {
    TaskType[TaskType["DEFAULT"] = 0] = "DEFAULT";
    TaskType[TaskType["DEADLINE"] = 1] = "DEADLINE";
})(TaskType || (TaskType = {}));
exports.TaskType = TaskType;
class Task {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.detail = "";
        this.completed = false;
    }
}
exports.Task = Task;
class DeadlineTask extends Task {
    constructor(id, name) {
        super(id, name);
        this.due = new Date();
    }
    setDate(date) {
        this.due = date;
    }
}
exports.DeadlineTask = DeadlineTask;
class NestedTask extends Task {
    constructor(id, name) {
        super(id, name);
        this.children = new Array();
    }
    addChild() {
    }
    removeChild() {
    }
    updateChild() {
    }
}
class Todo {
    constructor() {
        this.items = new Array();
    }
    addTask(task) {
        this.items.push(task);
    }
    updateTask(index, task) {
        if (index < 0 || index >= this.items.length)
            return;
        this.items[index] = task;
    }
    removeTask(index) {
        if (index < 0 || index >= this.items.length)
            return;
        this.items.splice(index, 1);
    }
}
exports.Todo = Todo;
