interface ITodo {
  id: number;
  input: string;
  checked: boolean;
}

class Todo implements ITodo {
  id: number;
  input: string;
  checked: boolean;

  constructor(id: number, input: string, checked: boolean) {
    this.id = id;
    this.input = input;
    this.checked = checked;
  }

  set setInput(input: string) {
    this.input = input;
  }

  set setChecked(check: boolean) {
    this.checked = check;
  }
}

interface ITodoList {
  todos: ITodo[];
}

class TodoList implements ITodoList {
  todos: ITodo[];

  constructor() {
    this.todos = [];
  }

  addTodo(id: number, input: string, checked: boolean): ITodo {
    let newTodo = new Todo(id, input, checked);
    this.todos.push(newTodo);
    return newTodo;
  }

  get GetTodoList() {
    return this.todos;
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  getTodoById(id: number) {
    let to = this.todos.filter((todo) => todo.id === id)[0];
    return to;
  }
}

const coba = new TodoList();

coba.addTodo(1, "Mau Makan", true);
coba.addTodo(2, "Mau minum", false);
coba.addTodo(3, "Mau anjing", false);
coba.addTodo(4, "Mau babi", false);
coba.removeTodo(2);
console.log(coba.GetTodoList);
console.log(coba.getTodoById(4));
