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
console.log('all task:', todo.getAllTask());