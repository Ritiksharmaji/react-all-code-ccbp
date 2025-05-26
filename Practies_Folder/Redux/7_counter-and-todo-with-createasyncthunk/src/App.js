import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>Counter and Todo App</h1>
      <Counter />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
