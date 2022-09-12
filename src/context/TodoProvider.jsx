import { useReducer } from "react"
import { useTodoAdvance } from "../hooks/useTodoAdvance";
import { TodoContext } from "./TodoContext";


export const TodoProvider = ({children}) => {

    const { todos, pendingTodos, completedTodos, onNewTodo, onDeleteTodo, onDeleteAllTodo, onToggleTodo } = useTodoAdvance()
  
  
    return (
    <TodoContext.Provider value={{
        onDeleteTodo,
        onNewTodo,
        onToggleTodo,
        onDeleteAllTodo,
        todos,
        pendingTodos, 
        completedTodos
    }}>
        { children }
    </TodoContext.Provider>

  )
}
