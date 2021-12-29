import { ITodo } from '../types/todoTypes'

export default class TodoList {
	todos: ITodo[]

	constructor() {
		this.todos = []
	}
}
