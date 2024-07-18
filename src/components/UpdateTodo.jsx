import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";

const UpdateTodo = ({ todo, updatedText, setUpdatedText, setUpdateTodoId }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUpdatedText(e.target.value);
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: todo.id, updatedText: updatedText }));
    setUpdatedText("");
    setUpdateTodoId(null)
  };

  return (
    <form
      onSubmit={handleUpdateTodo}
      className="flex w-full justify-between gap-5 mt-4"
    >
      <input
        type="text"
        id="updateTodo"
        value={updatedText}
        onChange={handleChange}
        placeholder="Enter here!"
        className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateTodo;
