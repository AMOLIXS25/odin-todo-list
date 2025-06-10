import { Project, ProjectList } from "./models/projectModel";
import { Todo, TodoList } from "./models/todoModel";


const index = () => {
    const todoOne = new Todo('Create youtube channel', '14-03-25', 'low', false);
    const todoTwo = new Todo('Create formation', '14-03-25', 'low', true);
    const todoThree = new Todo('And so on', '14-03-25', 'low', true);
    let todosProjectOne = new TodoList();
    todosProjectOne.addTodo(todoOne);
    todosProjectOne.addTodo(todoTwo);
    todosProjectOne.addTodo(todoThree);
    let projectOne = new Project('Become rich');
    projectOne.todoList = todosProjectOne;
    let projectListOne = new ProjectList();
    projectListOne.addProject(projectOne);
    console.log(projectListOne.getProject(projectOne.id));
    
    console.log(projectListOne.getAllProjects());

}

index();