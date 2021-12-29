export interface ITodo {
	id: number
	title: string
	start: Date
	desc: string
	finished: boolean
	setFinished: boolean
	setTitle: string
	setDesc: string
}

export interface ITodoList {
	todos: ITodo[]
	addTodo(id: number, title: string, desc: string): ITodo
	removeTodo(id: number): void
	getTodoById(id: number): ITodo
}
