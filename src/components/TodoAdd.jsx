import { useForm } from "../hooks/useForm";
import { Button } from "primereact/button";
import { InputText } from "primereact/InputText";
import { InputTextarea } from "primereact/InputTextarea";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

import '../styles'


export const TodoAdd = ({ onNewTodo }) => {

  const { onDeleteAllTodo } = useContext(TodoContext)

  const { inputTitulo, inputDescripcion, onInputChange, onResetForm } = useForm(
    {
      inputTitulo: "",
      inputDescripcion: "",
    }
  );

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (inputTitulo.length < 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      titulo: inputTitulo,
      descripcion: inputDescripcion,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <InputText
          name="inputTitulo"
          value={inputTitulo}
          onChange={onInputChange}
          placeholder="¿Qué hay que hacer?"
          type="text"
        />
        <InputTextarea
          name="inputDescripcion"
          rows={3}
          cols={40}
          value={inputDescripcion}
          onChange={onInputChange}
          autoResize
          placeholder="Descripción"
        />

        <Button type="submit" label="Añadir tarea" className="b-blue" />
        
        <Button label="Borrar terminados" icon="pi pi-times" onClick={ onDeleteAllTodo } className="btn-borrar b-rojoAll" />
      </form>


    </>
  );
};
