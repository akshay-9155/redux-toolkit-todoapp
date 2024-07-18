import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h1 className='text-zinc-100 text-2xl text-center bg-gray-700 rounded-lg py-2'>Learn about redux toolkit</h1>
        <div className="mb-6">
          <AddTodo />
        </div>
        <div>
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App
