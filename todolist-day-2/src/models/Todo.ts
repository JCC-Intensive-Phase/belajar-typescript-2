export default class Todo {
	id: number
	title: string
	start: Date
	desc: string
	finished: boolean

	constructor(id: number, title: string, desc: string) {
		this.id = id
		this.title = title
		this.start = new Date()
		this.desc = desc
		this.finished = false
	}

	set setFinished(finished: boolean) {
		this.finished = finished
	}

	set setTitle(title: string) {
		this.title = title
	}

	set setDesc(desc: string) {
		this.desc = desc
	}
}
