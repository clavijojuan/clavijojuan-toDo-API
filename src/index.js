
import {Todo, TodoList} from './classes'
import './styles.css';
import {crearTodoHTML} from './js/componentes'



export const todoList = new TodoList();


todoList.todos.forEach(crearTodoHTML)