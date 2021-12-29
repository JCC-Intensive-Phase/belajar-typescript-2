"use strict";
class TodoItems {
    constructor(id, task, isDone) {
        this.id = id;
        this.task = task;
        this.isDone = isDone;
    }
}
class State {
    constructor() {
        this.TaskList = [];
    }
    FindIndex(id) {
        const TodoSearch = (todos) => todos.id == id;
        const taskIndex = this.TaskList.findIndex(TodoSearch);
        return taskIndex;
    }
    addTodo(id, task, isDone) {
        const addTodo = new TodoItems(id, task, isDone);
        this.TaskList.push(addTodo);
    }
    updateTodo(id, task, isCompleted) {
        const updateTodo = new TodoItems(id, task, isCompleted);
        const taskIndex = this.FindIndex(id);
        if (taskIndex >= 0)
            this.TaskList[taskIndex] = updateTodo;
    }
    deleteTodo(id) {
        const taskIndex = this.FindIndex(id);
        this.TaskList.splice(taskIndex, 1);
    }
}
const state = new State();
