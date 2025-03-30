import React from 'react';
import TodoItem from '../../components/TodoItem';
import { useTodos } from './TodoContext';

const TodoItems = () => {
  const { todos, toggleTodo, deleteTodo } = useTodos();

  return todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  ));
};

export default TodoItems;