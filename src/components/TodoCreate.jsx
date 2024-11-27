import React, { useState } from 'react';
import '../App.css';
import { FaPlus } from 'react-icons/fa';

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const clearInput = () => {
    setNewTodo('');
  };

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 9999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInput();
  };

  return (
    <div className="todo-create-container">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Add your task"
      />
      <button onClick={createTodo} className="add-button">
        <FaPlus />
      </button>
    </div>
  );
}

export default TodoCreate;
