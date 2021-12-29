import { ITodoList, ITodo } from '../types/todoTypes'
import TodoList from './TodoList'
import Todo from './Todo'

export default class TodoManager extends TodoList implements ITodoList {
	constructor() {
		super()
	}

	addTodo(id: number, title: string, desc: string): ITodo {
		let newTodo = new Todo(id, title, desc)
		this.todos.push(newTodo)
		return newTodo
	}

	removeTodo(id: number): void {
		this.todos = this.todos.filter((todo) => todo.id !== id)
	}

	getTodoById(id: number): ITodo {
		let todo = this.todos.filter((todo) => todo.id === id)[0]
		return todo
	}

	getAllTodos() {
		return this.todos
	}
}
