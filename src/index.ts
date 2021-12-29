interface ITodo {
  id: number;
  text: string;
  status: boolean;
}

class Todo implements ITodo {
  id: number;
  text: string;
  status: boolean;

  constructor(id: number, text: string, status: boolean) {
    this.id = id;
    this.text = text;
    this.status = status;
  }
}

class TodoList {
  lists: ITodo[];

  constructor() {
    this.lists = [];
  }
}

class Controller extends TodoList {
  constructor() {
    super();
  }

  get GetTodoList() {
    return this.lists;
  }

  set SetTodoList({ id, text, status }: ITodo) {
    this.lists.push({ id, text, status });
  }
}

console.info('MY TODO LIST :');

const todo = new Controller();

todo.SetTodoList = { id: 1, text: 'Mau Makan', status: true };
todo.SetTodoList = { id: 1, text: 'Mau Tidur', status: false };
todo.SetTodoList = { id: 1, text: 'Mau Main HP', status: true };

console.info(todo.GetTodoList);
