import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import { toggleTodo, deleteTodo } from './actions';

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

const mapStateToProps = (state) => ({
  todos: state
});

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);

