import { Todo, TodoList } from "./models/todoModel";


const index = () => {
    const todoOne = new Todo('Clean room', '14-03-25', 'low', false);
    const todoTwo = new Todo('Clean room 2', '14-03-25', 'low', true);
    const todoThree = new Todo('Clean room 3', '14-03-25', 'low', true);
    let todos = new TodoList();
    todos.addTodo(todoOne);
    todos.addTodo(todoTwo);
    todos.addTodo(todoThree);
}

index();