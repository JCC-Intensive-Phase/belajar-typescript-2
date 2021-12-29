"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoList_1 = __importDefault(require("./TodoList"));
const Todo_1 = __importDefault(require("./Todo"));
class TodoManager extends TodoList_1.default {
    constructor() {
        super();
    }
    addTodo(id, title, desc) {
        let newTodo = new Todo_1.default(id, title, desc);
        this.todos.push(newTodo);
        return newTodo;
    }
    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
    getTodoById(id) {
        let todo = this.todos.filter((todo) => todo.id === id)[0];
        return todo;
    }
    getAllTodos() {
        return this.todos;
    }
}
exports.default = TodoManager;
