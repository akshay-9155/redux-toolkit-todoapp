import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice.js';
const AddTodo = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const handleChange = (e)=> {
        setInput(e.target.value);
    }

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
  return (
    <>
      <form onSubmit={addTodoHandler} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label
            htmlFor="todo"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Todo
          </label>
          <input
            type="text"
            id="todo"
            value={input}
            onChange={handleChange}
            placeholder='Enter todo'
            className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo