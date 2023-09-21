import React from "react";
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {
    const location = useLocation();
    const params = useParams();
    const id = Number(params.id);

    const {stateUpdaters, state} = useTodos();
    const {editTodo} = stateUpdaters;
    const {loading ,getTodo} = state;

    let todoText;

    if (location.state?.todo) {
        todoText = location.state.todo.text;
    }else if (loading) {
        return <p>Cargando...</p>
    } else {
        const todo = getTodo(id);
        todoText = todo.text;
    }
    
    return (
    <TodoForm  
    label="Edita tu To Do"
            defautlTodoText={todoText}
            submitText="Editar"
            submitEvent={(newText) => editTodo(id, newText)}
        />
    ) 
    
}

export {EditTodoPage}