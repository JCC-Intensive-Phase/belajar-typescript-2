// Types
interface ITodo {
    id: string,
    title: string,
    status: boolean,
}

interface ITodos {
    todo: ITodo[]
}


// Models
class Todo implements ITodo {
    id: string
    title: string
    status: boolean

    constructor(){
        this.title = ""
        this.status = false
        this.id = String(Math.floor(Math.random() * (9000 + 1)))
    }

    set setTodo(title: string){
        this.title = title
        this.id = String(Math.floor(Math.random() * (9000 + 1)))
    }   

    get getTodo(){
        return {id: this.id, title: this.title, status: this.status}
    }
}

class Todos extends Todo implements ITodos {
    todo: ITodo[]

    constructor(){
        super()
        this.todo = []
    }

    get myTodos(){
        return this.todo
    }

    set addTodo(todo: ITodo){
        this.todo.push(todo)
    }

    set toggleStatus(id: any){
        console.log(id)
        this.todo = this.todo.map((item) => {
            if(item.id === id){
                item.status = !item.status
            }

            return item
        })
    }

    set deleteTodo(id: string){
        this.todo = this.todo.filter((item) => item.id !== id)
    }
}

// Controller
class Controller extends Todos {
    elementParent: HTMLUListElement
    title: any
    txt: any
    
    close: any
    addButton: HTMLButtonElement
    list: HTMLUListElement
  
    constructor() {
        super()
        this.elementParent = document.querySelector("ul") as HTMLUListElement;
        this.close = document.getElementsByClassName("close");
        this.addButton = document.querySelector(".addBtn") as HTMLButtonElement;
        this.list = document.querySelector("ul") as HTMLUListElement;

        this.init()
        this.initEventListener()
    }

    init(){
        this.initElement()
        this.initCloseButton()
    }

    newElement() {
        var li = document.createElement("li");
        var input: HTMLInputElement = document.getElementById("myInput") as HTMLInputElement;
        var inputValue: string = input.value;
        if (inputValue === "") {
            alert("You must write something!");
        } 
        else {
            this.setTodo = inputValue
            this.addTodo = this.getTodo
            input.value = ""
            this.init()
        }
    }

    initElement(){
        while (this.elementParent.firstChild) {
            this.elementParent.removeChild(this.elementParent.firstChild);
        }

        for (let i = 0; i < this.myTodos.length; i++) {
            const todo: string = this.myTodos[i].title;
            const status: string = this.myTodos[i].status ? "checked" : "";
            
            var li: HTMLLIElement = document.createElement("li");
            this.title = document.createTextNode(todo);
            li.className = status;
            li.setAttribute('data-id', String(this.myTodos[i].id));
            li.appendChild(this.title);
            
            var span = document.createElement("SPAN");
            this.txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.setAttribute('data-id', String(this.myTodos[i].id));
            span.appendChild(this.txt);
            li.appendChild(span);
            
            this.elementParent.appendChild(li);
        }
    }

    initCloseButton(){
        for (let i = 0; i < this.close.length; i++) {
            this.close[i].addEventListener("click", (ev: any ): void => {
                this.deleteTodo = ev.target.getAttribute('data-id')
                this.init()
            })
        }
    }

    initEventListener(){
        this.list.addEventListener("click", (event: any) : void => {
            this.toggleStatus = event.target.getAttribute('data-id')
            this.init()
        });
        
        this.addButton.addEventListener("click", (): void => {
            this.newElement()
        })

        var input: HTMLInputElement = document.getElementById("myInput") as HTMLInputElement;
        input.addEventListener("keyup", (event: { keyCode: number}): void => {
            
            if(event.keyCode === 13){
                this.newElement()
            } 
        })
    }    
}

const controller = new Controller()