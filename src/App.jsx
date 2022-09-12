import "primereact/resources/themes/lara-light-blue/theme.css";    //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import './styles'
import { Button } from "primereact/button"
import { TodoAdd } from './components/TodoAdd';
import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import { Navbar } from "./components/Navbar";



export const App = () => {
  
  const { onNewTodo } = useContext(TodoContext)

  
  return (
    <>
      <div className="contenedor">
        <header  id="header"><h1>Todo app</h1></header>

      <div className="subcontenedor1">
        <div className="AddTodo">
          <h2>Añadir tarea</h2>
          <TodoAdd onNewTodo={onNewTodo} />
        </div>

        <nav>
            <Navbar/>
        </nav>
      </div>

        {/* <div className="button-deleteAll">
          <Button label="Borrar terminados" icon="pi pi-times" onClick={ onDeleteAllTodo } className="btn-borrar b-rojo" />
        </div> */}

      </div >

        <footer> 
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat maiores enim accusantium quaerat obcaecati aliquid
          </p>

          <a href="#header"><img src="https://cdn-icons-png.flaticon.com/512/992/992703.png" width={'35px'} /></a>


        </footer>
    </>
  )
}
