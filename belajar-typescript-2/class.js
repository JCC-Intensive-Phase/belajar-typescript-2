var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ToDoItems = /** @class */ (function () {
    function ToDoItems(id, task, isCompleted) {
        this.id = id;
        this.task = task;
        this.isCompleted = isCompleted;
    }
    return ToDoItems;
}());
var AppState = /** @class */ (function () {
    function AppState() {
        this.TaskList = [];
    }
    AppState.prototype.SearchIndex = function (id) {
        var TodoSearch = function (todos) { return todos.id == id; };
        var taskIndex = this.TaskList.findIndex(TodoSearch);
        return taskIndex;
    };
    // protected getTodoList(){
    //   new UIcontroller(this.Todos, 'Pending')
    //   new UIcontroller(this.Todos, 'Finished')
    // }
    AppState.prototype.addTodo = function (id, task, isCompleted) {
        var addTodo = new ToDoItems(id, task, isCompleted);
        this.TaskList.push(addTodo);
    };
    // set Todos(todoItems: AppState[]) {
    //   this.Todos = [...todoItems];
    //   this.getTodoList();
    // }
    // get Todos() {
    //   return this.todos;
    // }
    AppState.prototype.updateTodo = function (id, task, isCompleted) {
        var updateTodo = new ToDoItems(id, task, isCompleted);
        var taskIndex = this.SearchIndex(id);
        if (taskIndex >= 0)
            this.TaskList[taskIndex] = updateTodo;
    };
    AppState.prototype.deleteTodo = function (id) {
        var taskIndex = this.SearchIndex(id);
        this.TaskList.splice(taskIndex, 1);
    };
    return AppState;
}());
var appState = new AppState();
var UIcontroller = /** @class */ (function () {
    function UIcontroller() {
        this.todoInput = document.querySelector("#InputText");
        this.submitButton = document.querySelector("#buttonSubmit");
        this.submit();
    }
    UIcontroller.prototype.submit = function () {
        console.log(this.submitButton, this.todoInput);
        this.submitButton.addEventListener("click", this.submitHandler.bind(this));
    };
    UIcontroller.prototype.submitHandler = function (e) {
        e.preventDefault();
        console.log("event");
        var getTodoValue = this.todoInput.value;
        // const ValidatedText = this.validation(getTodoValue);
        // if (ValidatedText) {
        var id = Math.random().toString();
        appState.addTodo(id, getTodoValue, false);
        this.display();
        console.log(appState.TaskList);
    };
    UIcontroller.prototype.display = function () {
        document.querySelector("ul").innerText = "";
        for (var _i = 0, _a = appState.TaskList; _i < _a.length; _i++) {
            var todo = _a[_i];
            //console.log(todo);
            new TodoItem(todo.id, todo.task);
        }
    };
    return UIcontroller;
}());
var TodoItem = /** @class */ (function () {
    function TodoItem(id, input // private todoItems: AppState[] // private status:STATUS
    ) {
        this.id = id;
        this.input = input;
        this.tempElement = document.querySelector("template");
        this.ulElement = document.querySelector("ul");
        var importedHtml = document.importNode(this.tempElement.content, true);
        this.liElement = importedHtml.firstElementChild;
        this.attach();
        this.display();
        this.deleteTodo();
        this.editTodo();
    }
    TodoItem.prototype.attach = function () {
        // console.log(this.todoItems, this.liElement, this.ulElement);
        this.ulElement.insertAdjacentElement("afterbegin", this.liElement);
    };
    TodoItem.prototype.display = function () {
        this.ulElement.querySelector("h1").textContent = this.input;
        this.ulElement.querySelector(".del").id = this.id;
        this.ulElement.querySelector(".edit").id = this.id;
    };
    TodoItem.prototype.deleteItem = function (id, todoItems) {
        var removedTodo = todoItems.filter(function (todo) { return todo.id !== id; });
        appState.TaskList = removedTodo;
    };
    TodoItem.prototype.deleteHandler = function () {
        if ((document.querySelector(".del").id = this.id)) {
            alert("Todo already selected to delete");
            return;
        }
        var id = this.id.toString();
        var todoItems = __spreadArray([], appState.TaskList, true);
        this.deleteItem(id, todoItems);
    };
    TodoItem.prototype.deleteTodo = function () {
        this.liElement.querySelector(".del").addEventListener("click", this.deleteHandler.bind(this));
    };
    TodoItem.prototype.editHandler = function () {
        if (document.querySelector("input").value) {
            alert("Todo already selected to update");
            return;
        }
        var id = this.id.toString();
        var todoItems = __spreadArray([], appState.TaskList, true);
        var getText = todoItems.find(function (todo) { return todo.id === id; });
        document.querySelector("input").value = getText.id; //input=id?
        this.deleteItem(id, todoItems);
    };
    TodoItem.prototype.editTodo = function () {
        this.liElement.querySelector(".edit").addEventListener("click", this.editHandler.bind(this));
    };
    return TodoItem;
}());
var UIController = new UIcontroller();
// export const Row = ()
