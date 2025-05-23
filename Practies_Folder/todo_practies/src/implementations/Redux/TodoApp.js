import React from 'react';
import { Provider } from 'react-redux';
import TodoList from '../../components/TodoList';
import TodoItems from './TodoItems';
import store from './store';
import TodoFormRedux from './TodoFormRedux';

const TodoApp = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App (Redux)</h1>
        <TodoFormRedux />
        <TodoList>
          <TodoItems />
        </TodoList>
      </div>
    </Provider>
  );
};

export default TodoApp;