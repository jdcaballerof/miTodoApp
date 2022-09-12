import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  
    
  return (
    <div>
        {
        todos.map((todo, index)=>(  
            <TodoItem key={`todo-${index}`} todo={todo}/>
        ))         
        }
    </div>
  )
}