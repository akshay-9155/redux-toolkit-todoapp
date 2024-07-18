import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import UpdateTodo from './UpdateTodo';
const Todos = () => {
    const [updateTodoId, setUpdateTodoId] = useState(false);
    const [updatedText, setUpdatedText] = useState("");
    const handleClick = (e) => {
      setUpdateTodoId(e.target.id)
    }
    
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="bg-gray-800 p-4 rounded-lg flex flex-col justify-between items-center shadow-lg"
        >
          <div className=" flex justify-between w-full items-center">
            <span className="text-white">{todo.text}</span>
            <div className=" flex gap-2">
              <button
                id={todo.id}
                onClick={handleClick}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-green-300 text-white p-2 rounded hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-zinc-50"
              >
                ❌
              </button>
            </div>
          </div>
          <div className="flex w-full">
            {todo.id === updateTodoId && (
              <UpdateTodo
                updatedText={updatedText}
                setUpdatedText={setUpdatedText}
                todo={todo}
                setUpdateTodoId={setUpdateTodoId}
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todos