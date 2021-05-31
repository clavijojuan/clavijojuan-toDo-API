

export class Todo {

    static fromJson({id, tarea, completado, fecha}){
        const tempTodo = new Todo (tarea)
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.fecha = fecha;
        
        return tempTodo;
    }



    constructor (tarea) {

        this.tarea = tarea;
        this.id = new Date().getTime();

        this.completado = false;

        this.fecha = new Date();

        
    }
}