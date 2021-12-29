"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoManager_1 = __importDefault(require("./models/TodoManager"));
const todo = new TodoManager_1.default();
todo.addTodo(1, 'Makan nasi', 'Makan nasi di rumah pak ahmad');
todo.addTodo(2, 'Tidur', 'Tidur sama teman');
todo.addTodo(3, 'Bermain', 'Bermain sama teman');
console.log('UNMODIFIED ID : 1 -> ', todo.getTodoById(1));
todo.getTodoById(1).setFinished = true;
todo.getTodoById(1).setTitle = 'Makan Bubur';
todo.getTodoById(1).setDesc = 'Makan bubur di rumah pak jamal';
todo.removeTodo(3);
console.log('MODIFIED ID : 1 -> ', todo.getTodoById(1));
console.log('ALL TODOS -> ', todo.getAllTodos());
