interface ITask {
  id: number
  title: string
  complete: boolean
}

interface ITasks {
  task: ITask[]
}

class Task {
  task: ITask[]

  constructor(task: []) {
    this.task = task
  }
}

class Tasks extends Task implements ITasks {
  constructor(task: []) {
    super(task)
  }

  set setTask(task: ITask) {
    this.task.push(task)
  }

  set deleteTask(id: number) {
    const getData = this.getShowTask(id)
    const myArr = this.task.indexOf(getData)
    this.task.splice(myArr, 1)
  }

  set updateTask(task: ITask) {
    const cekData = this.getShowTask(task.id)
    cekData.title = task.title
  }

  updateComplete(id: number, complete: boolean) {
    const cekData = this.getShowTask(id)
    cekData.complete = complete
  }

  get getAllTasks() {
    return this.task
  }

  getShowTask(id: number) {
    return this.task.filter((el) => el.id === id)[0]
  }
}

const taskModel = new Tasks([])

taskModel.setTask = {
  id: 0,
  title: 'Beli Garem',
  complete: false,
}

/**
getAllTask buat ngambil semua data ex. taskModel.getAllTask
deleteTask(id) buat delete data ex. taskModel.deleteTask = 2
setTask send object berisi id, title, dan complete ex. taskModel.setTask = { id: 2, title: 'Beli Rumah', complete: false }
updateTask(id) buat edit data pada specific object ex. taskModel.updateTask = { id: 2, title: 'Beli Rumah-rumahan', complete: false }
 */
