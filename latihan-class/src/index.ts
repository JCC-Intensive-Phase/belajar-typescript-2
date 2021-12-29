interface Data {
  id: number;
  name: string;
}

const data: Data[] = [
  {
    id: 1,
    name: "Learn Typescript",
  },
  {
    id: 2,
    name: "Learn Golang",
  },
];

type TodoListModel = {
  create?(name: string): void;
  deleteById?(id: number): void;
  deleteByName?(name: string): void;
  data?(): Data[];
};

class CreateTodoList implements TodoListModel {
  create(name: string) {
    data.push({
      id: data.length + 1,
      name: name,
    });
  }
}

class DeleteTodoList extends CreateTodoList implements TodoListModel {
  deleteById(id: number) {
    const index = data.findIndex((item) => item.id === id);
    data.splice(index, 1);
  }
  deleteByName(name: string) {
    const index = data.findIndex((item) => item.name === name);
    data.splice(index, 1);
  }
}

class TodoList extends DeleteTodoList implements TodoListModel {
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
