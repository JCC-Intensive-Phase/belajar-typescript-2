interface ITodo {
  id: number;
  title: string;
  start: Date;
  desc: string;
  complete: boolean;
  setTitle: string;
  setDesc: string;
  setComplete: boolean;
}

interface ITodoList {
  todos: ITodo[];
  addTodo(id: number, title: string, desc: string): ITodo[];
  getTodo(id: number): ITodo[];
  removeTodo(id: number): boolean;
}
