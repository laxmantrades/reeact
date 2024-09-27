import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context'

function App() {
  const [todos, setTodos] = useState([])

  addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])

  }
  updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id? todo:prevtodo))
  }
  deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id? ))
  }
  toggleTodo=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }


  


  return (
    <TodoProvider value={{addTodo,updateTodo,deleteTodo,toggleTodo}}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </TodoProvider>
  )
}

export default App
