import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from '../features/todos/todosSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const status = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      {status === 'loading' && <p>Loading...</p>}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
