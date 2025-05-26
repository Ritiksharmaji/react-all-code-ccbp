import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTodos,
  addTodoAsync,
  toggleTodo,
  deleteTodo,
} from './features/todos/todosSlice';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodoAsync(input));
      setInput('');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Todo App with createAsyncThunk</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={handleAddTodo}>Add</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {items.map((todo) => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
