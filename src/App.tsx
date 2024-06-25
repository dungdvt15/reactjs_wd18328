import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {text: 'to do 1', completed: false},
    {text: 'to do 2', completed: false},
    {text: 'to do 3', completed: false},
  ]);

const toggleTodo = (index: any) => {
  const newTodos = [...todos]
  
}

  return (
    <>
     <div className="App">
      <h1>To do list</h1>
        <ul>
          <li></li>
        </ul>
     </div>
    </>
  )
}

export default App
