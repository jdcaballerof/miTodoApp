import { useEffect, useReducer } from 'react';
import { todoreducer } from '../helpers/todoreducer' 

// Es Advance porque a diferencia del previo este Hook puede elimitar todos los Todo's

//Este hook checa el LocalStorage en busca de ToDo's previos
// si no hay inicia con un array de objetos (los todo's) vacio

// con las funciones se puede crear, tachar, eliminar una tarea (toDo) o eliminar todas
// Se devuelve como objeto las funciones, el array de objetos (todo's) y los filtros de completados y pendientes

//Lo mas dificil es crear la logica de hacer un nuevo Todo


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodoAdvance = () => {
  
    const [todos, dispatch] = useReducer(todoreducer, [], init)

    const pendingTodos = todos.filter( todo => todo.done === false )
    const completedTodos = todos.filter( todo => todo.done === true )

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])
    


    const onNewTodo = (newTodo) => {
        dispatch({
        type: '[TODO] Add Todo',
        payload: newTodo
        })
    }

    const onDeleteTodo = ( id )=> {
        dispatch({
        type: '[TODO] Remove Todo',
        payload: id
        })
    }

    const onDeleteAllTodo = ()=> {
        dispatch({
        type: '[TODO] Remove allDoneTodo'
        })
    }
    
    const onToggleTodo = ( id )=> {
        dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
        })
    }


    return {
        todos,
        pendingTodos,
        completedTodos,
        onNewTodo,
        onDeleteTodo,
        onDeleteAllTodo,
        onToggleTodo,
    }

}
