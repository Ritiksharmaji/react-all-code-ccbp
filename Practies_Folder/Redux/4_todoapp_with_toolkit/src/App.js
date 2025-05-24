import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Redux Toolkit Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
