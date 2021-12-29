interface TodoStructure {
    id: string
    task: string
    isDone: boolean
}

class TodoItems implements TodoStructure {
    id: string
    task: string
    isDone: boolean
    constructor(id: string, task: string, isDone: boolean){
        this.id = id
        this.task = task
        this.isDone = isDone
    }
}

class State {
    TaskList: TodoItems[]
    constructor(){
        this.TaskList = []
    }
    FindIndex(id: string){
        const TodoSearch = (todos: { id: string }) => todos.id == id
        const taskIndex = this.TaskList.findIndex(TodoSearch)
        return taskIndex
    }
    addTodo(id:string, task: string, isDone: boolean) {
        const addTodo = new TodoItems(id, task, isDone)
        this.TaskList.push(addTodo)
    }
    updateTodo(id: string, task: string, isDone: boolean) {
        const updateTodo = new TodoItems(id, task, isDone);
        const taskIndex = this.FindIndex(id);
        if (taskIndex >= 0) this.TaskList[taskIndex] = updateTodo;
    }
    deleteTodo(id: string) {
    const taskIndex = this.FindIndex(id);
    this.TaskList.splice(taskIndex, 1);
    }
}

const state = new State();

class UIcontroller {
    todoInput: HTMLInputElement;
    submitButton: HTMLButtonElement;
    ulElement!: HTMLInputElement;
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
      const id = Math.random().toString();
      state.addTodo(id, getTodoValue, false);
      this.display()
      console.log(state.TaskList);
    }
  
    private display() {
      document.querySelector('ul')!.innerText = '';
      for (let todo of state.TaskList) {
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
      private input: string,
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
      this.ulElement.insertAdjacentElement("afterbegin", this.liElement)!;
    }
  
    private display() {
      this.ulElement.querySelector("h1")!.textContent = this.input;
      this.ulElement.querySelector(".del")!.id = this.id;
      this.ulElement.querySelector(".edit")!.id = this.id;
    }
    private deleteItem(id: string, todoItems: TodoItems[]) {
      const removedTodo = todoItems.filter((todo) => todo.id !== id);
      state.TaskList = removedTodo;
    }
  
    private deleteHandler() {
      if (document.querySelector("input")!.value) {
        alert("Todo already selected");
        return;
      }
      const id = this.id.toString();
      const todoItems = [...state.TaskList];
      this.deleteItem(id, todoItems);
    }
  
    private editHandler() {
      if (document.querySelector("input")!.value) {
        alert("Todo already selected");
        return;
      }
      const id = this.id.toString();
      const todoItems = [...state.TaskList];
      const getText = todoItems.find((todo) => todo.id === id)!;
      document.querySelector("input")!.value = getText.task;
      this.deleteItem(id, todoItems);
    }
  
    private deleteTodo() {
      this.liElement.querySelector(".del")!.addEventListener("click", this.deleteHandler.bind(this));
    }
  
    private editTodo() {
      this.liElement.querySelector(".edit")!.addEventListener("click", this.editHandler.bind(this));
    }
  }
  
  const UIController = new UIcontroller();
  