import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../features/todos/todosSlice';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo({ id: uuidv4(), text: input, completed: false }));
      setInput('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Add a todo"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 ml-2"
        >
          Add
        </button>
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-2 border-b">
            <span
              className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
