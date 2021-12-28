import Task from './types';

interface TodoModelMethods {
  getAllTask: () => Task[];
}

class TaskModel {
  private _task: Task;

  constructor(_task: Task) {
    this._task = _task;
  }

  get curentTask(): Task {
    return this._task;
  }
}

class TodoModel extends TaskModel implements TodoModelMethods {
  todos: Task[] = [];

  constructor(_task: Task) {
    super(_task);
    this.todos = [];
  }

  set newTask(task: Task) {
    this.todos.push(task);
  }

  getAllTask(): Task[] {
    return this.todos;
  }

  removeTaskFromList(id: number) {
    let list = document.querySelector(`li[id="${id}"]`);
    list?.parentNode?.removeChild(list);
    this.todos.splice(id - 1, 1);
    console.log(this.todos);
  }

  updateTask(id: number) {
    const input = document.getElementById(`${id}`) as HTMLInputElement;
    const task = input.value;
    const newTask = {
      id: id,
      name: task,
      completed: false,
    };
    this.todos[id - 1] = newTask;
    console.log(this.getAllTask());
  }

  checkTask(id: number) {
    const task = document.querySelector(`li[id="${id}"]`);
    const checkbox = task?.querySelector('input[type="checkbox"]') as HTMLInputElement;
    checkbox.checked = true;
    this.todos[id - 1].completed = true;
    console.log(this.getAllTask());
  }

  // removeTask(id: number) {
  //   let list = document.getElementById('todo-list');
  //   let filter = this.todos.filter((i) => i.id !== id);
  //   list?.removeChild(this.removeTaskFromList(id)!);
  // }

  // updateTask(id: number, task: Task) {
  //   this.todos = this.todos.map((todo) => {
  //     if (todo.id === id) {
  //       return task;
  //     }
  //     return todo;
  //   });
  // }
  

  submitButton() {
    const input = document.getElementById('input') as HTMLInputElement;
    const task = input.value;
    const newTask = {
      id: this.todos.length + 1,
      name: task,
      completed: false,
    };
    this.newTask = newTask;
    input.value = '';
    console.log(this.getAllTask());
    const li = document.createElement('li');
    li.id = newTask.id.toString();
    li.innerHTML = `<input type="checkbox" id=${this.todos.length + 1} name=${
      this.todos.length + 1
    } value=${task}><span id=${this.todos.length + 1} name="todo-item">${task}</span>`;
    document.getElementById('todo-list')?.appendChild(li);
  }
}

const todo = new TodoModel({ id: 0, name: 'Learn TypeScript 1', completed: true });
// todo.newTask = { id: 2, name: 'Learn TypeScript 1', completed: true };
// todo.newTask = { id: 3, name: 'Learn TypeScript 2', completed: true };
// todo.newTask = { id: 4, name: 'Learn TypeScript 3', completed: false };
console.log('all task:', todo.getAllTask());
// todo.removeTask(2);
// console.log('task after delete: ', todo.getAllTask());
// todo.updateTask(3, { id: 3, name: 'Learn TypeScript 6', completed: true });
// console.log('task after update: ', todo.getAllTask());

// const addTodo = () => {
//   const input = document.querySelector('#todo-input');
//   console.log(input);
//   // const todo = new TodoModel({ id: 5, name: input.value, completed: false });
//   // const task = { id: 5, name: 'Learn TypeScript 4', completed: false };
//   // todo.newTask = task;
//   // console.log('task after add: ', todo.getAllTask());
// };
