"use strict";
class User {
    constructor(name, status) {
        this.getName = () => {
            return this.name;
        };
        this.name = name;
        this.status = status;
    }
    setName(value) {
        this.name = value;
    }
}
class UserTodo extends User {
}
