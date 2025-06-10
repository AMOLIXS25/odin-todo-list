import { v4 as uuidv4 } from 'uuid';


export class Todo {
    #id;
    #title;
    #dueDate;
    #priority;
    #isDone;

    constructor(title, dueDate, priority, isDone) {
        this.#id = uuidv4();
        this.#title = title;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#isDone = isDone;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get dueDate() {
        return this.#dueDate;
    }

    get priority() {
        return this.#priority;
    }

    get isDone() {
        return this.#isDone;
    }

    set title(title) {
        this.#title = title;
    }

    set dueDate(dueDate) {
        this.#dueDate = dueDate;
    }

    set priority(priority) {
        this.#priority = priority;
    }

    set isDone(isDone) {
        this.#isDone = isDone;
    }
}


export class TodoList {
    #todos;

    constructor() {
        this.#todos = [];
    }

    addTodo(newTodo) {
        this.#todos.push(newTodo);
    }

    getAllTodos() {
        return this.#todos;
    }

    getTodo(todoId) {
        const result = this.#todos.filter((item) => {
            return item.id == todoId;
        });
        return result[0];
    }

    updateTodo(todoToUpdate, newTodo) {
        const indexOfTodoToUpdate = this.#todos.indexOf(todoToUpdate);
        this.#todos[indexOfTodoToUpdate] = newTodo;
    }

    deleteTodo(todoId) {
        this.#todos = this.#todos.filter((item) => {
            return item.id !== todoId;
        })
    }
}