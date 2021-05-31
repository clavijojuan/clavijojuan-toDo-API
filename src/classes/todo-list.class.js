import { Todo } from "./todo.class";


export class TodoList {
    
    constructor(){
        this.todos = [];

        this._cargarLocalStorage();
    }

    _nuevoTodo(todo){
        this.todos.push(todo);
        this._guardarLocalStorage();
    }

    _eliminarTodo(id){

        this.todos = this.todos.filter( todo => todo.id != id)
        this._guardarLocalStorage();
    }

    _marcarCompletado(id){
        for ( const todo of this.todos ){
            if( todo.id == id ){
                todo.completado = !todo.completado;
                this._guardarLocalStorage();
                break;
            }
        }

    }

    _borrarCompletados (){
        this.todos = this.todos.filter( todo => !todo.completado);
        this._guardarLocalStorage();
    }

    _guardarLocalStorage (){

        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    _cargarLocalStorage (){
        this.todos = (localStorage.getItem('todo')) 
                            ? JSON.parse(localStorage.getItem('todo')) 
                            : [];

        this.todos = this.todos.map(Todo.fromJson)
    }
}