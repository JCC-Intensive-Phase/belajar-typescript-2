"use strict";
const data = [
    {
        id: 1,
        name: "Learn Typescript",
    },
    {
        id: 2,
        name: "Learn Golang",
    },
];
class CreateTodoList {
    create(name) {
        data.push({
            id: data.length + 1,
            name: name,
        });
    }
}
class DeleteTodoList extends CreateTodoList {
    deleteById(id) {
        const index = data.findIndex((item) => item.id === id);
        data.splice(index, 1);
    }
    deleteByName(name) {
        const index = data.findIndex((item) => item.name === name);
        data.splice(index, 1);
    }
}
class TodoList extends DeleteTodoList {
    data() {
        return data;
    }
}
const todo = new TodoList();
todo.create("Learn Deno");
console.log(data);
todo.deleteById(2);
console.log(data);
todo.deleteByName("Learn Deno");
console.log(data);
