interface ITodo {
    name: string,
    status: boolean
}


class User implements ITodo {
    name: string
    status: boolean

    constructor(name: string, status: boolean) {
        this.name = name
        this.status = status
    }

    setName(value: string): void {
        this.name = value
    }

    getName = (): string => {
        return this.name
    }
}

class UserTodo extends User implements ITodo {
    
}