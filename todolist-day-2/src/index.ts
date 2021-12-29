import Todo from './models/TodoManager'

const todo = new Todo()

todo.addTodo(1, 'Makan nasi', 'Makan nasi di rumah pak ahmad')
todo.addTodo(2, 'Tidur', 'Tidur sama teman')
todo.addTodo(3, 'Bermain', 'Bermain sama teman')

console.log('----------------------------------------------')
console.log('UNMODIFIED ID : 1 -> ', todo.getTodoById(1))

todo.getTodoById(1).setFinished = true
todo.getTodoById(1).setTitle = 'Makan Bubur'
todo.getTodoById(1).setDesc = 'Makan bubur di rumah pak jamal'

todo.removeTodo(3)
console.log('----------------------------------------------')

console.log('MODIFIED ID : 1 -> ', todo.getTodoById(1))
console.log('----------------------------------------------')

console.log('ALL TODOS -> ', todo.getAllTodos())
console.log('----------------------------------------------')
