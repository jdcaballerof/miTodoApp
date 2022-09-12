import { TabView, TabPanel } from 'primereact/tabview';

import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoList } from './TodoList';

export const Navbar = () => {

    const { todos, pendingTodos, completedTodos } = useContext(TodoContext)


  return (
    <div className="tabview-demo">
    <div className="card">
        <br />
        <TabView>

            <TabPanel header="Tareas" className='Tabview'>
            <TodoList todos={todos}  />
            </TabPanel>

            <TabPanel header="Completadas">
                <TodoList todos={completedTodos} />
            </TabPanel>

            <TabPanel header="Pendientes">
            <TodoList todos={pendingTodos} />
            </TabPanel>

        </TabView>
        </div>
    </div>
  )
}
