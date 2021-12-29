interface ITodo {
  id: number;
  input: string;
  checked: boolean;
}

class Todo implements ITodo {
  id: number;
  input: string;
  checked: boolean;

  constructor(input: string) {
    this.id = Math.floor(Math.random() * 10);
    this.input = input;
    this.checked = false;
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
  addTodo(data: ITodo): ITodo[];
}

class TodoList implements ITodoList {
  todolist = ITodo[];

  constructor() {
    this.todolist = [];
  }

  addTodo(data: ITodo) {
    this.todolist.push(data);
  }
}
