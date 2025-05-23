import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import { toggleTodo, deleteTodo } from './todoSlice';

const TodoItems = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      toggleTodo={() => dispatch(toggleTodo(todo.id))}
      deleteTodo={() => dispatch(deleteTodo(todo.id))}
    />
  ));
};

export default TodoItems;