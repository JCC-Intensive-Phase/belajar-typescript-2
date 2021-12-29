"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor(id, title, desc) {
        this.id = id;
        this.title = title;
        this.start = new Date();
        this.desc = desc;
        this.finished = false;
    }
    set setFinished(finished) {
        this.finished = finished;
    }
    set setTitle(title) {
        this.title = title;
    }
    set setDesc(desc) {
        this.desc = desc;
    }
}
exports.default = Todo;
