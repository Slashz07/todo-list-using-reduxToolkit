
import AddTodo from "./components/AddTodo.jsx"
import Todo from "./components/Todo.jsx"
import { useSelector } from "react-redux"
import './App.css'

function App() {

  const todos=useSelector((state)=>state.todos)

  return (
      <div>
      <AddTodo />
    <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
       <Todo todoObj={todo} />

          </li>
        ))}
        </ul>
        </div>
  )
}

export default App
