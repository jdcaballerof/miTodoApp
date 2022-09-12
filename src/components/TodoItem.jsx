import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog";
import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

import '../styles'

export const TodoItem = ({ todo }) => {
    
    const [displayBasic, setDisplayBasic] = useState(false);
    const { onDeleteTodo, onToggleTodo } = useContext(TodoContext)

    //* Con esta función al onClick dentro de una tarea se tacha dicha tarea y se cierra el recuadro (usada en line:23)
    const onToggleTodoInTodo = () => {
        onToggleTodo(todo.id)
        onHide('displayBasic')
    }


    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Tarea Completada" icon="pi pi-check" onClick={ onToggleTodoInTodo } autoFocus />
            </div>
        ); 
    }
    const onHide = (name) => {
        return dialogFuncMap[`${name}`](false);
    }
    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
    }
    const onClick = (name) => {
        dialogFuncMap[`${name}`](true);
    }
    
    const clickDialog = () => {
        turnTodoDone()
        onHide('displayBasic')
    }
    

    const tacharTodo = (d) => ({textDecoration: d ? 'line-through': 'none'})
    

  return (
    <div className="todo">
        <Button  icon="pi pi-check" onClick={ () => onToggleTodo(todo.id) } autoFocus className={` ${todo.done ? "btn-check b-greenActive" : "btn-check b-green"} `} />

        <Button label={todo.titulo} onClick={() => onClick('displayBasic')} className="btn-todo b-blue" style={tacharTodo(todo.done)} />
        
        <Dialog header={todo.titulo} visible={displayBasic} style={{ width: '70vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
        <p>{todo.descripcion}</p>
        </Dialog> 


        <Button icon="pi pi-times" onClick={() => onDeleteTodo(todo.id)} className="btn-borrar b-rojo"/>
   
    </div>
  )
}