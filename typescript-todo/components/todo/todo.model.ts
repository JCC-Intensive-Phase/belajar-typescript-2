import { DeadlineInterface } from "../../interfaces/deadline.interface";
import { TaskInterface } from "../../interfaces/task.interface";
import { TodoModelInterface } from "../../interfaces/todo.model.interface";

enum TaskType {
  DEFAULT,
  DEADLINE,
}

class Task implements TaskInterface {
  id: string;
  name: string;
  detail: string;
  completed: boolean;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.detail = "";
    this.completed = false;
  }
}

class DeadlineTask extends Task implements DeadlineInterface {
  due: Date;

  constructor(id: string, name: string){
    super(id, name);
    this.due = new Date();
  }

  setDate(date: Date) {
    this.due = date;
  }
}

class NestedTask extends Task {
  children: Task[]

  constructor(id: string, name: string) {
    super(id, name)
    this.children = new Array<Task>()
  }

  addChild() {

  }

  removeChild() {

  }

  updateChild() {

  }
}

class Todo implements TodoModelInterface{
  items: Task[]

  constructor(){
    this.items = new Array<Task>()
  }

  addTask(task: Task) {
    this.items.push(task)
  }

  updateTask(index: number, task: Task) {
    if (index < 0 || index >= this.items.length) return;

    this.items[index] = task;
  }

  removeTask(index: number) {
    if (index < 0 || index >= this.items.length) return;

    this.items.splice(index, 1)
  }
}

export {Task, DeadlineTask, Todo, TaskType}