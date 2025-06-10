import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./todoModel";

export class Project {
    #id;
    #title;
    #todoList;

    constructor(title) {
        this.#id = uuidv4();
        this.#title = title;
        this.#todoList = new TodoList();
    }

    get id() {
        return this.#id;
    }

    get todoList() {
        return this.#todoList;
    }

    set todoList(newTodoList) {
        this.#todoList = newTodoList;
    }
}

export class ProjectList {
    #projects;

    constructor() {
        this.#projects = [new Project('default')]
    }

    addProject(newProject) {
        this.#projects.push(newProject);
    }

    getAllProjects() {
        return this.#projects;
    }

    getProject(projectId) {
        const result = this.#projects.filter((item) => {
            return item.id == projectId;
        });
        return result[0];
    }

    updateProject(projectToUpdate, newProject) {
        const indexOfPojectToUpdate = this.#projects.indexOf(projectToUpdate);
        this.#projects[indexOfPojectToUpdate] = newProject;
    }

    deleteProject(projectId) {
        this.#projects = this.#projects.filter((item) => {
            return item.id !== projectId;
        })
    }
}