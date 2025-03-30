import React from 'react';
import TodoItem from '../../components/TodoItem';

const TodoItems = ({ todos, toggleTodo, deleteTodo }) => {
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