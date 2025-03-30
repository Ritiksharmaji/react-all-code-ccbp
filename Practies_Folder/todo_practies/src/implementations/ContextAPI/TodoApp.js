import React from 'react';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import TodoItems from './TodoItems';
import { TodoProvider, useTodos } from './TodoContext';

const TodoApp = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App (Context API)</h1>
        <TodoFormContext />
        <TodoList>
          <TodoItems />
        </TodoList>
      </div>
    </TodoProvider>
  );
};

// Create a wrapper component that connects TodoForm to context
const TodoFormContext = () => {
  const { addTodo } = useTodos();
  return <TodoForm addTodo={addTodo} />;
};

export default TodoApp;