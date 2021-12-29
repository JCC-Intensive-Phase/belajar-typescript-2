interface ToDo {
  id: string;
  task: string;
  isCompleted: boolean;
}

class ToDoItems implements ToDo {
  id: string;
  task: string;
  isCompleted: boolean;
  constructor(id: string, task: string, isCompleted: boolean) {
    this.id = id;
    this.task = task;
    this.isCompleted = isCompleted;
  }
}

class AppState {
  TaskList: ToDoItems[];
  constructor() {
    this.TaskList = [];
  }
  SearchIndex(id: string) {
    const TodoSearch = (todos) => todos.id == id;
    const taskIndex = this.TaskList.findIndex(TodoSearch);
    return taskIndex;
  }

  // protected getTodoList(){
  //   new UIcontroller(this.Todos, 'Pending')
  //   new UIcontroller(this.Todos, 'Finished')
  // }

  addTodo(id: string, task: string, isCompleted: boolean) {
    const addTodo = new ToDoItems(id, task, isCompleted);
    this.TaskList.push(addTodo);
  }

  // set Todos(todoItems: AppState[]) {
  //   this.Todos = [...todoItems];
  //   this.getTodoList();
  // }

  // get Todos() {
  //   return this.todos;
  // }

  updateTodo(id: string, task: string, isCompleted: boolean) {
    const updateTodo = new ToDoItems(id, task, isCompleted);
    const taskIndex = this.SearchIndex(id);
    if (taskIndex >= 0) this.TaskList[taskIndex] = updateTodo;
  }
  deleteTodo(id: string) {
    const taskIndex = this.SearchIndex(id);
    this.TaskList.splice(taskIndex, 1);
  }
}

const appState = new AppState();

class UIcontroller {
  todoInput: HTMLInputElement;
  submitButton: HTMLButtonElement;
  ulElement: HTMLInputElement;
  liElement: HTMLLIElement;
  constructor() {
    this.todoInput = document.querySelector("#InputText")! as HTMLInputElement;
    this.submitButton = document.querySelector("#buttonSubmit")! as HTMLButtonElement;
    this.submit();
  }

  private submit() {
    console.log(this.submitButton, this.todoInput);
    this.submitButton.addEventListener("click", this.submitHandler.bind(this));
  }

  private submitHandler(e: Event) {
    e.preventDefault();
    console.log("event");
    const getTodoValue = this.todoInput.value;
    // const ValidatedText = this.validation(getTodoValue);
    // if (ValidatedText) {
    const id = Math.random().toString();
    appState.addTodo(id, getTodoValue, false);
    this.display();
    console.log(appState.TaskList);
  }

  private display() {
    document.querySelector("ul")!.innerText = "";
    for (let todo of appState.TaskList) {
      //console.log(todo);
      new TodoItem(todo.id, todo.task);
    }
  }
}

class TodoItem {
  tempElement: HTMLTemplateElement;
  ulElement: HTMLUListElement;
  liElement: HTMLLIElement;
  constructor(
    private id: string,
    private input: string // private todoItems: AppState[] // private status:STATUS
  ) {
    this.tempElement = document.querySelector("template")!;
    this.ulElement = document.querySelector("ul")! as HTMLUListElement;

    const importedHtml = document.importNode(this.tempElement.content, true);
    this.liElement = importedHtml.firstElementChild as HTMLLIElement;
    this.attach();
    this.display();
    this.deleteTodo();
    this.editTodo();
  }

  private attach() {
    // console.log(this.todoItems, this.liElement, this.ulElement);
    this.ulElement.insertAdjacentElement("afterbegin", this.liElement)!;
  }

  private display() {
    this.ulElement.querySelector("h1")!.textContent = this.input;
    this.ulElement.querySelector(".del")!.id = this.id;
    this.ulElement.querySelector(".edit")!.id = this.id;
  }

  private deleteItem(id: string, todoItems: ToDoItems[]) {
    const removedTodo = todoItems.filter((todo) => todo.id !== id);
    appState.TaskList = removedTodo;
  }

  private deleteHandler() {
    if ((document.querySelector(".del")!.id = this.id)) {
      alert("Todo already selected to delete");
      return;
    }
    const id = this.id.toString();
    const todoItems = [...appState.TaskList];
    this.deleteItem(id, todoItems);
  }

  private deleteTodo() {
    this.liElement.querySelector(".del")!.addEventListener("click", this.deleteHandler.bind(this));
  }

  private editHandler() {
    if (document.querySelector("input")!.value) {
      alert("Todo already selected to update");
      return;
    }
    const id = this.id.toString();
    const todoItems = [...appState.TaskList];
    const getText = todoItems.find((todo) => todo.id === id)!;
    document.querySelector("input")!.value = getText.id; //input=id?
    this.deleteItem(id, todoItems);
  }

  private editTodo() {
    this.liElement.querySelector(".edit")!.addEventListener("click", this.editHandler.bind(this));
  }
}

const UIController = new UIcontroller();
// export const Row = ()
