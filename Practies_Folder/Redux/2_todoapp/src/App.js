import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h2>Todo App (Redux Only)</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
